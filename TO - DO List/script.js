document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            ${taskText}
            <button onclick="removeTask(This)">Delete</button>
        `;
        taskList.appendChild(taskItem);

        // Add animation
        requestAnimationFrame(() => {
            taskItem.classList.add('show');
        });

        taskInput.value = '';
        taskInput.focus();
    }

    function removeTask(button) {
        const taskItem = button.parentElement;
        taskItem.classList.remove('show');
        setTimeout(() => {
            taskItem.remove();
        }, 500); // Match the CSS transition time
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
