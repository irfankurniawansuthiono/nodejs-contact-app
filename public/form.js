const nameInput = document.querySelector('#name-input');
const regionInput = document.querySelector('#region-input');
const mobileNumberInput = document.querySelector('#mobile-number-input');
const emailInput = document.querySelector('#email-input');
const form = document.querySelector('form.needs-validation');

form.addEventListener('submit', function(event) {
    if (!validateName() || !validateRegion() || !validateMobileNumber() || !validateEmail()) {
        event.preventDefault();
    }
});

nameInput.addEventListener('input', validateName);
regionInput.addEventListener('change', validateRegion);
mobileNumberInput.addEventListener('input', validateMobileNumber);
emailInput.addEventListener('input', validateEmail);

function validateName() {
    if (nameInput.value.trim() === '') {
        if (nameInput.classList.contains('is-valid')) {
            nameInput.classList.remove('is-valid');
            nameInput.classList.add('is-invalid');
        }else{
            nameInput.classList.add('is-invalid');
        }
        return false;
    } else {
        if (nameInput.classList.contains('is-invalid')){
            nameInput.classList.remove('is-invalid');
            nameInput.classList.add('is-valid');
        }else{
            nameInput.classList.add('is-valid');
        }
        return true;
    }
}

function validateRegion() {
    if (regionInput.value === 'Choose a region') {
        if (regionInput.classList.contains('is-valid')) {
            regionInput.classList.remove('is-valid');
            regionInput.classList.add('is-invalid');
        }else{
            regionInput.classList.add('is-invalid');
        }
        return false;
    } else {
        if (regionInput.classList.contains('is-invalid')){
            regionInput.classList.remove('is-invalid');
            regionInput.classList.add('is-valid');
        }else{
            regionInput.classList.add('is-valid');
        }
        return true;
    }
}

function validateMobileNumber() {
    const mobileNumberRegex = /^[0-9]+$/;
    if (!mobileNumberRegex.test(mobileNumberInput.value)) {
        if (mobileNumberInput.classList.contains('is-valid')) {
            mobileNumberInput.classList.remove('is-valid');
            mobileNumberInput.classList.add('is-invalid');
        }else{
            mobileNumberInput.classList.add('is-invalid');
        }
        return false;
    } else {
        if(mobileNumberInput.classList.contains('is-invalid')){
            mobileNumberInput.classList.remove('is-invalid');
            mobileNumberInput.classList.add('is-valid');
        }else{
            mobileNumberInput.classList.add('is-valid');
        }
        return true;
    }
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value || !emailRegex.test(emailInput.value)) {
        if(emailInput.classList.contains('is-valid')){
            emailInput.classList.remove('is-valid');
            emailInput.classList.add('is-invalid');
        }else{
            emailInput.classList.add('is-invalid');
        }
        return false;
    } else {
        if(emailInput.classList.contains('is-invalid')){
                emailInput.classList.remove('is-invalid');
                emailInput.classList.add('is-valid');
        }else{
            emailInput.classList.add('is-valid');
        }
        return true;
    }
}
