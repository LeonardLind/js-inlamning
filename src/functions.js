// Save tasks to localStorage
export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("errandsList", JSON.stringify(tasks));
};
// get tasks from localStorage
export const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("errandsList");

  let result = [];

  if (tasks) {
    result = JSON.parse(tasks);  
  }

  return result;
};

// Render the tasks to screen
export const renderTodoList = (isReversed) => {
  const todoListElement = document.getElementById("todo-list");
  const doneListElement = document.getElementById("todo-done");
  let tasks = getTasksFromLocalStorage();

  if (isReversed) {
    tasks = tasks.reverse(); 
  }

  todoListElement.innerHTML = ""; 
  doneListElement.innerHTML = ""; 

  for (let i = 0; i < tasks.length; i++) {
    const todo = tasks[i];
    const li = document.createElement("li");
    li.classList.add("todo-item");

    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.classList.add("todo-item-check");
    checkbox.addEventListener("click", () => toggleCheckbox(i));

    
    const taskText = document.createElement("span");
    taskText.innerText = todo.task + " - Date: " + todo.date + " - Time: " + todo.time;


    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(i));

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    if (todo.completed) {
      taskText.style.textDecoration = "line-through"; 
      doneListElement.appendChild(li); 
    } else {
      todoListElement.appendChild(li); 
    }
  }
};

// Toggle checkbox status on task
export const toggleCheckbox = (i) => {
  const tasks = getTasksFromLocalStorage();
  tasks[i].completed = !tasks[i].completed;
  saveTasksToLocalStorage(tasks); 
  renderTodoList(); 
};

// Delete a task from list
export const deleteTask = (i) => {
  const tasks = getTasksFromLocalStorage();
  tasks.splice(i, 1); 
  saveTasksToLocalStorage(tasks); 
  renderTodoList(); 
};
