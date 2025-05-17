/******************************** БЛОГ *********************************/

// База статей и новостей
const data = [
  {
    id: 1,
    type: "articles",
    title: "Как подобрать идеальное средство для укладки волос: Полное руководство",
    imageSrc: "img/blog/1.jpg",
    link: "/blog-article-1.html",
  },
  {
    id: 2,
    type: "articles",
    title:
      "Уход за окрашенными волосами",
    imageSrc: "img/blog/2.jpg",
    link: "/blog-article-2.html",
  },
  // {
  //   id: 3,
  //   type: "news",
  //   title:
  //     "Как подобрать идеальное средство для укладки волос: полное руководство",
  //   imageSrc: "img/blog/3.jpg",
  //   link: "https://example.com/item/3",
  // },
  // {
  //   id: 4,
  //   type: "articles",
  //   title: "Феном или пальцем — как эффективнее",
  //   imageSrc: "img/blog/4.jpg",
  //   link: "https://example.com/item/4",
  // },
  // {
  //   id: 5,
  //   type: "articles",
  //   title:
  //     "Если сильно потрясёшь головой, то волосы сами не покрасятся, расскажем почему",
  //   imageSrc: "img/blog/5.jpg",
  //   link: "https://example.com/item/5",
  // },
  // {
  //   id: 6,
  //   type: "articles",
  //   title: "Если ты щупаешь себя и улыбаешься, это нормально?",
  //   imageSrc: "img/blog/6.jpg",
  //   link: "https://example.com/item/6",
  // },
  // {
  //   id: 7,
  //   type: "articles",
  //   title:
  //     "Если поваляешься по земле, в волосах будет мусор — расскажем, чем его лучше вымыть",
  //   imageSrc: "img/blog/7.jpg",
  //   link: "https://example.com/item/6",
  // },
  // {
  //   id: 8,
  //   type: "articles",
  //   title:
  //     "Такая плохая причёска, что закрываешь волосы тряпкой? Иди срочно стричься",
  //   imageSrc: "img/blog/8.jpg",
  //   link: "https://example.com/item/6",
  // },
  // {
  //   id: 9,
  //   type: "articles",
  //   title:
  //     "Вокруг всё красное и глаза почернели? Ты нанюхалась плохого лака для ногтей — что делать",
  //   imageSrc: "img/blog/9.jpg",
  //   link: "https://example.com/item/6",
  // },
  // {
  //   id: 1,
  //   type: "articles",
  //   title: "Какой подарочный сертификат подарить женщине",
  //   imageSrc: "img/blog/1.jpg",
  //   link: "https://example.com/item/1",
  // },
  // {
  //   id: 2,
  //   type: "articles",
  //   title:
  //     "Как лучше постричь себя – также, как своего кота, или оставить побольше с боков",
  //   imageSrc: "img/blog/2.jpg",
  //   link: "https://example.com/item/2",
  // },
  // {
  //   id: 3,
  //   type: "news",
  //   title:
  //     "Как подобрать идеальное средство для укладки волос: полное руководство",
  //   imageSrc: "img/blog/3.jpg",
  //   link: "https://example.com/item/3",
  // },
  // {
  //   id: 4,
  //   type: "articles",
  //   title: "Феном или пальцем — как эффективнее",
  //   imageSrc: "img/blog/4.jpg",
  //   link: "https://example.com/item/4",
  // },
  // {
  //   id: 5,
  //   type: "articles",
  //   title:
  //     "Если сильно потрясёшь головой, то волосы сами не покрасятся, расскажем почему",
  //   imageSrc: "img/blog/5.jpg",
  //   link: "https://example.com/item/5",
  // },
  // {
  //   id: 6,
  //   type: "articles",
  //   title: "Если ты щупаешь себя и улыбаешься, это нормально?",
  //   imageSrc: "img/blog/6.jpg",
  //   link: "https://example.com/item/6",
  // },
  // {
  //   id: 7,
  //   type: "articles",
  //   title:
  //     "Если поваляешься по земле, в волосах будет мусор — расскажем, чем его лучше вымыть",
  //   imageSrc: "img/blog/7.jpg",
  //   link: "https://example.com/item/6",
  // },
  // {
  //   id: 8,
  //   type: "articles",
  //   title:
  //     "Такая плохая причёска, что закрываешь волосы тряпкой? Иди срочно стричься",
  //   imageSrc: "img/blog/8.jpg",
  //   link: "https://example.com/item/6",
  // },
  // {
  //   id: 9,
  //   type: "articles",
  //   title:
  //     "Вокруг всё красное и глаза почернели? Ты нанюхалась плохого лака для ногтей — что делать",
  //   imageSrc: "img/blog/9.jpg",
  //   link: "https://example.com/item/6",
  // },
];

let itemsPerLoad = 9;
let currentFilter = "all";
let itemsLoaded = 0;

// Функция для определения скорости интернета
function isInternetFast() {
  return navigator.connection
    ? navigator.connection.downlink > 1 // Скорость >1 Мбит/с считается быстрой
    : true; // Если определить не удалось, считаем, что интернет быстрый
}

// Функция загрузки элементов
function loadItems(reset = false) {
  const grid = document.querySelector("#grid_blog-section");
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
    gridItem.className = "grid-item_blog-section";

    gridItem.innerHTML = `
      <a href="${item.link}" class="grid-link_blog-section">
          <img src="${item.imageSrc}" alt="${item.title}">
          <h3>${item.title}</h3>
          <button class="read-btn_blog-section">Читать</button>
      </a>
  `;
    grid.appendChild(gridItem);
  });

  itemsLoaded += itemsToLoad.length;

  // Показ или скрытие кнопки "Показать ещё"
  const showMoreBtn = document.querySelector("#show-more-btn_blog-section");
  if (itemsLoaded < filteredData.length) {
    showMoreBtn.style.display = "block";
  } else {
    showMoreBtn.style.display = "none";
  }
}

// Фильтр
document.querySelectorAll(".filter_blog-section-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".filter_blog-section-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    currentFilter = this.getAttribute("data-filter_blog-section");
    loadItems(true);
  });
});

// "Показать ещё"
document
  .querySelector("#show-more-btn_blog-section")
  .addEventListener("click", function () {
    loadItems();
  });

// Первоначальная загрузка
if (isInternetFast()) {
  itemsPerLoad = data.length; // Загружаем все элементы
} else {
  itemsPerLoad = 9; // Загружаем первые 9 элементов
}

loadItems();

