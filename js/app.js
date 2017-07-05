document.addEventListener("DOMContentLoaded", function(event) {
  var input = document.querySelector("#taskInput");
  var btn = document.querySelector("#addTaskButton");
  var ul = document.querySelector("ul");
  var completedBtn = document.querySelector("#removeFinishedTasksButton");
  var tasksLeft = document.querySelector("h3");
  console.log(tasksLeft);

  var value = 0;

  input.oninput = handleInput;
  function handleInput(event) {
    value = event.target.value;
    return value;
  }

  btn.onclick = handleButton;
  function handleButton(handleInput) {
    if (value.length > 5 && value.length < 100) {

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
      complete.classList.add("completed");
      complete.innerText = "Completed"
      delet.innerText = "Delete"
      console.log(value);
      input.value = " ";
      return;
    } else {
      alert("task has to be longer then 5 and shorter then 100");
    }
  }

  document.querySelector(".box").addEventListener("mouseover", function() {

    if (document.querySelector(".delete") != null) {

      [...document.querySelectorAll(".delete")].forEach(function(el) {
        el.addEventListener("click", function() {

          el.parentNode.remove();

        });
      });
      [...document.querySelectorAll(".completed")].forEach(function(el) {
        el.addEventListener("click", function() {
          el.classList.add("blue");
          el.dataset.value = "1";

        });

      });
    } else {
      return;
    }
  });

  completedBtn.onclick = handleCompleted;
  function handleCompleted() {
    var toRemove = document.querySelectorAll(".completed");
    for (var i = 0; i < toRemove.length; i++) {
      if (toRemove[i].dataset.value == "1") {
        toRemove[i].parentNode.remove();
      }
    }

  }

});
