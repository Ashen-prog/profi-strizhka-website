const data = [
  {
    id: 1,
    type: "yandex-review",
    imgsrc: "img/yandex.svg",
    review:
      "Спасибо огромное мастеру маникюра Веронике за ее профессионализм и чуткое и внимательное отношение к клиентам. Посещаю салон уже несколько лет и очень довольна вашим внимательным отношением к клиентам. Всегда предложат чай, и посоветуют оптимальный вариант маникюра. Здоровья вам и новых профессиональных достижений!!!!",
    author: "ирина агаева",
    src: "https://yandex.ru/maps/org/20563445760/reviews?reviews%5BpublicId%5D=j05r7g08vdj8wh680xfuxz6hc8&si=9xp8k9w9a4ke81g80np1r52j4w&utm_source=review",
  },
  {
    id: 2,
    type: "2gis-review",
    imgsrc: "img/2gis.svg",
    review:
      "Делала маникюр здесь первый раз. Очень всем довольна от обслуживания до работы самого мастера. Большое спасибо мастеру маникюра Елене , сделала всё аккуратно,быстро ( отдельное спасибо за поднятое настроение). Обязательно приду ещё)",
    author: "Борисова Екатерина Сергеевна",
    src: "https://2gis.ru/saratov/branches/70000001024488379/firm/70000001037095364/46.020093%2C51.564353/tab/reviews?m=46.020093%2C51.564353%2F16",
  },
  {
    id: 3,
    type: "2gis-review",
    imgsrc: "img/2gis.svg",
    review:
      "Классная стрижка за недорогую цену! Стригся до этого в барбершопе есть с чем сравнить! Очень удивили прекрасным качеством! Мастер Оксана прекрасный специалист, теперь я постоянный клиент!)))",
    author: "Владислав Коробов",
    src: "https://2gis.ru/saratov/branches/70000001024488379/firm/70000001055925010/46.018485%2C51.537611/tab/reviews?m=46.018485%2C51.537611%2F16",
  },
  {
    id: 4,
    type: "2gis-review",
    imgsrc: "img/2gis.svg",
    review:
      "Изумительно подстригли и покрасили. Цены очень приемлемые, всем советую. Администратору отдельная благодарность!!! Приняли быстро и без записи- очень гостеприимный персонал!",
    author: "Ангелина Суворова",
    src: "https://2gis.ru/saratov/branches/70000001024488379/firm/70000001055925010/46.018485%2C51.537611/tab/reviews?m=46.018485%2C51.537611%2F16",
  },
  {
    id: 5,
    type: "yandex-review",
    imgsrc: "img/yandex.svg",
    review:
      "Цены адекватные💸, персонал приветливый☀️, администратор Марина всегда заботливо предложит кофе ☕. На ногтях мой выбор - Алина, волосы доверяю только Арине, которая без труда нашла общий язык даже с моей маленькой дочкой, а муж и сын всегда ходят к Оксане. В общем рекомендую!!!!!",
    author: "Наталия А.",
    src: "https://yandex.ru/maps/org/20563445760/reviews?reviews%5BpublicId%5D=jp4xxrwk2e9hnbzq6rmq76vjf0&si=9xp8k9w9a4ke81g80np1r52j4w&utm_source=review",
  },
  {
    id: 6,
    type: "yandex-review",
    imgsrc: "img/yandex.svg",
    review:
      "Безумно приятный салон и его атмосфера! Персонал максимально вежливый и трепетный. Хожу на маникюр уже давно. Нашла своего идеального мастера Юлю, что очень радует, так как сейчас это не просто. Балуют хорошей атмосферой и ароматным кофе. Рекомендую!!!",
    author: "Роза",
    src: "https://yandex.ru/maps/org/20563445760/reviews?reviews%5BpublicId%5D=c7jj79xf0x4x8xed5zz2h7944m&si=9xp8k9w9a4ke81g80np1r52j4w&utm_source=review",
  },
  {
    id: 7,
    type: "yandex-review",
    imgsrc: "img/yandex.svg",
    review:
      "Я постоянный клиент, очень нравится работа мастеров. Маникюр я делаю у Елены, професиональный мастер, подскажет как красиво оформить дизайн ногтей, очень приятно с ней беседовать время пролетает незаметно. У Даши я делаю стрижку, тоже всегда посоветует что лучше мне подойдёт, очень культурная и вежливая. Рекомендую качественно и бюджетно.",
    author: "Надежда Г.",
    src: "https://yandex.ru/maps/org/61860929405/reviews?reviews%5BpublicId%5D=2gpte1b6egqx8uqc2q221v63tr&si=9xp8k9w9a4ke81g80np1r52j4w&utm_source=review",
  },
  {
    id: 8,
    type: "yandex-review",
    imgsrc: "img/yandex.svg",
    review:
      "Хожу в этот салон с открытия. Администратор Светлана просто супер, всегда постарается записать на удобное время для клиента. Очень позитивный и добрый человек. Сегодня делала маникюр у Кристины, отличный мастер. Сделала быстро, аккуратно и как я хотела. Цены тоже приемлемые.",
    author: "Леся",
    src: "https://yandex.ru/maps/org/61860929405/reviews?reviews%5BpublicId%5D=5x99rjtx9tj4xnt5u75fbvanf4&si=9xp8k9w9a4ke81g80np1r52j4w&utm_source=review",
  },
];

