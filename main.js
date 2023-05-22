const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateInputs()) {
    form.submit();
  }
});

function validateInputs() {
  let isValid = true;

  // EMAIL
  if (emailInput.value.trim() === "") {
    setError(emailInput, "Provide email address");
    isValid = false;
  } else if (!isEmailValid(emailInput.value.trim())) {
    setError(emailInput, "Provide a valid email address");
    isValid = false;
  } else {
    setSuccess(emailInput);
  }

  // PASSWORD
  if (passwordInput.value.trim() === "") {
    setError(passwordInput, "Provide password");
    isValid = false;
  } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
    setError(passwordInput, "Password must be between 6 and 20 characters");
    isValid = false;
  } else {
    setSuccess(passwordInput);
  }

  return isValid;
}
    function setError(element,errorMessage){
      const parent = element.parentElement;
      if(parent.classList.contains('success')){
        parent.classList.remove('success');
      }
      parent.classList.add('error');
      const paragraph = parent.querySelector('p');
      paragraph.textContent = errorMessage;
      
    }
    function setSuccess(element,errorMessage){
      const parent = element.parentElement;
      if(parent.classList.contains('error')){
        parent.classList.remove('error');
      }
      parent.classList.add('success');
      const paragraph = parent.querySelector('p');
      paragraph.textContent = errorMessage;
      
    }
    function isEmailValid(email){
      const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return reg.test(email);
    }


 

// Rest of the code...


