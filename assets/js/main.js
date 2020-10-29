// このファイルに処理を記述する

let addBtn = document.querySelector('#btn');

addBtn.addEventListener('click',function(){

let input_text = document.querySelector('#input').value;

if (input_text != ''){
  let todo_list = document.querySelector('.todo-list');

  let li = document.createElement('li');
  li.classList.add('list');

  li.textContent = input_text;
  console.log(li);

  // let div_delete = document.createElement('div');

  // div_delete.classList.add('delete');
  // div_delete.textContent = 'Delete';
  // div_delete.addEventListener('click',function(){
  //   let hantei = confirm('本当に削除しますか？');
  //   if (hantei == true){
  //         this.parentElement.remove();
  //   }
  // });


  // li.appendChild(div_delete);
  todo_list.appendChild(li);

  // document.querySelector('#input').value = '';
}

});
