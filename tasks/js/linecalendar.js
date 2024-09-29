var calendarDaysElem = document.getElementById('calendar-days');
var currentMonthElem = document.getElementById('current-month-name');
var prevMonthElem = document.getElementById('prev-month-name');
var nextMonthElem = document.getElementById('next-month-name');
var prevMonthBtn = document.getElementById('prev-month');
var nextMonthBtn = document.getElementById('next-month');

var currentDate = new Date();
var startDate = new Date(currentDate);
startDate.setDate(currentDate.getDate() - 3);

function renderCalendar() {
        calendarDaysElem.innerHTML = '';
        for (var i = 0; i < 7; i++) {
            var day = new Date(startDate);
            day.setDate(startDate.getDate() + i);

            var dayElem = document.createElement('div');
            dayElem.innerHTML = `
            <div class="day-num">
                <div class="day-name">${day.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                <div class="day-number">${day.getDate()}</div>
                </div>
                `;
            if (day.toDateString() === currentDate.toDateString()) {
                dayElem.classList.add('current-day');
            }

            calendarDaysElem.appendChild(dayElem);
        }
        updateMonthNames();
}

function updateMonthNames() {
    var prevMonth = new Date(startDate);
    prevMonth.setMonth(startDate.getMonth() - 1);
    var nextMonth = new Date(startDate);
    nextMonth.setMonth(startDate.getMonth() + 1);

    prevMonthElem.textContent = prevMonth.toLocaleDateString('en-US', { month: 'long' });
    currentMonthElem.textContent = startDate.toLocaleDateString('en-US', { month: 'long' });
    nextMonthElem.textContent = nextMonth.toLocaleDateString('en-US', { month: 'long' });
}

function updateCalendar(day) {
    startDate.setDate(startDate.getDate() + day);
    renderCalendar();
}

prevMonthBtn.addEventListener('click', function() {
    updateCalendar(-7);
});
nextMonthBtn.addEventListener('click', function() {
    updateCalendar(7);
});
prevMonthElem.addEventListener('click', function() {
    updateCalendar(-30);
});
nextMonthElem.addEventListener('click', function() {
    updateCalendar(30);
});

renderCalendar();