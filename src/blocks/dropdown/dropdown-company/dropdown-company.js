document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.js-dropdown-company');


  for (let i = 0; i < dropdowns.length; i += 1) {
    const main = dropdowns[i].querySelector('.dropdown-company__main');
    const list = dropdowns[i].querySelector('.dropdown-company__list');

    dropdowns[i].addEventListener('click', (e) => {
      const { target } = e;

      if (target.classList.contains('dropdown-open')) {
        main.classList.toggle('dropdown-company__main_expanded');
        list.classList.toggle('dropdown-company__list_expanded');
      }

      const itemCounts = dropdowns[i].querySelectorAll('.dropdown-buttons__value');
      let value = Number(itemCounts[0].innerHTML) + Number(itemCounts[1].innerHTML);
      const babiesValue = Number(itemCounts[2].innerHTML);

      const cleanBtn = dropdowns[i].querySelector('.js-dropdown-company__clean');
      const applyBtn = dropdowns[i].querySelector('.js-dropdown-company__apply');

      if (value !== 0) cleanBtn.classList.remove('dropdown-company__clean_disable');

      if (value === 0) main.innerHTML = 'Cколько гостей';
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
        this.classList.add('dropdown-company__clean_disable');
      };

      applyBtn.onclick = function () {
        main.classList.toggle('dropdown-company__main_expanded');
        list.classList.toggle('dropdown-company__list_expanded');
      };
    });
  }
});