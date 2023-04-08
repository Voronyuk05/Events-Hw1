//#1
const colorBtn = document.querySelector('.set-color-btn')
colorBtn.addEventListener('click', SetColor)
function SetColor(event) {
    event.currentTarget.style.backgroundColor = "red";
}

//#2
const alertBtn = document.querySelector('.alert-btn')
alertBtn.addEventListener('click', showText)
function showText(event) {
    alert("Hello world")
}

//#3
const form = document.querySelector(".js-form");
const submitBtn = document.querySelector('submit-btn');
form.addEventListener('submit', Register)

function Register(event) {
    event.preventDefault();
    ChekLogin()
}

function ChekLogin() {
    let EnterPassword = prompt("Your login:", '')
    if (EnterPassword == form.password.value) {
        alert("Вхід авторизовано")
    }
}