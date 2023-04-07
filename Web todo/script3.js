const form = document.querySelector('.add-task-form');
const taskList = document.querySelector('.task-list');
const noTaskMessage = document.querySelector('.no-task-message');

// Load tasks from localStorage on page load
window.addEventListener('load', function () {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(function (task) {
    const taskContent = document.createElement('span');
    taskContent.textContent = task;

    const newTask = document.createElement('li');
    newTask.classList.add('task-list__item');
    newTask.appendChild(taskContent);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('task-list__delete-button');

    deleteButton.addEventListener('click', function () {
      newTask.remove();
      if (taskList.childElementCount === 0) {
        noTaskMessage.style.display = 'block';
      }
      // Save tasks to localStorage after deleting a task
      saveTasks();
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    noTaskMessage.style.display = 'none';
  });
});

// Save tasks to localStorage on page unload
window.addEventListener('beforeunload', function () {
  saveTasks();
});

function saveTasks() {
  const tasks = [];
  const taskItems = document.querySelectorAll('.task-list__item');
  taskItems.forEach(function (taskItem) {
    tasks.push(taskItem.querySelector('span').textContent);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.querySelector('.add-task-form__input');
  const task = input.value.trim();

  if (task === '') {
    return;
  }

  const taskContent = document.createElement('span');
  taskContent.textContent = task;

  const newTask = document.createElement('li');
  newTask.classList.add('task-list__item');
  newTask.appendChild(taskContent);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('task-list__delete-button');

  deleteButton.addEventListener('click', function () {
    newTask.remove();
    if (taskList.childElementCount === 0) {
      noTaskMessage.style.display = 'block';
    }
    // Save tasks to localStorage after deleting a task
    saveTasks();
  });

  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);

  input.value = '';
  noTaskMessage.style.display = 'none';

  // Save tasks to localStorage after adding a new task
  saveTasks();
});
