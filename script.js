let addToDo = document.getElementById("addToDo");
let cross = document.getElementById("cross");
let toDoDiv = document.getElementById("toDoDiv");

const clearInput = () => {
  addToDo.value = "";
  cross.style.display = "none";
};

addToDo.addEventListener("input", () => {
  if (addToDo.value === "") {
    cross.style.display = "none";
  } else {
    cross.style.display = "block";
  }
});

let newToDoString = "";
const addToDoFunction = () => {
  newToDoString = `
    <div class="toDoLeft">
                    <input type="checkbox" name="done" id="done">
                    <span class="toDoText">${addToDo.value}</span>    
                    <input type="text" value="" style="display: none;">
                </div>
                <div class="toDoRight">
                    <span class="status pending">Pending</span>
                    <span class="status completed">Completed</span>
                    <button onclick="editToDo(event)"><i class="fa-solid fa-pen"></i></button>
                    <button onclick="deleteToDo(event)"><i class="fa-solid fa-trash"></i></button>
                </div>
                <button class="saveBtn" onclick="saveEdit(event)">Save</button>`;
  addToDo.value = "";
  cross.style.display = "none";
  let ele = document.createElement("div");
  ele.classList.add("toDo");
  ele.innerHTML = newToDoString;
  // console.log(toDoDiv);
  toDoDiv.appendChild(ele);
};

const editToDo = (e) => {
    console.log(e.target.parentElement.parentElement.parentElement);
    e.target.parentElement.parentElement.parentElement.style.pointerEvents = "auto";
  let ele =
    e.target.parentElement.parentElement.parentElement.firstElementChild;
  let elementToRemove = ele.children[1];
  let elementToAdd = ele.children[2];
  // console.log(ele);
  elementToRemove.style.display = "none";
  elementToAdd.value = elementToRemove.innerHTML;
  elementToAdd.style.display = "block";
  console.log(elementToRemove);
  console.log(elementToAdd);

  let rightEle = e.target.parentElement.parentElement;
  let saveBtn = rightEle.nextElementSibling;
  rightEle.style.display = "none";
  saveBtn.style.display = "block";

};
const saveEdit = (e) => {
  console.log(e.target);
  e.target.parentElement.children[1].style.display = "block";
  let eleToDisplay = e.target.parentElement.children[0].children[1];
  eleToHide = e.target.parentElement.children[0].children[2];
  console.log("dis", eleToDisplay);
  eleToDisplay.innerHTML = eleToHide.value;
  eleToDisplay.style.display = "block";
  eleToHide.style.display = "none";
  e.target.style.display = "none";
  e.target.parentElement.children[0].children[0].checked = false;
};
const deleteToDo = (e) => {
  e.target.parentElement.parentElement.parentElement.remove();
};
