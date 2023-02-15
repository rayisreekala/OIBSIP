let input=document.querySelector('.entered-list');
let addBtn=document.querySelector('.add-list');
let tasks=document.querySelector('.tasks');
let s=document.querySelector('.item.completed p ')
let to=document.querySelector('.todolist');
let todo=document.querySelector('.todo');
let edit=document.querySelector('.fa-pen-to-square');

function myfun(icon){
    if (icon.classList.contains("fa-square"))
    {
        // icon.classList.add('todo');
        icon.classList.replace('fa-square','fa-check-square');
        icon.classList.add('todo');
        // icon.classList.add('la');
        // input.target.parentElement.classList.toggle('completed');
        
    }
    else{
        icon.classList.replace('fa-check-square','fa-square');
        icon.classList.add('todo2');
        // icon.classList.add('todo');
    }

}


input.addEventListener('keyup' , () =>{
    if(input.value.trim() !=0){
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active')
    }
})

//adding new items to list

addBtn.addEventListener('click', () =>{
    if(input.value.trim() !=0) {
        let newItem=document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <div class="space">
        <div class="toggles">
        <i onclick="myfun(this)" class="fa-regular fa-square" aria-hidden="true" ></i>
        </div><p  >${input.value}</p> 
        </div>
        <div class="item-btn"> 
        <i class="fa-regular fa-pen-to-square"></i>  
        <i class="fa-solid fa-text-slash"></i>
        <i class="fa-solid fa-trash"></i> 
        </div> 
        `;
        
    
tasks.appendChild(newItem);
input.value='';

    } else{
        alert('Please enter a task')
    }
})

tasks.addEventListener('click', (e) => {

    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove();
    }
})

tasks.addEventListener('click',(e) =>{

    if(e.target.classList.contains('fa-text-slash')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})

// let paragraph=document.createElement('p');
// paragraph.id='sr';
// paragraph.innerText=input.value;



//Editing the text 



tasks.addEventListener('click',(e) => {

    if(e.target.classList.contains('fa-pen-to-square')){
        // paragraph.contentEditable=true;
        let j=e.target.parentElement.parentElement
        input.value = j.innerText;
        e.target.parentElement.parentElement.remove();
        

    }
    
})
