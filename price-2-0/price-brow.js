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
const hairLinks = document.querySelectorAll(".hair-link");
const nailLinks = document.querySelectorAll(".nail-link");


hairLinks.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "/price-hair-women.html";
  });
});
nailLinks.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "/price-nail.html";
  })
})