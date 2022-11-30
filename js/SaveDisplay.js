// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email);
    // ...
  } else {
    // User is signed out
   console.log('no user');
   window.location.href = 'index.html';
  }
});

// save the data
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();
  var surveydata = $('form').serializeArray();
  console.log(surveydata);
  var sdata = {};
  surveydata.forEach((entry) => {
    console.log(entry);
    sdata[entry.name] = entry.value;
  });

  console.log(sdata);
  firebase.firestore().collection('surveydata').add(sdata);

  // get the value of the form using serializeArray method
});

//updated 11/30/22
$('#signout').click(function(){
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = 'index.html';
    }).catch((error) => {
      console.log(error.message)
    });
});

firebase
.firestore()
.collection('surveydata')
.onSnapshot((querySnapshot) => {
  console.log(querySnapshot.size);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    console.log(doc.data().choice);
    console.log(doc.data().comm);
  });
});

// update the result in table
firebase
  .firestore()
  .collection('surveydata')
  .onSnapshot((querySnapshot) => {
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;
    var n5 = 0;
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().choice);
      var s = doc.data().choice;
      switch (s){
        case "A": n1 ++;$('#ans1').text(n1);break;
        case "B": n2 ++;$('#ans2').text(n2);break;
        case "C": n3 ++;$('#ans3').text(n3);break;
        case "D": n4 ++;$('#ans4').text(n4);break;
        case "E": n5 ++;$('#ans5').text(n5);break;
      }
      console.log(doc.data().comm);
    });
  });
