/* CЛАЙДЕР */

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".price-body_item-slider");

  sliders.forEach((slider) => {
    const prevArrow = slider.querySelector(".prev-arrow");
    const nextArrow = slider.querySelector(".next-arrow");
    const sliderImages = slider.querySelector(".slider-images");
    const images = slider.querySelectorAll(".slider-images img");
    let currentIndex = 0;

    function updateSlider() {
      sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevArrow.addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      updateSlider();
    });

    nextArrow.addEventListener("click", () => {
      currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      updateSlider();
    });
  });
});

/* Модалка-подсказка */
const priceQustions = document.querySelectorAll(".price-qustion");
const priceQuestionModalBtn = document.querySelector(".priceQuestionModal_btn");

const openSolution = () => {
  document.querySelector("#priceQuestionModal").style.display = "block";
};

const closePriceQuestionModal = () => {
  document.querySelector("#priceQuestionModal").style.display = "none";
};

priceQustions.forEach((qustion) => {
  qustion.addEventListener("click", () => {
    openSolution();
  });
});

priceQuestionModalBtn.addEventListener("click", () => {
  closePriceQuestionModal();
});

/***********/
// Цены для разных типов волос
// Хранение данных о таблицах
const tablesData = {
  "table-1": {
    prices: {
      "Короткие волосы": ["400 ₽", "900 ₽", "800 ₽", "1500 ₽"],
      "Средние волосы": ["400 ₽", "900 ₽", "1000 ₽", "1700 ₽"],
      "Длинные волосы": ["500 ₽", "1200 ₽", "1300 ₽", "1900 ₽"],
      "Очень длинные волосы": ["550 ₽", "1400 ₽", "1600 ₽", "2300 ₽"],
    },
    currentHairType: "Короткие волосы",
  },
  "table-2": {
    prices: {
      "Короткие волосы": ["1400 ₽", "1850 ₽", "2200 ₽", "1850 ₽"],
      "Средние волосы": ["1600 ₽", "2100 ₽", "2450 ₽", "2100 ₽"],
      "Длинные волосы": ["1900 ₽", "2350 ₽", "2500 ₽", "2350 ₽"],
      "Очень длинные волосы": ["2200 ₽", "2650 ₽", "3100 ₽", "2600 ₽"],
    },
    currentHairType: "Короткие волосы",
  },
};


let activeTableId = null;

function openModal(tableId) {
  activeTableId = tableId;
  document.getElementById("hairTypeModal").style.display = "block";
}

function closeModal() {
  document.getElementById("hairTypeModal").style.display = "none";
  activeTableId = null;
}

function selectHairType(type) {
  if (activeTableId) {
    const tableData = tablesData[activeTableId];
    tableData.currentHairType = type;
    updatePrices(activeTableId, type);

    // Обновление текста в селекторе
    document.getElementById(`selected-hair-type-${activeTableId}`).textContent =
      type;
  }
  closeModal();
}

function updatePrices(tableId, hairType) {
  const table = document.getElementById(tableId);
  const priceElements = table.querySelectorAll(".service-price");
  const selectedPrices = tablesData[tableId].prices[hairType];

  priceElements.forEach((elem, index) => {
    elem.textContent = selectedPrices[index] || "";
  });
}

// Инициализация всех таблиц
document.addEventListener("DOMContentLoaded", () => {
  Object.keys(tablesData).forEach((tableId) => {
    updatePrices(tableId, tablesData[tableId].currentHairType);
  });
});

// Закрытие модального окна при клике вне его области
window.onclick = function (event) {
  const modal = document.getElementById("hairTypeModal");
  if (event.target === modal) {
    closeModal();
  }
};

//////////////////////////////// Мобильный вариант фильтра

const priceNavigationItemActive = document.querySelector(
  ".price-navigation_item_active"
);
const items = document.querySelectorAll(
  ".price-navigation_item:not(.price-navigation_item_active)"
);
const arrow = priceNavigationItemActive.querySelector("img");
let isDropdownOpen = false;

// Обработчик клика
priceNavigationItemActive.addEventListener("click", () => {
  if (!isDropdownOpen) {
    items.forEach((item) => {
      item.classList.add("show"); // Показываем элементы
    });
    arrow.classList.add("rotated"); // Поворачиваем стрелку
    isDropdownOpen = true;
  } else {
    items.forEach((item) => {
      item.classList.remove("show"); // Скрываем элементы
    });
    arrow.classList.remove("rotated"); // Возвращаем стрелку в исходное положение
    isDropdownOpen = false;
  }
});

//Ссылки

const nailLinks = document.querySelectorAll(".nail-link");
const browLinks = document.querySelectorAll(".brow-link");
const hairManLinks = document.querySelectorAll(".hair-man-link");


nailLinks.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "/price-nail.html";
  })
})
browLinks.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "/price-brow.html";
  })
})
hairManLinks.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "/price-hair-man.html";
  })
})