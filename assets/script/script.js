const form = document.getElementById('form');
const uname = document.getElementById('username');
const email = document.getElementById('email');
const phn = document.getElementById('contact');
const pass = document.getElementById('pass');
const cpass = document.getElementById('cpass');

//add event

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

inputBox.addEventListener('keydown', function(e) {
    var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (nums.includes(e.key)) {
        e.preventDefault();
        setErrormsg(uname, 'username cannot contain numbers')
    }
})

//defining isEmail()
const isEmail = (emailVal) => {
    return String(emailVal).match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

//defining validate function

const validate = () => {
    const uname = uname.value.trim();
    const email = email.value.trim().toLowerCase();
    const phn = phn.value.trim();
    const pass = pass.value.trim();
    const cpass = cpass.value.trim();

    //validate username



    if (uname === "") {
        setErrormsg(uname, 'username cannot be blank');
    } else
    if (uname.length <= 2) {
        setErrormsg(uname, 'username must contain atleast 3 characters');
    } else {
        setSuccessmsg(uname);
    }

    //validate email
    if (email === "") {
        setErrormsg(email, 'email cannot be blank');
    } else
    if (!isEmail(email)) {
        setErrormsg(email, 'Not a valid Email');
    } else {
        setSuccessmsg(email);
    }
}