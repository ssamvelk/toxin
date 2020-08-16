/* eslint-disable no-undef */
const changeDate = function (event) {
  const { target } = event;

  const cleanBtn = event.currentTarget.querySelector('.date__clean');

  const calendar = this.querySelector('.datepicker-here');
  const myDatepicker = $('.datepicker-here').data('datepicker');

  const rangeFrom = new Date(myDatepicker.selectedDates[0]);
  const rangeTo = new Date(myDatepicker.selectedDates[1]);

  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  const options2 = {
    day: 'numeric',
    month: 'short',
  };

  if (myDatepicker.selectedDates.length > 0) {
    cleanBtn.classList.remove('date__clean_disabled');
  } else if (myDatepicker.selectedDates.length === 0) {
    cleanBtn.classList.add('date__clean_disabled');
  }

  if (target.classList.contains('date-dropdawn__svg')) {
    calendar.classList.toggle('datepicker--disable');
  } else if (target.classList.contains('date__clean')) {
    myDatepicker.clear();
    cleanBtn.classList.add('date__clean_disabled');
    if (this.querySelector('#date__prib') && this.querySelector('#date__viezd')) {
      this.querySelector('#date__prib').value = '';
      this.querySelector('#date__viezd').value = '';
    }
  } else if (target.classList.contains('date__apply')) {
    if (this.querySelector('.-range-from-') && this.querySelector('.-range-to-')) {
      if (this.querySelector('#date__prib') && this.querySelector('#date__viezd')
      ) {
        this.querySelector('#date__prib').value = rangeFrom.toLocaleString(
          'ru',
          options,
        );
        this.querySelector('#date__viezd').value = rangeTo.toLocaleString(
          'ru',
          options,
        );
      } else if (this.querySelector('.date__info')) {
        this.querySelector('.date__info-start').innerHTML = `${rangeFrom.toLocaleString('ru', options2)} `;
        this.querySelector('.date__info-end').innerHTML = rangeTo.toLocaleString('ru', options2);
      }
    }
    calendar.classList.toggle('datepicker--disable');
  }
};

$(() => {
  $('.datepicker-here').datepicker({
    range: true,
    minDate: new Date(),
    toggleSelected: true,
    navTitles: {
      days: 'MM yyyy',
    },
    prevHtml: '<svg class="datepicker__left-arrow" width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
    nextHtml: '<svg class="datepicker__right-arrow" width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',
  });

  const filterDate = document.querySelectorAll('.date__wrap');
  const RangeFilterDate = document.querySelectorAll('.date__search-wrp');

  for (let i = 0; i < filterDate.length; i += 1) {
    filterDate[i].addEventListener('click', changeDate);
  }

  for (let i = 0; i < RangeFilterDate.length; i += 1) {
    RangeFilterDate[i].addEventListener('click', changeDate);
  }

  const calendarInCards = document.querySelector('.cards__calendar-wrap');

  if (calendarInCards) {
    const cleanBtn = calendarInCards.querySelector('.date__clean');

    const DatepickerInCards = $('.cards__calendar-wrap > .datepicker-here').data('datepicker');

    calendarInCards.addEventListener('click', (e) => {
      if (DatepickerInCards.selectedDates.length > 0) {
        cleanBtn.classList.remove('date__clean_disabled');
      } else if (DatepickerInCards.selectedDates.length === 0) {
        cleanBtn.classList.add('date__clean_disabled');
      }

      if (e.target.classList.contains('date__clean')) {
        DatepickerInCards.clear();
        cleanBtn.classList.add('date__clean_disabled');
      }
    });
  }
});
