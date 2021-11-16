//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 

$(".info-item .btn").click(function(){
  $(".container").toggleClass("log-in");
});

function login()
	{
		var uname = document.getElementById("username2").value;
		var pwd = document.getElementById("Password2").value;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(uname.length < 10  || uname.length > 10)
		{
			alert("Mobile Number should be of 10 digit");
		}
		else if(pwd.length < 6 )
		{
			alert("Password min length is 6!!");
		}
		else
		{
	alert('Thank You for Login & You are Redirecting to Cabbro');
  //Redirecting to other page or webste code or you can set your own html page.
			}
	}
  function signup()
	{
		var uname = document.getElementById("Username").value;
    var fullname = document.getElementById("Fullname").value;
		var pwd = document.getElementById("Password").value;
    var email = document.getElementById("email").value;
    var confirmpwd = document.getElementById("Password1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)){
      alert("enter valid Email")
    }
    else if(fullname == ""){
      alert("please enter Full Name");
    }
    else if(fullname.length < 6){
      alert("Atleast 6 characters required in Full Name");
    }
		else if(uname == "")
		{
			alert("please enter user name.");
		}
    
    else if(uname.length < 3)
		{
			alert("Atleast 3 characters required in Username!!");
		}
		else if(pwd=='')
		{
        	alert("Please enter the password");
		}
    
		else if(pwd.length < 6 || pwd.length > 6)
		{
			alert("Password min and max length is 6!!");
		}
    else if(confirmpwd!=pwd){
      alert("Password not matched");
    }
		else
		{
      alert("Account created Successfully")
			}
	}

