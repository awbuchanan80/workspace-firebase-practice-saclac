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

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $('#login').val();
  var password = $('#pwd').val();
console.log("email: "+email+ " and pwd: "+password);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;
      window.location.href="Surveyresult.html";

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

$('#Google').click(function(){
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result)=>{
    const user = result.user;
    console.log("Google User "+user.email+" Log in");
    console.log('login in');
    window.location.href="Surveyresult.html";
  }).catch((error)=>{
    console.log("Error Message "+error.message);
  });
});

