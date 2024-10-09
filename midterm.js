window.onload = pageLoad;

var myname;

function pageLoad(){
    AOS.init({offset:0});
    myname = document.getElementById("name").innerHTML;
    document.getElementById("name").innerHTML = '';
    typeWriter(myname);
}

function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-400px)"
}

var textCurrentLength = 0;
var speed = 50;

function typeWriter() {
  if (textCurrentLength < myname.length) {
    document.getElementById("name").innerHTML += myname.charAt(textCurrentLength);
    textCurrentLength++;
    setTimeout(typeWriter, speed);
  }
}