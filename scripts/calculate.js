var DateTime = luxon.DateTime;
const tripDate = document.querySelector('.travel-date');
const diningDate = document.querySelector('.dining-date');
const parkDate = document.querySelector('.park-date');
const dvc7Date = document.querySelector('.dvc7-date');
const dvc11Date = document.querySelector('.dvc11-date');


function calcDates(pageDate) {
    let beginDate = new DateTime.fromISO(pageDate);
    
    // Dining reservations can be made 60 days before
    diningDate.innerHTML = beginDate.minus({days:60}).toLocaleString(DateTime.DATE_HUGE).replaceAll(',',' ');

    // Disneyland park reservations can be made 120 days before
    parkDate.innerHTML = beginDate.minus({days:120}).toLocaleString(DateTime.DATE_HUGE).replaceAll(',',' ');

    // Home resort DVC reservations can be made 11 months before
    dvc11Date.innerHTML = beginDate.minus({months:11}).toLocaleString(DateTime.DATE_HUGE).replaceAll(',',' ');
    
    // Other resort DVC reservations can be made 7 months before
    dvc7Date.innerHTML = beginDate.minus({months:7}).toLocaleString(DateTime.DATE_HUGE).replaceAll(',',' ');
}

tripDate.addEventListener('change', (e) => calcDates(e.target.value));