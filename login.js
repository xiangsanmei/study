function login()
{
	var username=document.getElementById("username");
	var pass=document.getElementById("password");
	if(username.value=="")
	{
		alert("Please enter your username!");
		username.focus();
		return false;
	}else if(username.length<6 || username.length>16){
		alert("The length must be between 6 and 16!");
		username.focus();
		return false;
	}
	if(pass.value=="")
	{
		alert("Please enter the password!");
		return false;
	}
	window.location.href="home.html"; 
}
