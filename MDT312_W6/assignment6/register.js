window.onload = pageLoad;

let errorText;

function pageLoad(){
	var form = document.getElementById("myRegister");
    errorText = document.getElementById("errormsg");
	form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var user = {
        firstname : document.forms["myRegister"]["firstname"],
        lastname :  document.forms["myRegister"]["lastname"],
        gender :    document.forms["myRegister"]["gender"],
        bday :      document.forms["myRegister"]["bday"],
        email :     document.forms["myRegister"]["email"],
        username :  document.forms["myRegister"]["username"],
        password :  document.forms["myRegister"]["password"][0],
        confirmpassword : document.forms["myRegister"]["password"][1]
    }

    for(let i of Object.keys(user)){
        // alert(i + " " + user[i].value);
        if(!user[i].value){
            errorText.innerHTML = i + " is empty";
            // alert(i + " is empty");
            return false;
        }
    }

    if(user.password.value != user.confirmpassword.value){
        errorText.innerHTML = "password and retype password are not same";
        // alert("password and retype password are not same");
        return false
    }
    return true;
    
}