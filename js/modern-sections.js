// JavaScript для современных интерактивных элементов

// Полные данные галереи (из gallery.js)
const mainPageGalleryData = [
  {
    id: 1,
    type: 'female',
    imageSrc: 'img/gallery/1.jpg',
    alt: 'Женская стрижка',
  },
  { id: 2, type: 'nails', imageSrc: 'img/gallery/2.jpg', alt: 'Маникюр' },
  { id: 3, type: 'styling', imageSrc: 'img/gallery/3.jpg', alt: 'Укладка' },
  {
    id: 4,
    type: 'nails',
    imageSrc: 'img/gallery/4.jpg',
    alt: 'Маникюр с дизайном',
  },
  { id: 5, type: 'nails', imageSrc: 'img/gallery/5.jpg', alt: 'Маникюр' },
  { id: 6, type: 'nails', imageSrc: 'img/gallery/6.jpg', alt: 'Маникюр' },
  {
    id: 7,
    type: 'brows',
    imageSrc: 'img/gallery/7.jpg',
    alt: 'Оформление бровей',
  },
  {
    id: 8,
    type: 'brows',
    imageSrc: 'img/gallery/8.jpg',
    alt: 'Оформление бровей',
  },
  {
    id: 9,
    type: 'coloration',
    imageSrc: 'img/gallery/9.jpg',
    alt: 'Окрашивание волос',
  },
  {
    id: 10,
    type: 'female',
    imageSrc: 'img/gallery/10.jpg',
    alt: 'Женская прическа',
  },
  {
    id: 11,
    type: 'coloration',
    imageSrc: 'img/gallery/11.jpg',
    alt: 'Окрашивание',
  },
  {
    id: 12,
    type: 'female',
    imageSrc: 'img/gallery/12.jpg',
    alt: 'Женская стрижка',
  },
  { id: 13, type: 'nails', imageSrc: 'img/gallery/13.jpg', alt: 'Маникюр' },
  {
    id: 14,
    type: 'coloration',
    imageSrc: 'img/gallery/14.jpg',
    alt: 'Окрашивание',
  },
  {
    id: 15,
    type: 'male',
    imageSrc: 'img/gallery/15.jpg',
    alt: 'Мужская стрижка',
  },
  { id: 16, type: 'nails', imageSrc: 'img/gallery/16.jpg', alt: 'Маникюр' },
  { id: 17, type: 'nails', imageSrc: 'img/gallery/17.jpg', alt: 'Маникюр' },
  { id: 18, type: 'nails', imageSrc: 'img/gallery/18.png', alt: 'Маникюр' },
  { id: 19, type: 'nails', imageSrc: 'img/gallery/19.png', alt: 'Маникюр' },
  { id: 20, type: 'nails', imageSrc: 'img/gallery/20.png', alt: 'Маникюр' },
  {
    id: 21,
    type: 'female',
    imageSrc: 'img/gallery/21.png',
    alt: 'Женская стрижка',
  },
  {
    id: 22,
    type: 'female',
    imageSrc: 'img/gallery/22.png',
    alt: 'Женская стрижка',
  },
  { id: 23, type: 'nails', imageSrc: 'img/gallery/23.png', alt: 'Маникюр' },
  { id: 24, type: 'nails', imageSrc: 'img/gallery/24.png', alt: 'Маникюр' },
  { id: 25, type: 'nails', imageSrc: 'img/gallery/25.jpg', alt: 'Маникюр' },
  {
    id: 26,
    type: 'male',
    imageSrc: 'img/gallery/26.png',
    alt: 'Мужская стрижка',
  },
  {
    id: 27,
    type: 'male',
    imageSrc: 'img/gallery/27.png',
    alt: 'Мужская стрижка',
  },
  {
    id: 28,
    type: 'male',
    imageSrc: 'img/gallery/28.png',
    alt: 'Мужская стрижка',
  },
  {
    id: 29,
    type: 'female',
    imageSrc: 'img/gallery/29.jpg',
    alt: 'Женская стрижка',
  },
  { id: 30, type: 'styling', imageSrc: 'img/gallery/30.jpg', alt: 'Укладка' },
  { id: 31, type: 'styling', imageSrc: 'img/gallery/31.jpg', alt: 'Укладка' },
  {
    id: 32,
    type: 'female',
    imageSrc: 'img/gallery/32.jpg',
    alt: 'Женская стрижка',
  },
  { id: 33, type: 'nails', imageSrc: 'img/gallery/33.jpg', alt: 'Маникюр' },
  { id: 34, type: 'nails', imageSrc: 'img/gallery/34.jpg', alt: 'Маникюр' },
  {
    id: 35,
    type: 'brows',
    imageSrc: 'img/gallery/35.jpg',
    alt: 'Оформление бровей',
  },
  {
    id: 36,
    type: 'brows',
    imageSrc: 'img/gallery/36.jpg',
    alt: 'Оформление бровей',
  },
  { id: 37, type: 'styling', imageSrc: 'img/gallery/37.jpg', alt: 'Укладка' },
  {
    id: 38,
    type: 'female',
    imageSrc: 'img/gallery/38.jpg',
    alt: 'Женская стрижка',
  },
  {
    id: 39,
    type: 'female',
    imageSrc: 'img/gallery/39.jpg',
    alt: 'Женская стрижка',
  },
  { id: 40, type: 'styling', imageSrc: 'img/gallery/40.jpg', alt: 'Укладка' },
  {
    id: 41,
    type: 'female',
    imageSrc: 'img/gallery/41.jpg',
    alt: 'Женская стрижка',
  },
  {
    id: 42,
    type: 'female',
    imageSrc: 'img/gallery/42.jpg',
    alt: 'Женская стрижка',
  },
  { id: 43, type: 'nails', imageSrc: 'img/gallery/43.jpg', alt: 'Маникюр' },
  { id: 44, type: 'nails', imageSrc: 'img/gallery/44.jpg', alt: 'Маникюр' },
  { id: 45, type: 'nails', imageSrc: 'img/gallery/45.jpg', alt: 'Маникюр' },
  { id: 46, type: 'nails', imageSrc: 'img/gallery/46.jpg', alt: 'Маникюр' },
  { id: 47, type: 'nails', imageSrc: 'img/gallery/47.jpg', alt: 'Маникюр' },
  { id: 48, type: 'nails', imageSrc: 'img/gallery/48.jpg', alt: 'Маникюр' },
  {
    id: 49,
    type: 'female',
    imageSrc: 'img/gallery/49.jpg',
    alt: 'Женская стрижка',
  },
];

