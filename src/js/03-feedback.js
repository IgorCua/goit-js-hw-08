const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const saveInputsThrottle = throttle(saveInputs, 500);
let formEmail = document.querySelector('[name="email"]');
let formMessage = document.querySelector('[name="message"]');
let globalEmail = '';
let globalMessage = '';

form.addEventListener('input', saveInputsThrottle);
form.addEventListener('submit', clearInputs);

// getting localStorage values
if(localStorage.getItem('feedback-form-state') !== null){
    try {
        const serializedInputs = JSON.parse(localStorage.getItem("feedback-form-state"));
        console.log(serializedInputs);
        
        formEmail.value = serializedInputs.email;
        formMessage.value = serializedInputs.message;

        globalEmail = serializedInputs.email;
        globalMessage = serializedInputs.message;

    } catch (error) {
        console.log("getItem error: ", error.message);
    }
    console.log('getItem ', localStorage.getItem('feedback-form-state'))
} 

//saving input values to local storage
function saveInputs(event){
    console.log('target: ', event)

    event.target.name === 'email' ? globalEmail = event.target.value 
                                    : globalMessage = event.target.value;            
   
    try {
        const serializedInputs = JSON.stringify({'email': globalEmail, 'message': globalMessage});
        localStorage.setItem("feedback-form-state", serializedInputs);
    } catch (error){
        console.log(error.message);
    }

}

//clearing inputs and local storage
function clearInputs(event){
    event.preventDefault();
    const {
        elements: {email, message}
    } = event.currentTarget;
    const obj = {
        email: email.value,
        message: message.value
    }
    console.log("local storage: ", localStorage.getItem("feedback-form-state"));
    console.log(obj);

    email.value = '';
    message.value = '';
    globalEmail = '';
    globalMessage = '';

    localStorage.removeItem("feedback-form-state");
}