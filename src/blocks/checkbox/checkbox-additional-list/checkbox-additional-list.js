window.addEventListener('load', () => {
  class CheckboxAdditionalList {
    constructor() {
      this.checkboxAdditionalList = this.findItems();
      this.bindEventListeners();
    }

    findItems() {
      const arrayCheckboxAdditionalList = [];
      const checkboxAdditionalLists = document.querySelectorAll('.js-checkbox-additional-list');
      arrayCheckboxAdditionalList.push(...checkboxAdditionalLists);
      return arrayCheckboxAdditionalList;
    }

    bindEventListeners() {
      this.checkboxAdditionalList.forEach((element) => {
        element.addEventListener('click', this.handleCheckboxAdditionalListClick);
      });
    }

    handleCheckboxAdditionalListClick(e) {
      const { target } = e;

      if (target.classList.contains('checkbox-additional-list__arrow')) {
        this.querySelector('.checkbox-additional-list__arrow').classList.toggle(
          'checkbox-additional-list__arrow_opened',
        );

        this.querySelector('.checkbox-additional-list__body').classList.toggle(
          'checkbox-additional-list__body_disabled',
        );
      }
    }
  }

  const checkboxAdditionalList = new CheckboxAdditionalList();
});
