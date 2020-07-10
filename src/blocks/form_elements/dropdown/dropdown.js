document.addEventListener('DOMContentLoaded', function() {

  const dropdownSVGButtons = document.querySelectorAll('.dropdown__main-svg');
  const dropdownLists = document.querySelectorAll('.dropdown__list');

   // ---------------------------------скрытие\раскрытие dropdawn
  for (let i=0; i<dropdownSVGButtons.length; i++){
    dropdownSVGButtons[i].addEventListener("click", function(){
      dropdownLists[i].classList.toggle("dropdown__list_expanded");
      });
  }

  //---------------------------------кнопки +\-
  var dropdownItems = document.querySelectorAll('.dropdown__item-box');

  for (let i=0; i<dropdownItems.length; i++){
    dropdownItems[i].addEventListener("click", function(event){
      const target = event.target;
      const item = this.querySelector('.dropdown__item-value');
      let itemValue = item.innerHTML; 
  
      if (target.tagName != 'svg') return;
      
      if (target.classList.contains('js-minus-btn')) {
        if (itemValue > 0) {
          itemValue--;
          item.innerHTML = itemValue;
        }
      }

      if (target.classList.contains('js-plus-btn')){
        itemValue++;
        item.innerHTML = itemValue;
      } 
    })
  }

  //------------------главный функционал 
  
  const changeDropdown = function(event) {
    const target = event.target;
    const itemCounts = this.querySelectorAll('.dropdown__item-value');
    const mainBox = this.querySelector('.dropdown__main');
    
    const itemsList = this.querySelector('.dropdown__list');
    let value = Number(itemCounts[0].innerHTML) + Number(itemCounts[1].innerHTML) + Number(itemCounts[2].innerHTML);
    
    if (this.classList.contains("js-dropdown__wrp-company")) {
      const cleanBtn = this.querySelector('.dropdown__item-clean');
      const applyBtn = this.querySelector('.dropdown__item-apply');
      
      if (value != 0) cleanBtn.classList.remove('dropdown__item-clean_disable')
      
      if (value == 0) mainBox.innerHTML = 'Cколько гостей';
      else if (value == 1) mainBox.innerHTML = '1 гость';
      else mainBox.innerHTML = value + ' гостей';
      
      // if (target.classList.contains('dropdown-item__clean')){
        cleanBtn.onclick = function(){
          value = 0;
          itemCounts[0].innerHTML=0;
          itemCounts[1].innerHTML=0;
          itemCounts[2].innerHTML=0;
          mainBox.innerHTML = 'Сколько гостей';
          this.classList.add('dropdown__item-clean_disable');
        }
      // }
      applyBtn.onclick = function(){
        itemsList.classList.toggle("dropdown__list_expanded");
      }
    }
    
    if (this.classList.contains("js-dropdown__wrp-comfort")) {

      const bedroom = this.querySelector('#js-bedroom');
      const bed = this.querySelector('#js-bed');
      // const bathroom = this.querySelector('#js-bathroom');
      
      if ( target.classList.contains('js-plus-btn') || target.classList.contains('js-minus-btn')) {
        mainBox.innerHTML = bedroom.innerHTML + ' спальни, ' + bed.innerHTML + ' кровати...';
      }
    }
    
  }

  const dropdowns = document.querySelectorAll('.dropdown__wrp');

  for (let i=0; i<dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', changeDropdown);
  }

})

