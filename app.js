const form = document.getElementById('form');
const username = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
function showError(input){
    const formControl = input.parentElement;
    formControl.classname = "form-control error";
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.classname = "form-control success";
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input);
    }
}

function checkRequired(inpArr){
    let isRequired = false;
    inpArr.forEach(function(input){
        if(input.value.trim() === ""){
            showError(input);
            isRequired = true;
        }else{
            showSuccess(input);
        }
    });
    return isRequired;
}

function checkLength(input, min, max){
    let length = user.length;
    if(length < min){
        showError(input);
    }else if(length > max){
        showError(input);
    }else{
        showSuccess(input);
    }
}

function checkPasswordsMatch(input1, input2){
    if(input1 !== input2){
        showError(input2);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
  
    if(checkRequired([username, email, password, password2])){
      checkLength(username, 3, 15);
      checkLength(password, 6, 25);
      checkEmail(email);
      checkPasswordsMatch(password, password2);
    }
  
  });