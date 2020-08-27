window.addEventListener('load', () => {
  const checkboxAdditionalList = document.querySelectorAll(
    '.js-checkbox-additional-list',
  );

  for (let i = 0; i < checkboxAdditionalList.length; i += 1) {
    checkboxAdditionalList[i].addEventListener('click', function (event) {
      const { target } = event;
      if (target.classList.contains('checkbox-additional-list__svg')) {
        this.querySelector('.checkbox-additional-list__svg').classList.toggle(
          'checkbox-additional-list__svg_opened',
        );

        this.querySelector('.checkbox-additional-list__body').classList.toggle(
          'checkbox-additional-list__body_disabled',
        );
      }
    });
  }
});
