document.addEventListener('DOMContentLoaded', function(){
  let likes = document.querySelectorAll(".like")
  
  for(let i=0; i<likes.length; i++) {

    likes[i].addEventListener('click', function(event){
      
      let value = this.querySelector('.like__value').innerHTML
      
      if(this.classList.contains('heart_liked')) value--
      else value++
      
      this.querySelector('.like__value').innerHTML = value
      
      this.classList.toggle('heart_liked')
    })
  }
});