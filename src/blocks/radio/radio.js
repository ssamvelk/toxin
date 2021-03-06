window.addEventListener('load', () => {
  class Radio {
    constructor() {
      this.radioList = this.getAll();
      this._bindEventListeners();
    }

    getAll() {
      const radioList = [];
      const radio = document.querySelectorAll('.js-radio');
      radioList.push(...radio);
      return radioList;
    }

    _bindEventListeners() {
      this.radioList.forEach((element) => {
        element.addEventListener('click', this._handleRadioClick);
      });
    }

    _handleRadioClick(e) {
      const { target, currentTarget } = e;

      const men = currentTarget.querySelector('.js-radio__item-name_men');
      const women = currentTarget.querySelector('.js-radio__item-name_women');

      if (target.dataset.gender === 'men') {
        men.classList.add('radio__item-name_checked');
        women.classList.remove('radio__item-name_checked');
      }
      if (target.dataset.gender === 'women') {
        women.classList.add('radio__item-name_checked');
        men.classList.remove('radio__item-name_checked');
      }
    }
  }

  const radio = new Radio();
});
