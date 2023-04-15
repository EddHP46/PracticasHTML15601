const newTaskInput = document.getElementById("new-task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Función para crear un elemento de tarea en la lista
function createTaskElement(taskText) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  checkbox.type = "checkbox";
  span.textContent = taskText;
  deleteBtn.textContent = "Eliminar";

  checkbox.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

addTaskBtn.addEventListener("click", () => {
  const taskText = newTaskInput.value;
  if (taskText.trim() !== "") {
    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);
    newTaskInput.value = "";
  }
});

newTaskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});