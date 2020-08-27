/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
$(() => {
  const filterDate = document.querySelectorAll('.date-filter');

  for (let i = 0; i < filterDate.length; i += 1) {
    filterDate[i].addEventListener('click', function (e) {
      const { target } = e;
      const calendar = (this.querySelector('.calendar'));

      const data = $(this.querySelector('.datepicker-here')).data('datepicker');
      const dateFrom = new Date(data.selectedDates[0]);
      const dateTo = new Date(data.selectedDates[1]);
      const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };

      if (target.classList.contains('date-filter__arrow')) {
        calendar.classList.toggle('calendar_disabled');
      }

      if (target.classList.contains('calendar__clean')) {
        if (this.querySelector('.js-date-filter__arrival') && this.querySelector('.js-date-filter__departure')) {
          this.querySelector('.js-date-filter__arrival').value = '';
          this.querySelector('.js-date-filter__departure').value = '';
        }
      }

      if (target.classList.contains('calendar__apply')) {
        if (this.querySelector('.-range-from-') && this.querySelector('.-range-to-')) {
          if (this.querySelector('.js-date-filter__arrival') && this.querySelector('.js-date-filter__departure')) {
            this.querySelector('.js-date-filter__arrival').value = dateFrom.toLocaleString(
              'ru',
              dateOptions,
            );
            this.querySelector('.js-date-filter__departure').value = dateTo.toLocaleString(
              'ru',
              dateOptions,
            );
          }
        }
        calendar.classList.toggle('calendar_disabled');
      }
    });
  }
});
