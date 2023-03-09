let form = document.getElementById("form")
let user = document.getElementById("user")
let email = document.getElementById("email")
let pasword = document.getElementById("pasword")
let pasword2 = document.getElementById("confirmpws")
let button = document.getElementById("button")


function verifyUser(user){
    let length = user.length
    if(length < 5){
        document.getElementById("user").style.border = "red"
    }else if(length > 25){
        document.getElementById("user").style.border = "red"
    }
}
function submit(){
    verifyUser
}

button.addEventListener("submit",submit)