let todos = [
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

// Model

render();

// controller

function addTodo() {
  let todoList = document.getElementById("todo-list");
  let title = todoList.nodeValue;

  let dueDate = document.getElementById("due-date");
  let date = dueDate.value;

  let id = new Date().getTime();

  todos.push({ title: title, dueDate: date, id: id });

  render();
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
    element.appendChild(deleteButton);

    let todoDisplay = document.getElementById("todo-display");
    todoDisplay.appendChild(element);
  });
}
