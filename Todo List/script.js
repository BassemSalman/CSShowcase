let arr = [
    {
        name:'make dishes',
        date:'2022-12-22'
    },
    {
        name:'sleep',
        date:'2012-12-22'
    }
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for(let i = 0; i<arr.length; i++){
      const todoObject = arr[i];
    //   const todoName = todoObject.name;
    //   const date = todoObject.dueDate;

      const {name, date} = todoObject;
const html =`
    <div>${name}</div>
    <div>${date}</div>
    <button
        class="delete-button"
        onclick="
            arr.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
    </div>
`;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}


function addTodo(){
    const element = document.querySelector('.js-input-1');
    const name = element.value;

    const elementDate = document.querySelector('.js-due-date');
    const date = elementDate.value;

    if(name && date){
        arr.push({
            name: name,
            date: date
        });
        renderTodoList();
    }
    console.log(arr);
    element.value=''; 
}