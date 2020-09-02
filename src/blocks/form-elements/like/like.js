document.addEventListener('DOMContentLoaded', () => {
  const likes = document.querySelectorAll('.like');

  for (let i = 0; i < likes.length; i += 1) {
    likes[i].addEventListener('click', function () {
      let value = +this.querySelector('.like__value').innerHTML;

      if (this.classList.contains('heart_liked')) value -= 1;
      else value += 1;

      this.querySelector('.like__value').innerHTML = value;
      this.classList.toggle('heart_liked');
    });
  }
});
