let addBtn = document.querySelector('#btn');

addBtn.addEventListener('click',function(){

let input_text = document.querySelector('#input').value;

if (input_text != ''){
  let todo_list = document.querySelector('.todo-list');

  let li = document.createElement('li');
  li.classList.add('list');

  li.textContent = input_text;
  console.log(li);

  let span_delete = document.createElement('span');

  span_delete.classList.add('delete');
  // span_delete.textContent = 'Delete';
  span_delete.addEventListener('click',function(){
    let hantei = confirm('本当に削除しますか？');
    if (hantei == true){
          this.parentElement.remove();
    }
  });


  li.appendChild(span_delete);
  todo_list.appendChild(li);

  document.querySelector('#input').value = '';
}

});
