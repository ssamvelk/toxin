document.addEventListener('DOMContentLoaded', () => {
  const dropdownItems = document.querySelectorAll('.js-dropdown-buttons');

  for (let i = 0; i < dropdownItems.length; i += 1) {
    dropdownItems[i].addEventListener('click', function (event) {
      const { target } = event;
      const item = this.querySelector('.js-dropdown-buttons__value');
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
    });
  }
});
