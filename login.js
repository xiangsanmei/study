var OK = 0;
var ERROR = 1;
/*
  Validation of Email
  Input: email:String
  Output: validateResult: {code: , msg:} 
*/
function emailValidation(email) {
  var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  var code, msg;

  if(reg.test(email)) {
    code = OK; 
    msg = undefined;
  } else {
    code = ERROR;
    msg = "email is illegal";
  }
  return {code: code, msg: msg};
}

/*
  Validation Username
  Input: username:String
  Output: true/false
*/
function passValidation(password) {
  if(password!="") {
    code = OK; 
    msg = undefined;
  } else {
    code = ERROR;
    msg = "password is illegal";
  }
  return {code: code, msg: msg};

}


/*
  Redirect to homepage
*/
function redirect(url) {
  window.location.href = url;
  return false;
}

function warning(message) {
  if(message)
    alert(message);
}
/*
  Login
*/
var URL = "home.html"
function login() {
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;

  var er = emailValidation(email);
  var pr = passValidation(password);

  if(!er.code && !pr.code) {
    return redirect(URL);
  }
  else {
    warning(er.msg);
    warning(pr.msg);
  }
}

/*
function login()
{
	var email=document.getElementById("inputEmail");
	var pass=document.getElementById("inputPassword");
	if(username.value=="")
	{
		alert("Please enter your Email!");
		email.focus();
		return false;
	}
	if(pass.value=="")
	{
		alert("Please enter the password!");
		return false;
	}
	window.location.href="home.html"; 
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}


function checkemail(){
	var pass=document.getElementById("inputPassword");
	var email = document.getElementById("inputEmail").value;
  var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

  var isemail= reg.test(email);

  if (!isemail ) {
    alert("Note: please enter a valid E_mail!");
    email.focus();
    return false;
  }
	if(pass.value=="") {
    alert("Please enter the password!");
    pass.focus();
    return false;
  }
  
  console.log("It is valid");
  window.location.href="home.html"; 
  return false;

	//window.location.href="http://127.0.0.1:8000/home.html"; 
}
//window.location.href="home.html"; 
*/
