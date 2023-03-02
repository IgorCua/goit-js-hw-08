const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

form.addEventListener('input', throttle(saveInputs, 500, {"trailing": false}));
form.addEventListener('submit', clearInputs);

if(localStorage.getItem('feedback-form-state') !== null){
    try {
        const serializedInputs = JSON.parse(localStorage.getItem("feedback-form-state"));

        email.value = serializedInputs.email;
        message.value = serializedInputs.message;

    } catch (error) {
        console.log(error.message);
    }
    console.log('getItem ', localStorage.getItem('feedback-form-state'))
} 

function saveInputs(event){
    const {
        elements: {email, message}
    } = event.currentTarget;
  
    try {
        const serializedInputs = JSON.stringify({email: email.value, message: message.value});
        localStorage.setItem("feedback-form-state", serializedInputs);
    } catch (error){
        console.log(error.message);
    }
    
    //localStorage.clear();
}

function clearInputs(event){
    event.preventDefault();
    const {
        elements: {email, message}
    } = event.currentTarget;

    email.value = '';
    message.value = '';

    localStorage.removeItem("feedback-form-state");
    console.log("local storage: ", localStorage.getItem("feedback-form-state"));
    console.log({email: email.value, message: message.value});
}
