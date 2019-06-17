var checkboxAdditionalList = document.querySelectorAll(".checkbox__list-wrp"),
    checkboxListBody = document.querySelectorAll(".checkbox__list-body")
//console.log("checkboxAdditionalList =" + checkboxAdditionalList)

for(let i=0; i<checkboxAdditionalList.length; i++){
    checkboxAdditionalList[i].addEventListener('click' , function(event){

        let target = event.target 
        if (target.classList.contains('checkbox__list-svg')) {
            this.querySelector('.checkbox__list-svg').classList.toggle('checkbox__list-svg--opened')
            this.querySelector('.checkbox__list-body').classList.toggle('checkbox__list-body--disabled')
            
           
        }
        
    })
}