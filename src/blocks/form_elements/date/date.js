//import '../../../vendors/datepicker/datepicker'
$('.datepicker-here').datepicker({
  range: true,
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
      //console.log('Клик работает!')
      let target = event.target,// где был клик?
          calendar = this.querySelector('.datepicker-here')
      if (target.classList == 'date-dropdawn__svg') {
        calendar.classList.toggle("datepicker--disable")
        //console.log(' this  - ' + this)
      }
      else{ return}
    }
for(let i=0; i<filterDate.length; i++){
  filterDate[i].addEventListener('click', fff )
}
for(let i=0; i<RangeFilterDate.length; i++){
  RangeFilterDate[i].addEventListener('click', fff )
  //console.log('RangeFilterDate ='+RangeFilterDate.length)
}

//console.log(' filterDate  - ' + filterDate) //setAttribute('border', '1px solid red')

/** 
filterDate.addEventListener('click', function(event){
  let target = event.target,// где был клик?
      calendar = this.querySelector('.datepicker-here')
  if (target.classList == 'date-dropdawn__svg') {
    calendar.classList.toggle("datepicker--disable")
    console.log(' this  - ' + this)
  }
  else{ return}
}) 


*/