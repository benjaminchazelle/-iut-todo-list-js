// Model
let todos = [];
let newLabel = "";

// Actions
function addTodo() {
  todos.push({ label: newLabel, done: false });
  newLabel = "";
  render();
}

function removeTodo(todo) {
  todo.done = true;
  render();
}

function updateNewLabel(_newLabel) {
  newLabel = _newLabel
  render();
}

// View
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

function render() { 
  ul.innerHTML = "";

  input.onkeyup = () => updateNewLabel(input.value)

  for (let todo of todos) {
    let item_li = document.createElement("LI");

    let item_span = document.createElement("SPAN");
    item_span.textContent = todo.label;
    item_span.style.textDecoration = todo.done ? "line-through" : "";
    item_li.appendChild(item_span);

    let item_button = document.createElement("BUTTON");
    item_button.textContent = "X"
    item_button.onclick = () => removeTodo(todo);
    item_li.appendChild(item_button);
    
    ul.appendChild(item_li)
  }

  input.value = newLabel;
  
  button.onclick = () => addTodo()
}

render();
