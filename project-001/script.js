const arr = [];

let inputValue = document.getElementById('inputBar').value;
const submitBtn = document.getElementById('submitBtn');
let seacrhList = document.getElementById('searchList');

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(inputValue);
    addTasks();
})

const addTasks = () =>{
    

}