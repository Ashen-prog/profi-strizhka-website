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
// const priceQustions = document.querySelectorAll(".price-qustion");
// const priceQuestionModalBtn = document.querySelector(".priceQuestionModal_btn");

// const openSolution = () => {
//   document.querySelector("#priceQuestionModal").style.display = "block";
// };

// const closePriceQuestionModal = () => {
//   document.querySelector("#priceQuestionModal").style.display = "none";
// };

// priceQustions.forEach((qustion) => {
//   qustion.addEventListener("click", () => {
//     openSolution();
//   });
// });

// priceQuestionModalBtn.addEventListener("click", () => {
//   closePriceQuestionModal();
// });

/***********/
// Цены для разных типов волос
// Хранение данных о таблицах
const tablesData = {
  "table-1": {
    prices: {
      "Мастер": ["500 ₽", "1450 ₽", "700 ₽", "700 ₽", "2800 ₽", "1000 ₽", "150-300 ₽", "450 ₽", "100 ₽"],
      "ТОП-Мастер": ["650 ₽", "1550 ₽", "800 ₽", "1000 ₽", "3000 ₽", "1200 ₽", "150-300 ₽", "450 ₽", "100 ₽"],
    },
    currentHairType: "Мастер",
  },
  "table-2": {
    prices: {
      "Мастер": ["1100 ₽", "1500 ₽", "800 ₽", "1900 ₽", "2200 ₽", "1700 ₽", "3000 ₽", "1200 ₽"],
      "ТОП-Мастер": ["1300 ₽", "1600 ₽", "900 ₽", "2100 ₽", "2400 ₽", "1900 ₽", "3000 ₽", "1200 ₽"],
    },
    currentHairType: "Мастер",
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

function selectHairType(type) { // Активируется при клике в модалке
  if (activeTableId) {
    const tableData = tablesData[activeTableId]; // Выбирает нужную таблицу (та на которую кликнули в модалке)
    tableData.currentHairType = type; // Устанавливает занчение для currentHairType (в таблице) на нужное (мастер или ТОП-мастер)
    updatePrices(activeTableId, type);

    // Обновление текста в селекторе
    document.getElementById(`selected-hair-type-${activeTableId}`).textContent =
      type;
  }
  closeModal();
}

function updatePrices(tableId, hairType) { //Активтруется внутри selectHairType()
  const table = document.getElementById(tableId); //Выбрал таблицу в html
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

priceNavigationItemActive.addEventListener("click", () => {
  if (!isDropdownOpen) {
    items.forEach((item) => {
      item.classList.add("show");
    });
    arrow.classList.add("rotated");
    isDropdownOpen = true;
  } else {
    items.forEach((item) => {
      item.classList.remove("show");
    });
    arrow.classList.remove("rotated");
    isDropdownOpen = false;
  }
});

//Ссылки
const hairLinks = document.querySelectorAll(".hair-link");
const browLinks = document.querySelectorAll(".brow-link");

hairLinks.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "/price-hair-women.html";
  });
});
browLinks.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "/price-brow.html";
  });
});
