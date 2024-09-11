document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input after adding task

    // Event listener for marking the task as completed
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Event listener for deleting the task
    li.querySelector(".delete-btn").addEventListener("click", function () {
      li.remove();
    });
  } else {
    alert("Please enter a task.");
  }
}
