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

todos.forEach((todo) => {
  let element = document.createElement("div");
  element.innerText = todo.title + " " + todo.dueDate;
  document.body.appendChild(element);
});

function addTodo() {
  let todoList = document.getElementById("todo-list");
  let title = todoList.nodeValue;

  let dueDate = document.getElementById("due-date");
  let date = dueDate.value;

  let id = new Date().getTime();

  todos.push({ title: title, dueDate: date, id: id });

  todos.forEach((todo) => {
    let element = document.createElement("div");
    element.innerText = todo.title + " " + todo.dueDate;
    document.body.appendChild(element);
  });
}
