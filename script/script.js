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
