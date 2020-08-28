const $ = require('jquery');

$(() => {
  const changeValue = function () {
    const $rangeStart = $('#slider').slider('values', 0);
    const $rangeEnd = $('#slider').slider('values', 1);

    $('#js-range-start').html($rangeStart);
    $('#js-range-end').html($rangeEnd);
  };

  $('#slider').slider({
    range: true,
    min: 0,
    max: 15000,
    values: [5000, 10000],
    step: 100,
    slide: changeValue,
    change: changeValue,
  });
});
