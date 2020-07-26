/* eslint-disable no-plusplus */
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown__wrp');

  const changeDropdown = (event) => {
    const { target, currentTarget } = event;
    const mainFild = currentTarget.querySelector('.dropdown__main');
    const list = currentTarget.querySelector('.dropdown__list');
    // скрытие\раскрытие
    if (target.classList.contains('dropdown__main-svg')) {
      mainFild.classList.toggle('dropdown__main_expanded');
      list.classList.toggle('dropdown__list_expanded');
    }
    // подсчет
    const itemCounts = currentTarget.querySelectorAll('.dropdown__item-value');

    let value = Number(itemCounts[0].innerHTML)
      + Number(itemCounts[1].innerHTML)
      + Number(itemCounts[2].innerHTML);

    if (currentTarget.classList.contains('js-dropdown__wrp-company')) {
      const cleanBtn = currentTarget.querySelector('.dropdown__item-clean');
      const applyBtn = currentTarget.querySelector('.dropdown__item-apply');

      if (value !== 0) cleanBtn.classList.remove('dropdown__item-clean_disable');

      if (value === 0) mainFild.innerHTML = 'Cколько гостей';
      else if (value === 1) mainFild.innerHTML = '1 гость';
      else mainFild.innerHTML = `${value} гостей`;

      cleanBtn.onclick = function () {
        value = 0;
        itemCounts[0].innerHTML = 0;
        itemCounts[1].innerHTML = 0;
        itemCounts[2].innerHTML = 0;
        mainFild.innerHTML = 'Сколько гостей';
        this.classList.add('dropdown__item-clean_disable');
      };
      // }
      applyBtn.onclick = function () {
        mainFild.classList.toggle('dropdown__main_expanded');
        list.classList.toggle('dropdown__list_expanded');
      };
    }

    if (currentTarget.classList.contains('js-dropdown__wrp-comfort')) {
      const bedroom = currentTarget.querySelector('#js-bedroom');
      const bed = currentTarget.querySelector('#js-bed');
      // const bathroom = currentTarget.querySelector('#js-bathroom');

      if (target.classList.contains('js-plus-btn') || target.classList.contains('js-minus-btn')) {
        mainFild.innerHTML = `${bedroom.innerHTML} спальни, ${bed.innerHTML} кровати...`;
      }
    }
  };

  for (let i = 0; i < dropdowns.length; i += 1) {
    dropdowns[i].addEventListener('click', changeDropdown);
  }
});

// ---------------------------------кнопки +\-
const dropdownItems = document.querySelectorAll('.dropdown__item-box');

for (let i = 0; i < dropdownItems.length; i += 1) {
  dropdownItems[i].addEventListener('click', function (event) {
    const { target } = event;
    const item = this.querySelector('.dropdown__item-value');
    let itemValue = item.innerHTML;

    if (target.tagName !== 'svg') return;

    if (target.classList.contains('js-minus-btn')) {
      if (itemValue > 0) {
        itemValue--;
        item.innerHTML = itemValue;
      }
    }

    if (target.classList.contains('js-plus-btn')) {
      itemValue++;
      item.innerHTML = itemValue;
    }
  });
}
