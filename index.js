let uname=document.getElementById("username");

let mail=document.getElementById("email");

let contact=document.getElementById("contact");

let pswrd=document.getElementById("password");

let confpwd=document.getElementById("confirmpass");

let name_error=document.getElementById("name_error");

let mail_error=document.getElementById("mail_error");

let pswrd_error=document.getElementById("pswrd_error");

let confpwd_error=document.getElementById("confpwd_error");

let form=document.getElementById("form");

form.addEventListener('submit',(e)=>{

    let email_check=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(uname.value ===''|| uname.value==null)
    {
        e.preventDefault();
        name_error.innerHTML="username is required !";

    }
    else{
        name_error.innerHTML='';
    }
    if(! mail.value.match(email_check))
    {
        e.preventDefault();
        mail_error.innerHTML="enter valid eamil!";
    }

    if(pswrd.value==""){
        e.preventDefault();
        pswrd_error.innerHTML="please enter the password!";
    }
    if(pswrd.value.length<5)
    {
        e.preventDefault();
        pswrd_error.innerHTML="password must be more than 6 characters";

    }
    if(pswrd.value.length>=20)
    {
        e.preventDefault();
        pswrd_error.innerHTML="password can't be more than 20 characters";

    }
    if(pswrd.value==="password")
    {
        e.preventDefault();
        pswrd_error.innerHTML="password value can't be password!";

    }

    if(confpwd.value==""){
        e.preventDefault();
        confpwd_error.innerHTML="plese enter this value";
    }

    if(confpwd.value !=pswrd.value){
    
    {
        e.preventDefault();
        confpwd_error.innerHTML="password doesn't matched!";

    }
    }
 
})