let itemsPerLoad = 4;
let currentFilter = "all";
let itemsLoaded = 0;

/** Функция определения скорости интернета */
/** Проверка скорости интернета с кэшированием, обработкой ошибок и асинхронной загрузкой файла */
function checkInternetSpeed(thresholdMbps = 2, cacheTimeMs = 60000) {
  if (!window.__internetSpeedCache) {
    window.__internetSpeedCache = { value: null, timestamp: 0 };
  }
  const now = Date.now();
  if (window.__internetSpeedCache.value !== null && now - window.__internetSpeedCache.timestamp < cacheTimeMs) {
    return Promise.resolve(window.__internetSpeedCache.value);
  }
  if (navigator.connection && typeof navigator.connection.downlink === "number") {
    const isFast = navigator.connection.downlink > thresholdMbps;
    window.__internetSpeedCache = { value: isFast, timestamp: now };
    return Promise.resolve(isFast);
  }
  return new Promise((resolve) => {
    const img = new Image();
    const start = Date.now();
    let finished = false;
    img.onload = img.onerror = function () {
      if (finished) return;
      finished = true;
      const duration = Date.now() - start;
      // 70KB файл, если загрузился за < 500мс — считаем быстро
      const isFast = duration < 500;
      window.__internetSpeedCache = { value: isFast, timestamp: Date.now() };
      resolve(isFast);
    };
    img.src = "img/gallery/1.jpg?speedtest=" + Math.random();
    setTimeout(() => {
      if (!finished) {
        finished = true;
        window.__internetSpeedCache = { value: false, timestamp: Date.now() };
        resolve(false);
      }
    }, 2000);
  });
}

/** Загрузка элементов */
function loadItems(reset = false) {
  const grid = document.querySelector("#grid_reviews-section");
  if (reset) {
    grid.innerHTML = "";
    itemsLoaded = 0;
  }

  const filteredData = data.filter(
    (item) => currentFilter === "all" || item.type === currentFilter
  );

  const itemsToLoad = filteredData.slice(
    itemsLoaded,
    itemsLoaded + itemsPerLoad
  );

  itemsToLoad.forEach((item) => {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item_reviews-section";
    gridItem.innerHTML = `
      <div class="review-item-title">
        <div class="review-item-author">${item.author}</div>
        <div class="review-item-resource"><img src="${
          item.imgsrc
        }" alt="Фото"></div>
      </div>
      <div class="review-item-body">${item.review}</div>
      <div class="review-item-source">
        Отзыв из внешнего источника <a href="${item.src}">
          ${item.src.length > 40 ? item.src.substring(0, 40) + "..." : item.src}
        </a>
      </div>
    `;
    grid.appendChild(gridItem);
  });

  itemsLoaded += itemsToLoad.length;

  const showMoreBtn = document.querySelector("#show-more-btn_reviews-section");
  showMoreBtn.style.display =
    itemsLoaded < filteredData.length ? "block" : "none";
}

// Обработчик кнопки "Показать ещё"
document
  .querySelector("#show-more-btn_reviews-section")
  .addEventListener("click", () => {
    loadItems();
  });

// Первоначальная загрузка отзывов
checkInternetSpeed(2, 60000).then(isFast => {
  itemsPerLoad = isFast ? data.length : 9;
  loadItems();
});

/** Фильтрация отзывов */
function setDesktopFilterHandlers() {
  const filterButtons = document.querySelectorAll(
    ".filter_reviews-section-btn"
  );

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilter = btn.getAttribute("data-filter_reviews-section");
      loadItems(true);
    });
  });
}

