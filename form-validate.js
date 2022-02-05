/* eslint-disable linebreak-style */
const formButton = document.querySelector('#submit-btn');
const userEmail = document.querySelector('#email');
const errorTxt = document.querySelector('.error-msg');
errorTxt.textContent = 'Please add your email using lower case format * e.g. username@gmail.com *';

function emailValidation(e) {
  if (userEmail.value !== userEmail.value.toLowerCase()) {
    errorTxt.style.display = 'block';
    e.preventDefault();
  } else {
    errorTxt.style.display = 'none';
  }
}

formButton.addEventListener('click', emailValidation);
