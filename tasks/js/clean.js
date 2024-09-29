///clean form///////////////////////////////////////////////////////////
document.getElementById('task-title').value = '';
document.getElementById('time-started').value = '';
document.getElementById('dropdown-selected').innerText = 'Select duration';
document.querySelector('.subtasks-container').innerHTML = ''; 
document.getElementById('selected-category').textContent = 'Selected Category: None';
document.querySelector('.category-btn.selected').classList.remove('selected');
msgDurationTime.textContent = ''; 
const trianglebtn = document.querySelector('.triangle-btn');
trianglebtn.style.left = '0.4%';
document.getElementById('subtasks').style.display = 'block';
document.getElementById('durations').style.display = 'none';
document.getElementById('grades').style.display = 'none';