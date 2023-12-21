// Get elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create new list item
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;

    // Add list item to the task list
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = "";
  }
}

// Function to remove a task
function removeTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}
 