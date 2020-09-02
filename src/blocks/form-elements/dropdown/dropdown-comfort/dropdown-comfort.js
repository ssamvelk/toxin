document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.js-dropdown-comfort');

  for (let i = 0; i < dropdowns.length; i += 1) {
    const main = dropdowns[i].querySelector('.dropdown-comfort__main');
    const list = dropdowns[i].querySelector('.dropdown-comfort__list');

    const bedroom = dropdowns[i].querySelector('#js-bedroom');
    const bed = dropdowns[i].querySelector('#js-bed');
    const bathroom = dropdowns[i].querySelector('#js-bathroom');

    dropdowns[i].addEventListener('click', (e) => {
      const { target } = e;

      if (target.classList.contains('dropdown-open')) {
        main.classList.toggle('dropdown-comfort__main_expanded');
        list.classList.toggle('dropdown-comfort__list_expanded');
      }

      if (target.classList.contains('js-plus-button') || target.classList.contains('js-minus-button')) {
        main.innerHTML = `${bedroom.innerHTML} спальни, ${bed.innerHTML} кровати...`;
      }
    });
  }
});
