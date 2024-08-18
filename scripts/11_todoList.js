const todoList = JSON.parse(localStorage.getItem('todoList')) || [{ name:'subrata'  , data:'11-05-2000' 
}];

showData();

// store the data in the array
function addtoDo() {

    const inputElement = document.querySelector('.js-toDoList');

    const localData = document.querySelector('.localData');
    
    const name = inputElement.value;
    const data = localData.value;
    todoList.push({

        // name : name,
        // data : data   shortHand property
        name,
        data
    });

    showData();
    
    localStorage.setItem('todoList',JSON.stringify(todoList));
    inputElement.value = '';
    localData.value ='';

}

// Generate the html
function showData() {

    let htmlElement ='';

    todoList.forEach((value,index) => {

        // const doList = todoList[i];
        // const name = doList.name;
        // const data = doList.data;

        // destructing
        const {name,data} = value;
        // const {data} = doList;
        const html = `
        <div>${name}</div>
        <div>${data}</div>
        <button
        class="delete-toDoList js-todoList">
            Delete
        </button>        
        `;
        htmlElement += html;
        
    });

    // Uses forEach Loop to iterate the element

    // for(let i=0;i<todoList.length;i++) {
    //     const doList = todoList[i];
    //     // const name = doList.name;
    //     // const data = doList.data;

    //     // destructing
    //     const {name,data} = doList;
    //     // const {data} = doList;
    //     const html = `
    //     <div>${name}</div>
    //     <div>${data}</div>
    //     <button onclick="
    //     todoList.splice(${i},1);
    //     <!-- calling the function so that the updated list to display on html page-->
    //     showData(); 
    //     " class="delete-toDoList">
    //         Delete
    //     </button>        
    //     `;
    //     htmlElement += html;
    // }

    document.querySelector('.showData').innerHTML = htmlElement;


    document.querySelectorAll('.js-todoList')
        .forEach((value,index) => {
        value.addEventListener('click',() =>{
            todoList.splice(index,1);
            localStorage.setItem('todoList',JSON.stringify(todoList));
            showData();
        });

        

    });

    console.log(index);

}

