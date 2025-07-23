// Modern JavaScript для всех интерактивных эффектов

class ModernWebsite {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollProgress();
    this.setupScrollIndicator();
    this.setupParallaxEffects();
    this.setupAnimationObserver();
    this.setupTestimonialsSlider();
    this.setupGalleryFilters();
    this.setupServiceCardEffects();
    this.setupSmoothScrolling();
    this.setupFloatingButton();
    this.setupCounterAnimations();
    this.setupLazyLoading();
    this.preloadCriticalImages();
  }

  // Прогресс скролла
  setupScrollProgress() {
    const progressBar = document.querySelector(".scroll-progress__bar");
    if (!progressBar) return;

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + "%";
    });
  }

  // Индикатор скролла в hero
  setupScrollIndicator() {
    const scrollIndicator = document.querySelector(".hero__scroll-indicator");
    if (!scrollIndicator) return;

    scrollIndicator.addEventListener("click", () => {
      const firstSection = document.querySelector(".modern-section");
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" });
      }
    });

    // Скрываем индикатор при скролле
    window.addEventListener("scroll", () => {
      const opacity = Math.max(0, 1 - window.pageYOffset / 300);
      scrollIndicator.style.opacity = opacity;
    });
  }

  // Параллакс эффекты
  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll(".hero__bg-image");

    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      parallaxElements.forEach((element) => {
        element.style.transform = `translateY(${rate}px)`;
      });

      // Параллакс для particles
      const particles = document.querySelector(".hero__particles");
      if (particles) {
        particles.style.transform = `translateY(${scrolled * -0.3}px)`;
      }
    });
  }

  // Наблюдатель для анимаций
  setupAnimationObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Для элементов с задержкой
          const delay = entry.target.dataset.delay;
          if (delay) {
            entry.target.style.animationDelay = delay + "ms";
          }
        }
      });
    }, observerOptions);

    // Добавляем наблюдение ко всем элементам с анимацией
    document.querySelectorAll(".animate-fade-up").forEach((el) => {
      observer.observe(el);
    });

    // Добавляем анимации к элементам
    this.addAnimationClasses();
  }

  addAnimationClasses() {
    const elements = [
      ".service-card",
      ".testimonial-card",
      ".gallery-item",
      ".salon-card",
      ".blog-card",
      ".certificate-card",
    ];

    elements.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el, index) => {
        el.classList.add("animate-fade-up");
        el.dataset.delay = index * 100;
      });
    });
  }

  // Слайдер отзывов
  setupTestimonialsSlider() {
    const testimonials = document.querySelectorAll(".testimonial-card");
    const prevBtn = document.querySelector(".testimonials__nav-btn--prev");
    const nextBtn = document.querySelector(".testimonials__nav-btn--next");
    const dots = document.querySelectorAll(".dot");

    if (testimonials.length === 0) return;

    let currentSlide = 0;
    const totalSlides = testimonials.length;

    // Скрываем все слайды кроме первого
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = "none";
      }
    });

    const showSlide = (index) => {
      testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? "block" : "none";
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });

      currentSlide = index;
    };

    // Кнопки навигации
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        showSlide(currentSlide);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        showSlide(currentSlide);
      });
    }

    // Точки навигации
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
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

  // Фильтры галереи
  setupGalleryFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    if (filterBtns.length === 0) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Убираем активный класс со всех кнопок
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        // Фильтруем элементы
        galleryItems.forEach((item) => {
          const category = item.dataset.category;

          if (filter === "all" || category === filter) {
            item.style.display = "block";
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";

            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, 100);
          } else {
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";

            setTimeout(() => {
              item.style.display = "none";
            }, 300);
          }
        });
      });
    });

    // Добавляем эффекты увеличения при клике на изображения
    galleryItems.forEach((item) => {
      const zoomBtn = item.querySelector(".gallery-item__zoom");
      if (zoomBtn) {
        zoomBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.openImageModal(item.querySelector("img").src);
        });
      }
    });
  }

  // Модальное окно для изображений
  openImageModal(imageSrc) {
    // Создаем модальное окно
    const modal = document.createElement("div");
    modal.className = "image-modal";
    modal.innerHTML = `
            <div class="image-modal__overlay">
                <div class="image-modal__content">
                    <img src="${imageSrc}" alt="Увеличенное изображение">
                    <button class="image-modal__close">&times;</button>
                </div>
            </div>
        `;

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    // Закрытие модального окна
    const closeModal = () => {
      modal.remove();
      document.body.style.overflow = "";
    };

    modal
      .querySelector(".image-modal__close")
      .addEventListener("click", closeModal);
    modal
      .querySelector(".image-modal__overlay")
      .addEventListener("click", closeModal);

    // Добавляем стили для модального окна
    if (!document.querySelector("#modal-styles")) {
      const styles = document.createElement("style");
      styles.id = "modal-styles";
      styles.textContent = `
                .image-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                }
                
                .image-modal__overlay {
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
                }
                
                .image-modal__content {
                    position: relative;
                    max-width: 90%;
                    max-height: 90%;
                }
                
                .image-modal__content img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    border-radius: 0.5rem;
                }
                
                .image-modal__close {
                    position: absolute;
                    top: -15px;
                    right: -15px;
                    width: 40px;
                    height: 40px;
                    border: none;
                    border-radius: 50%;
                    background: #fff;
                    color: #000;
                    font-size: 24px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `;
      document.head.appendChild(styles);
    }
  }

  // Эффекты для карточек услуг
  setupServiceCardEffects() {
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px) scale(1.02)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
      });

      // Эффект ripple при клике
      card.addEventListener("click", (e) => {
        const ripple = document.createElement("div");
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(237, 75, 88, 0.3);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: ripple 0.6s ease-out;
                `;

        card.style.position = "relative";
        card.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Добавляем стили для ripple эффекта
    if (!document.querySelector("#ripple-styles")) {
      const styles = document.createElement("style");
      styles.id = "ripple-styles";
      styles.textContent = `
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
            `;
      document.head.appendChild(styles);
    }
  }

  // Плавный скроллинг
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  // Плавающая кнопка
  setupFloatingButton() {
    const fab = document.querySelector(".fab");
    if (!fab) return;

    // Показываем/скрываем кнопку в зависимости от скролла
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        fab.style.opacity = "1";
        fab.style.transform = "translateY(0)";
      } else {
        fab.style.opacity = "0";
        fab.style.transform = "translateY(100px)";
      }
    });

    // Начальное состояние
    fab.style.opacity = "0";
    fab.style.transform = "translateY(100px)";
    fab.style.transition = "all 0.3s ease";

    // Обработчик клика - прокрутка наверх
    fab.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Анимация счетчиков
  setupCounterAnimations() {
    const counters = document.querySelectorAll(
      ".hero__stat-number, .stat__number"
    );

    const animateCounter = (counter) => {
      const target = parseInt(counter.textContent);
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    });

    counters.forEach((counter) => {
      counterObserver.observe(counter);
    });
  }

  // Ленивая загрузка изображений
  setupLazyLoading() {
    const images = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  // Предзагрузка критичных изображений
  preloadCriticalImages() {
    const criticalImages = [
      "img/gallery/1.jpg", // Hero background
      "img/menu-hair.jpg",
      "img/menu-nail.jpg",
      "img/menu-brow.jpg",
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });
  }

  // Утилиты
  throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  debounce(func, wait, immediate) {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}

// Дополнительные эффекты для взаимодействия
class InteractiveEffects {
  static addHoverGlow(element) {
    element.addEventListener("mouseenter", () => {
      element.style.boxShadow = "0 0 30px rgba(237, 75, 88, 0.3)";
    });

    element.addEventListener("mouseleave", () => {
      element.style.boxShadow = "";
    });
  }

  static addParallaxText(element, speed = 0.5) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }

  static addMorphingButton(button) {
    button.addEventListener("mouseenter", () => {
      button.style.borderRadius = "2rem";
      button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.borderRadius = "";
      button.style.transform = "scale(1)";
    });
  }

  static addFloatingAnimation(element) {
    element.style.animation = "float 6s ease-in-out infinite";
  }

  static addGlitchEffect(element) {
    element.addEventListener("mouseenter", () => {
      element.style.animation = "glitch 0.3s ease-in-out";
    });

    element.addEventListener("animationend", () => {
      element.style.animation = "";
    });

    // Добавляем стили для glitch эффекта
    if (!document.querySelector("#glitch-styles")) {
      const styles = document.createElement("style");
      styles.id = "glitch-styles";
      styles.textContent = `
                @keyframes glitch {
                    0% { transform: translateX(0); }
                    20% { transform: translateX(-2px) translateY(2px); }
                    40% { transform: translateX(-2px) translateY(-2px); }
                    60% { transform: translateX(2px) translateY(2px); }
                    80% { transform: translateX(2px) translateY(-2px); }
                    100% { transform: translateX(0); }
                }
            `;
      document.head.appendChild(styles);
    }
  }
}

// Инициализация при загрузке DOM
document.addEventListener("DOMContentLoaded", () => {
  new ModernWebsite();

  // Добавляем дополнительные эффекты к элементам
  document.querySelectorAll(".btn--primary").forEach((btn) => {
    InteractiveEffects.addMorphingButton(btn);
  });

  document.querySelectorAll(".service-card__icon").forEach((icon) => {
    InteractiveEffects.addFloatingAnimation(icon);
  });

  document.querySelectorAll(".section-title").forEach((title) => {
    InteractiveEffects.addParallaxText(title, 0.3);
  });
});

// Экспорт для использования в других модулях
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ModernWebsite, InteractiveEffects };
}
