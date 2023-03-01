const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailVal = document.querySelector('[name="email"]').value;
const messageVal = document.querySelector('[name="message"]').value;

form.addEventListener('submit', preventDefault);
form.addEventListener('submit', throttle(saveInputs, 500, {"trailing": false}));

if(localStorage.getItem('feedback-form-state') !== null){
    try {
        const serializedInputs = JSON.parse(localStorage.getItem("feedback-form-state"));

        emailVal = serializedInputs.email;
        messageVal = serializedInputs.message;

    } catch (error) {
        console.log(error.message);
    }
} 

function saveInputs(event){
    localStorage.removeItem("feedback-form-state");
    const {
        elements: {email, message}
    } = event.target;
  
    try {
        const serializedInputs = JSON.stringify({email: email.value, message: message.value});
        localStorage.setItem("feedback-form-state", serializedInputs);
    } catch (error){
        console.log(error.message);
    }
 
    console.log({email: email.value, message: message.value})
    // localStorage.clear();
}
console.log("local storage: ", localStorage.getItem("feedback-form-state"));

function preventDefault(event){
    event.preventDefault();
}