//Javascript 2/15/2018
//Robert Renecker
/**
//Login Authorization & Handling of Users
//via Firebase DB
//
**/
//no use yet
var fireHeading = document.getElementById("fireHeading");
//ref robert child in DB
var firebaseHeadingRef = firebase.database().ref().child("Robert");


//Show to create an account
function submitClick() {
  document.getElementById('popup-btn').style.display= 'block';
}


window.addEventListener("DOMContentLoaded", function () {


  //Form submit values -- quick example check
  var form = document.getElementById("form-id");
  document.getElementById("submitBtn").addEventListener("click", function () {
    form.submit();
    var x = document.getElementById("name").value;
    var y = document.getElementById("text").value;
    var firebaseRef = firebase.database().ref();
    firebaseRef.child(x).set(y);
  });
  //Don't know what this is yet -- recheck
  var myButton = document.querySelector('button');
});


document.getElementById("hide-jumbo").addEventListener("click", function () {

  document.getElementById('popup-btn').style.display= 'none';

});


//create a new account
/*
firebase.auth().createUserWithEmailAndPassword("robertrenecker@gmail.com", "fanfan").catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
*/