// Переменные для управления загрузкой
let mainPageItemsPerLoad = getItemsPerLoad();
let mainPageCurrentFilter = 'all';
let mainPageItemsLoaded = 0;

// Функция для определения количества элементов в зависимости от размера экрана
function getItemsPerLoad() {
  return window.innerWidth <= 768 ? 8 : 9;
}

document.addEventListener('DOMContentLoaded', function () {
  // Инициализация всех компонентов
  initTestimonialsSlider();
  initMainPageGallery();
  initGalleryFilters();
  initServiceCards();
  initScrollAnimations();
  initSalonsInteractivity();
  updateSalonStatuses();

  // Обработчик изменения размера окна для адаптивной загрузки галереи
  window.addEventListener('resize', () => {
    const newItemsPerLoad = getItemsPerLoad();
    if (newItemsPerLoad !== mainPageItemsPerLoad) {
      mainPageItemsPerLoad = newItemsPerLoad;
      // Перезагружаем галерею с новым количеством элементов
      loadMainPageGalleryItems(true);
    }
  });

  // Слайдер отзывов
  function initTestimonialsSlider() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonials-nav-btn--prev');
    const nextBtn = document.querySelector('.testimonials-nav-btn--next');

    if (testimonials.length === 0) return;

    let currentSlide = 0;
    const totalSlides = testimonials.length;

    function showSlide(index) {
      // Скрываем все слайды
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
          testimonial.classList.add('active');
        }
      });

      // Обновляем точки
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });

      currentSlide = index;
    }

    // Кнопки навигации
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        showSlide(currentSlide);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        showSlide(currentSlide);
      });
    }

    // Точки навигации
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });

    // Автопрокрутка
    setInterval(() => {
      currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
      showSlide(currentSlide);
    }, 5000);

    // Инициализируем первый слайд
    showSlide(0);
  }

  // Инициализация галереи на главной странице
  function initMainPageGallery() {
    const galleryContainer = document.querySelector('.gallery-masonry');
    if (!galleryContainer) return;

    // Начальная загрузка
    loadMainPageGalleryItems(true);
  }

  // Функция загрузки элементов галереи
  function loadMainPageGalleryItems(reset = false) {
    const galleryContainer = document.querySelector('.gallery-masonry');
    if (!galleryContainer) return;

    if (reset) {
      galleryContainer.innerHTML = '';
      mainPageItemsLoaded = 0;
    }

    // Фильтруем данные
    let filteredData = mainPageGalleryData.filter(
      item => mainPageCurrentFilter === 'all' || item.type === mainPageCurrentFilter
    );

    // Получаем элементы для загрузки
    let itemsToLoad = filteredData.slice(
      mainPageItemsLoaded,
      mainPageItemsLoaded + mainPageItemsPerLoad
    );

    // Добавляем элементы с анимацией
    itemsToLoad.forEach((item, index) => {
      setTimeout(() => {
        const galleryItem = document.createElement('a');
        galleryItem.href = '/gallery.html';
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', item.type);
        galleryItem.style.opacity = '0';
        galleryItem.style.transform = 'translateY(20px)';

        galleryItem.innerHTML = `
          <div class="gallery-item-image">
            <img src="${item.imageSrc}" alt="${item.alt}" loading="lazy" />
          </div>
        `;

        // Добавляем обработчик клика для открытия модального окна
        galleryItem.addEventListener('click', e => {
          e.preventDefault();
          const img = galleryItem.querySelector('img');
          if (img) {
            // Находим индекс текущего изображения в отфильтрованных данных
            const filteredData = mainPageGalleryData.filter(
              dataItem => mainPageCurrentFilter === 'all' || dataItem.type === mainPageCurrentFilter
            );
            const currentIndex = filteredData.findIndex(
              dataItem => dataItem.imageSrc === item.imageSrc
            );
            openImageModal(img.src, img.alt, filteredData, currentIndex);
          }
        });

        galleryContainer.appendChild(galleryItem);

        // Анимация появления
        setTimeout(() => {
          galleryItem.style.transition = 'all 0.5s ease';
          galleryItem.style.opacity = '1';
          galleryItem.style.transform = 'translateY(0)';
        }, 50);
      }, index * 100);
    });

    mainPageItemsLoaded += itemsToLoad.length;

    // Управление кнопкой "Показать ещё"
    updateShowMoreButton(filteredData.length);
  }

  // Обновление кнопки "Показать ещё"
  function updateShowMoreButton(totalFilteredItems) {
    let showMoreBtn = document.querySelector('.gallery-show-more-btn');

    // Создаем кнопку, если её нет
    if (!showMoreBtn && mainPageItemsLoaded < totalFilteredItems) {
      const gallerySection = document.querySelector('.gallery-preview');
      if (gallerySection) {
        showMoreBtn = document.createElement('button');
        showMoreBtn.className = 'gallery-show-more-btn';
        showMoreBtn.textContent = 'Показать ещё';
        showMoreBtn.style.cssText = `
          display: block;
          margin: 2rem auto 0;
          padding: 12px 24px;
          background: #ed4b58;
          color: white;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        `;

        showMoreBtn.addEventListener('mouseenter', () => {
          showMoreBtn.style.background = '#d63545';
          showMoreBtn.style.transform = 'translateY(-2px)';
        });

        showMoreBtn.addEventListener('mouseleave', () => {
          showMoreBtn.style.background = '#ed4b58';
          showMoreBtn.style.transform = 'translateY(0)';
        });

        showMoreBtn.addEventListener('click', () => {
          loadMainPageGalleryItems();
        });

        // Вставляем перед ссылкой "Смотреть всю галерею"
        const galleryLink = gallerySection.querySelector('.gallery-preview-link');
        gallerySection.insertBefore(showMoreBtn, galleryLink);
      }
    }

    // Показываем или скрываем кнопку
    if (showMoreBtn) {
      if (mainPageItemsLoaded < totalFilteredItems) {
        showMoreBtn.style.display = 'block';
      } else {
        showMoreBtn.style.display = 'none';
      }
    }
  }

  // Фильтры галереи
  function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Убираем активный класс со всех кнопок
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Обновляем текущий фильтр
        mainPageCurrentFilter = btn.dataset.filter;

        // Обновляем количество элементов на случай изменения размера экрана
        mainPageItemsPerLoad = getItemsPerLoad();

        // Перезагружаем галерею с новым фильтром
        loadMainPageGalleryItems(true);
      });
    });
  }

  // Модальное окно для просмотра изображений галереи
  function openImageModal(imageSrc, imageAlt, galleryData = [], currentIndex = 0) {
    let currentImageIndex = currentIndex;

    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'gallery-image-modal';

    // Функция обновления содержимого модального окна
    function updateModalContent() {
      const currentItem = galleryData[currentImageIndex];
      if (!currentItem) return;

      const modalImage = modal.querySelector('.gallery-modal-image');
      const modalCounter = modal.querySelector('.gallery-modal-counter');

      if (modalImage) {
        modalImage.src = currentItem.imageSrc;
        modalImage.alt = currentItem.alt;
      }

      if (modalCounter) {
        modalCounter.textContent = `${currentImageIndex + 1} из ${galleryData.length}`;
      }

      // Обновляем видимость кнопок навигации
      const prevBtn = modal.querySelector('.gallery-modal-prev');
      const nextBtn = modal.querySelector('.gallery-modal-next');

      if (prevBtn) {
        prevBtn.style.display = galleryData.length > 1 ? 'flex' : 'none';
        prevBtn.style.opacity = currentImageIndex > 0 ? '1' : '0.5';
      }

      if (nextBtn) {
        nextBtn.style.display = galleryData.length > 1 ? 'flex' : 'none';
        nextBtn.style.opacity = currentImageIndex < galleryData.length - 1 ? '1' : '0.5';
      }
    }

    modal.innerHTML = `
      <div class="gallery-modal-overlay">
        <div class="gallery-modal-content">
          <img src="${imageSrc}" alt="${imageAlt}" class="gallery-modal-image">
          <button class="gallery-modal-close" aria-label="Закрыть">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div class="gallery-modal-navigation">
            <button class="gallery-modal-prev" aria-label="Предыдущее изображение">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            <button class="gallery-modal-next" aria-label="Следующее изображение">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>
          <div class="gallery-modal-info">
            ${galleryData.length > 1 ? `<span class="gallery-modal-counter">${currentIndex + 1} из ${galleryData.length}</span>` : ''}
          </div>
        </div>
      </div>
    `;

    // Добавляем CSS стили для модального окна
    if (!document.getElementById('gallery-modal-styles')) {
      const styles = document.createElement('style');
      styles.id = 'gallery-modal-styles';
      styles.textContent = `
        .gallery-image-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .gallery-image-modal.active {
          opacity: 1;
          visibility: visible;
        }
        
        .gallery-modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        
        .gallery-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          cursor: default;
        }
        
        .gallery-modal-image {
          max-width: 100%;
          max-height: 90vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          user-select: none;
          -webkit-user-select: none;
          touch-action: pan-x;
        }
        
        .gallery-modal-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .gallery-modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .gallery-modal-navigation {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          pointer-events: none;
        }
        
        .gallery-modal-prev,
        .gallery-modal-next {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .gallery-modal-prev {
          left: -70px;
        }
        
        .gallery-modal-next {
          right: -70px;
        }
        
        .gallery-modal-prev:hover,
        .gallery-modal-next:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
        
        .gallery-modal-info {
          position: absolute;
          bottom: -50px;
          left: 0;
          right: 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .gallery-modal-counter {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-weight: 400;
        }
        
        @media (max-width: 768px) {
          .gallery-modal-content {
            max-width: 95vw;
            max-height: 80vh;
          }
          
          .gallery-modal-close {
            top: -40px;
            right: -10px;
            width: 35px;
            height: 35px;
          }
          
          .gallery-modal-prev,
          .gallery-modal-next {
            width: 40px;
            height: 40px;
          }
          
          .gallery-modal-prev {
            left: -50px;
          }
          
          .gallery-modal-next {
            right: -50px;
          }
          
          .gallery-modal-info {
            bottom: -40px;
          }
        }
        
        @media (max-width: 480px) {
          .gallery-modal-prev {
            left: 10px;
            top: 10px;
            bottom: auto;
          }
          
          .gallery-modal-next {
            right: 10px;
            top: 10px;
            bottom: auto;
          }
          
          .gallery-modal-close {
            top: 10px;
            right: 50%;
            transform: translateX(50%);
          }
        }
      `;
      document.head.appendChild(styles);
    }

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Анимация появления
    setTimeout(() => modal.classList.add('active'), 10);

    // Функция закрытия модального окна
    let closeModal = () => {
      modal.classList.remove('active');
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
      }, 300);
    };

    // Обработчики событий
    modal.querySelector('.gallery-modal-close').addEventListener('click', closeModal);
    modal.querySelector('.gallery-modal-overlay').addEventListener('click', e => {
      if (e.target === modal.querySelector('.gallery-modal-overlay')) {
        closeModal();
      }
    });

    // Навигация между изображениями
    const prevBtn = modal.querySelector('.gallery-modal-prev');
    const nextBtn = modal.querySelector('.gallery-modal-next');

    const goToPrevious = () => {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateModalContent();
      }
    };

    const goToNext = () => {
      if (currentImageIndex < galleryData.length - 1) {
        currentImageIndex++;
        updateModalContent();
      }
    };

    prevBtn.addEventListener('click', goToPrevious);
    nextBtn.addEventListener('click', goToNext);

    // Поддержка свайпов для мобильных устройств
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    let isSwipping = false;

    const handleTouchStart = e => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      isSwipping = false;
    };

    const handleTouchMove = e => {
      if (!isSwipping) {
        const currentX = e.changedTouches[0].screenX;
        const currentY = e.changedTouches[0].screenY;
        const deltaX = currentX - touchStartX;
        const deltaY = currentY - touchStartY;

        // Начинаем свайп только если горизонтальное движение больше вертикального
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
          isSwipping = true;
          e.preventDefault(); // Предотвращаем скролл

          // Добавляем визуальную обратную связь
          const image = modal.querySelector('.gallery-modal-image');
          const translateX = Math.max(-50, Math.min(50, deltaX * 0.3));
          image.style.transform = `translateX(${translateX}px) scale(0.95)`;
        }
      } else {
        e.preventDefault(); // Продолжаем предотвращать скролл во время свайпа
      }
    };

    const handleTouchEnd = e => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;

      // Возвращаем изображение в исходное положение
      const image = modal.querySelector('.gallery-modal-image');
      image.style.transform = 'translateX(0) scale(1)';

      if (isSwipping) {
        handleSwipe();
      }
      isSwipping = false;
    };

    const handleSwipe = () => {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const minSwipeDistance = 50; // Минимальное расстояние для регистрации свайпа

      // Проверяем, что горизонтальный свайп больше вертикального
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          // Свайп вправо - предыдущее изображение
          goToPrevious();
        } else {
          // Свайп влево - следующее изображение
          goToNext();
        }
      }
    };

    // Добавляем обработчики касаний к изображению
    const modalImage = modal.querySelector('.gallery-modal-image');
    modalImage.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });
    modalImage.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    modalImage.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Навигация с клавиатуры
    const handleKeyNavigation = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyNavigation);

    // Обновляем начальное состояние кнопок
    updateModalContent();

    // Удаляем обработчик клавиатуры при закрытии
    const originalCloseModal = closeModal;
    closeModal = () => {
      document.removeEventListener('keydown', handleKeyNavigation);
      originalCloseModal();
    };
  }

  // Эффекты для карточек услуг и предзагрузка изображений
  function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card-modern');

    serviceCards.forEach(card => {
      card.style.cursor = 'pointer';

      // Добавляем интерактивные ховер-эффекты
      card.addEventListener('mouseenter', function () {
        // Добавляем легкое вращение при наведении
        this.style.transform = 'translateY(-10px) scale(1.02)';

        // Создаем эффект ripple
        const ripple = document.createElement('div');
        ripple.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(237, 75, 88, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
          animation: rippleEffect 0.6s ease-out;
        `;

        this.appendChild(ripple);

        // Удаляем ripple после анимации
        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 600);
      });

      card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
      });

      // Предзагружаем изображения для предотвращения скачков компоновки
      const img = card.querySelector('.service-card-image img');
      if (img) {
        // Создаем временную заглушку
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        placeholder.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          transition: opacity 0.3s ease;
        `;

        // Добавляем иконку загрузки
        placeholder.innerHTML = `
          <div style="
            width: 40px;
            height: 40px;
            border: 3px solid #ed4b58;
            border-top: 3px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          "></div>
        `;

        // Добавляем анимацию вращения
        if (!document.getElementById('spinner-styles')) {
          const style = document.createElement('style');
          style.id = 'spinner-styles';
          style.textContent = `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            @keyframes rippleEffect {
              0% {
                width: 0;
                height: 0;
                opacity: 1;
              }
              100% {
                width: 200px;
                height: 200px;
                opacity: 0;
              }
            }
          `;
          document.head.appendChild(style);
        }

        const imageContainer = img.parentElement;
        imageContainer.appendChild(placeholder);

        // Скрываем изображение до загрузки
        img.style.opacity = '0';

        // Обработчик загрузки изображения
        const handleImageLoad = () => {
          img.style.opacity = '1';
          placeholder.style.opacity = '0';
          setTimeout(() => {
            if (placeholder.parentNode) {
              placeholder.parentNode.removeChild(placeholder);
            }
          }, 300);
        };

        // Проверяем, загружено ли изображение
        if (img.complete && img.naturalHeight !== 0) {
          handleImageLoad();
        } else {
          img.addEventListener('load', handleImageLoad);
          img.addEventListener('error', () => {
            placeholder.innerHTML = '📷';
            placeholder.style.fontSize = '2rem';
            placeholder.style.color = '#ccc';
          });
        }
      }
    });
  }

  // Анимации при скролле
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Анимация счетчиков
          const counters = entry.target.querySelectorAll('.stat-number');
          counters.forEach(counter => {
            animateCounter(counter);
          });
        }
      });
    }, observerOptions);

    // Добавляем наблюдение для всех секций
    document
      .querySelectorAll(
        '.section-header-modern, .service-card-modern, .testimonial-card, .gallery-item'
      )
      .forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
      });
  }

  // Анимация счетчиков
  function animateCounter(counter) {
    const text = counter.textContent;
    const target = parseInt(text.replace(/[^\d]/g, ''));
    const suffix = text.replace(/[\d,]/g, '');

    if (counter.dataset.animated) return;
    counter.dataset.animated = 'true';

    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + suffix;
      }
    };

    updateCounter();
  }

  // Добавляем стили для анимаций и модального окна
  if (!document.querySelector('#modern-styles')) {
    const styles = document.createElement('style');
    styles.id = 'modern-styles';
    styles.textContent = `
            .fade-in-element {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            
            .fade-in-element.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            @keyframes ripple {
                from {
                    transform: scale(0);
                    opacity: 1;
                }
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            .image-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .image-modal.active {
                opacity: 1;
            }
            
            .image-modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2rem;
                cursor: pointer;
            }
            
            .image-modal-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
                cursor: default;
            }
            
            .image-modal-content img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 10px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }
            
            .image-modal-close {
                position: absolute;
                top: -15px;
                right: -15px;
                width: 40px;
                height: 40px;
                border: none;
                border-radius: 50%;
                background: white;
                color: #333;
                font-size: 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                transition: all 0.3s ease;
            }
            
            .image-modal-close:hover {
                background: #ed4b58;
                color: white;
                transform: scale(1.1);
            }
        `;
    document.head.appendChild(styles);
  }

  // Интерактивность салонов
  function initSalonsInteractivity() {
    // Обработчики для кнопок записи
    const bookingBtns = document.querySelectorAll('.salon-btn-primary');
    bookingBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        // Открываем виджет записи YClients
        if (typeof ycWidget !== 'undefined') {
          ycWidget.show();
        } else {
          // Fallback - переход на страницу записи
          window.open(
            'https://n1059344.yclients.com/select-city/25/select-branch?previousStepUrl=%2Fcompany%2F912077%2Fpersonal%2Fselect-services%3Fo%3D&o=',
            '_blank'
          );
        }
      });
    });

    // Обработчики для кнопок карты
    const mapBtns = document.querySelectorAll('.salon-btn-secondary');
    const salonAddresses = [
      'ул. Московская, 134/146, Саратов',
      'ул. им. ак. Навашина С.Г., 1/13, Саратов',
      'пр. им. 50 лет Октября, 120, Саратов',
    ];

    mapBtns.forEach((btn, index) => {
      btn.addEventListener('click', function () {
        const address = encodeURIComponent(salonAddresses[index]);
        const yandexMapsUrl = `https://yandex.ru/maps/?text=${address}`;
        window.open(yandexMapsUrl, '_blank');
      });
    });

    // Анимация при наведении на карточки салонов
    const salonCards = document.querySelectorAll('.salon-card-modern');
    salonCards.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px)';
      });

      card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  // Функция для обновления статусов салонов
  function updateSalonStatuses() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute; // Время в минутах

    // Время работы салонов: 09:00-20:00 (540-1200 минут)
    const openingTime = 9 * 60; // 09:00 в минутах
    const closingTime = 20 * 60; // 20:00 в минутах

    const statusElements = document.querySelectorAll('.salon-status');

    statusElements.forEach(statusElement => {
      // Определяем статус и текст
      let statusText, statusClass;

      if (currentTime >= openingTime && currentTime < closingTime) {
        // Салон открыт
        const minutesToClose = closingTime - currentTime;
        const hoursToClose = Math.floor(minutesToClose / 60);

        if (hoursToClose >= 2) {
          statusText = 'Открыт';
          statusClass = 'salon-status-open';
        } else if (hoursToClose === 1) {
          statusText = 'Открыт до 20:00';
          statusClass = 'salon-status-open';
        } else if (minutesToClose > 30) {
          statusText = 'Открыт до 20:00';
          statusClass = 'salon-status-open';
        } else {
          statusText = 'Скоро закроется';
          statusClass = 'salon-status-closing';
        }
      } else if (currentTime >= closingTime) {
        // Салон закрыт до завтра
        statusText = 'Закрыто до 9:00';
        statusClass = 'salon-status-closed';
      } else {
        // Салон закрыт до 9:00
        const minutesToOpen = openingTime - currentTime;
        const hoursToOpen = Math.floor(minutesToOpen / 60);
        const minutesRemaining = minutesToOpen % 60;

        if (hoursToOpen > 1) {
          statusText = 'Закрыто до 9:00';
        } else if (hoursToOpen === 1) {
          statusText = minutesRemaining > 0 ? `Откроется в 9:00` : 'Откроется в 9:00';
        } else if (minutesToOpen > 30) {
          statusText = 'Откроется в 9:00';
        } else if (minutesToOpen > 0) {
          statusText = `Откроется через ${minutesToOpen} мин`;
        } else {
          statusText = 'Открывается';
        }
        statusClass = 'salon-status-closed';
      }

      // Обновляем статус
      statusElement.textContent = statusText;
      statusElement.className = `salon-status ${statusClass}`;
    });

    // Отладочная информация (можно отключить в продакшене)
    // console.log(
    //   `Текущее время: ${currentHour.toString().padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}, статус: ${statusElements[0]?.textContent}`
    // );
  }

  // Обновляем статусы каждую минуту
  setInterval(updateSalonStatuses, 60000);

  // Функция для тестирования статусов (можно вызвать в консоли)
  // Примеры использования:
  // testSalonStatus(8) - тест в 8:00 (закрыто)
  // testSalonStatus(9) - тест в 9:00 (открыт)
  // testSalonStatus(19, 45) - тест в 19:45 (скоро закроется)
  // testSalonStatus(21) - тест в 21:00 (закрыто до завтра)
  window.testSalonStatus = function (hour, minute = 0) {
    const originalDate = Date;

    // Временно переопределяем Date
    Date = function () {
      const testDate = new originalDate();
      testDate.setHours(hour, minute, 0, 0);
      return testDate;
    };
    Date.prototype = originalDate.prototype;

    // Обновляем статусы
    updateSalonStatuses();

    // Восстанавливаем оригинальный Date
    Date = originalDate;

    console.log(
      `Тест: время ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
    );
  };
});
