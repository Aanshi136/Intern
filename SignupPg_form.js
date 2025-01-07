let userDetailsList = [];

function SignupForm(event) {
    event.preventDefault(); 

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dob").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.querySelector(".error-message");

    let selectedPositions = [];
    let selectedLanguages = [];

    let positionCheckboxes = document.querySelectorAll("input[name='position']:checked");
    positionCheckboxes.forEach((checkbox) => {
        selectedPositions.push(checkbox.value);
    });

    let languageRadios = document.querySelectorAll("input[name='language']:checked");
    languageRadios.forEach((radio) => {
        selectedLanguages.push(radio.value);
    });

    if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    }

    errorMessage.textContent = ""; 

    let userDetails = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        age: age,
        gender: gender,
        email: email,
        selectedPositions: selectedPositions,
        selectedLanguages: selectedLanguages,
        password : password,
        confirmPassword : confirmPassword
    };

    
    userDetailsList.push(userDetails);

    
    displayUserDetails();

    
    document.querySelector("form").reset();

    return true;  
}

function displayUserDetails() {
    let detailsBox = document.getElementById("display-details");
    let detailsList = document.getElementById("details-list");

   
    detailsList.innerHTML = "";

    
    userDetailsList.forEach((user, index) => {
        let userDetailHTML = `
            <li>
                User ${index + 1}:<br>
                First Name: ${user.firstName}<br>
                Last Name: ${user.lastName}<br>
                Date of Birth: ${user.dob}<br>
                Age: ${user.age}<br>
                Gender: ${user.gender}<br>
                Email: ${user.email}<br>
                Selected Positions: ${user.selectedPositions.join(", ")}<br>
                Selected Programming Languages: ${user.selectedLanguages.join(", ")}<br>
                password: ${user.password}<br>
                confirmPassword: ${user.confirmPassword}<br>
            </li>
            <hr>
        `;
        detailsList.innerHTML += userDetailHTML;  
    });

    
    detailsBox.style.display = "block";
}

window.onload = function () {
    const positions = ["Junior Developer", "Mid-level Developer", "Senior Developer"];
    const languages = ["Java", "JavaScript", "Python", "ReactJs", "C", "C++"];

    let positionGroup = document.getElementById("position-group");
    positions.forEach((position) => {
        let checkboxLabel = document.createElement("label");
        let checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.name = "position";
        checkboxInput.value = position;
        checkboxLabel.appendChild(checkboxInput);
        checkboxLabel.appendChild(document.createTextNode(position));
        positionGroup.appendChild(checkboxLabel);
        positionGroup.appendChild(document.createElement("br"));
    });

    let languageGroup = document.getElementById("language-group");
    languages.forEach((language) => {
        let radioLabel = document.createElement("label");
        let radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "language";
        radioInput.value = language;
        radioLabel.appendChild(radioInput);
        radioLabel.appendChild(document.createTextNode(language));
        languageGroup.appendChild(radioLabel);
        languageGroup.appendChild(document.createElement("br"));
    });
};