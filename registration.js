function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval = true;
    clearErrors();
    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }
    var email = document.forms['myForm']["femail"].value;
    if (email.length>20){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    } 
    var Pdt_name = document.forms['myForm']["fPdt_name"].value;
    if (Pdt_name.length > 20 || Pdt_name.length < 2){
        seterror("Pdt_name", "*Invalid Product Name");
        returnval = false;
    }
    var description = document.forms['myForm']["fdescription"].value;
    if (description.length > 200){
        seterror("description", "*Product Description cannot exceed 200 characters");
        returnval = false;
    }
    var rent = document.forms['myForm']["frent"].value;
    if (rent.length < 1 ){
        seterror("rent", "*Invalid");
        returnval = false;
    }
    return returnval;
}