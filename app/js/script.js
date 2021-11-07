const eye = document.querySelector(".switch-pass");
const form = document.querySelector("form");
const fnameField = document.querySelector(".fname-field");
const lnameField = document.querySelector(".lname-field");
const emailField = document.querySelector(".email-field");
const passwordField = document.querySelector(".password-field");
const fields = [fnameField, lnameField, emailField, passwordField];
let icon = "fas fa-eye-slash switch-pass";

eye.addEventListener("click", () => {
    if(eye.classList.contains("fa-eye-slash")){
        icon = "fas fa-eye switch-pass";
        eye.className = icon;
        passwordField.setAttribute("type", "text");
    } else{
        icon = "fas fa-eye-slash switch-pass";
        eye.className = icon;
        passwordField.setAttribute("type", "password");
    }
});

console.log(icon);


form.addEventListener("submit", (e) => {
    
    fields.forEach(field => {
        if(!field.checkValidity()){
            e.preventDefault();
            field.parentElement.classList.add("error");
            field.value = null;

            if(field !== emailField){
                field.setAttribute("placeholder", "");
            } else{
                field.setAttribute("placeholder", "email@example/com");
            }

        } else{
            field.parentElement.classList.remove("error");
        }
        console.log(field.checkValidity());
    });

    if(eye.parentElement.classList.contains("error")){
        eye.className = "fas fa-exclamation-circle";
    }

});

fields.forEach(field => {
    field.addEventListener("input", () => {

        if(field.checkValidity()){
            field.parentElement.classList.remove("error");

            switch(field){
                case fnameField:
                    fnameField.setAttribute("placeholder" , "First Name");
                    break
                ;
                case lnameField:
                    lnameField.setAttribute("placeholder" , "Last Name");
                    break
                ;
                case emailField:
                    emailField.setAttribute("placeholder" , "Email Address");
                    break
                ;
                case passwordField:
                    passwordField.setAttribute("placeholder" , "Password");
                    //eye.className = "fas fa-eye-slash switch-pass";
                    eye.className = icon;
                    break
                ;
            }
        }
    });
});