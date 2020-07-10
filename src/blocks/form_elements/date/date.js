const changeDate = function (event) {
  const target = event.target;
  const calendar = this.querySelector(".datepicker-here");
  let myDatepicker = $(".datepicker-here").data("datepicker");

  let rangeFrom = new Date(myDatepicker.selectedDates[0]);
  let rangeTo = new Date(myDatepicker.selectedDates[1]);
  
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  
  const options2 = {
    day: "numeric",
    month: "short",
  };

  if (target.classList == "date-dropdawn__svg") { // стрелочка открыть
    calendar.classList.toggle("datepicker--disable");
  } else if (target.classList == "date__clean") { // кнопка очистки
    myDatepicker.clear();
    if (this.querySelector("#date__prib") && this.querySelector("#date__viezd")) {
      this.querySelector("#date__prib").value = "";
      this.querySelector("#date__viezd").value = "";
    }
  } else if (target.classList == "date__apply") { // кнопка применить

    if (this.querySelector(".-range-from-") && this.querySelector(".-range-to-")) {

      if (this.querySelector("#date__prib") && this.querySelector("#date__viezd")) {
        this.querySelector("#date__prib").value = rangeFrom.toLocaleString("ru", options);
        this.querySelector("#date__viezd").value = rangeTo.toLocaleString("ru", options);
      } else if (this.querySelector(".date__info")) {
        this.querySelector(".date__info-start").innerHTML = rangeFrom.toLocaleString("ru", options2) + " ";
        this.querySelector(".date__info-end").innerHTML = rangeTo.toLocaleString("ru", options2);
      }
    }
    calendar.classList.toggle("datepicker--disable");
  }
};

$(function(){
  $(".datepicker-here").datepicker({
    range: true,
    minDate: new Date(),
    toggleSelected: true,
    // keyboardNav: true,
    navTitles: {
      days: "MM yyyy",
    },
    prevHtml:
      '<svg width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
    nextHtml:
      '<svg width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',
    // onSelect: changeDate
  });

  const filterDate = document.querySelectorAll(".date-wrp");
  const RangeFilterDate = document.querySelectorAll(".date__search-wrp");

  for (let i = 0; i < filterDate.length; i++) {
    filterDate[i].addEventListener("click", changeDate);
  }
  for (let i = 0; i < RangeFilterDate.length; i++) {
    RangeFilterDate[i].addEventListener("click", changeDate);
  }
});
