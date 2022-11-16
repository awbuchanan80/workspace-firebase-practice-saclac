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
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code

  //THIS IS WHERE WE ARE 11/16/22
  
  var email = document.getElementById('#email').val();
  var password = document.getElementById('#password').val();;

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
