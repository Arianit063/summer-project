const taskInput = document.querySelector("#task");
const submitInput = document.querySelector("#submit");
const displayGroupElement = document.querySelector("#display-group");

submitInput.addEventListener("click", submitTask);

getTasks();
function submitTask() {
  const taskText = taskInput.value;
  if (taskText !== "") {
    postTaskToBackend(taskText);
    setTask(taskText);
    taskInput.value = "";
  }
}

function setTask(taskName) {
  const listItem = document.createElement("li");
  const node = document.createTextNode(taskName);
  listItem.appendChild(node);
  displayGroupElement.appendChild(listItem);
}

function getTasks() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://192.168.86.32:3000/task");
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
    let responseObj = xhr.response;
    for (let i = 0; i < responseObj.length; i++) {
      setTask(responseObj[i]);
    }
  };
}

function postTaskToBackend(taskName) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://192.168.86.32:3000/task", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    task: taskName,
  }));
}
