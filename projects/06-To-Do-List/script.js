"use strict";
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value == "") {
    alert("Please add your first task");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputBox.value;
    listContainer.appendChild(list);
    let crossIcon = document.createElement("span");
    crossIcon.innerHTML = "\u00d7";
    list.appendChild(crossIcon);
  }
  inputBox.value = "";
  saveDate();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveDate();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveDate();
    }
  },
  false
);

function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
