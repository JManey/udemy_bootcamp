let todos = [];

let input = prompt("What would you like to do?");

//logic
while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}
console.log("ok, you've exited the app");

// functions
function listTodos() {
  console.log("*************");
  todos.forEach(function (todo, idx) {
    console.log(idx, ": ", todo);
  });
  console.log("*************");
}

function addTodo() {
  let newTodo = prompt("Enter todo:");
  todos.push(newTodo);
  console.log("added: ", newTodo);
}

function deleteTodo() {
  let idx = prompt("Enter number of todo to remove:");
  let removed = todos.splice(idx, 1);
  console.log("Deleted: ", removed[0]);
}
