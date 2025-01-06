function FormValidation(event) {
    event.preventDefault(); 
    let email = document.getElementById('email').value;  
    let password = document.getElementById('password').value;  
    let errorMessage = document.querySelector(".error");  

    if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long";  
        errorMessage.classList.add("error-visible");  
        errorMessage.classList.remove("error-valid");  
        
        return false;  
    } else {
        errorMessage.textContent = "";  
        errorMessage.classList.remove("error-visible");  
        errorMessage.classList.add("error-valid");  

        
        
        console.log("Email entered:", email);
        console.log("Password entered:", password);

        return true; 
    }
}
