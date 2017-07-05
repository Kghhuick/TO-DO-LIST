document.addEventListener("DOMContentLoaded", function(event) {
  var input =  document.querySelector("#taskInput");
  var btn = document.querySelector("#addTaskButton");
  var ul = document.querySelector("ul");




  console.log(ul);
  console.log(btn);
  console.log(input);

var value = 0;

input.oninput = handleInput;
 function handleInput(event){
  value = event.target.value;
   console.log(value);
   return value;
}


btn.onclick = handleButton;
function handleButton (handleInput){
 if(value.length > 5 && value.length < 100) {

var newLi = document.createElement("li");
var h = document.createElement("h1")
var complete = document.createElement("button");
var delet = document.createElement("button");

ul.appendChild(newLi);
newLi.appendChild(h)
newLi.appendChild(complete);
newLi.appendChild(delet);
h.innerText = value;
delet.classList.add("delete");
complete.innerText="Completed"
delet.innerText="Delete"
console.log(value);
input.value= " ";


return ul,delet;
}
else {
  alert("task has to be longer then 5 and shorter then 100");
}
 }


document.querySelector(".container").addEventListener("mouseover",function(handleButton){

if(document.querySelector(".delete")!= null){
 [...document.querySelectorAll(".delete")].forEach(function(el){
   el.addEventListener("click",function(){
     el.parentNode.remove();

   });
 });



}
  else{
    return;
 }


});








  });
