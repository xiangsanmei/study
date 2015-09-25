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
	if(pass.value=="")
		{
			alert("Please enter the password!");
			pass.focus();
			return false;
		}
	window.location.href="home.html"; 
	return false;
}
