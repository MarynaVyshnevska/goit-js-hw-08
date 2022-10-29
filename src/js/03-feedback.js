import '../css/03-feedback.css';
import lodash from 'lodash';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input'),
};
const STORAGE_MSG = 'feedback-msg';
const STORAGE_EMAIL = 'feedback-email';

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
refs.email.addEventListener('input', onEmailInput);

favorite();

function onFormSubmit(e) { 
    e.preventDefault();

    console.log('send form');
    // clean form and localStorage
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_MSG);
    // email saved
    // localStorage.removeItem(STORAGE_EMAIL);

}

// Получть значение поля
// сохранить в локальном хранилище
// добавить троттл(что б не каждое нажатие а по времени)

function onTextareaInput(e) {
    const message = e.currentTarget.value;

    localStorage.setItem(STORAGE_MSG, message);
    // console.log(message);
}

function onEmailInput(e) {
    const subscriberEmail = e.currentTarget.value;

    localStorage.setItem(STORAGE_EMAIL, subscriberEmail);
    // console.log(subscriberEmail);
}

function favorite() {
    const savedEmail = localStorage.getItem(STORAGE_EMAIL);
    const savedTextarea = localStorage.getItem(STORAGE_MSG);

    if (savedEmail) {
        console.log(savedEmail);
        refs.email.value = savedEmail;
    }

    if (savedTextarea) {
        console.log(savedTextarea);
        refs.textarea.value = savedTextarea;
    }
}
