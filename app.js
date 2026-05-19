function addBug(){

    let input = document.getElementById("bugInput");

    let bugText = input.value;

    let li = document.createElement("li");

    li.textContent = bugText;

    document.getElementById("bugList").appendChild(li);

    input.value = "";
<<<<<<< HEAD
}
=======
}
>>>>>>> 8205c7384faf27e4eca8cc989e293a5d6db87ac1
