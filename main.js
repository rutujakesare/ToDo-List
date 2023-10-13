const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
const doneList = JSON.parse(localStorage.getItem('doneList')) || [];

        function addItem() {
            const name = document.getElementById("todo-name").value;
            const description = document.getElementById("todo-description").value;

            if (name && description) {
                const todoItem = { name, description };
                todoList.push(todoItem);

                document.getElementById("todo-name").value = "";
                document.getElementById("todo-description").value = "";

                displayTodos();
                saveToLocalStorage();
            }
        }

        function displayTodos() {
            const todoListContainer = document.getElementById("todo-list");
            todoListContainer.innerHTML = "";

            todoList.forEach((item, index) => {
                const li = document.createElement("li");
                li.innerHTML = `${item.name} - ${item.description} <button onclick="markAsDone(${index})">&#10004;</button> <button onclick="markAsNotDone(${index})">&#10008;</button> `;
                todoListContainer.appendChild(li);
            });
        }

        function markAsDone(index) {
            const item = todoList.splice(index, 1)[0];
            doneList.push(item);
            displayTodos();
            displayDone();
            saveToLocalStorage();
        }

        function markAsNotDone(index) {
            const item = doneList.splice(index, 1)[0];
            todoList.push(item);
            displayTodos();
            displayDone();
            saveToLocalStorage();
        }

        function displayDone() {
            const doneListContainer = document.getElementById("done-list");
            doneListContainer.innerHTML = "";

            doneList.forEach((item) => {
                const li = document.createElement("li");
                li.innerHTML = `${item.name} - ${item.description}`;
                doneListContainer.appendChild(li);
            });
        }

        function saveToLocalStorage() {
            localStorage.setItem('todoList', JSON.stringify(todoList));
            localStorage.setItem('doneList', JSON.stringify(doneList));
        }  

        displayTodos();
        displayDone();