// const input = document.getElementById('input');
// const todolist = document.getElementById('todolist');
// const futerlist = document.getElementById('futerlist');
// const todo1 = document.getElementById('todo1');
// const after = document.getElementById('after');

// function addtask(list) {
//   let inputText = input.value.trim();
//   if (inputText === "") return;

//   let inputitem = document.createElement("li");
//   inputitem.innerHTML = <input type="checkbox"> ${inputText} <button class='remove'>remove</button>;
//   list.appendChild(inputitem);
//   input.value = "";

//   inputitem.querySelector(".remove").addEventListener("click", function() {
//     inputitem.remove();
//   });
// }

// function addtask2(list1) {
//   let inputText = input.value.trim();
//   if (inputText === "") return;

//   let inputitem = document.createElement("li");
//   inputitem.innerHTML = ${inputText} <button class='remove'>remove</button>;
//   list1.appendChild(inputitem);
//   input.value = "";

//   inputitem.querySelector(".remove").addEventListener("click", function() {
//     inputitem.remove();
//   });
// }

// todo1.addEventListener("click", function() {
//   addtask(todolist);
// });

// after.addEventListener("click", function() {
//   addtask2(futerlist);
// });