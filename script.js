document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        // Create new list item
        const li = document.createElement("li");

        // Create span for task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        // Append span and buttons to the list item
        li.appendChild(taskSpan);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        // Append list item to the task list
        taskList.appendChild(li);

        taskInput.value = ""; // Clear input after adding task

        // Event listener for marking the task as completed
        taskSpan.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // Event listener for editing the task
        editBtn.addEventListener("click", function () {
            const newTaskText = prompt("Edit task:", taskSpan.textContent);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                taskSpan.textContent = newTaskText.trim();
            }
        });

        // Event listener for deleting the task
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });
    } else {
        alert("Please enter a task.");
    }
}

