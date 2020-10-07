const $ = require('jquery');

window.addEventListener('load', () => {
  class DateFilter {
    constructor() {
      this.dateFilterList = this.findItems();
      this.bindEventListeners();
    }

    findItems() {
      const dateFilterList = [];
      const dateFilter = document.querySelectorAll('.js-date-filter');
      dateFilterList.push(...dateFilter);
      return dateFilterList;
    }

    bindEventListeners() {
      this.dateFilterList.forEach((element) => {
        element.addEventListener('click', this.handleDateFilterClick);
      });
    }

    handleDateFilterClick(e) {
      const { target, currentTarget } = e;
      const calendar = (currentTarget.querySelector('.js-calendar'));

      const $data = $(currentTarget.querySelector('.js-calendar__datepicker')).data('datepicker');
      const dateFrom = new Date($data.selectedDates[0]);
      const dateTo = new Date($data.selectedDates[1]);
      const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };

      const arrival = currentTarget.querySelector('#js-date-filter__arrival');
      const departure = currentTarget.querySelector('#js-date-filter__departure');
      const hasRangeFields = arrival && departure;
      const isRangeSelected = currentTarget.querySelector('.-range-from-') && currentTarget.querySelector('.-range-to-');

      if (target.classList.contains('date-filter__arrow')) {
        calendar.classList.toggle('calendar_disabled');
      }

      if (target.classList.contains('calendar__clean-button')) {
        if (hasRangeFields) {
          arrival.value = '';
          departure.value = '';
        }
      }

      if (target.classList.contains('calendar__apply-button')) {
        if (isRangeSelected) {
          if (hasRangeFields) {
            arrival.value = dateFrom.toLocaleString(
              'ru',
              dateOptions,
            );
            departure.value = dateTo.toLocaleString(
              'ru',
              dateOptions,
            );
          }
        }
        calendar.classList.toggle('calendar_disabled');
      }
    }
  }

  const dateFilter = new DateFilter();
});
