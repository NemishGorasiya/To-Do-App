let arr = [];
let cross = document.getElementById("cross");
let newToDo = document.getElementById("newToDo");
let toDoDiv = document.getElementById("toDoDiv");

newToDo.addEventListener("keypress",(event)=>{
    if (event.key === "Enter") {
        if (event.target.value === "") {
            alert("To-Do can't be empty");
        }else{
            event.preventDefault();
            addToDoFunction();
        }
    }
})

function newToDoFunction(e){
    if (e.target.value !== "") {
        cross.style.display = "block";
    }else{
        cross.style.display = "none";
    }
}

function clearInput(){
    newToDo.value = "";
    cross.style.display = "none";
}

function addToDoFunction() {
    if (newToDo.value === "") {
        alert("To-Do can't be empty");
        return;
    }
    let x = {
        "toDo" : newToDo.value.trim(),
        "completed" : false
    }
    arr.push(x);
    cross.style.display = "none";
    newToDo.value = "";
    // console.log(arr);
    displayToDo();
}

function displayToDo() {
    // console.log("called");
    let s = "";
    for (let i in arr) {
        s += `<div class="toDo ${arr[i].completed === true ? "completed" : ""}" data-id="${i}">
        <div class="toDoLeft">
            <input class="check" type="checkbox" name="status" onclick="disableToDo(${i})" ${arr[i].completed === true ? "checked" : ""}>
            <span class="toDoText">${arr[i].toDo}</span>
            <input class="toDoEdit" type="text" placeholder="" value="${arr[i].toDo}">
        </div>
        <div class="toDoRight">
            <span class="status pending"><img src="./Assets/pending.png" alt="" srcset=""><span>Pending</span></span>
            <span class="status completed"><img src="./Assets/completed.png" alt="" srcset=""><span>completed</span></span>
            <button onclick="editToDo(${i})"><i class="fa-solid fa-pen"></i></button>
            <button onclick="deleteToDo(${i})"><i class="fa-solid fa-trash"></i></button>
        </div>
        <button class="saveBtn" onclick="saveEdit(${i})">Save</button>
      </div>`;
    }
    // console.log(s);
    console.log(arr);
    toDoDiv.innerHTML = s;
}

function editToDo(idx) {
    let ele = document.querySelectorAll(".toDoDiv .toDo")[idx];
    ele.classList.add("editMode");
    ele.classList.remove("completed");
    ele.querySelector(".toDoLeft .toDoEdit").addEventListener("keypress",(event)=>{
        if (event.key === "Enter") {
            saveEdit(idx);
        }
    })
}

function disableToDo(idx) {
    let ele = document.querySelectorAll(".toDoDiv .toDo")[idx];
    if (event.target.checked) {
        ele.classList.add("completed");
        arr[idx].completed = true;
        // console.log("arr",arr);
    }
}

function deleteToDo(idx) {
    arr.splice(idx,1);
    // console.log(arr);
    displayToDo();
}

function saveEdit(idx) {
    let ele = document.querySelectorAll(".toDoDiv .toDo")[idx];
    let newToDo = ele.querySelector(".toDoLeft .toDoEdit").value;
    if (newToDo === "") {
        alert("To-Do can't be empty");
    }else{
        ele.querySelector(".toDoLeft .toDoText").innerHTML = newToDo;
        ele.classList.remove("editMode");
        arr[idx].toDo = newToDo;
        if (ele.querySelector(".toDoLeft input.check").checked) {
            ele.classList.add("completed");
            arr[idx].completed = true;
        }else{
            ele.classList.remove("completed");
            arr[idx].completed = false;
        }
        arr[idx].toDo = newToDo;
    }
}



