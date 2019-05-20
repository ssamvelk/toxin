
var el = document.querySelectorAll('.dropdown-main > svg');
var el2 = document.querySelectorAll('.dropdown-list');

for (let i=0; i<el.length; i++){
    el[i].addEventListener("click", function(){
    el2[i].classList.toggle("dropdown-list--expanded");
});
}