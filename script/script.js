let todos;

let savedTodos = JSON.parse(localStorage.getItem("todos"));

if (Array.isArray(savedTodos) && savedTodos.length > 0) {
  todos = savedTodos;
} else {
  todos = [
    { title: "Buy Groceries", dueDate: "14-3-2021", id: "id1" },
    { title: "Go for Driving", dueDate: "17-3-2021", id: "id2" },
    { title: "Swimming", dueDate: "18-3-2021", id: "id3" },
  ];
}

// Model

function createTodo(title, dueDate) {
  let id = " " + new Date().getTime();
  todos.push({ title: title, dueDate: dueDate, id: id });
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

  let datePicker = document.getElementById("due-date");
  let dueDate = datePicker.value;

  createTodo(title, dueDate);

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
