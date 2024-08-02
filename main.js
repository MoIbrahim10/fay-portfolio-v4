document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.querySelector('.image-container');
  const pictures = container.querySelectorAll('picture');
  const images = container.querySelectorAll('img');
  const imagesSrc = container.querySelectorAll('source');
  const popup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  const closeBtn = document.querySelector('.image-popup .close');
  const prevBtn = document.querySelector('.image-popup .prev');
  const nextBtn = document.querySelector('.image-popup .next');

  let currentIndex = 0;

  function openPopup(index) {
    currentIndex = index;
    popup.style.display = 'flex';
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
    if (popup.style.display === 'flex') {
      if (event.key === 'Escape') {
        closePopup();
      } else if (event.key === 'ArrowLeft') {
        showPrev();
      } else if (event.key === 'ArrowRight') {
        showNext();
      }
    }
  });

  let scrollInterval;
  const scrollStep = 1;
  let direction = 1;

  const startAutoScroll = () => {
    scrollInterval = setInterval(() => {
      // Check if we've reached the end or the start and reverse direction if so
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        direction = -1; // Change direction to left
      } else if (container.scrollLeft <= 0) {
        direction = 1; // Change direction to right
      }
      container.scrollLeft += scrollStep * direction;
    }, 10);
  };


  const stopAutoScroll = () => {
    clearInterval(scrollInterval);
  };

  const handleMouseOver = () => {
    container.classList.add('grayscale');
    stopAutoScroll();
  };

  const handleMouseOut = () => {
    container.classList.remove('grayscale');
    startAutoScroll();
  };

  for (const picture of pictures) {
    picture.addEventListener('mouseover', handleMouseOver);
    picture.addEventListener('mouseout', handleMouseOut);
  }

  startAutoScroll();
});
