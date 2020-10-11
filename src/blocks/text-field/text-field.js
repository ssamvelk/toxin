import IMask from 'imask';

window.addEventListener('load', () => {
  class TextField {
    constructor() {
      this.textFieldList = this.findAll();
      this.init();
    }

    findAll() {
      const textFieldList = [];
      const textField = document.querySelectorAll('.js-text-field__date');
      textFieldList.push(...textField);
      return textFieldList;
    }

    init() {
      this.textFieldList.forEach((element) => {
        IMask(element, {
          mask: Date,
          blocks: {
            d: {
              mask: IMask.MaskedRange,
              from: 1,
              to: 31,
              maxLength: 2,
              placeholderChar: 'Д',
            },
            m: {
              mask: IMask.MaskedRange,
              from: 1,
              to: 12,
              maxLength: 2,
              placeholderChar: 'М',
            },
            Y: {
              mask: IMask.MaskedRange,
              from: 1900,
              to: 9999,
              maxLength: 4,
              placeholderChar: 'Г',
            },
          },
          autofix: true,
          lazy: false,
          overwrite: true,
        });
      });
    }
  }

  const textField = new TextField();
});
