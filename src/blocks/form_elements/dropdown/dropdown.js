var el = document.querySelectorAll('.dropdown-main__svg');
var el2 = document.querySelectorAll('.dropdown-list');


 //---------------------------------Скрытие\раскрытие dropdawn
for (let i=0; i<el.length; i++){
    el[i].addEventListener("click", function(){
    el2[i].classList.toggle("dropdown-list--expanded");
    });
}
//---------------------------------Кнопки +\-
var DropdownItems = document.querySelectorAll('.item-value');

    //console.log(items.length)

    for (let i=0; i<DropdownItems.length; i++){
        DropdownItems[i].addEventListener("click", function(event){
            let target = event.target,// где был клик?
                value = this.querySelector('.dropdown-item__value').innerHTML 
  
            if (target.tagName != 'svg') return; // не на TD? тогда не интересует
            //console.log('target = '+target);
            if (target.classList == 'minusBtn') {
                //console.log('minusBtn !');
                if (value > 0) {
                    value--;
                    this.querySelector('.dropdown-item__value').innerHTML = value;
                }
            }
            if (target.classList == 'plusBtn'){
                value++;
                this.querySelector('.dropdown-item__value').innerHTML = value;
                //console.log('plusBtn !');
            } 
        })
    }
    
//-----------------------------------------Главный функционал
var Dropdowns = document.querySelectorAll('.dropdown-wrp')

for(let i=0; i<Dropdowns.length; i++ ){
    Dropdowns[i].addEventListener('click', function(event){
      
        let a = this.querySelectorAll('.dropdown-item__value'),
            p = this.querySelector('.dropdown-main'),
            ApplyBtnJob = this.querySelector('.dropdown-list'),
            value = Number(a[0].innerHTML) + Number(a[1].innerHTML) + Number(a[2].innerHTML);

        if (this.classList.contains("dropdown-company")){
            
            let CleanBtn = this.querySelector('.dropdown-item__clean'),
                ApplyBtn = this.querySelector('.dropdown-item__apply');
                
            if (value != 0) CleanBtn.classList.remove('dropdown-item__clean--disable')

            if (value == 0) p.innerHTML = 'Cколько гостей';
            else if (value == 1) p.innerHTML = '1 гость';
            else p.innerHTML = value + ' гостей';

            if (event.target.classList == 'dropdown-item__clean'){
                CleanBtn.onclick = function(){
                    value = 0, a[0].innerHTML=0, a[1].innerHTML=0, a[2].innerHTML=0;
                    p.innerHTML = 'Сколько гостей';
                    this.classList.add('dropdown-item__clean--disable');
                    
                }
            }

            ApplyBtn.onclick = function(){
                ApplyBtnJob.classList.toggle("dropdown-list--expanded");
            }
        }

        if (this.classList.contains("dropdown-comfort")){
            let Bedroom = this.querySelector('#bedroom'),
            Bed = this.querySelector('#bed'),
            Bathroom = this.querySelector('#bathroom');

            if(   event.target.classList == 'plusBtn' || event.target.classList == 'minusBtn' ){
                p.innerHTML = Bedroom.innerHTML + ' спальни, ' + Bed.innerHTML + ' кровати...';
            }
            else console.log('мимо')
            
        }

    })
}

