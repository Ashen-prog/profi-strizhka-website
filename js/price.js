document.addEventListener("DOMContentLoaded", () => {
  /*****************************************************************************
   * 0. ФУНКЦИИ: работа с хэшами (hair, nail, brow, styling) и обновление меню
   *****************************************************************************/
  function checkHashAndOpenSection() {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    // Принудительный сброс состояния
    activeTableId = null;

    switch (hash) {
      case "hair":
        setActiveTopLevel("Парикмахерские");
        showHairSubNav(true);
        setSubNavActive("Женский");
        loadContent("hair-women.html");
        break;

      case "styling":
        setActiveTopLevel("Парикмахерские");
        showHairSubNav(true);
        setSubNavActive("Женский");
        loadContent("hair-women.html#stylingScroll");
        break;

      case "nail":
        setActiveTopLevel("Ногтевой");
        showHairSubNav(false);
        loadContent("nail.html");
        break;

      case "brow":
        setActiveTopLevel("Брови");
        showHairSubNav(false);
        loadContent("brow.html");
        break;
    }
  }

  /**
   * setActiveTopLevel(searchText)
   * Ищет среди topLevelItems пункт, где item.textContent включает searchText,
   * делает его «активным», снимая активность с предыдущего.
   */
  function setActiveTopLevel(searchText) {
    if (activeItem) {
      activeItem.classList.remove(
        "price-navigation_item_active",
        "dropdown-open"
      );
    }
    topLevelItems.forEach((item) => {
      const txt = item.textContent.trim();
      if (txt.includes(searchText)) {
        item.classList.add("price-navigation_item_active");
        activeItem = item;
        isDropdownOpen = false;
        hideOtherItems();
      }
    });
  }

  // Показать или скрыть сабменю (Женский/Мужской)
  function showHairSubNav(show) {
    if (show && hairSubNav) {
      hairSubNav.style.display = "flex";
    } else if (hairSubNav) {
      hairSubNav.style.display = "none";
    }
  }

  // Выбрать «Женский» или «Мужской» в сабменю
  function setSubNavActive(name) {
    resetHairSubNavActive();
    hairSubNavItems.forEach((subItem) => {
      if (subItem.textContent.trim().includes(name)) {
        subItem.classList.add("price-subnavigation-hair_item_active");
      }
    });
  }

  // Если хотим реагировать на изменение хэша без перезагрузки (user manual edit)
  window.addEventListener("hashchange", checkHashAndOpenSection);

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
  let activeTableId = null;

  function openModal(tableId) {
    activeTableId = tableId;
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

      const selectedTextEl = document.getElementById(
        `selected-hair-type-${activeTableId}`
      );
      if (selectedTextEl) {
        selectedTextEl.textContent = type;
      }
    }
    closeModal("hairTypeModal");
    closeModal("nailMasterModal");
  }

  function attachModalHandlers(container) {
    container.querySelectorAll("[data-type-option]").forEach((li) => {
      li.addEventListener("click", () => {
        const type = li.getAttribute("data-type-option");
        selectHairOrMasterType(type);
      });
    });

    container.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", () => {
        closeModal("hairTypeModal");
        closeModal("nailMasterModal");
      });
    });

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
   * 4. ПЛАВНАЯ АНИМАЦИЯ ЗАГРУЗКИ КОНТЕНТА
   *****************************************************************************/
  const priceBody = document.querySelector(".price-body");
  let isFadingOut = false;
  let nextURL = null;
  priceBody.addEventListener("transitionend", async (e) => {
    if (e.propertyName !== "opacity") return;
    if (isFadingOut && priceBody.style.opacity === "0") {
      await loadContentDirectly();
    }
  });

  function loadContent(url) {
    // Проверяем, есть ли уже параметры в URL
    const separator = url.includes("?") ? "&" : "?";
    const urlWithCache = url + separator + "v=" + Date.now();

    nextURL = urlWithCache;
    isFadingOut = true;

    // Принудительный сброс состояния модалок
    activeTableId = null;

    // Закрытие всех открытых модалок
    const hairModal = document.getElementById("hairTypeModal");
    const nailModal = document.getElementById("nailMasterModal");
    if (hairModal) hairModal.style.display = "none";
    if (nailModal) nailModal.style.display = "none";

    // ИСПРАВЛЕНИЕ: Принудительно устанавливаем opacity в 1, затем в 0
    priceBody.style.opacity = "1";

    // Небольшая задержка для принудительного запуска анимации
    setTimeout(() => {
      priceBody.style.opacity = "0";

      // ДОБАВЛЯЕМ: Резервный запуск загрузки если transitionend не сработает
      setTimeout(() => {
        if (isFadingOut && priceBody.style.opacity === "0") {
          loadContentDirectly();
        }
      }, 500); // 500мс - достаточно для анимации
    }, 10);
  }

  // ДОБАВЛЯЕМ: Функция прямой загрузки контента
  async function loadContentDirectly() {
    if (!nextURL || !isFadingOut) return;

    try {
      const response = await fetch(nextURL, {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });

      if (!response.ok) {
        throw new Error(`Ошибка загрузки файла: ${nextURL}`);
      }

      const html = await response.text();

      // Полная очистка содержимого
      priceBody.innerHTML = "";

      // Вставляем новый контент
      setTimeout(() => {
        priceBody.innerHTML = html;

        // Сброс состояний
        activeTableId = null;

        // Если url содержит "#stylingScroll"
        if (nextURL.includes("#styling")) {
          scrollStyling(900);
        }

        // Обновляем цены в таблицах
        Object.keys(tablesData).forEach((tableId) => {
          const tData = tablesData[tableId];
          updatePrices(tableId, tData.currentHairType);
        });

        // Навешиваем обработчики
        attachPriceTableHandlers(priceBody);
        attachPriceQuestionHandlers(priceBody);
        attachSliderHandlers(priceBody);
        attachModalHandlers(priceBody);

        isFadingOut = false;
        priceBody.style.opacity = "1";
      }, 50);
    } catch (error) {
      console.error("Ошибка загрузки:", error);
      priceBody.innerHTML = `<p style="color: red;">Не удалось загрузить контент: ${error.message}</p>`;
      isFadingOut = false;
      priceBody.style.opacity = "1";
    }
  }

  // П.2: скролл «почти до низа», оставляя 700px
  function scrollStyling(offsetFromBottom) {
    // вычислим позицию, где «докрутить»
    const windowH = window.innerHeight;
    const docH = document.body.scrollHeight;
    const scrollPos = docH - windowH - offsetFromBottom;
    window.scrollTo({ top: scrollPos, behavior: "smooth" });
  }

  function attachPriceTableHandlers(container) {
    const selectors = container.querySelectorAll(".hair-type-selector");
    selectors.forEach((selector) => {
      selector.addEventListener("click", () => {
        const tableId = selector.getAttribute("data-table-id");
        openModal(tableId);
      });
    });
  }

  function attachPriceQuestionHandlers(container) {
    const newQ = container.querySelectorAll(".price-qustion");
    newQ.forEach((q) => {
      q.addEventListener("click", () => {
        priceQuestionModal.style.display = "block";
      });
    });
  }

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
        sliderImages.style.transform = `translateX(${
          -currentIndex * slideWidth
        }px)`;
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
   * 6. МОБИЛЬНОЕ МЕНЮ
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

  function resetHairSubNavActive() {
    hairSubNavItems.forEach((sub) =>
      sub.classList.remove("price-subnavigation-hair_item_active")
    );
  }

  hideOtherItems();

  topLevelItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item === activeItem) {
        if (!isDropdownOpen) {
          showOtherItems();
          isDropdownOpen = true;
        } else {
          hideOtherItems();
          isDropdownOpen = false;
        }
      } else {
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
    // Если выбрали «Парикмахерские»
    if (text.includes("Парикмахерские")) {
      if (hairSubNav) {
        hairSubNav.style.display = "flex";
      }
      priceBody.innerHTML = "";
      priceBody.style.opacity = "1";
    } else {
      // Ногтевой или Брови => субменю не видно
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
   * 7. ИНИЦИАЛИЗАЦИЯ: навешиваем обработчики на уже существующие модалки + hash
   *****************************************************************************/
  attachModalHandlers(document);
  checkHashAndOpenSection(); // читаем хэш (#hair / #nail / #brow / #styling) и открываем нужное

  /*****************************************************************************
   * 8. ЭКСПОРТ ФУНКЦИИ ДЛЯ ВНЕШНЕГО ВЫЗОВА
   *****************************************************************************/
  // Делаем функцию доступной глобально для script.js
  window.checkHashAndOpenSection = checkHashAndOpenSection;
}); // конец DOMContentLoaded
