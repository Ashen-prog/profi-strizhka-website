document.addEventListener("DOMContentLoaded", () => {
  /*****************************************************************************
   * 1. ДАННЫЕ О ЦЕНАХ (tablesData) И ОБЩИЕ ФУНКЦИИ ДЛЯ ОБНОВЛЕНИЯ ТАБЛИЦ
   *****************************************************************************/
  const tablesData = {
    "hair-table-1": {
      prices: {
        "Короткие волосы": ["400 ₽", "900 ₽", "800 ₽", "1500 ₽"],
        "Средние волосы": ["400 ₽", "900 ₽", "1000 ₽", "1700 ₽"],
        "Длинные волосы": ["500 ₽", "1200 ₽", "1300 ₽", "1900 ₽"],
        "Очень длинные волосы": ["550 ₽", "1400 ₽", "1600 ₽", "2300 ₽"],
      },
      currentHairType: "Короткие волосы",
    },
    "hair-table-2": {
      prices: {
        "Короткие волосы": ["1400 ₽", "1850 ₽", "2200 ₽", "1850 ₽"],
        "Средние волосы": ["1600 ₽", "2100 ₽", "2450 ₽", "2100 ₽"],
        "Длинные волосы": ["1900 ₽", "2350 ₽", "2500 ₽", "2350 ₽"],
        "Очень длинные волосы": ["2200 ₽", "2650 ₽", "3100 ₽", "2600 ₽"],
      },
      currentHairType: "Короткие волосы",
    },
    "nail-table-1": {
      prices: {
        Мастер: [
          "500 ₽",
          "1450 ₽",
          "700 ₽",
          "700 ₽",
          "2800 ₽",
          "1000 ₽",
          "150-300 ₽",
          "450 ₽",
          "100 ₽",
        ],
        "ТОП-Мастер": [
          "650 ₽",
          "1550 ₽",
          "800 ₽",
          "1000 ₽",
          "3000 ₽",
          "1200 ₽",
          "150-300 ₽",
          "450 ₽",
          "100 ₽",
        ],
      },
      currentHairType: "Мастер",
    },
    "nail-table-2": {
      prices: {
        Мастер: [
          "1100 ₽",
          "1500 ₽",
          "800 ₽",
          "1900 ₽",
          "2200 ₽",
          "1700 ₽",
          "3000 ₽",
          "1200 ₽",
        ],
        "ТОП-Мастер": [
          "1300 ₽",
          "1600 ₽",
          "900 ₽",
          "2100 ₽",
          "2400 ₽",
          "1900 ₽",
          "3000 ₽",
          "1200 ₽",
        ],
      },
      currentHairType: "Мастер",
    },
  };

  // Обновление цен в конкретной таблице
  function updatePrices(tableId, hairType) {
    const table = document.getElementById(tableId);
    if (!table) return;
    const priceElements = table.querySelectorAll(".service-price");
    const selectedPrices = tablesData[tableId].prices[hairType];

    priceElements.forEach((elem, index) => {
      elem.textContent = selectedPrices[index] || "";
    });
  }

  /*****************************************************************************
   * 2. МОДАЛКИ (Выбор типа волос / Мастера)
   *****************************************************************************/
  let activeTableId = null; // запоминаем, для какой таблицы открывали модалку

  function openModal(tableId) {
    activeTableId = tableId;
    // Если таблица относится к ногтям — открываем "nailMasterModal", иначе "hairTypeModal"
    if (tableId.includes("nail")) {
      document.getElementById("nailMasterModal").style.display = "block";
    } else {
      document.getElementById("hairTypeModal").style.display = "block";
    }
  }

  function closeModal(modalId) {
    const modalEl = document.getElementById(modalId);
    if (modalEl) {
      modalEl.style.display = "none";
    }
    activeTableId = null;
  }

  function selectHairOrMasterType(type) {
    if (activeTableId && tablesData[activeTableId]) {
      const tableData = tablesData[activeTableId];
      tableData.currentHairType = type;
      updatePrices(activeTableId, type);

      // Меняем текст в <span id="selected-hair-type-XXXX">
      const selectedTextEl = document.getElementById(
        `selected-hair-type-${activeTableId}`
      );
      if (selectedTextEl) {
        selectedTextEl.textContent = type;
      }
    }
    // Закрываем обе модалки
    closeModal("hairTypeModal");
    closeModal("nailMasterModal");
  }

  /*****************************************************************************
   * 2а. ФУНКЦИЯ ДЛЯ ПОВТОРНОГО НАВЕШИВАНИЯ ОБРАБОТЧИКОВ НА МОДАЛКИ
   *****************************************************************************/
  function attachModalHandlers(container) {
    // Кнопки «Мастер / ТОП-Мастер»
    container.querySelectorAll("[data-type-option]").forEach((li) => {
      li.addEventListener("click", () => {
        const type = li.getAttribute("data-type-option");
        selectHairOrMasterType(type);
      });
    });

    // Крестики «×» для закрытия
    container.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", () => {
        closeModal("hairTypeModal");
        closeModal("nailMasterModal");
      });
    });

    // Чтобы модалка закрывалась при клике на подложку (если хотите)
    window.addEventListener("click", (event) => {
      const hairModal = document.getElementById("hairTypeModal");
      const nailModal = document.getElementById("nailMasterModal");
      if (event.target === hairModal) {
        closeModal("hairTypeModal");
      }
      if (event.target === nailModal) {
        closeModal("nailMasterModal");
      }
    });
  }

  /*****************************************************************************
   * 3. МОДАЛКА "ВОПРОСИК"
   *****************************************************************************/
  const priceQuestionModal = document.getElementById("priceQuestionModal");
  const priceQuestions = document.querySelectorAll(".price-qustion");

  priceQuestions.forEach((q) => {
    q.addEventListener("click", () => {
      priceQuestionModal.style.display = "block";
    });
  });

  document.querySelectorAll("[data-close-price-question]").forEach((btn) => {
    btn.addEventListener("click", () => {
      priceQuestionModal.style.display = "none";
    });
  });

  document.querySelectorAll(".priceQuestionModal_btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      priceQuestionModal.style.display = "none";
    });
  });

  /*****************************************************************************
   * 4. ПЛАВНАЯ АНИМАЦИЯ ЗАГРУЗКИ КОНТЕНТА (fade out -> load -> fade in)
   *****************************************************************************/
  const priceBody = document.querySelector(".price-body");
  let isFadingOut = false;
  let nextURL = null;

  // Слушаем окончание transition по opacity у .price-body
  priceBody.addEventListener("transitionend", async (e) => {
    if (e.propertyName !== "opacity") return;

    // Если только что закончился fadeOut (opacity == 0)
    if (isFadingOut && priceBody.style.opacity === "0") {
      try {
        const response = await fetch(nextURL);
        if (!response.ok) {
          throw new Error(`Ошибка загрузки файла: ${nextURL}`);
        }
        const html = await response.text();
        priceBody.innerHTML = html;

        // После вставки контента — обновляем цены, навешиваем обработчики
        Object.keys(tablesData).forEach((tableId) => {
          const tData = tablesData[tableId];
          updatePrices(tableId, tData.currentHairType);
        });

        attachPriceTableHandlers(priceBody);
        attachPriceQuestionHandlers(priceBody);
        attachSliderHandlers(priceBody);
        // <-- Важно! Чтобы Мастер/ТОП-Мастер и крестики снова заработали:
        attachModalHandlers(priceBody);
      } catch (error) {
        console.error(error);
        priceBody.innerHTML = `<p>Не удалось загрузить контент: ${nextURL}</p>`;
      }

      // Завершаем fadeOut -> делаем fadeIn
      isFadingOut = false;
      priceBody.style.opacity = "1";
    }
  });

  // При переключении раздела (Ногтевой, Брови...) вызываем loadContent
  async function loadContent(url) {
    nextURL = url;
    isFadingOut = true;
    priceBody.style.opacity = "0";
  }

  // Навешивание обработчиков на кнопки выбора длины волос / мастера (иконки со стрелочкой)
  function attachPriceTableHandlers(container) {
    const selectors = container.querySelectorAll(".hair-type-selector");
    selectors.forEach((selector) => {
      selector.addEventListener("click", () => {
        const tableId = selector.getAttribute("data-table-id");
        openModal(tableId);
      });
    });
  }

  // Если подгружаются новые "вопросики" .price-qustion
  function attachPriceQuestionHandlers(container) {
    const newQ = container.querySelectorAll(".price-qustion");
    newQ.forEach((q) => {
      q.addEventListener("click", () => {
        priceQuestionModal.style.display = "block";
      });
    });
  }

  /*****************************************************************************
   * 5. ФУНКЦИЯ ДЛЯ ПОДКЛЮЧЕНИЯ СЛАЙДЕРОВ
   *****************************************************************************/
  function attachSliderHandlers(container) {
    const sliderContainers = container.querySelectorAll(".slider-container");

    sliderContainers.forEach((sliderContainer) => {
      const sliderImages = sliderContainer.querySelector(".slider-images");
      if (!sliderImages) return;

      const images = sliderImages.querySelectorAll("img");
      const prevBtn = sliderContainer.querySelector(".prev-arrow");
      const nextBtn = sliderContainer.querySelector(".next-arrow");

      let currentIndex = 0;
      const totalSlides = images.length;

      function updateSlider() {
        const slideWidth = sliderContainer.offsetWidth;
        sliderImages.style.transform = `translateX(${-(
          currentIndex * slideWidth
        )}px)`;
      }

      sliderImages.style.display = "flex";
      sliderImages.style.transition = "transform 0.3s ease";

      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          updateSlider();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % totalSlides;
          updateSlider();
        });
      }

      updateSlider();
    });
  }

  /*****************************************************************************
   * 6. МОБИЛЬНОЕ МЕНЮ (Парикмахерские / Ногтевой / Брови) + Сабменю (Женский / Мужской)
   *****************************************************************************/
  const topLevelItems = document.querySelectorAll(".price-navigation_item");
  const hairSubNav = document.querySelector(".price-subnavigation-hair");
  const hairSubNavItems = hairSubNav
    ? hairSubNav.querySelectorAll(".price-subnavigation-hair_item")
    : [];

  let activeItem =
    document.querySelector(".price-navigation_item_active") || null;
  let isDropdownOpen = false;

  function hideOtherItems() {
    topLevelItems.forEach((item) => {
      if (item !== activeItem) {
        item.classList.remove("show");
      }
    });
    if (activeItem) {
      activeItem.classList.remove("dropdown-open");
    }
  }

  function showOtherItems() {
    topLevelItems.forEach((item) => {
      if (item !== activeItem) {
        item.classList.add("show");
      }
    });
    if (activeItem) {
      activeItem.classList.add("dropdown-open");
    }
  }

  hideOtherItems();

  topLevelItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item === activeItem) {
        // клик по уже активному
        if (!isDropdownOpen) {
          showOtherItems();
          isDropdownOpen = true;
        } else {
          hideOtherItems();
          isDropdownOpen = false;
        }
      } else {
        // клик по новому
        if (activeItem) {
          activeItem.classList.remove(
            "price-navigation_item_active",
            "dropdown-open"
          );
        }
        item.classList.add("price-navigation_item_active");
        activeItem = item;
        isDropdownOpen = false;
        hideOtherItems();

        handleSectionChange(item);
      }
    });
  });

  function handleSectionChange(item) {
    const text = item.textContent.trim();
    if (text.includes("Парикмахерские")) {
      if (hairSubNav) {
        hairSubNav.style.display = "flex";
      }
      // Очищаем .price-body
      priceBody.innerHTML = "";
      priceBody.style.opacity = "1";
    } else {
      if (hairSubNav) {
        hairSubNav.style.display = "none";
        resetHairSubNavActive();
      }
      if (text.includes("Ногтевой")) {
        loadContent("nail.html");
      } else if (text.includes("Брови")) {
        loadContent("brow.html");
      }
    }
  }

  function resetHairSubNavActive() {
    hairSubNavItems.forEach((sub) =>
      sub.classList.remove("price-subnavigation-hair_item_active")
    );
  }

  hairSubNavItems.forEach((subItem) => {
    subItem.addEventListener("click", () => {
      resetHairSubNavActive();
      subItem.classList.add("price-subnavigation-hair_item_active");

      const text = subItem.textContent.trim();
      if (text.includes("Женский")) {
        loadContent("hair-women.html");
      } else if (text.includes("Мужской")) {
        loadContent("hair-men.html");
      }
    });
  });

  /*****************************************************************************
   * 7. ВПЕРВЫЕ НАВЕШИВАЕМ ОБРАБОТЧИКИ НА СУЩЕСТВУЮЩИЕ МОДАЛКИ
   *****************************************************************************/
  // Чтобы работали клики на крестики и «Мастер / ТОП-Мастер», которые были изначально
  attachModalHandlers(document);
});
