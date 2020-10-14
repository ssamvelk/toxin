window.addEventListener('load', () => {
  class DropDownButtons {
    constructor() {
      this.dropDownButtonsList = this.getAll();
      this._bindEventListeners();
    }

    getAll() {
      const dropDownButtonsList = [];
      const dropDownButtons = document.querySelectorAll('.js-dropdown-buttons');
      dropDownButtonsList.push(...dropDownButtons);
      return dropDownButtonsList;
    }

    _bindEventListeners() {
      this.dropDownButtonsList.forEach((element) => {
        element.addEventListener('click', this._handleDropDownButtonsClick);
      });
    }

    _handleDropDownButtonsClick(e) {
      const { target, currentTarget } = e;

      const item = currentTarget.querySelector('.js-dropdown-buttons__value');
      let itemValue = +item.innerHTML;

      if (target.tagName !== 'svg') return;

      if (target.classList.contains('js-dropdown-buttons__button_operation_minus')) {
        if (itemValue > 0) {
          itemValue -= 1;
          item.innerHTML = itemValue;
        }
      }

      if (target.classList.contains('js-dropdown-buttons__button_operation_plus')) {
        itemValue += 1;
        item.innerHTML = itemValue;
      }
    }
  }

  const dropDownButtons = new DropDownButtons();
});
