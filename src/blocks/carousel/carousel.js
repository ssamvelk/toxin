window.addEventListener('load', () => {
  class Carousel {
    constructor() {
      this.carousels = this.getAll();
      this._bindEventListeners();
    }

    getAll() {
      const arrayCarousels = [];
      const carousels = document.querySelectorAll('.js-carousel');
      arrayCarousels.push(...carousels);
      return arrayCarousels;
    }

    _bindEventListeners() {
      this.carousels.forEach((element) => {
        element.addEventListener('click', this._handleCarouselClick);
      });
    }

    _handleCarouselClick(e) {
      const { target, currentTarget } = e;

      if (target.classList.contains('carousel__item')) {
        if (!target.classList.contains('carousel__item_active')) {
          const activeTarget = currentTarget.querySelector('.carousel__item_active');
          activeTarget.classList.remove('carousel__item_active');
          target.classList.add('carousel__item_active');
        }
      }
    }
  }

  const carousel = new Carousel();
});
