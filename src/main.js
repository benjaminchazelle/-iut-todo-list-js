// Model
const todos = 



// View
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

// Actions
function addItem(label) {
  todos.push({ label, done : false})
  render()
}

function render() {
  ul.innerHTML = ""
  
  for(let todo of todos) {
    
  }
  
}

render()

button.onclick = () => {
  let item_li = document.createElement("LI");

  let item_span = document.createElement("SPAN");
  item_span.textContent = input.value;
  item_li.appendChild(item_span);

  let item_button = document.createElement("BUTTON");
  item_button.textContent = "X";
  item_button.onclick = () => {
    item_span.style.textDecoration = "line-through";
  };
  item_li.appendChild(item_button);

  ul.appendChild(item_li);

  input.value = "";
};