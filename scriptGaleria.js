const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');
const gallery = document.querySelector('.gallery');

let translateX = 0;

nextButton.addEventListener('click', () => {
  translateX -= 100;
  if (translateX < -(gallery.children.length - 1) * 100) {
    translateX = 0;
  }
  gallery.style.transform = `translateX(${translateX}%)`;
});

prevButton.addEventListener('click', () => {
  translateX += 100;
  if (translateX > 0) {
    translateX = -(gallery.children.length - 1) * 100;
  }
  gallery.style.transform = `translateX(${translateX}%)`;
});
