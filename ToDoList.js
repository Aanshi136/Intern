function newElement() {
    let li = document.createElement("li");
    let inputValue = document.querySelector(".myInput").value;
    let errorMessage = document.querySelector(".error");
    let a = document.createTextNode(inputValue);
    li.appendChild(a);

    if (inputValue === '') {
        errorMessage.textContent = "You must write something!";
    } else {
        errorMessage.textContent = "";

        let deleteB = document.createElement("button");
        deleteB.classList.add("deleteB");
        let deleteIcon = document.getElementById("delete_icon").cloneNode(true);
        deleteIcon.style.display = "";
        deleteB.appendChild(deleteIcon);

        let updateB = document.createElement("button");
        updateB.classList.add("updateB");
        let editIcon = document.getElementById("edit_icon").cloneNode(true);
        editIcon.style.display = "";
        updateB.appendChild(editIcon);

        li.appendChild(deleteB);
        li.appendChild(updateB);

        deleteB.onclick = function () {
            li.remove();
        };

        updateB.onclick = function () {
            
            let currentTask = a.textContent;
            let editInput = document.createElement("textarea");
            editInput.value = currentTask;
            let saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            li.innerHTML = ''; 
            li.appendChild(editInput);
            li.appendChild(saveButton);

            saveButton.onclick = function () {
                const updatedTask = editInput.value;
                if (updatedTask !== "") {
                    li.innerHTML = '';
                    let updatedText = document.createTextNode(updatedTask);
                    li.appendChild(updatedText);
                    li.appendChild(deleteB); 
                    li.appendChild(updateB); 
                } else {
                    errorMessage.textContent = "You must write something!";
                }
            };
        };

        document.querySelector(".name").appendChild(li);
    }

    document.querySelector(".myInput").value = ""; 
}




