document.addEventListener("DOMContentLoaded", function(event) {
  var input =  document.querySelector("#taskInput");
  var btn = document.querySelector("#addTaskButton");
  var ul = document.querySelector("ul");
  console.log(ul);
  console.log(btn);
  console.log(input);

var value = 0;
console.log(value);
input.oninput = handleInput;
 function handleInput(event){
  value = event.target.value;
   console.log(value);
   return value;
}


btn.onclick = handleButton;
function handleButton (handleInput){
var newLi = document.createElement("li");
var h = document.createElement("h1")
var complete = document.createElement("button");
var delet = document.createElement("button");

ul.appendChild(newLi);
newLi.appendChild(h)
newLi.appendChild(complete);
newLi.appendChild(delet);
h.innerText = value;
complete.innerText="Completed"
delet.innerText="Delete"





console.log(value);
input.value= " ";
}








  });
