let form = document.getElementById("form");
let user = document.getElementById("user");
let email = document.getElementById("email");
let pasword = document.getElementById("pasword");
let pasword2 = document.getElementById("confirmpws");
let button = document.getElementById("button");

function showError(input){
    const formControl = input.parentElement;
    formControl.classname = "form-control error";
}

function showSuccess(input){
    const formCOntrol = input.parentElement;

}

function checkLength(user, min, max){
    let length = user.length;
    if(length < min){

    }else if(length > max){

    }else{

    }
}

function submit(){
    verifyUser
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    if(checkRequired([user, email, password, password2])){
      checkLength(user, 3, 15);
      checkLength(password, 6, 25);
      checkEmail(email);
      checkPasswordsMatch(password, password2);
    }
  
  });