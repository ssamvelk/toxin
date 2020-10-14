require('air-datepicker');
const $ = require('jquery');

window.addEventListener('load', () => {
  class Calendar {
    constructor() {
      this.calendars = this.getAll();
      this._init();
      this._bindEventListeners();
    }

    getAll() {
      const arrayCalendars = [];
      const calendars = document.querySelectorAll('.js-calendar');
      arrayCalendars.push(...calendars);
      return arrayCalendars;
    }

    _bindEventListeners() {
      this.calendars.forEach((element) => {
        element.addEventListener('click', this._handleCleanButtonClick);
      });
    }

    _init() {
      $('.js-calendar__datepicker').datepicker({
        range: true,
        minDate: new Date(),
        toggleSelected: true,
        navTitles: {
          days: 'MM yyyy',
        },
        prevHtml: '<svg class="datepicker__left-arrow" width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
        nextHtml: '<svg class="datepicker__right-arrow" width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',
      });
    }

    _handleCleanButtonClick(e) {
      const { target } = e;
      const cleanBtn = this.querySelector('.js-calendar__clean-button');
      const data = $(this.querySelector('.js-calendar__datepicker')).data('datepicker');

      if (data.selectedDates.length > 0) {
        cleanBtn.classList.remove('calendar__clean-button_disabled');
      } else if (data.selectedDates.length === 0) {
        cleanBtn.classList.add('calendar__clean-button_disabled');
      }

      if (target.classList.contains('calendar__clean-button')) {
        data.clear();
        cleanBtn.classList.add('calendar__clean-button_disabled');
      }
    }
  }

  const calendar = new Calendar();
});
