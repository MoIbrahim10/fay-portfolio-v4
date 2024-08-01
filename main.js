document.addEventListener('DOMContentLoaded', (event) => {
  const images = document.querySelectorAll('.image-container img');
  const popup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  const closeBtn = document.querySelector('.image-popup .close');
  const prevBtn = document.querySelector('.image-popup .prev');
  const nextBtn = document.querySelector('.image-popup .next');

  let currentIndex = 0;

  function openPopup(index) {
    currentIndex = index;
    popup.style.display = 'block';
    popupImage.src = images[index].src;
  }

  function closePopup() {
    popup.style.display = 'none';
  }

  function showPrev() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    popupImage.src = images[currentIndex].src;
  }

  function showNext() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    popupImage.src = images[currentIndex].src;
  }

  images.forEach((image, index) => {
    image.addEventListener('click', () => openPopup(index));
  });

  closeBtn.addEventListener('click', closePopup);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  document.addEventListener('keydown', (event) => {
    if (popup.style.display === 'block') {
      if (event.key === 'Escape') {
        closePopup();
      } else if (event.key === 'ArrowLeft') {
        showPrev();
      } else if (event.key === 'ArrowRight') {
        showNext();
      }
    }
  });
});
