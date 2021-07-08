const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', focusInputRef)
function focusInputRef(event) {
    const inputLength = Number(event.target.dataset.length);
    const inputValue = event.target.value.length;
    if (inputLength === inputValue) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
}
