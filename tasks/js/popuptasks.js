const createTaskBtn = document.getElementById('create-task-btn');
const popup = document.getElementById('task-popup');
const closePopup = document.getElementById('popup-close-btn');

// Show popup
createTaskBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Close popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    document.getElementById('task-title').value = '';
    document.getElementById('time-started').value = '';
   document.querySelector('.create-substaks').value = '';
    document.getElementById('dropdown-selected').innerText = 'Select duration';
    document.querySelector('.subtasks-container').innerHTML = ''; 
    document.getElementById('selected-category').textContent = 'Selected Category: None';
    document.querySelector('.category-btn.selected')?.classList.remove('selected'); 
    const msgDurationTime = document.querySelector('.time-duration-msg');
    msgDurationTime.textContent = '';
    var trianglebtn = document.querySelector('.triangle-btn');
    trianglebtn.style.left = '0.4%'; 
    document.getElementById('subtasks').style.display = 'block';
    document.getElementById('durations').style.display = 'none';
    document.getElementById('grades').style.display = 'none';
  
});

// Close popup when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
        document.getElementById('task-title').value = '';
    document.getElementById('time-started').value = '';
   document.querySelector('.create-substaks').value = '';
    document.getElementById('dropdown-selected').innerText = 'Select duration';
    document.querySelector('.subtasks-container').innerHTML = ''; 
    document.getElementById('selected-category').textContent = 'Selected Category: None';
    document.querySelector('.category-btn.selected')?.classList.remove('selected'); 
    const msgDurationTime = document.querySelector('.time-duration-msg');
    msgDurationTime.textContent = '';
    var trianglebtn = document.querySelector('.triangle-btn');
    trianglebtn.style.left = '0.4%'; 
    document.getElementById('subtasks').style.display = 'block';
    document.getElementById('durations').style.display = 'none';
    document.getElementById('grades').style.display = 'none';
    }
});
//dropdwon duration 
document.getElementById('dropdown-selected').addEventListener('click', function() {
    const options = document.getElementById('dropdown-options'); 
    options.style.display = options.style.display=='block'?'none':'block';
  });
  
  const options = document.querySelectorAll('.dropdown-option');
  options.forEach(function(option){
      option.addEventListener('click',function(){
          const  selectedText= this.innerText;
          document.getElementById('dropdown-selected').innerText = selectedText;
                  document.getElementById('dropdown-options').style.display = 'none';
      });
  })
        
