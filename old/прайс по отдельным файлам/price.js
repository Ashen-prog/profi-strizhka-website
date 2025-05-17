const data = [
  {
    id: 2,
    type: "female",
    imageSrc: "img/price/2.png",
  },
  {
    id: 3,
    type: "female",
    imageSrc: "img/price/3.png",
  },
  {
    id: 4,
    type: "nails",
    imageSrc: "img/price/4.png",
  },
  {
    id: 5,
    type: "nails",
    imageSrc: "img/price/5.png",
  },
  {
    id: 6,
    type: "nails",
    imageSrc: "img/price/6.png",
  },
  {
    id: 7,
    type: "coloration",
    imageSrc: "img/price/7.png",
  },
  {
    id: 8,
    type: "coloration",
    imageSrc: "img/price/8.png",
  },
  {
    id: 9,
    type: "brows",
    imageSrc: "img/price/9.png",
  },
  {
    id: 10,
    type: "styling",
    imageSrc: "img/price/10.png",
  },
  {
    id: 11,
    type: "сarving-and-hair-restoration",
    imageSrc: "img/price/11.png",
  },
];

let itemsPerLoad = 9;
let currentFilter = "female";
let itemsLoaded = 0;

// Функция загрузки элементов
function loadItems(reset = false) {
  const grid = document.querySelector("#grid_gallery-section");
  if (reset) {
    grid.innerHTML = "";
    itemsLoaded = 0;
  }

  let filteredData = data.filter(
    (item) => item.type === currentFilter
  );
  let itemsToLoad = filteredData.slice(itemsLoaded, itemsLoaded + itemsPerLoad);

  itemsToLoad.forEach((item) => {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item_price-section";
    gridItem.innerHTML = `
                <img src="${item.imageSrc}" alt="Прайс">
        `;
    grid.appendChild(gridItem);
  });

  itemsLoaded += itemsToLoad.length;

}

// Первоначальная загрузка
loadItems();

/////////////////////////////// Модалка

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
