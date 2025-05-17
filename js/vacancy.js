// База Вакансий
const data = [
  {
    id: 1,
    title: "Парикмахер-универсал",
    description: "",
    imageSrc: "img/vacancy-hair.jpg",
    link: "/vacancy-hairstylist.html",
  },
  {
    id: 2,
    title: "Мастер маникюра",
    description:
      "",
    imageSrc: "img/vacancy-nail.jpg",
    link: "vacancy-nail.html",
  },
];

// Функция загрузки элементов
function loadItems() {
  const grid = document.querySelector("#grid_vacancy-section");
  grid.innerHTML = ""; // Очистка содержимого перед загрузкой новых элементов

  data.forEach((item) => {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item_vacancy-section";

    gridItem.innerHTML = `
    <a href="${item.link}" class="grid-link_vacancy-section">
        <img src="${item.imageSrc}" alt="${item.title}">
        <div class="grid-link_vacancy-section_body">
            <h3>${item.title}</h3>
            <div class="vacancies-description">${item.description}</div>
            <button class="read-btn_vacancy-section">Подробнее о вакансии</button>
        </div>
        </a>
      `;
    grid.appendChild(gridItem);
  });
}

loadItems();