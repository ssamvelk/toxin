var el = document.querySelectorAll('.dropdown-main > svg');
var el2 = document.querySelectorAll('.dropdown-list');


 
for (let i=0; i<el.length; i++){
    el[i].addEventListener("click", function(){
    el2[i].classList.toggle("dropdown-list--expanded");
    });
}
//---------------------------------
var items = document.querySelectorAll('.item-value'),
    a=0, b=0, c=0;

    //console.log(items.length)

    for (let i=0; i<items.length; i++){
        items[i].addEventListener("click", function(event){
            let target = event.target,// где был клик?
                value = this.querySelector('.dropdown-item').innerHTML 
                
            if (target.tagName != 'svg') return; // не на TD? тогда не интересует
            //console.log('target = '+target);
            if (target.classList == 'minusBtn') {
                //console.log('minusBtn !');
                if (value > 0) {
                    value--;
                    this.querySelector('.dropdown-item').innerHTML = value;
                }
            }
            if (target.classList == 'plusBtn'){
                value++;
                this.querySelector('.dropdown-item').innerHTML = value;
                //console.log('plusBtn !');
            } 
        })
    }
    

/*




var fadult = document.querySelector('#fadult'),
    count=0,
    minusBtn=document.querySelectorAll('.minusBtn'), 
    plusBtn=document.querySelectorAll(".plusBtn")

    for (let j=0; j<minusBtn.length; j++){

        minusBtn[j].addEventListener("click", function(){
            if (count > 0) count--;
            fadult.innerHTML = count;
            //console.log('minusBtn = ' + minusBtn);
        });
        
        plusBtn[j].addEventListener("click", function(){
        count++;
        fadult.innerHTML = count;
        });  

    }    


*/