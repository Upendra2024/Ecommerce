let signup = ()=>{
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    if (name.value.trim() == "" ||email.value.trim() ==""|| phone.value.trim()==""){
        alert('No Blank Values Allowed');
        return false;
    }
    else{
        true;
    }
}

let login = ()=>{
    var name = document.getElementById("name");
    var password = document.getElementById("password");
    if (name.value.trim() == "" ||password.value.trim() ==""){
        alert('No Blank Values Allowed');
        return false;
    }
    else{
        true;
    }
}

let printWishMessage =() =>{
    alert ('you are subscribed')
   
};

let subButton  = document.querySelector('#gm-btn');
subButton.addEventListener('click',function(){
    printWishMessage();
});

