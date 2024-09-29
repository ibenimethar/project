function updateTimeAndGreeting() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('time').textContent = hours + ':' + minutes + ' ' + ampm;
    if (hours < 12 && ampm === 'AM') {
        document.getElementById('greeting').textContent = "Good Morning";
    } else if (hours < 6 && ampm === 'PM') {
        document.getElementById('greeting').textContent = "Good Afternoon";
    } else {
        document.getElementById('greeting').textContent = "Good Evening";
    }
}

updateTimeAndGreeting();
setInterval(updateTimeAndGreeting, 1000);
//////////////////////////////category

document.querySelectorAll('.category-btn').forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    const selectedCategory = button.getAttribute('data-category');
    document.getElementById('selected-category').textContent = 'Selected Category: ' + selectedCategory;
    document.querySelectorAll('.category-btn').forEach(function(btn) {
      btn.classList.remove('selected');         
    });
    this.classList.add('selected');
  
  });
});