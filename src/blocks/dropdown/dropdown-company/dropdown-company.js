window.addEventListener('load', () => {
  class DropdownCompany {
    constructor() {
      this.dropdownCompanyList = this.getAll();
      this._bindEventListeners();
    }

    getAll() {
      const dropdownCompanyList = [];
      const dropdownCompany = document.querySelectorAll('.js-dropdown-company');
      dropdownCompanyList.push(...dropdownCompany);
      return dropdownCompanyList;
    }

    _bindEventListeners() {
      this.dropdownCompanyList.forEach((element) => {
        element.addEventListener('click', this._handleDropdownCompanyClick);
      });
    }

    _handleDropdownCompanyClick(e) {
      const { target, currentTarget } = e;

      const main = currentTarget.querySelector('.dropdown-company__main');
      const list = currentTarget.querySelector('.dropdown-company__list');
      
      if (target.classList.contains('dropdown-open')) {
        main.classList.toggle('dropdown-company__main_expanded');
        list.classList.toggle('dropdown-company__list_expanded');
      }

      const itemCounts = currentTarget.querySelectorAll('.dropdown-buttons__value');
      let value = Number(itemCounts[0].innerHTML) + Number(itemCounts[1].innerHTML);
      const babiesValue = Number(itemCounts[2].innerHTML);

      const cleanBtn = currentTarget.querySelector('.js-dropdown-company__clean-button');
      const applyBtn = currentTarget.querySelector('.js-dropdown-company__apply-button');

      if (value !== 0) cleanBtn.classList.remove('dropdown-company__clean-button_disabled');

      if (value === 0) main.innerHTML = 'Сколько гостей';
      else if (value === 1) main.innerHTML = '1 гость';
      else if (value === 2) main.innerHTML = '2 гостя';
      else if (value === 3) main.innerHTML = '3 гостя';
      else main.innerHTML = `${value} гостей`;

      if (babiesValue === 1) main.innerHTML += `, ${babiesValue} младенец`;
      else if (babiesValue > 1 && babiesValue < 5) main.innerHTML += `, ${babiesValue} младенцa`;
      else if (babiesValue > 4) main.innerHTML += `, ${babiesValue} младенцев`;

      cleanBtn.onclick = function () {
        value = 0;
        itemCounts[0].innerHTML = 0;
        itemCounts[1].innerHTML = 0;
        itemCounts[2].innerHTML = 0;
        main.innerHTML = 'Сколько гостей';
        this.classList.add('dropdown-company__clean-button_disabled');
      };

      applyBtn.onclick = function () {
        main.classList.toggle('dropdown-company__main_expanded');
        list.classList.toggle('dropdown-company__list_expanded');
      };
    };

  }

  const dropdownCompany = new DropdownCompany();
});
