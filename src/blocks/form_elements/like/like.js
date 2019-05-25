let likes=document.querySelectorAll('.like-wrp')
for(let i=0; i<likes.length; i++){
    likes[i].addEventListener('click', function(event){
        let value = this.querySelector('.like-value').innerHTML
        
        if(this.classList.contains('heart--liked')) value--
        else value++

        this.querySelector('.like-value').innerHTML = value
        this.classList.toggle('heart--liked')
    })
}