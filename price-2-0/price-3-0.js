document.addEventListener("DOMContentLoaded", () => {
  const priceBody = document.querySelector(".price-body");
  const topLevelItems = document.querySelectorAll(".price-navigation_item");
  const hairSubNav = document.querySelector(".price-subnavigation-hair");
  const hairSubNavItems = hairSubNav
    ? hairSubNav.querySelectorAll(".price-subnavigation-hair_item")
    : [];

  // Показать пустую страницу по умолчанию
  priceBody.innerHTML = "<p>Выберите раздел, чтобы увидеть цены.</p>";

  function loadContent(url, scriptUrl) {
    priceBody.style.transition = "opacity 0.3s ease";
    priceBody.style.opacity = "0";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки файла ${url}`);
        }
        return response.text();
      })
      .then((html) => {
        priceBody.innerHTML = html;
        if (scriptUrl) {
          const script = document.createElement("script");
          script.src = scriptUrl;
          script.defer = true;
          document.body.appendChild(script);
        }
      })
      .catch((error) => {
        console.error("Ошибка загрузки контента:", error);
        priceBody.innerHTML = `<p>Не удалось загрузить контент по адресу: ${url}</p>`;
      })
      .finally(() => {
        priceBody.style.opacity = "1";
      });
  }

  function resetTopLevelActive() {
    topLevelItems.forEach((item) => {
      item.classList.remove("price-navigation_item_active");
    });
  }

  function resetHairSubNavActive() {
    hairSubNavItems.forEach((item) => {
      item.classList.remove("price-subnavigation-hair_item_active");
    });
  }

  topLevelItems.forEach((item) => {
    item.addEventListener("click", () => {
      const sectionName = item.textContent.trim();
      resetTopLevelActive();
      item.classList.add("price-navigation_item_active");

      if (sectionName.includes("Парикмахерские")) {
        hairSubNav.style.display = "flex";
      } else {
        hairSubNav.style.display = "none";
        resetHairSubNavActive();
      }

      if (sectionName.includes("Ногтевой")) {
        loadContent("nail.html", "price-nail.js");
      } else if (sectionName.includes("Брови")) {
        loadContent("brow.html", "price-brow.js");
      } else if (sectionName.includes("Парикмахерские")) {
        priceBody.innerHTML =
          "<p>Выберите подзаголовок (женский/мужской зал), чтобы увидеть цены.</p>";
      }
    });
  });

  hairSubNavItems.forEach((subItem) => {
    subItem.addEventListener("click", () => {
      resetHairSubNavActive();
      subItem.classList.add("price-subnavigation-hair_item_active");

      const text = subItem.textContent.trim();
      if (text.includes("Женский")) {
        loadContent("hair-women.html", "price-hair-women.js");
      } else if (text.includes("Мужской")) {
        loadContent("hair-man.html", "price-hair-man.js");
      }
    });
  });

  // Начальная инициализация
  priceBody.innerHTML = "<p>Выберите раздел, чтобы увидеть цены.</p>";
});
