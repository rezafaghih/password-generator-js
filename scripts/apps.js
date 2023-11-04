var generate = document.querySelector("#generate-password");
const passwordOutput = [];
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if (generate != undefined){
    generate.addEventListener('click', ()=>{
        var len = document.querySelector("#password-len");
        var output = document.querySelector(".password-output");
        var passwordLength = len.value;

        if (passwordLength > 22){
            passwordLength = 22;
        }

        var password = "";

        for (var i = 0; i <= passwordLength; i++) {
            password += chars[Math.floor(Math.random()*chars.length)];
        }
        output.querySelector("span").innerHTML = password;
        output.style.display = "flex";

        output.addEventListener(
            'click',
             ()=>{
                navigator.clipboard.writeText(output.querySelector("span").innerHTML).then(
                    () => {
                        value = output.querySelector('span').innerHTML;
                        output.querySelector("span").innerHTML = 'coppied';

                        setTimeout(()=>{
                            output.querySelector("span").innerHTML = value;
                        }, 1000)
                    },
                  );
        })
    })
}