const validationInputRef = document.querySelector('#validation-input');
const dataLength = Number(validationInputRef.dataset.length);

function validationInput() {
  if (validationInputRef.value.length === dataLength) {
    validationInputRef.classList.add('valid');
    validationInputRef.classList.remove('invalid');
  }
  else {
    validationInputRef.classList.add('invalid');
    validationInputRef.classList.remove('valid');
  }
}

validationInputRef.addEventListener('blur', validationInput);