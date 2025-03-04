// Array of 10 random tasks as strings
const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];

const addBtn = document.getElementById("add-item-btn");
const alertBtn = document.getElementById("alert-btn");
const consoleBtn = document.getElementById("console-btn");
const ul = document.getElementById("item-list");

const addTask = () => {
  if (tasks.length > 0) {
    const i = Math.floor(Math.random() * tasks.length);
    const li = document.createElement("li");
    li.textContent = tasks[i];
    ul.appendChild(li);
    li.scrollIntoView();
    tasks.splice([i], 1);
  } else {
    alert("Empty task list!");
  }
};

addBtn.addEventListener("click", addTask);

alertBtn.addEventListener("click", (e) => {
  alert("This is an alert message!");
});

consoleBtn.addEventListener("click", (e) => {
  console.log("Some text!");
});

// ---------------------------------
// ------Alternative to addBtn------
// ---------------------------------

// addBtn.addEventListener('click', () => {
//   const newItem = document.createElement('li');
//   newItem.textContent = tasks[Math.floor(Math.random() * 10)];
//   ul.appendChild(newItem);
//   ul.scrollTop = itemList.scrollHeight;
// });
