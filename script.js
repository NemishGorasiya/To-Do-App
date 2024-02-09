let arr = [];
let cross = document.getElementById("cross");
let newToDo = document.getElementById("newToDo");
let toDoDiv = document.getElementById("toDoDiv");
// let x = document.getElementById("hhh").getAttribute("data-id");
// console.log(x);
// console.log(typeof x);
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
    arr.push(newToDo.value);
    cross.style.display = "none";
    newToDo.value = "";
    displayToDo();
}

// function displayToDo() {
//     let s = "";
//     for (const i of arr) {
//         console.log(i);
//         s += 
//     }
// }

function disableToDo() {
    
}