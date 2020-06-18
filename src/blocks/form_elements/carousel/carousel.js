const allCarousels = document.querySelectorAll('.carousel');

if(allCarousels.length > 0) {
  for (let i=0; i < allCarousels.length; i++) {
    allCarousels[i].addEventListener('click', (e) => {
      if (e.target.classList.contains('carousel__item')) {
        const localTarget = e.target;
        if (!localTarget.classList.contains('carousel__item_active')) {
          let localActiveTarget = e.currentTarget.querySelector('.carousel__item_active');
          localActiveTarget.classList.remove('carousel__item_active');
          localTarget.classList.add('carousel__item_active');
        }
      }
    });
  }
}
