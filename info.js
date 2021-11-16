var emailV, FullNameV, userV, passV, cpassV;

function readFom(){
    emailV = document.getElementById("email").value;
    // FullNameV = document.getElementById("Fullname").value;
    userV = document.getElementById("Username").value;
    passV = document.getElementById("Password").value;
    cpassV = document.getElementById("Password1").value;
    console.log(emailV,userV,passV,cpassV);
}


document.getElementById("submit").onclick = function() {
    readFom();
  
    firebase
      .database()
      .ref("Sign-in " + emailV)
      .set({
        Email: emailV,
        // fullname: FullNameV,
        username: userV,
        password: passV,
        confirmPassword: cpassV, 
      });
      if(emailV == ""){
        alert("Please Enter details");
        return false
      }
    alert("You are successfully signed up!");
    document.getElementById("email").value = "";
    // document.getElementById("Fullname").value = "";
    document.getElementById("Username").value = "";
    document.getElementById("Password").value = "";
    document.getElementById("Password1").value = "";
  };