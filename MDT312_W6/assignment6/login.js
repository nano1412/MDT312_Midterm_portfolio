window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const usernameRegis = urlParams.get('username')
console.log(usernameRegis);

const passwordRegis = urlParams.get('password')
console.log(passwordRegis);	

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var userLogin = {
        username : document.forms["myLogin"]["username"],
        password :  document.forms["myLogin"]["password"]
    }

	if(userLogin.username.value != usernameRegis || userLogin.password.value != passwordRegis){
		alert("wrong user or password")
		return false;
	}

	alert("login sucess");
	return true;
}

	