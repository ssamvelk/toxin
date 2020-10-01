window.addEventListener('load', () => {
  class Like {
    constructor() {
      this.likeList = this.findAll();
      this.bindEventListeners();
    }

    findAll() {
      const likeList = [];
      const like = document.querySelectorAll('.js-like');
      likeList.push(...like);
      return likeList;
    }

    bindEventListeners() {
      this.likeList.forEach((element) => {
        element.addEventListener('click', this.handleLike);
      });
    }

    handleLike(e) {
      const { target, currentTarget } = e;
      const valueField = currentTarget.querySelector('.like__value');

      let value = +valueField.innerHTML;

      if (currentTarget.classList.contains('like_liked')) value -= 1;
      else value += 1;

      valueField.innerHTML = value;
      currentTarget.classList.toggle('like_liked');
    }
  }
  const like = new Like();
});
