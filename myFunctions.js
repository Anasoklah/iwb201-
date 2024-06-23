


document.getElementById('click1').addEventListener('click',function(){
    var click = document.getElementById("all1");
    if (click.style.display === "none") {
        click.style.display = "block";
       } else{
        click.style.display = "none";}})


document.getElementById('click2').addEventListener('click',function() {
    var click = document.getElementById("all2");
    if (click.style.display === "none") {
        click.style.display = "block";
        } else{
        click.style.display = "none"}})

document.getElementById('click3').addEventListener('click',function() {
    var click = document.getElementById("all3");
    if (click.style.display === "none") {
        click.style.display = "block";
        } else {
        click.style.display = "none"}})


document.getElementById('click4').addEventListener('click',function() {
    var click = document.getElementById("all4");
    if (click.style.display === "none") {
        click.style.display = "block";
        } else{
        click.style.display = "none" }})

document.getElementById('click5').addEventListener('click',function() {
    var click = document.getElementById("all5");
    if (click.style.display === "none") {
        click.style.display = "block";
        } else {
        click.style.display = "none"}})


document.getElementById('click6').addEventListener('click',function() {
    var click = document.getElementById("all6");
    if (click.style.display === "none") {
        click.style.display = "block";
        } else {
        click.style.display = "none"}})


document.getElementById('click7').addEventListener('click',function() {
    var click = document.getElementById("all7");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none"}})


document.getElementById('click8').addEventListener('click',function() {
    var click = document.getElementById("all8");
    if (click.style.display === "none") {
        click.style.display = "block";
        } else {
        click.style.display = "none"}})

        document.getElementById('click9').addEventListener('click',function() {
            var click = document.getElementById("all9");
            if (click.style.display === "none") {
                click.style.display = "block";
                } else {
                click.style.display = "none"}})

        document.getElementById('click10').addEventListener('click',function hideshow10() {
            var click = document.getElementById("all10");
            if (click.style.display === "none") {
                click.style.display = "block";
                } else {
                click.style.display = "none";  
            }})


        document.getElementById('btnclick').addEventListener('click',function()
        {
                document.getElementById('purchaseForm').style.display = "block";})
                document.getElementById('hideclick').addEventListener('click',function (){
                document.getElementById('purchaseForm').style.display = "none";
            })





            document.getElementById("buyForm").onsubmit = function(){
                let nameinput = document.getElementById("fullName").value;
                let nameRegx =  /^[أ-ي\s]+$/;
                let resultName = nameRegx.test(nameinput);
            
            
                let phoneinput = document.getElementById("mobileNumber").value;
                let phonRe = /^09[0-9]{8}$/;
                let resultNumber = phonRe.test(phoneinput);
            
            
                let emailinput = document.getElementById("email").value;
                let emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                let resultemail = emailRegx.test(emailinput);
            
            
                let wataninput = document.getElementById("nationalID").value;
                let watanRegx = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)[0-9]{9}$/;
                let watanresult = watanRegx.test(wataninput); 
            
            
            
                let dateinput = document.getElementById("birthDate").value;
                let dateRegx = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/[0-9]{4}$/;
                let dateresult = dateRegx.test(dateinput);
            
            
                if(resultName === false || resultNumber === false || resultemail === false || watanresult === false || wataninput === "" ){
            
                    return alert( "لم تتم العملية بنجاح");
                }
                return alert( "تمت العملية بنجاح");
            }
            
            


function showForm() {
    document.getElementById("purchaseForm").style.display = "block";
    generateCaptcha();
}

function validateForm() {
    var captchaInput = document.getElementById("captcha").value;
    // قم بتنفيذ الكود الخاص بالتحقق من صحة رمز Captcha هنا

    // إظهار نافذة تأكيد
    var confirmation = confirm("تأكيد عملية الشراء؟");

    if (confirmation) {
        alert("تمت عملية الشراء بنجاح!");
        return true;
    } else {
        alert("تم إلغاء عملية الشراء.");
        return false;
    }
}

function generateCaptcha() {
    var captchaText = generateRandomString(6);
    document.getElementById("captcha").value = "";
    document.getElementById("captcha").placeholder = captchaText;
    document.getElementById("captchaImage").src = "https://dummyimage.com/150x50/000/fff&text=" + captchaText;
}

function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function changeCaptcha() {
    generateCaptcha();
}

/////////////////////////////////////////////////

function generateCaptcha() {
    var captchaText = generateRandomString(6);
    document.getElementById("captcha").value = "";
    document.getElementById("captcha").placeholder = captchaText;
    document.getElementById("captchaImage") + captchaText;
}

function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var u = 0; u < length; u ++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function changeCaptcha() {
    generateCaptcha();
}


