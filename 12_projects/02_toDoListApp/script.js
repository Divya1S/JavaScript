const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Add task function
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    inputBox.focus(); //put the cursor back in the box
    saveData(); //Ensure empty string doesn't clear storage
}


//Check or delete task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false)

// Keyboard support (Press Enter)
inputBox.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        addTask();
    }
})

//Peristent: Save and Load
//Save data to localStorage whenever the list changes
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//Display data when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

//Call showTask() at the end of script
showTask();