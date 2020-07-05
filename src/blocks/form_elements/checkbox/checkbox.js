const checkboxAdditionalList = document.querySelectorAll(
  ".js-checkbox-additional-list"
);
const checkboxListBody = document.querySelectorAll(".checkbox__list-body");

for (let i = 0; i < checkboxAdditionalList.length; i++) {
  checkboxAdditionalList[i].addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("checkbox-additional-list__svg")) {
      this.querySelector(".checkbox-additional-list__svg").classList.toggle(
        "checkbox-additional-list__svg_opened"
      );

      this.querySelector(".checkbox-additional-list__body").classList.toggle(
        "checkbox-additional-list__body_disabled"
      );
    }
  });
}
