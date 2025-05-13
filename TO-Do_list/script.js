// Get the elements from the HTML
const taskInput = document.getElementById('taskinput');
const addTaskButton = document.querySelector('.add');
const clearAllButton = document.querySelector('.controls button:first-child');
const deleteCompletelyButton = document.querySelector('.controls button:nth-child(2)');
const sortTasksButton = document.querySelector('.controls button:nth-child(3)');
const resetInputButton = document.querySelector('.controls button:nth-child(4)');
const taskList = document.getElementById('taskList');

// Initialize an empty array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  let task = taskInput.value.trim();
  task=task.charAt(0).toUpperCase()+task.slice(1);
  if (task) {
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

// Function to render tasks
// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the existing list
    
    for (let i = 0; i < tasks.length; i++) {
      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.style.alignItems = 'center';
      li.style.margin = '1px';
  
      const span = document.createElement('span');
      span.textContent = i+1+")."+tasks[i];
      span.style.wordBreak = 'break-word';
  
      const button = document.createElement('button');
      button.textContent = 'Remove';
      button.classList.add('remove-button');
      button.setAttribute('data-index', i);
   
      li.appendChild(span);
      li.appendChild(button);
      taskList.appendChild(li);
    }
  }

// Function to remove a task
function removeTask(event) {
  if (event.target.classList.contains('remove-button')) {
    const index = event.target.dataset.index;
    tasks.splice(index, 1);
    renderTasks();
  }
}

// Function to clear all tasks
function clearAll() {
  tasks = [];
  renderTasks();
}

// Function to delete completely (not implemented)


// Function to sort tasks
function sortTasks() {
  tasks.sort();
  renderTasks();
}

// Function to reset input
function resetInput() {
  taskInput.value = '';
}

// Add event listeners
addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);
clearAllButton.addEventListener('click', clearAll);
deleteCompletelyButton.addEventListener('click', deleteCompletely);
sortTasksButton.addEventListener('click', sortTasks);
resetInputButton.addEventListener('click', resetInput);
