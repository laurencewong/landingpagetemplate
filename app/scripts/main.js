var signupForm = document.getElementById('signup-form');
var signupSuccess = document.getElementById('signup-success');
var signupError = document.getElementById('signup-error');
var signupBtn = document.getElementById('signup-button');

var onSignupComplete = function(error) {
  signupBtn.disabled = false;
  if (error) {
    signupError.innerHTML = 'Sorry. Could not signup.';
  } else {
    signupSuccess.innerHTML = 'Thanks for signing up!';
    // hide the form
    signupForm.style.display = 'none';
  }
};



/*
TODO: Add server side email validation
*/



function signup(formObj) {
// Store emails to firebase
    var myFirebaseRef = new Firebase("https://signuptemplate.firebaseio.com/prelaunch");
    myFirebaseRef.push({
      email: formObj.email.value,
    }, onSignupComplete);
    signupBtn.disabled = true;
    return false;
}

var contactFrom = document.getElementById('contact-form');
var contactSuccess = document.getElementById('contact-success');
var contactError = document.getElementById('contact-error');
var sendBtn = document.getElementById('send-button');

var onMessageComplete = function(error) {
  sendBtn.disabled = false;
  if (error) {
    contactError.innerHTML = 'Sorry. Could not send message.';
  } else {
    contactSuccess.innerHTML = "Message has been sent.";
    // hide the form
    contactFrom.style.display = 'none';
  }
};

function sendMessage(formObj) {
    // Store emails to firebase
    var myFirebaseRef = new Firebase("https://signuptemplate.firebaseio.com/contactform");
    myFirebaseRef.push({
      name: formObj.name.value,
      email: formObj.email.value,
      message: formObj.message.value
    }, onMessageComplete);
    sendBtn.disabled = true;
    return false;
}