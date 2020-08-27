document.addEventListener('DOMContentLoaded', () => {
  const dropdownItems = document.querySelectorAll('.dropdown__buttons');

  for (let i = 0; i < dropdownItems.length; i += 1) {
    dropdownItems[i].addEventListener('click', function (event) {
      const { target } = event;
      const item = this.querySelector('.dropdown__buttons-value');
      let itemValue = +item.innerHTML;

      if (target.tagName !== 'svg') return;

      if (target.classList.contains('js-minus-btn')) {
        if (itemValue > 0) {
          itemValue -= 1;
          item.innerHTML = itemValue;
        }
      }

      if (target.classList.contains('js-plus-btn')) {
        itemValue += 1;
        item.innerHTML = itemValue;
      }
    });
  }
});
