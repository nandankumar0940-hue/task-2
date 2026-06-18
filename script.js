document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("error");

    if (name === "" || email === "") {
        error.innerText = "All fields are required!";
        error.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.innerText = "Enter valid email!";
        error.style.color = "red";
        return;
    }

    error.innerText = "Form submitted successfully!";
    error.style.color = "green";
});


// To-Do List
document.getElementById("addBtn").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    let btn = document.createElement("button");
    btn.innerText = "Delete";

    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
