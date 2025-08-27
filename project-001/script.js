const arr = [];
// for implementing localStorage, i am going to add all the keys 

const submitBtn = document.getElementById('submitBtn');



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
    
    event.preventDefault();
};

function editTask(li) {
    // Implement edit logic here
    alert('Edit clicked');
}

function deleteTask(li) {

    const newArray = JSON.parse(localStorage.getItem('Tasks')); // created a new array to remove a particular task
    // console.log(newArray);

    const directText = Array.from(li.childNodes) //extract all the direct decendentants child node(element, text, attribute, style nodes) of the element
  .filter(node => node.nodeType === Node.TEXT_NODE) // filter all the textnode  
  .map(node => node.nodeValue.trim()) // Extract the text content of the element and trim any unnessecarry whitespaces
  .join(' '); //combines the textnode into a single string

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