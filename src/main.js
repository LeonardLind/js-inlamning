import "./style.css";
import { 
  getTasksFromLocalStorage, 
  saveTasksToLocalStorage, 
  renderTodoList,
} from "./functions.js";
import { Errands } from "./models/Errand.js"

let isReversed = false; 

// Save new task to localStorage
document.getElementById("saveobject").addEventListener("click", () => {
  const taskValue = document.getElementById("toDo").value;
  const dateValue = document.getElementById("toDoDate").value;
  const timeValue = document.getElementById("toDoTime").value;

  const newErrand = new Errands({
    task: taskValue,
    date: dateValue,
    time: timeValue,
  });

    const tasks = getTasksFromLocalStorage();
    tasks.push(newErrand);  
    saveTasksToLocalStorage(tasks);  

    document.getElementById("toDo").value = "";
    document.getElementById("toDoDate").value = "";
    document.getElementById("toDoTime").value = "";

    renderTodoList();  
  } 
);

// Clear localStorage 
document.getElementById("clear").addEventListener("click", () => {
  localStorage.clear(); 
  renderTodoList();  
});

// Default button
document.getElementById("sort-default").addEventListener("click", () => {
  isReversed = false; 
  renderTodoList(); 
});

// Reverse button
document.getElementById("sort-reverse").addEventListener("click", () => {
  isReversed = true; 
  renderTodoList(isReversed); 
});


renderTodoList();
