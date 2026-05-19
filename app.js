function addBug(){

    let input = document.getElementById("bugInput");

    let bugText = input.value;

    let li = document.createElement("li");

    li.textContent = bugText;

    document.getElementById("bugList").appendChild(li);

    input.value = "";
}

