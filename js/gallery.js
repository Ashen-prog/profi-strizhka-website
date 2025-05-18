const data = [
  {
    id: 1,
    type: "female",
    imageSrc: "img/gallery/1.jpg",
  },
  {
    id: 2,
    type: "nails",
    imageSrc: "img/gallery/2.jpg",
  },
  {
    id: 3,
    type: "styling",
    imageSrc: "img/gallery/3.jpg",
  },
  {
    id: 4,
    type: "nails",
    imageSrc: "img/gallery/4.jpg",
  },
  {
    id: 5,
    type: "nails",
    imageSrc: "img/gallery/5.jpg",
  },
  {
    id: 6,
    type: "nails",
    imageSrc: "img/gallery/6.jpg",
  },
  {
    id: 7,
    type: "brows",
    imageSrc: "img/gallery/7.jpg",
  },
  {
    id: 8,
    type: "brows",
    imageSrc: "img/gallery/8.jpg",
  },
  {
    id: 9,
    type: "coloration",
    imageSrc: "img/gallery/9.jpg",
  },
  {
    id: 10,
    type: "female",
    imageSrc: "img/gallery/10.jpg",
  },
  {
    id: 11,
    type: "coloration",
    imageSrc: "img/gallery/11.jpg",
  },
  {
    id: 12,
    type: "female",
    imageSrc: "img/gallery/12.jpg",
  },
  {
    id: 13,
    type: "nails",
    imageSrc: "img/gallery/13.jpg",
  },
  {
    id: 14,
    type: "coloration",
    imageSrc: "img/gallery/14.jpg",
  },
  {
    id: 15,
    type: "male",
    imageSrc: "img/gallery/15.jpg",
  },
  {
    id: 16,
    type: "nails",
    imageSrc: "img/gallery/16.jpg",
  },
  {
    id: 17,
    type: "nails",
    imageSrc: "img/gallery/17.jpg",
  },
  {
    id: 18,
    type: "nails",
    imageSrc: "img/gallery/18.png",
  },
  {
    id: 19,
    type: "nails",
    imageSrc: "img/gallery/19.png",
  },
  {
    id: 20,
    type: "nails",
    imageSrc: "img/gallery/20.png",
  },
  {
    id: 21,
    type: "female",
    imageSrc: "img/gallery/21.png",
  },
  {
    id: 22,
    type: "female",
    imageSrc: "img/gallery/22.png",
  },
  {
    id: 23,
    type: "nails",
    imageSrc: "img/gallery/23.png",
  },
  {
    id: 24,
    type: "nails",
    imageSrc: "img/gallery/24.png",
  },
  {
    id: 25,
    type: "nails",
    imageSrc: "img/gallery/25.jpg",
  },
  {
    id: 26,
    type: "male",
    imageSrc: "img/gallery/26.png",
  },
  {
    id: 27,
    type: "male",
    imageSrc: "img/gallery/27.png",
  },
  {
    id: 28,
    type: "male",
    imageSrc: "img/gallery/28.png",
  },
  {
    id: 29,
    type: "female",
    imageSrc: "img/gallery/29.jpg",
  },
  {
    id: 30,
    type: "styling",
    imageSrc: "img/gallery/30.jpg",
  },
  {
    id: 31,
    type: "styling",
    imageSrc: "img/gallery/31.jpg",
  },
  {
    id: 32,
    type: "female",
    imageSrc: "img/gallery/32.jpg",
  },
  {
    id: 33,
    type: "nails",
    imageSrc: "img/gallery/33.jpg",
  },
  {
    id: 34,
    type: "nails",
    imageSrc: "img/gallery/34.jpg",
  },
  {
    id: 35,
    type: "brow",
    imageSrc: "img/gallery/35.jpg",
  },
  {
    id: 36,
    type: "brow",
    imageSrc: "img/gallery/36.jpg",
  },
  {
    id: 37,
    type: "styling",
    imageSrc: "img/gallery/37.jpg",
  },
  {
    id: 38,
    type: "female",
    imageSrc: "img/gallery/38.jpg",
  },
  {
    id: 39,
    type: "female",
    imageSrc: "img/gallery/39.jpg",
  },
  {
    id: 40,
    type: "styling",
    imageSrc: "img/gallery/40.jpg",
  },
  {
    id: 41,
    type: "female",
    imageSrc: "img/gallery/41.jpg",
  },
  {
    id: 42,
    type: "female",
    imageSrc: "img/gallery/42.jpg",
  },
  {
    id: 43,
    type: "nails",
    imageSrc: "img/gallery/43.jpg",
  },
  {
    id: 44,
    type: "nails",
    imageSrc: "img/gallery/44.jpg",
  },
  {
    id: 45,
    type: "nails",
    imageSrc: "img/gallery/45.jpg",
  },
  {
    id: 46,
    type: "nails",
    imageSrc: "img/gallery/46.jpg",
  },
  {
    id: 47,
    type: "nails",
    imageSrc: "img/gallery/47.jpg",
  },
  {
    id: 48,
    type: "nails",
    imageSrc: "img/gallery/48.jpg",
  },
  {
    id: 49,
    type: "female",
    imageSrc: "img/gallery/49.jpg",
  },
];

