const form = document.querySelector('.add-task-form');
const taskList = document.querySelector('.task-list');
const noTaskMessage = document.querySelector('.no-task-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.querySelector('.add-task-form__input');
  const task = input.value.trim();

  if (task === '') {
    return;
  }

  const newTask = document.createElement('li');
  newTask.textContent = task;
  newTask.classList.add('task-list__item');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('task-list__delete-button');

  deleteButton.addEventListener('click', function () {
    newTask.remove();
    if (taskList.childElementCount === 0) {
      noTaskMessage.style.display = 'block';
    }
  });

  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);

  input.value = '';
  noTaskMessage.style.display = 'none';
});
