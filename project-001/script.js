const arr = [];
// for implementing localStorage, i am going to add all the keys 

const submitBtn = document.getElementById('submitBtn');

function renderTasksFromStorage() {
    let ul = document.getElementById('list-container');
    ul.innerHTML = ''; // Clear existing list
    let tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('editBtn');
        editBtn.onclick = () => editTask(li);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.onclick = () => deleteTask(li);

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.onclick = () => checkedTask(li, checkBox);

        li.appendChild(checkBox);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);
    });
}

// Call this when the page loads
window.onload = renderTasksFromStorage;




const addTasks = (event) =>{
    event.preventDefault();
    let inputValue = document.getElementById('inputBar').value;
    inputValue.trim();
    //trim it

    if (inputValue !== '' ) {

        arr.push(inputValue); //adding tasks
        localStorage.setItem('Tasks', JSON.stringify(arr)); //localStorage only store data as a string


        let ul = document.getElementById('list-container');
        const li = document.createElement('li');
        li.textContent = inputValue;


    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('editBtn');
    editBtn.onclick = () => editTask(li); //

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.onclick = () => deleteTask(li); // so, the function will only executes when the button is clicked

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.onclick = () => checkedTask(li, checkBox);


    ul.appendChild(li);
    li.appendChild(checkBox);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
}
    const inputElement = document.getElementById('inputBar');
    inputElement.value = '';
    event.preventDefault();
};

let currentLi = null;
// Edit button functionality
function editTask(li) {
    currentLi = li
    let directText = li.childNodes[0].nodeValue;
    
    const listValue = document.getElementById("editTaskBar");
    listValue.value = directText; //changing the EditTaskBar value

    document.getElementById('Modal').style.display = 'block'; //display the modal 
    // console.log(directText);    
}

// Okay button functionality
document.getElementById("okayBtn")
.addEventListener('click', () => {
    const editedValue = document.getElementById("editTaskBar").value;
    if (currentLi) {
        currentLi.childNodes[0].nodeValue = editedValue;

//changing its value in localStorage
    let newArray = JSON.parse(localStorage.getItem('Tasks'));
    let directText = currentLi.childNodes[0].nodeValue;
    let index = newArray.indexOf(directText);
    if (index !== -1) {
        newArray.splice(index, 1, editedValue)
    }
    localStorage.removeItem('Tasks');
    localStorage.setItem('Tasks', JSON.stringify(newArray));



    }
    document.getElementById('Modal').style.display = 'none';
});




//EditModal cancel button functionality
 document.getElementById("CancelBtn")
 .addEventListener("click",()=>{
    document.getElementById('Modal').style.display = 'none'; //hide the modal 

    })

function deleteTask(li) {

    let newArray = JSON.parse(localStorage.getItem('Tasks')); // created a new array to remove a particular task
    // console.log(newArray);

    let directText = li.childNodes[0].nodeValue;
    

//   console.log(directText);


    let index = newArray.indexOf(directText); // Find the index of the element to remove
    if (index !== -1) {
        newArray.splice(index, 1); // Remove 1 element at the found index
    }
    localStorage.removeItem('Tasks'); //remove the task array so, that i can append the newAarray inside the localStorage,
    localStorage.setItem('Tasks',JSON.stringify(newArray)); //add newArray to localStorage with the same key

    li.remove();
    // console.log(localStorage.getItem('Tasks'));
}

function checkedTask(li, checkBox) {
    if (checkBox.checked){
        li.style.textDecoration ='line-through';
    } else {
        li.style.textDecoration = 'none';
    }
}

const searchBtn = document.getElementById("searchBtn");
// search.onclick = function(event) {
//     document.getElementById("search-container").style.display = 'block';
//     event.preventDefault();
// }

// opening the search modal
searchBtn.addEventListener('click', (event)=>{
    document.getElementById("search-container").style.display = 'block';
    event.preventDefault();
})

// closing the search modal
document.querySelector("button.search-button").addEventListener('click',(event)=>{
    // document.getElementById("search-container").style.display = "none";
    const searchValue = document.querySelector(".search-input").value;
    Search(searchValue);
})


function Search(searchValue){ // search function 
    let newArray = JSON.parse(localStorage.getItem("Tasks")) || [];
    // console.log(newArray);
    const result = newArray.find((value) => searchValue.toLowerCase() === value.toLowerCase());

    if (result === undefined) {
        document.getElementById("searchValue").textContent = "No such task exist";
    }else {
        document.getElementById("searchValue").textContent = "task found";
        document.getElementById("search-container").style.display = 'none';

        //here, u have to implement the changing index functionality basically, 
        // push the indexof value in newArray, push then re render
        const index = newArray.indexOf(result);
        newArray.splice(index,1); // removing the result element
        newArray.unshift(result); // adding the result element at arr[0]/first position

        localStorage.setItem("Tasks",JSON.stringify(newArray)); //overwrite tasks value
        renderTasksFromStorage(); //re-render the todo app, for updating list-container
    }




}
