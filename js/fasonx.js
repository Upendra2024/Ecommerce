let signup = ()=>{
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var password = document.getElementById('password');

    if (name == ""){
        document.getElementById('username').innerHTML ="** please fill the name field"
        return false;
    
    }
    if((name.length<=2) || (name.length >20)){
        document.getElementById('username').innerHTML ="** name length must be between 2 to 20"
        return false;
    }    
    if(!isNaN(name)){
        document.getElementById('username').innerHTML ="** only charecters are allowed"
        return false;
    }

    if (email == ""){
        document.getElementById('mail').innerHTML ="** please fill the email field"
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('mail').innerHTML ="** @ invalid position"
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('mail').innerHTML ="** . invalid position"
        return false;
    }

  
    if (phone == ""){
        document.getElementById('num').innerHTML ="** please fill the phone field"
        return false;
     }
    if(isNaN(phone)){
        document.getElementById('num').innerHTML ="** user must write digits only"
        return false;
    }
    if(phone.length!=10){
        document.getElementById('num').innerHTML ="** mobile number must be 10 digits only"
        return false;
    }



    if (password == ""){
        document.getElementById('psd').innerHTML ="** please fill the password field"
        return false;
    
    }
    if((password.length<=5) || (password.length >10)){
        document.getElementById('psd').innerHTML ="** password length must be between 5 to 10"
        return false;
    }   
   
}

let login = ()=>{
    var name = document.getElementById("name");
    var password = document.getElementById("password");

    if (name == ""){
        document.getElementById('username').innerHTML ="** please fill the name field"
        return false;
    
    }
    if((name.length<=2) || (name.length >20)){
        document.getElementById('username').innerHTML ="** name length must be between 2 to 20"
        return false;
    }    
    if(!isNaN(name)){
        document.getElementById('username').innerHTML ="** only charecters are allowed"
        return false;
    }
   


    if (password == ""){
        document.getElementById('psd').innerHTML ="** please fill the password field"
        return false;
    
    }
    if((password.length<=5) || (password.length >10)){
        document.getElementById('psd').innerHTML ="** password length must be between 5 to 10"
        return false;
    } 
  
    
}

let printWishMessage =() =>{
    alert ('you are subscribed')
   
};

let subButton  = document.querySelector('#gm-btn');
subButton.addEventListener('click',function(){
    printWishMessage();
});

