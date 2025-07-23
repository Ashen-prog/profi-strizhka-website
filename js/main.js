document.addEventListener('DOMContentLoaded', () => {
  const testimonials = [
    {
      text: 'Безумно приятный салон и его атмосфера! Персонал максимально вежливый и трепетный. Хожу на маникюр уже давно. Нашла своего идеального мастера Юлю, что очень радует, так как сейчас это не просто. Балуют хорошей атмосферой и ароматным кофе. Рекомендую!!!',
      author: 'Роза',
    },
    {
      text: 'Цены адекватные💸, персонал приветливый☀️, администратор Марина всегда заботливо предложит кофе ☕. На ногтях мой выбор - Алина, волосы доверяю только Арине, которая без труда нашла общий язык даже с моей маленькой дочкой, а муж и сын всегда ходят к Оксане. В общем рекомендую!!!!!',
      author: 'Наталия А.',
    },
    {
      text: 'Классная стрижка за недорогую цену! Стригся до этого в барбершопе есть с чем сравнить! Очень удивили прекрасным качеством! Мастер Оксана прекрасный специалист, теперь я постоянный клиент!)))',
      author: 'Владислав Коробов',
    },
    {
      text: 'Я постоянный клиент, очень нравится работа мастеров. Маникюр я делаю у Елены, професиональный мастер, подскажет как красиво оформить дизайн ногтей, очень приятно с ней беседовать время пролетает незаметно. У Даши я делаю стрижку, тоже всегда посоветует что лучше мне подойдёт, очень культурная и вежливая. Рекомендую',
      author: 'Надежда Г.',
    },
  ];

  const container = document.querySelector('.testimonial-container');

  // Проверяем, существует ли контейнер (старая версия отзывов)
  if (!container) {
    return; // Выходим, если контейнер не найден (используется новая версия)
  }

  let currentIndex = 0;

  function updateTestimonial() {
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial');
    testimonialElement.innerHTML = `
            <p>"${testimonials[currentIndex].text}"</p>
            <span>- ${testimonials[currentIndex].author}</span>
        `;

    container.appendChild(testimonialElement);

    // Делаем новый элемент активным
    setTimeout(() => {
      testimonialElement.classList.add('active');
    }, 10);

    // Удаляем предыдущий элемент
    const previousElement = container.querySelector('.testimonial.active');
    if (previousElement) {
      previousElement.classList.remove('active');
      setTimeout(() => {
        previousElement.remove();
      }, 1000); // Время совпадает с анимацией CSS
    }

    // Увеличиваем индекс
    currentIndex = (currentIndex + 1) % testimonials.length;
  }

  // Запускаем смену отзывов каждые 5 секунд
  updateTestimonial();
  setInterval(updateTestimonial, 7000);
});

/** Галерея **/

document.querySelectorAll('.gallery-preview-item').forEach(item => {
  item.addEventListener('click', () => {
    window.location.href = '/gallery.html';
  });
});

/** Салоны **/

const salons = document.querySelectorAll('.salon-item');
salons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Передаем индекс в URL
    window.location.href = '/salons.html?salonIndex=' + index;
  });
});

/** Блог **/
const blogPreviewItems = document.querySelectorAll('.blog-preview-item');
blogPreviewItems.forEach(item => {
  const link = item.querySelector('a');
  item.addEventListener('click', () => {
    window.location.href = link;
  });
});

/** Сертификаты **/
const certficates = document.querySelectorAll('.gift-certificate-item');

certficates.forEach((btn, index) => {
  if (index === 0) {
    btn.addEventListener('click', () => {
      window.location.href = '/certificate-1000.html';
    });
  } else if (index === 1) {
    btn.addEventListener('click', () => {
      window.location.href = '/certificate-1500.html';
    });
  } else if (index === 2) {
    btn.addEventListener('click', () => {
      window.location.href = '/certificate-2000.html';
    });
  }
});

/**************** Плавность *****************/
document.addEventListener('DOMContentLoaded', function () {
  const revealElements = document.querySelectorAll('.reveal');

  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target); // Опционально, перестаём наблюдать за элементом
      }
    });
  }, options);

  revealElements.forEach(el => {
    observer.observe(el);
  });
});
