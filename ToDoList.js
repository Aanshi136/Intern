function newElement() {
    var li = document.createElement("li");
    var inputValue = document.querySelector(".myInput").value;  
    var a = document.createTextNode(inputValue);
    li.appendChild(a);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        
        document.querySelector(".name").appendChild(li);  
    }

    document.querySelector(".myInput").value = "";  
}
