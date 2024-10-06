let postnum = 1;
const maxPost = 3;
let topicText;
let reply1Text;
let reply2Text;
let textfill;
let head;

window.onload = init;

function init(){
    topicText = document.getElementById("topic");
    reply1Text = document.getElementById("reply1");
    reply2Text = document.getElementById("reply2");
    textfill = document.getElementById("message");
    head = document.getElementById("top");
    head.innerHTML = "Welcome to the Forum";
}

function postFunction(){
    let text = textfill.value;
    textfill.value = "";
    switch (postnum){
        case 1:
            ChangeTextInnerHTML(topicText, text);  
        break;

        case 2:
            ChangeTextInnerHTML(reply1Text, text);
        break;

        case 3:
            ChangeTextInnerHTML(reply2Text, text);
        break;

    }
}

function ChangeTextInnerHTML(html, string){
    html.innerHTML = string;
    postnum++; //this fricker cause side effect
}

function clearFunction(){
    topicText.innerHTML = "";
    reply1Text.innerHTML = "";
    reply2Text.innerHTML = "";
    postnum = 1;

}