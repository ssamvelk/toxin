const $ = require('jquery');

$(() => {
  const dateDrop = document.querySelectorAll('.js-date-dropdown');

  for (let i = 0; i < dateDrop.length; i += 1) {
    dateDrop[i].addEventListener('click', function (e) {
      const { target } = e;
      const calendar = (this.querySelector('.js-calendar'));

      const data = $(this.querySelector('.js-datepicker')).data('datepicker');
      const dateFrom = new Date(data.selectedDates[0]);
      const dateTo = new Date(data.selectedDates[1]);
      const dateOptions = { day: 'numeric', month: 'short' };

      if (target.classList.contains('date-dropdown__arrow')) {
        calendar.classList.toggle('calendar_disabled');
      }

      if (target.classList.contains('calendar__apply-button')) {
        if (this.querySelector('.-range-from-') && this.querySelector('.-range-to-')) {
          if (this.querySelector('.date-dropdown__info')) {
            this.querySelector('.date-dropdown__info-start').innerHTML = `${dateFrom.toLocaleString('ru', dateOptions)} `;
            this.querySelector('.date-dropdown__info-end').innerHTML = ` ${dateTo.toLocaleString('ru', dateOptions)}`;
          }
        }
        calendar.classList.toggle('calendar_disabled');
      }
    });
  }
});
