function validateForm(){
    let name = document.forms['enquiryForm']['form-name'].value;
    let email = document.forms['enquiryForm']['form-email'].value;
    let phone = document.forms['enquiryForm']['form-phone'].value;
    
    if (name == ""){
        alert("Please enter your name.");
        return false;
    }

    if (email == ""){
         alert("Please enter your email address.");
         return false;
    }

    if (phone == ""){
        alert("Please enter your phone number.");
        return false;
    }
}