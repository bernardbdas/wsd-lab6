//fetchingIDs
const form = document.getElementById('form');
const uname = document.getElementById('username');
const email = document.getElementById('email');
const phn = document.getElementById('contact');
const pass = document.getElementById('pass');
const cpass = document.getElementById('cpass');
var msg = document.getElementsByTagName('span');

//fetching values
var unameVal = uname.value.trim();
var emailVal = email.value.trim().toLowerCase();
var phnVal = phn.value.trim();
var passVal = pass.value.trim();
var cpassVal = cpass.value.trim();


//validate username
uname.onkeydown = function() {
    const nums = /[0-9]/;
    if (unameVal === "") {
        msg[0].innerText = "username cannot be blank";
        msg[0].style.color = "red";
    } else
    if (unameVal.length <= 2) {
        msg[0].innerText = "username must contain atleast 3 characters";
        msg[0].style.color = "red";
    } else
    if (nums.test(unameVal)) {
        msg[0].innerText = "username must NOT contain numbers";
        msg[0].style.color = "red";

    } else {
        msg[0].innerText = "Valid username";
        msg[0].style.color = "lime";
    }
}

//validate email
email.onkeydown = function() {
    const validMail1 = /[a-z0-9\.-]@amazon.in/;
    const validMail2 = /[a-z0-9\.-]@amazon.com/;
    if (validMail1.test(emailVal) || validMail2.test(emailVal)) {
        msg[0].innerText = "Valid Email Address";
        msg[0].style.color = "lime";
    } else {
        msg[0].innerText = "Invalid Email Address";
        msg[0].style.color = "red";
    }
}

//validate phone number
phn.onkeydown = function() {
    const validPhn = /[a-z0-9\.-]@amazon.in/;
    if (validPhn.test(phnVal)) {
        msg[0].innerText = "Valid Phone number";
        msg[0].style.color = "lime";
    } else {
        msg[0].innerText = "Invalid Phone number";
        msg[0].style.color = "red";
    }
}