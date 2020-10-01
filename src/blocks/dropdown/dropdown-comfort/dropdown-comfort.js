window.addEventListener('load', () => {
  class DropdownComfort {
    constructor() {
      this.dropdownComfortList = this.findAll();
      this.bindEventListeners();
    }

    findAll() {
      const dropdownComfortList = [];
      const dropdownComfort = document.querySelectorAll('.js-dropdown-comfort');
      dropdownComfortList.push(...dropdownComfort);
      return dropdownComfortList;
    }

    bindEventListeners() {
      this.dropdownComfortList.forEach((element) => {
        element.addEventListener('click', this.handleDropdownComfort);
      });
    }

    handleDropdownComfort(e) {
      const { target, currentTarget } = e;

      const main = currentTarget.querySelector('.dropdown-comfort__main');
      const list = currentTarget.querySelector('.dropdown-comfort__list');

      const bedroom = currentTarget.querySelector('#js-bedroom');
      const bed = currentTarget.querySelector('#js-bed');
      const bathroom = currentTarget.querySelector('#js-bathroom');

      if (target.classList.contains('dropdown-open')) {
        main.classList.toggle('dropdown-comfort__main_expanded');
        list.classList.toggle('dropdown-comfort__list_expanded');
      }

      const isOperationButton = target.classList.contains('js-dropdown-buttons__button_operation_plus') || target.classList.contains('js-dropdown-buttons__button_operation_minus');
      
      if (isOperationButton) {
        main.innerHTML = `${bedroom.innerHTML} спальни, ${bed.innerHTML} кровати...`;
      }
    }
  }

  const dropdownComfort = new DropdownComfort();

});