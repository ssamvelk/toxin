require('webpack-jquery-ui/slider');
require('webpack-jquery-ui/css');
const $ = require('jquery');

window.addEventListener('load', () => {
  class Slider {
    constructor() {
      this.sliderList = this.findAll();
      this.init();
    }

    findAll() {
      return $('.js-slider');
    }

    init() {
      this.sliderList.find('#slider').slider({
        range: true,
        min: 0,
        max: 15000,
        values: [5000, 10000],
        step: 50,
        slide: this.changeValue,
        change: this.changeValue,
      });
    }

    changeValue(e) {
      const $rangeStart = $('#slider').slider('values', 0);
      const $rangeEnd = $('#slider').slider('values', 1);
      $('#js-range-start').html($rangeStart);
      $('#js-range-end').html($rangeEnd);
    }
  }

  const slider = new Slider();
});
