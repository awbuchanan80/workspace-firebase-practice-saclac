/* Change the configuration */

var firebaseConfig = {
  apiKey: "AIzaSyDmco00TLPSwg2W92DgkGrDez3xDj7ujxs",
  authDomain: "testproject-grocerylist.firebaseapp.com",
  projectId: "testproject-grocerylist",
  storageBucket: "testproject-grocerylist.appspot.com",
  messagingSenderId: "118044542649",
  appId: "1:118044542649:web:80f68a6dd3bc44ffd6fd68",
  measurementId: "G-2CV1D4J604"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  var inputdata = $('form').serializeArray();
  var data = {};
  for(var i = 0;i<=inputdata.length-1;i++){
  console.log(inputdata[i]);
  console.log(inputdata[i].name);
  console.log(inputdata[i].value);
  }

  inputdata.forEach((entry) => {
    console.log(entry);
    data[entry.name] = entry.value;
  });
  console.log(data);
  firebase.firestore().collection("hotelreservation").add(data);
  /* save the data to database */

  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */


firebase
  .firestore()
  .collection('hotelreservation')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().name);
      console.log(doc.data().checkin);
      console.log(doc.data().checkout);
      console.log(doc.data().num);
      console.log(doc.data().room);
    });
  });

