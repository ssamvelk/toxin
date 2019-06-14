document.addEventListener('DOMContentLoaded', function(){
//import '../../../vendors/datepicker/datepicker'
  $('.datepicker-here').datepicker({
    range: true,
    minDate: new Date(),
    toggleSelected: false,
    //clearButton: true,
    navTitles: {
        days: 'MM yyyy',
      },
    prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
    nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>'

  })
  //------------------------------------------
  var dateBtns = document.querySelectorAll('.date-dropdawn__svg'),
      filterDate = document.querySelectorAll('.date-wrp'),
      RangeFilterDate = document.querySelectorAll('.date__search-wrp'),
      
      fff = function(event){

        let target = event.target,// где был клик?
            calendar = this.querySelector('.datepicker-here'),
            myDatepicker = $('.datepicker-here').data('datepicker');
        
        let rangeFrom = new Date(myDatepicker.selectedDates[0]),
            rangeTo = new Date(myDatepicker.selectedDates[1]),
            options = {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric'
            },
            options2 = {
              day: 'numeric',
              month: 'short'
            };

        if (target.classList == 'date-dropdawn__svg') {//кнопка стрелочка открыть
          calendar.classList.toggle("datepicker--disable")
          //console.log(' this  - ' + this)
        }
        else if(target.classList == 'date__clean'){//кнопка очистки
          //myDatepicker.show();
          myDatepicker.clear();

          if(this.querySelector("#date__prib") && this.querySelector("#date__viezd")){
            this.querySelector("#date__prib").value = ''
            this.querySelector("#date__viezd").value = ''
          }

        }
        else if(target.classList == 'date__apply'){//кнопка применить
          //console.log('selectedDates   ' + myDatepicker.selectedDates[0] +'       ' + myDatepicker.selectedDates[1] );
          
          if( this.querySelector(".-range-from-") && this.querySelector(".-range-to-")  ){
            console.log(' rangeFrom = '+rangeFrom + '  rangeTo ='+rangeTo)
            
            
            if(this.querySelector("#date__prib") && this.querySelector("#date__viezd")){
              this.querySelector("#date__prib").value=rangeFrom.toLocaleString("ru", options)
              this.querySelector("#date__viezd").value=rangeTo.toLocaleString("ru", options)
            }
            else if ( this.querySelector(".date__info") ){
              
              this.querySelector(".date__info-start").innerHTML = rangeFrom.toLocaleString("ru", options2) + ' ';
              this.querySelector(".date__info-end").innerHTML = rangeTo.toLocaleString("ru", options2);
              //console.log(' rangeFrom  ' + rangeFrom.toLocaleString("ru", options2))
            }
            
          }
          calendar.classList.toggle("datepicker--disable")
        }
        else{ return }
      }

  for(let i=0; i<filterDate.length; i++){
    filterDate[i].addEventListener('click', fff )
  }
  for(let i=0; i<RangeFilterDate.length; i++){
    RangeFilterDate[i].addEventListener('click', fff )
  }

});

