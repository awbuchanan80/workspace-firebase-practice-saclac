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
  var email = 'yilianz4@gmail.com';
  var password = 'ddsgagafda';

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

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

