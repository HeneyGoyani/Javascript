const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');
const taskPriority = document.getElementById('task-priority');
const taskDueDate = document.getElementById('task-due-date');
const taskList = document.querySelector('.task-list');
const taskCounter = document.getElementById('task-counter');
const emptyMsg = document.getElementById('empty-msg');

let tasks = [];
let editMode = false;
let editTaskId = null;

function loadTasks() {
  const stored = localStorage.getItem('tasks');
  if (stored) tasks = JSON.parse(stored);
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateCounter() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  taskCounter.textContent = `${total} task(s), ${completed} completed`;
}

function renderTasks() {
  saveTasks();
  taskList.innerHTML = '';

  if (tasks.length === 0) {
    emptyMsg.style.display = 'block';
  } else {
    emptyMsg.style.display = 'none';
  }

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item ${task.priority} ${task.completed ? 'completed' : ''}`;
    li.innerHTML = `
      <h4>${task.title}</h4>
      <p>${task.description}</p>
      <small>Due: ${task.dueDate || 'N/A'}</small>
      <div class="controls">
        <button class="complete" onclick="toggleTask(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
        <button class="edit" onclick="startEditTask(${task.id})">Edit</button>
        <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });

  updateCounter();
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function startEditTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  taskTitle.value = task.title;
  taskDescription.value = task.description;
  taskPriority.value = task.priority;
  taskDueDate.value = task.dueDate;
  editMode = true;
  editTaskId = id;
}


taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = taskTitle.value.trim();
  const desc = taskDescription.value.trim();
  const priority = taskPriority.value;
  const dueDate = taskDueDate.value;

  if (!title || !desc) {
    alert('Title and description are required.');
    return;
  }

  if (editMode) {
    tasks = tasks.map(task =>
      task.id === editTaskId
        ? { ...task, title, description: desc, priority, dueDate }
        : task
    );
    editMode = false;
    editTaskId = null;
  } else {
    tasks.push({
      id: Date.now(),
      title,
      description: desc,
      priority,
      dueDate,
      completed: false
    });
  }

  taskForm.reset();
  renderTasks();
});

loadTasks();
renderTasks();
