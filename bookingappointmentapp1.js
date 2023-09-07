const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click', removeItem);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '' || phoneInput.value ==='') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${phoneInput.value}`));

    var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className ="btn btn-danger btn-sm float-right delete";
    
   
    

  // Append text node
    deleteBtn.appendChild(document.createTextNode('delete'));

  // Append button to li
    li.appendChild(deleteBtn);

    


    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
  }

}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      userList.removeChild(li);
    }
  }
}
