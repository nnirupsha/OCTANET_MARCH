const InputBox = document.getElementById("todoInputBox");
const ListContainer = document.getElementById("list");

function AddTodo() {
    if (InputBox.value === '') {
        alert("Please enter your task first!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);

        let trashIcon = document.createElement("i");
        trashIcon.className = "fas fa-trash-alt";
        li.appendChild(trashIcon);
    }
    InputBox.value = "";
    DataSave();
}

ListContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        DataSave();
    } else if (e.target.tagName === "I") {
        e.target.parentElement.remove();
        DataSave();
    }
}, false);

function DataSave() {
    localStorage.setItem("data", ListContainer.innerHTML);
}

function ShowTodo() {
    ListContainer.innerHTML = localStorage.getItem("data");
}

ShowTodo();

