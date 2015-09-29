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


