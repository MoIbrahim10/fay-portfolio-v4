document.addEventListener('DOMContentLoaded', (event) => {
  const images = document.querySelectorAll('.image-container img');
  const imagesSrc = document.querySelectorAll('.image-container source');
  const popup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  const closeBtn = document.querySelector('.image-popup .close');
  const prevBtn = document.querySelector('.image-popup .prev');
  const nextBtn = document.querySelector('.image-popup .next');
  const yearDiv = document.getElementById('year');

  yearDiv.textContent = new Date().getFullYear();

  let currentIndex = 0;

  function openPopup(index) {
    console.log(imagesSrc[currentIndex].srcset)
    currentIndex = index;
    popup.style.display = 'block';
    popupImage.src = imagesSrc[index].srcset;
  }

  function closePopup() {
    popup.style.display = 'none';
  }

  function showPrev() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    popupImage.src = imagesSrc[currentIndex].srcset;
  }

  function showNext() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    popupImage.src = imagesSrc[currentIndex].srcset;
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
