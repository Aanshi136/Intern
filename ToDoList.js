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
        deleteB.innerHTML = '<i class="fa-solid fa-trash" style="color: #FFD43B;"></i>';  
        deleteB.classList.add("deleteB");  
        li.appendChild(deleteB);  
        

        


        let updateB = document.createElement("button");
        updateB.innerHTML = '<i class="fas fa-pencil-alt" style="color: #FFD43B;"></i>';  
        updateB.classList.add("updateB");  
        li.appendChild(updateB);  

       


        deleteB.onclick = function() {
            li.remove();  
        };

        


        updateB.onclick = function() {
            var updatedText = prompt("Update task:", a.textContent);
            if (updatedText !== null && updatedText !== '') {
                a.textContent = updatedText;  
            }
        };

        
        document.querySelector(".name").appendChild(li);
    }

    
    document.querySelector(".myInput").value = "";
}
