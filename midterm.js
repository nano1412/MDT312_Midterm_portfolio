window.onload = pageLoad;

function pageLoad(){
    AOS.init({offset:0});
    typeWriter();
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
var txt = 'Wachirawit Khongsri';
var speed = 50;

function typeWriter() {
  if (textCurrentLength < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(textCurrentLength);
    textCurrentLength++;
    setTimeout(typeWriter, speed);
  }
}