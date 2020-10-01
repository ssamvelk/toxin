const $ = require('jquery');

window.addEventListener('load', () => {
  class DateDropdown {
    constructor() {
      this.dateDropdownList = this.findItems();
      this.bindEventListeners();
    }

    findItems() {
      const dateDropdownList = [];
      const dateDropdown = document.querySelectorAll('.js-date-dropdown');
      dateDropdownList.push(...dateDropdown);
      return dateDropdownList;
    }

    bindEventListeners() {
      this.dateDropdownList.forEach((element) => {
        element.addEventListener('click', this.handleDateDropdown);
      });
    }

    handleDateDropdown(e) {
      const { target, currentTarget } = e;

      const calendar = (currentTarget.querySelector('.js-calendar'));
      const $data = $(currentTarget.querySelector('.js-calendar__datepicker')).data('datepicker');
      
      const dateFrom = new Date($data.selectedDates[0]);
      const dateTo = new Date($data.selectedDates[1]);
      const dateOptions = { day: 'numeric', month: 'short' };

      const dateStart = currentTarget.querySelector('.date-dropdown__info-start');
      const dateEnd = currentTarget.querySelector('.date-dropdown__info-end');

      if (target.classList.contains('date-dropdown__arrow')) {
        calendar.classList.toggle('calendar_disabled');
      }

      if (target.classList.contains('calendar__apply-button')) {
        if (currentTarget.querySelector('.-range-from-') && currentTarget.querySelector('.-range-to-')) {
          if (currentTarget.querySelector('.date-dropdown__info')) {
            dateStart.innerHTML = `${dateFrom.toLocaleString('ru', dateOptions)} `;
            dateEnd.innerHTML = ` ${dateTo.toLocaleString('ru', dateOptions)}`;
          }
        }
        calendar.classList.toggle('calendar_disabled');
      }
    }
  }

  const DateDropdown1 = new DateDropdown();
});
