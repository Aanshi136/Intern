function newElement() {
    var li = document.createElement("li");
    var inputValue = document.querySelector(".myInput").value;  
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.querySelector(".name").appendChild(li);  
    }

    document.querySelector(".myInput").value = "";  
}