// Мобильная версия фильтра
function setMobileFilterHandlers() {
  const mobileFilterSection = document.querySelector(
    ".filter_reviews-section_mobile"
  );
  const mobileFilterButtons = document.querySelectorAll(
    ".filter_reviews-section_mobile-btn"
  );
  const mobileFilterArrow = document.querySelector(
    ".filter_reviews-section_mobile-arrow"
  );

  // Функция для закрытия мобильного фильтра
  const closeMobileFilter = () => {
    if (mobileFilterSection.classList.contains("open")) {
      mobileFilterSection.classList.remove("open");
      // Удаляем активный класс у стрелочки
      const activeArrow = mobileFilterSection.querySelector(
        ".filter_reviews-section_mobile-arrow.active"
      );
      if (activeArrow) {
        activeArrow.classList.remove("active");
      }
    }
  };

  // Обработчик для открытия/закрытия меню и выбора фильтра
  mobileFilterButtons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation(); // Предотвращаем всплытие события

      if (mobileFilterSection.classList.contains("open")) {
        // Меню открыто, применяем фильтр и закрываем меню

        // Удаляем класс 'active' со всех мобильных кнопок
        mobileFilterButtons.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");

        // Обновляем фильтр и перезагружаем элементы
        currentFilter = this.getAttribute("data-filter_reviews-section");
        loadItems(true);

        // Закрываем меню
        closeMobileFilter();
      } else {
        // Меню закрыто, открываем его
        mobileFilterSection.classList.add("open");

        // Добавляем класс 'active' к стрелочке
        const arrow = this.querySelector(
          ".filter_reviews-section_mobile-arrow"
        );
        if (arrow) {
          arrow.classList.add("active");
        }
      }
    });
  });

  // Закрываем меню при клике вне его области
  document.addEventListener("click", function (event) {
    if (!mobileFilterSection.contains(event.target)) {
      closeMobileFilter();
    }
  });
}

// Инициализация обработчиков
setDesktopFilterHandlers();
setMobileFilterHandlers();

/** Работа с модалкой */
// Открытие модального окна для отзыва
const leaveReviewBtn = document.querySelector(".leave-a-review_btn");
const reviewsModal = document.querySelector(".reviews-modal");

leaveReviewBtn?.addEventListener("click", () => {
  reviewsModal.style.display = "flex";
});

// Закрытие модального окна
document
  .querySelector(".close-reviews-modal")
  .addEventListener("click", function () {
    reviewsModal.style.display = "none";
  });

// Логика работы выпадающего списка для выбора услуги
const dropdownSelected = document.querySelector(".dropdown-selected");
const dropdownList = document.querySelector(".dropdown-list");
const selectedService = document.getElementById("selected-service");
const serviceInput = document.getElementById("service-input");

dropdownSelected.addEventListener("click", () => {
  const isOpen = dropdownList.style.display === "block";
  dropdownList.style.display = isOpen ? "none" : "block";
});

dropdownList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    selectedService.textContent = event.target.textContent;
    serviceInput.value = event.target.textContent;
    dropdownList.style.display = "none";
  }
});

// Проверка заполненности полей формы
function checkFormFields() {
  const fio = document.getElementById("fio").value.trim();
  const review = document.getElementById("review").value.trim();
  const isValid = fio !== "" && review !== "" && serviceInput.value !== "";
  document
    .querySelector(".reviews-modal_btn")
    .classList.toggle("active", isValid);
}

document.getElementById("fio").addEventListener("input", checkFormFields);
document.getElementById("review").addEventListener("input", checkFormFields);

// Обработчик отправки формы
document
  .getElementById("submitReview")
  .addEventListener("click", async function (event) {
    event.preventDefault(); // Отключаем стандартное поведение

    // Получаем данные из формы
    const service = serviceInput.value;
    const fio = document.getElementById("fio").value.trim();
    const review = document.getElementById("review").value.trim();

    // Проверяем, что все поля заполнены
    if (!service || !fio || !review) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    // Формируем данные для отправки
    const formData = new FormData();
    formData.append("service", service);
    formData.append("fio", fio);
    formData.append("review", review);

    try {
      // Отправляем данные через fetch
      const response = await fetch("../php/process_form-reviews.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      // Обрабатываем результат
      if (result.status === "success") {
        document.querySelector(".reviews-modal").style.display = "none"; // Скрываем форму
        document.getElementById("thankYouModal").style.display = "flex"; // Показываем благодарность
      } else {
        alert(result.message || "Ошибка при отправке.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Ошибка при отправке. Проверьте соединение.");
    }
  });

// Закрытие модального окна с благодарностью
document.getElementById("closeThankYouModalX").addEventListener("click", () => {
  document.getElementById("thankYouModal").style.display = "none";
});

document.getElementById("closeThankYouModal").addEventListener("click", () => {
  document.getElementById("thankYouModal").style.display = "none";
  window.location.href = "/index.html";
});
