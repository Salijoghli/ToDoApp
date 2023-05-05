const formAdd = document.querySelector('.add');
const myToDos = document.querySelector('.list');

//add
const addItem = todo =>{
    //string method

    // const html = `
    // <div class="list-item">
    //     <p class="list-item-text">${todo}</p>
    //     <button class="delete-list"><i class="fas fa-check checked"></i></button>
    //     <button class="delete-list"><i class="fas fa-trash-alt delete"></i></button>
    // </div>`;
    // myToDos.innerHTML += html;

    //object method

    //create div
    const myDiv = document.createElement('div')
    myDiv.classList.add('list-item')
    
    //create Text
    const myToDo = document.createElement('p')
    myToDo.classList.add('list-item-text')
    myToDo.innerText = todo
    myDiv.appendChild(myToDo)

    //create check button
    const checkIcon = document.createElement('i')
    checkIcon.classList.add('fas', 'fa-check', 'checked')
    const checkBtn = document.createElement('button')
    checkBtn.classList.add('delete-list')
    checkBtn.appendChild(checkIcon)
    myDiv.appendChild(checkBtn)
    
    //create delete button
    const delIcon = document.createElement('i')
    delIcon.classList.add('fas', 'fa-trash-alt', 'delete')
    const delBtn = document.createElement('button')
    delBtn.classList.add('delete-list')
    delBtn.appendChild(delIcon)
    myDiv.appendChild(delBtn)

    //add new toDo
    myToDos.appendChild(myDiv)
}


// submit/enter
formAdd.addEventListener('submit', event =>{
    event.preventDefault();
    if(formAdd.addToDo.value.trim()!='') {
        addItem(formAdd.addToDo.value) 
        formAdd.addToDo.value = ''
    }
});

//delete
// myToDos.addEventListener('click', e=>{
//     if(e.target.classList.contains('delete')){
//         e.target.parentElement.parentElement.remove();
//     }
// });

//completed todo

// myToDos.addEventListener('click', e=>{
//     if(e.target.classList.contains('checked')){
//         if(e.target.parentElement.previousElementSibling.classList.contains('done')){
//          e.target.parentElement.previousElementSibling.classList.remove('done')
//         } else e.target.parentElement.previousElementSibling.classList.add('done')
//     } 
// });

//item actions
myToDos.addEventListener('click', e => {
    const item = e.target.closest('.list-item');
    if (!item) return;
    if (e.target.classList.contains('delete')) {
      item.remove();
    } else if (e.target.classList.contains('checked')) {
      item.classList.toggle('done');
    }
  });


//filter function

// const filterToDos = tmp=>{
//     //hidden
//     Array.from(myToDos.children)
//         .filter(todo => !todo.textContent.toLowerCase().includes(tmp))
//         .forEach(todo => todo.classList.add('hidden'));         

//     //shown
//     Array.from(myToDos.children)
//         .filter(todo => todo.textContent.toLowerCase().includes(tmp))
//         .forEach(todo => todo.classList.remove('hidden'));         

// }


const filterToDos = tmp => {
    Array.from(myToDos.children).forEach(todo => {
        const shouldHide = !todo.textContent.toLowerCase().includes(tmp);
        todo.classList.toggle('hidden', shouldHide);
    });
};


//search
const formSearch = document.querySelector('.search input');
formSearch.addEventListener('keyup', ()=>{
    const tmp = formSearch.value.trim().toLowerCase();
    filterToDos(tmp);
});