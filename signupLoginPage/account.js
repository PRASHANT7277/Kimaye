let facebook = document.querySelector("#details>div:nth-child(1)>div:nth-child(1)");
facebook.addEventListener("click",function(){
    window.location.href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1896981220538415&kid_directed_site=0&app_id=1896981220538415&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.2%2Fdialog%2Foauth%3Fclient_id%3D1896981220538415%26state%3Deb33f7b40d5a03e1e257cd025f827f60%26response_type%3Dcode%26sdk%3Dphp-sdk-5.4.4%26redirect_uri%3Dhttps%253A%252F%252Fsocial-login.oxiapps.com%252Fauth%252Ffacebook%26scope%3Demail%26display%3Dpopup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Df2d352cd-0bbf-481d-8993-c3559921d07d%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fsocial-login.oxiapps.com%2Fauth%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Deb33f7b40d5a03e1e257cd025f827f60%23_%3D_&display=popup&locale=en_GB&pl_dbl=0";
});

let google = document.querySelector("#details>div:nth-child(1)>div:nth-child(2)");
google.addEventListener("click",function(){
    window.location.href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fsocial-login.oxiapps.com%2Fauth%2Fgoogle&client_id=898543883992-ut65aoh5alu6s7jlcs5hk05htbagjs9n.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=online&approval_prompt=auto&flowName=GeneralOAuthFlow";
});

let signupArr = JSON.parse(localStorage.getItem("signupArr"));

let tempOtp = Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+"";
// console.log(tempOtp);
let otpPara = document.querySelector("#para");
otpPara.innerHTML = `<p>The otp for reset the password is ${tempOtp}. Kindly enter this otp and enjoy our services.</p>`;

let login = document.querySelector("#accLogin");
login.addEventListener("click",function(){
    
    signupArr.forEach(function(el){
        let email = document.querySelector("#email");
        let otp = document.querySelector("#otp");

        if(otp.value==tempOtp&&email.value==el.email) window.location.href="../homepage/index.html";
        else alert("Please enter a valid otp.");
    });
});

let register = document.querySelector("#accRegister");
register.addEventListener("click",function(){
    window.location.href="./signup.html";
});
