const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let position = 0;

prevBtn.addEventListener('click', () => {
  if (position > 0) {
    position--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (position < track.children.length - 1) {
    position++;
    updateCarousel();
  }
});

function updateCarousel() {
  const width = track.children[0].clientWidth + 20; // image + margin
  track.style.transform = `translateX(${-position * width}px)`;
}