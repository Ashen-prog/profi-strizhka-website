//Переключение салонов

// document.addEventListener("DOMContentLoaded", () => {
//   const selectors = document.querySelectorAll(".salon-selection-flex_item");
//   const salonInfos = document.querySelectorAll(".salon-info");

//   selectors.forEach((selector, index) => {
//     selector.addEventListener("click", () => {
//       // Сбрасываем активный класс у всех селекторов
//       selectors.forEach((sel) =>
//         sel.classList.remove("salon-selection_active")
//       );
//       // Скрываем все блоки информации о салонах
//       salonInfos.forEach((info) => (info.style.display = "none"));

//       // Добавляем активный класс текущему селектору
//       selector.classList.add("salon-selection_active");
//       // Показываем соответствующий блок информации
//       salonInfos[index].style.display = "flex";
//     });
//   });

//   // Инициализация - отображаем первый салон по умолчанию
//   selectors[0].classList.add("salon-selection_active");
//   salonInfos[0].style.display = "flex";
// });

document.addEventListener("DOMContentLoaded", () => {
  const selectors = document.querySelectorAll(".salon-selection-flex_item");
  const salonInfos = document.querySelectorAll(".salon-info");

  // Получаем индекс салона из URL
  const urlParams = new URLSearchParams(window.location.search);
  const salonIndex = parseInt(urlParams.get("salonIndex"), 10);

  // Устанавливаем по умолчанию первый салон, если индекс не корректен
  const activeIndex =
    salonIndex >= 0 && salonIndex < selectors.length ? salonIndex : 0;

  // Устанавливаем активный салон
  selectors.forEach((sel) => sel.classList.remove("salon-selection_active"));
  salonInfos.forEach((info) => (info.style.display = "none"));

  selectors[activeIndex].classList.add("salon-selection_active");
  salonInfos[activeIndex].style.display = "flex";

  // Добавляем логику переключения по клику
  selectors.forEach((selector, index) => {
    selector.addEventListener("click", () => {
      selectors.forEach((sel) =>
        sel.classList.remove("salon-selection_active")
      );
      salonInfos.forEach((info) => (info.style.display = "none"));

      selector.classList.add("salon-selection_active");
      salonInfos[index].style.display = "flex";
    });
  });
});

// Кнопки записаться (в карточках салонов)

const salonsBtns = document.querySelectorAll(".salon-grid_item_btn");

salonsBtns.forEach((btn, index) => {
  if (index === 0) {
    btn.addEventListener("click", () => {
      window.open("https://n1059344.yclients.com");
    });
  } else if (index === 1) {
    btn.addEventListener("click", () => {
      window.open("https://n982084.yclients.com");
    });
  } else if (index === 2) {
    btn.addEventListener("click", () => {
      window.open("https://n995285.yclients.com");
    });
  }
});

//Слайдер в выборе салонов

const slider = document.querySelector(".salon-selection-mobile-slider");
const slides = Array.from(
  document.querySelectorAll(".salon-selection-flex_item")
);
const dots = Array.from(
  document.querySelectorAll(".salon-selection-mobile-dot")
);

// Функция обновления активной точки
function updateActiveDot(index) {
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
}

// Функция для определения текущего слайда
function getCurrentSlideIndex() {
  const scrollLeft = slider.scrollLeft;
  const slideWidth =
    slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
  return Math.round(scrollLeft / slideWidth);
}

// Обновление активной точки при прокрутке
slider.addEventListener("scroll", () => {
  const index = getCurrentSlideIndex();
  updateActiveDot(index);
});

// Переключение по клику на точки
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const slideWidth =
      slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
    slider.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
    updateActiveDot(index);
  });
});
