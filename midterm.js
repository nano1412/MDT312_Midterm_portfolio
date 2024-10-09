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

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)