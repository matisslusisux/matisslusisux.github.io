// Function checks the enquiry form for unentered input fields and produces an alert if any are found
function validateForm(){
    let name = document.forms['enquiryForm']['form-name'].value;
    let email = document.forms['enquiryForm']['form-email'].value;
    let phone = document.forms['enquiryForm']['form-phone'].value;
    let enquiry = document.forms['enquiryForm']['form-enquiry'].value;
    
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

    if (enquiry == ""){
        alert("Please enter your enquiry so we can assist you.");
        return false;
    }
}