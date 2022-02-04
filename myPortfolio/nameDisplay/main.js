var txtName = document.getElementById("name");
var txtAge = document.getElementById("age");
var out = document.getElementById("out");
var btn = document.getElementById("btn");

//btn.addEventListener("click", display);
function display(){
    var userName = txtName.value;
    var userAge = txtAge.value;
    userAge = Number(userAge);
    typeof(userAge);
    console.log(userAge);
    out.innerHTML = userName + " " + userAge + " years old";
}
/*
function fullNames(first, last){
    fullNAme = first + " " + last;
    console.log(fullNAme);
}

function promptUser(){
    name = prompt("What is your name?");
    surname = prompt("What is your last name");
    fullNames(name, surname);
}

promptUser();
*
var userName = prompt("Enter name");
var userSurname = prompt("Enter Surname");
function fullName(first, last){
    fullNames = first + " " + last;
    console.log(fullNames);
}
*/