let itemsPerLoad = 9;
let currentFilter = "all";
let itemsLoaded = 0;

// Модуль проверки скорости интернета
function checkInternetSpeed(thresholdMbps = 2, cacheTimeMs = 60000) {
  // Кэширование результата
  if (!window.__internetSpeedCache) {
    window.__internetSpeedCache = { value: null, timestamp: 0 };
  }
  const now = Date.now();
  if (window.__internetSpeedCache.value !== null && now - window.__internetSpeedCache.timestamp < cacheTimeMs) {
    return Promise.resolve(window.__internetSpeedCache.value);
  }

  // Проверка через navigator.connection
  if (navigator.connection && typeof navigator.connection.downlink === "number") {
    const isFast = navigator.connection.downlink > thresholdMbps;
    window.__internetSpeedCache = { value: isFast, timestamp: now };
    return Promise.resolve(isFast);
  }

  // Альтернативная проверка — загрузка маленького файла
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
    // Используем небольшой файл (например, favicon или tiny png)
    img.src = "img/gallery/1.jpg?speedtest=" + Math.random();
    // Таймаут на случай зависания
    setTimeout(() => {
      if (!finished) {
        finished = true;
        window.__internetSpeedCache = { value: false, timestamp: Date.now() };
        resolve(false);
      }
    }, 2000);
  });
}

// Функция загрузки элементов
function loadItems(reset = false) {
  const grid = document.querySelector("#grid_gallery-section");
  if (reset) {
    grid.innerHTML = "";
    itemsLoaded = 0;
  }

  let filteredData = data.filter(
    (item) => currentFilter === "all" || item.type === currentFilter
  );
  let itemsToLoad = filteredData.slice(itemsLoaded, itemsLoaded + itemsPerLoad);

  itemsToLoad.forEach((item) => {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item_gallery-section";
    gridItem.innerHTML = `
            <img src="${item.imageSrc}" alt="Фото" loading="lazy">
    `;
    grid.appendChild(gridItem);
  });

  itemsLoaded += itemsToLoad.length;

  // Показ или скрытие кнопки "Показать ещё"
  const showMoreBtn = document.querySelector("#show-more-btn_gallery-section");
  if (itemsLoaded < filteredData.length) {
    showMoreBtn.style.display = "block";
  } else {
    showMoreBtn.style.display = "none";
  }
}

// "Показать ещё"
document
  .querySelector("#show-more-btn_gallery-section")
  .addEventListener("click", function () {
    loadItems();
  });

// Первоначальная загрузка с асинхронной проверкой скорости
checkInternetSpeed(2).then((isFast) => {
  itemsPerLoad = isFast ? data.length : 9;
  loadItems();
});

//////////////////////////////// Модалка

const grid = document.querySelector("#grid_gallery-section");
const galleryModal = document.querySelector(".gallery-modal");

grid.addEventListener("click", (event) => {
  const target = event.target.closest(".grid-item_gallery-section");
  if (target) {
    const imgSrc = target.querySelector("img").getAttribute("src");
    galleryModal.style.display = "flex";
    galleryModal.innerHTML = `
        <img src="${imgSrc}" alt="Фото">
        <span class="close-modal">&times;</span>
    `;
    document.querySelector(".close-modal").addEventListener("click", () => {
      galleryModal.style.display = "none";
    });
  }
});

////////////////////////////////////// Фильтр

function setFilterHandlers() {
  document.querySelectorAll(".filter_gallery-section-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter_gallery-section-btn")
        .forEach((b) => b.classList.remove("active"));

      this.classList.add("active");

      const filterSection = document.querySelector(".filter_gallery-section");
      filterSection.classList.remove("open");

      const arrows = document.querySelectorAll(".gallery-filter-mobile-arrow");
      arrows.forEach((el) => {
        el.classList.remove("active");
      });

      currentFilter = this.getAttribute("data-filter_gallery-section");

      loadItems(true);

      setDropdownToggleHandler();
    });
  });
}

// Функция для открытия и закрытия выпадающего меню
function setDropdownToggleHandler() {
  const activeBtn = document.querySelector(
    ".filter_gallery-section-btn.active"
  );
  activeBtn.addEventListener("click", function () {
    const filterSection = document.querySelector(".filter_gallery-section");
    filterSection.classList.toggle("open"); // Переключаем класс для открытия/закрытия меню

    // Переключаем класс 'active' у стрелочки
    const arrow = this.querySelector(".gallery-filter-mobile-arrow");
    if (arrow) {
      arrow.classList.toggle("active");
    }
  });
}

// Инициализация обработчиков
setFilterHandlers();
setDropdownToggleHandler();
