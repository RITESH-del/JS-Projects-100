const arr = [];

const submitBtn = document.getElementById('submitBtn');
// let searchList = document.getElementById('searchBtn');

// submitBtn.addEventListener('click',(event)=>{
//     event.preventDefault(); // preventdefault behaviour such as page reload, bcz, it is a submitBtn
//     console.log(inputValue);
//     addTasks();
// })


const addTasks = (event) =>{
    event.preventDefault();
    let inputValue = document.getElementById('inputBar').value;
    //trim it
    let ul = document.getElementById('list-container');
    const li = document.createElement('li');
    li.textContent = inputValue;


    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('editBtn');
    editBtn.onClick = () => editTask(li); //

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.onClick = () => deleteTask(li); // so, the function will only executes when the button is clicked

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    ul.appendChild(li);
    li.appendChild(checkBox);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);



    

    event.preventDefault();
};

function editTask(li) {
    // Implement edit logic here
    alert('Edit clicked');
}

function deleteTask(li) {
    li.remove();
}