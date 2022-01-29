function Validaion(){
    let username = document.getElementById('username').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;

    let usercheck = /^[A-Za-z ]{3,15}$/;
    let mobilecheck = /^[789][0-9]{9}$/;
    let emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

    if(usercheck.test(username)){
        document.getElementById("usererror").innerHTML=" ";
    }
        else{
            document.getElementById("usererror").innerHTML= "** User Name is Invalid";
            return false;
        }

    if (mobilecheck.test(mobile)){
        document.getElementById("mobileerror").innerHTML= "";
    }
    else{
        document.getElementById("mobileerror").innerHTML = "** Mobile is Invaild"

        return false;
    }
    if (emailcheck.test(email)){
        document.getElementById("emailerror").innerHTML= "";
    }
    else{
        document.getElementById("emailerror").innerHTML = "** Email is Invalid";
        return false;
    }
}
