const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('task');

// Function to create a new task item
function createTaskElement(task) {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox">
      <span>${task}</span>
      <button class="delete-btn">Delete</button>
    `;
    return li;
  }
  
  // Function to add a new task
  function addTask() {
    const task = taskInput.value.trim();
    if (task !== '') {
      const newTaskElement = createTaskElement(task);
      taskList.appendChild(newTaskElement);
      taskInput.value = '';
    }
  }
  
  // Function to delete a task
  function deleteTask(event) {
    const target = event.target;
    if (target.classList.contains('delete-btn')) {
      const li = target.parentElement;
      taskList.removeChild(li);
    }
  }
  
  // Event listeners
  addTaskBtn.addEventListener('click', addTask);
  taskList.addEventListener('click', deleteTask);