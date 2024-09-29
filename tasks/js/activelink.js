var links = document.querySelectorAll('.sidebar a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove('active');
        }
        this.classList.add('active');
    });
}