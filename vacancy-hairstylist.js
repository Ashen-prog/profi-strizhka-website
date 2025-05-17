// Модалка открытия/закрытия
const vacancyBtn = document.querySelector(".vacancy-btn");
const vacancyModal = document.querySelector(".vacancy-modal");
const thankYouModal = document.getElementById("thankYouModal");

// Открытие модального окна заявки
vacancyBtn?.addEventListener("click", () => {
  vacancyModal.style.display = "flex";
});

// Закрытие модального окна заявки
document.querySelector(".close-vacancy-modal").addEventListener("click", () => {
  vacancyModal.style.display = "none";
});

// Dropdown для выбора вакансии
const dropdownSelected = document.querySelector(".dropdown-selected_vacancy");
const dropdownList = document.querySelector(".dropdown-list_vacancy");
const selectedService = document.getElementById("selected-service");
const serviceInput = document.getElementById("service-input");

// Открытие/закрытие выпадающего списка
dropdownSelected.addEventListener("click", () => {
  const isOpen = dropdownList.style.display === "block";
  dropdownList.style.display = isOpen ? "none" : "block";
});

// Обработка выбора из списка
dropdownList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    selectedService.textContent = event.target.textContent;
    serviceInput.value = event.target.textContent;
    dropdownList.style.display = "none";
  }
});

// Логика выбора пола
const genderButtons = document.querySelectorAll(".gender-btn");
const genderInput = document.getElementById("gender-input");

genderButtons.forEach((button) => {
  button.addEventListener("click", function () {
    genderButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    genderInput.value = this.dataset.gender;
  });
});

// Валидация формы
const fioInput = document.getElementById("fio");
const phoneInput = document.getElementById("phone");
const submitButton = document.getElementById("submitVacancy");

function validateVacancyForm() {
  const isValid =
    serviceInput.value &&
    fioInput.value.trim() !== "" &&
    phoneInput.value.trim() !== "" &&
    genderInput.value !== "";

  submitButton.classList.toggle("active", isValid);
}

// Обновляем состояние кнопки при вводе данных
[fioInput, phoneInput].forEach((input) =>
  input.addEventListener("input", validateVacancyForm)
);

// Показ модального окна благодарности
function showThankYouModal() {
  thankYouModal.style.display = "flex";
}

// Закрытие модального окна благодарности через крестик
document.getElementById("closeThankYouModalX").addEventListener("click", () => {
  thankYouModal.style.display = "none";
});

// Закрытие модального окна благодарности через кнопку "Понятно, спасибо!"
document.getElementById("closeThankYouModal").addEventListener("click", () => {
  thankYouModal.style.display = "none";
});

// Отправка формы
submitButton.addEventListener("click", async function () {
  const service = serviceInput.value;
  const fio = fioInput.value.trim();
  const phone = phoneInput.value.trim();
  const gender = genderInput.value;

  // Проверка на заполненность всех полей
  if (!service || !fio || !phone || !gender) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  // Формируем данные для отправки
  const formData = new FormData();
  formData.append("service", service);
  formData.append("fio", fio);
  formData.append("phone", phone);
  formData.append("gender", gender);

  try {
    // Отправляем данные через fetch
    const response = await fetch("process_form-vacancy.php", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    // Успешная отправка
    if (result.status === "success") {
      vacancyModal.style.display = "none"; // Скрываем основную модалку
      showThankYouModal(); // Показываем модалку благодарности
    } else {
      alert(result.message || "Ошибка при отправке.");
    }
  } catch (error) {
    console.error("Ошибка:", error);
    alert("Ошибка при отправке. Проверьте соединение.");
  }
});

// Проверка заполненности формы и обновление состояния кнопки
function validateVacancyForm() {
    const isValid =
      serviceInput.value &&
      fioInput.value.trim() !== "" &&
      phoneInput.value.trim() !== "" &&
      genderInput.value !== "";
  
    if (isValid) {
      submitButton.classList.add("active"); // Добавляем класс active
    } else {
      submitButton.classList.remove("active"); // Убираем класс active
    }
  }
  
  // Обновляем состояние кнопки при изменении данных в полях ввода
  [fioInput, phoneInput].forEach((input) => {
    input.addEventListener("input", validateVacancyForm);
  });
  
  // Обновляем состояние кнопки при выборе пола
  genderButtons.forEach((button) => {
    button.addEventListener("click", validateVacancyForm);
  });
  
  // Обновляем состояние кнопки при выборе услуги в dropdown
  dropdownSelected.addEventListener("click", validateVacancyForm);
  
