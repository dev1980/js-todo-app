let todos;

let savedTodos = JSON.parse(localStorage.getItem("todos"));

if (Array.isArray(savedTodos) && savedTodos.length > 0) {
  todos = savedTodos;
} else {
  todos = [
    {
      title: "Go for swimming",
      dueDate: "12-03-2021",
      id: "1",
    },
    {
      title: "Shopping",
      dueDate: "20-03-2021",
      id: "2",
    },
    {
      title: "Driving Class",
      dueDate: "29-03-2021",
      id: "3",
    },
  ];
}

// Model

function createTodo(title, date) {
  let id = " " + new Date().getTime();
  todos.push({ title: title, dueDate: date, id: id });
  saveTodos();
}

function deleteTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    if (todo.id == idToDelete) {
      return false;
    } else {
      return true;
    }
  });
  saveTodos();
}
render();
// controller

function addTodo() {
  let todoList = document.getElementById("todo-list");
  let title = todoList.nodeValue;

  let dueDate = document.getElementById("due-date");
  let date = dueDate.value;

  createTodo(title, date);

  render();
}

function removeTodo(event) {
  let deleteButton = event.target;
  let idToDelete = deleteButton.id;
  deleteTodo(idToDelete);
  render();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify("todos"));
}
// View

function render() {
  document.getElementById("todo-display").innerHTML = "";
  todos.forEach((todo) => {
    let element = document.createElement("div");
    element.innerText = todo.title + " " + todo.dueDate;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style = "margin-left: 12px; margin-top: 10px;";
    deleteButton.onclick = removeTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    let todoDisplay = document.getElementById("todo-display");
    todoDisplay.appendChild(element);
  });
}
