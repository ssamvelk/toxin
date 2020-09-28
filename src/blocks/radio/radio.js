window.addEventListener('load', () => {
  const radios = document.querySelectorAll('.radio');

  radios.forEach((radio) => {
    const men = radio.querySelector('.js-radio__item-name_men');
    const women = radio.querySelector('.js-radio__item-name_women');


    radio.addEventListener('click', (e) => {
      if (e.target.dataset.gender === 'men') {
        men.classList.add('radio__item-name_checked');
        women.classList.remove('radio__item-name_checked');
      }
      if (e.target.dataset.gender === 'women') {
        women.classList.add('radio__item-name_checked');
        men.classList.remove('radio__item-name_checked');
      }
    });
  });
});
