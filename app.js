// const para = document.querySelector('#book-list li:nth-child(2) .name');

// console.log(para);


// var books=document.querySelectorAll('#book-list li .name');
//
//
// Array.from(books).forEach(function(book){
//   book.textContent+= '(book title)';
// });
//
//
//
// const bookList=document.querySelector('#book-list');
//
// bookList.innerHTML+='<p>This is how you add HTML<p>'


// const banner=document.querySelector('#page-banner');
// console.log('#page-banner node type is:',banner.nodeType);
//
// console.log('#page-banner node name is:',banner.nodeName);
//
// console.log('#page-banner has child nodes:',banner.hasChildNodes());
//
// const cloneBanner=banner.cloneNode(true);
//
// console.log(cloneBanner);

//
// const bookList=document.querySelector('#book-list');
//
// console.log('the parent node is:', bookList.parentNode.parentNode);
//
//
//
// console.log(bookList.children);

//
//
// const bookList=document.querySelector('#book-list');
//
// console.log('bookList next sibling is', bookList.nextElementSibling);
//
//
//
//
//
//
//
//
//
//
// const bookList=document.querySelector('#book-list');
// //
// // console.log('bookList previous sibling is', bookList.prevElementSibling);
//
//
//
//
//
//
//
//
//
// bookList.previousElementSibling.querySelector('p').innerHTML+='<br> too cool for everyone else'
//
// var h2 = document.querySelector('#book-list h2')
//
// h2.addEventListener('click',function(event){
//   console.log(event.target);
//   console.log(event);
// })




// var button=document.querySelectorAll('#book-list .delete');
//
// Array.from(button).forEach(function(button){
//   button.addEventListener('click',function(event){
//     const li = event.target.parentElement;
//     li.parentNode.removeChild(li);
//
//
//
//
//   })
// // })
//
// const link = document.querySelector('#page-banner a');
//
// link.addEventListener('click',function(event){
//   event.preventDefault();
//   console.log('navigation to',event.target.textContent,'was prevented');
//
//
// })


document.addEventListener("DOMContentLoaded",function(){
  const list = document.querySelector('#book-list ul');


  //delete books

  list.addEventListener('click', function(event) {
    if (event.target.className == 'delete') {
      const li = event.target.parentElement;
      list.removeChild(li);
    }
  })



  //add books

  const addForm = document.forms['add-book'];

  addForm.addEventListener('submit', function(event){
    event.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);


  //create element



  const li = document.createElement('li');
  const bookName = document.createElement('span');

  const deleteBtn = document.createElement('span');


  //add Content

  deleteBtn.textContent = 'delete';
  bookName.textContent = value;
  // add classes

  bookName.classList.add('name');
  deleteBtn.classList.add('delete');
  // append to document

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  });

  // hide books

  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function(e){
    if (hideBox.checked) {
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });



  // filter book


  const searchBar = document.forms['search-books'].querySelector('input');

  searchBar.addEventListener("keyup",function(e){
    const term=e.target.value.toLowerCase();
    const books=list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){

      const title=book.firstElementChild.textContent;
       if(title.toLowerCase().indexOf(term)!=-1){
         book.style.display='block';

       }else {
         book.style.display='none';
       }

    })
  })



  const tabs=document.querySelector('.tabs');
  const panels=document.querySelectorAll('.panel');
  tabs.addEventListener('click',function(e){
    if (e.target.tagName=="LI"){
      const targetPanel=document.querySelector(e.target.dataset.target);
      panels.forEach(function(panel){
        if(panel==targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      })
    }
  })


})
