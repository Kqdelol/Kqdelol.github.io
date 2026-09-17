// Project carousel: lets the arrows and dots switch between project slides
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  if (!track) return; // no carousel on this page (e.g. resume.html)

  const slides = track.querySelectorAll('.project-card');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevBtn = document.querySelector('.carousel-arrow.prev');
  const nextBtn = document.querySelector('.carousel-arrow.next');

  let currentIndex = 0;

  function goToSlide(index) {
    // wrap around at the ends so it loops
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    currentIndex = index;

    // sliding the track over is what makes the switch smooth (see the
    // "transition: transform 0.5s ease" rule on .carousel-track in style.css)
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.index, 10));
    });
  });
});
