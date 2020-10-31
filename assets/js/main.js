let data;

if (localStorage.getItem('todoList')) {
  data = JSON.parse(localStorage.getItem('todoList'));
}else {
  data = [];
}

for (let displayText of data){
  add_li_tag(displayText);
}

let addBtn = document.querySelector('#btn');

addBtn.addEventListener('click',function(){

let input_text = document.querySelector('#input').value;

if (input_text != ''){

  add_li_tag(input_text);

data.push(input_text);

localStorage.setItem('todoList',JSON.stringify(data));

  document.querySelector('#input').value = '';
}

});


function add_li_tag(task_text){

  let todo_list = document.querySelector('.todo-list');

  let li = document.createElement('li');
  li.classList.add('list');

  li.textContent = task_text;
  console.log(li);

  let div_delete = document.createElement('div');

  div_delete.classList.add('delete');
  div_delete.addEventListener('click',function(){
    let hantei = confirm('本当に削除しますか？');
   if (hantei == true){
          let del_text = this.parentElement.textContent;
          del_text = del_text.replace('Delete','')
          data.splice(data.indexOf(del_text),1);

          this.parentElement.remove();
          localStorage.setItem('todoList',JSON.stringify(data));
    }
  });

let i_delete = document.createElement('i');
i_delete.classList.add('fas');
i_delete.classList.add('fa-trash');
div_delete.appendChild(i_delete);

  li.appendChild(div_delete);
  todo_list.appendChild(li);

}