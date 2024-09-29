function updateDateWeekday() {
    const now = new Date();
    const options = { weekday: 'long'};
    document.getElementById('weekday').textContent = now.toLocaleDateString('en-us', options);
}
    function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-us', options);
}
updateDateWeekday();
updateDate();