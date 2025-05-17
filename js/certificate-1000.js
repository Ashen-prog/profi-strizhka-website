////////// Лисенер для сертификатов

document.querySelectorAll('[id^="certificate-"]').forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = `/${element.id}.html`;
  });
});

/////////// Модалка для заказа сертификата

const certificateBtn = document.querySelector(
  ".certificate-1000-section_main-content_btn"
);
const certificateModal = document.querySelector(".certificate-modal");
const thankYouModal = document.getElementById("thankYouModal");

// Открытие модального окна сертификата
certificateBtn?.addEventListener("click", () => {
  console.log("Открытие модального окна сертификата");
  certificateModal.style.display = "flex";
});

// Закрытие модального окна сертификата
document
  .querySelector(".close-certificate-modal")
  ?.addEventListener("click", () => {
    console.log("Закрытие модального окна сертификата");
    certificateModal.style.display = "none";
  });

// Закрытие модального окна благодарности
document.getElementById("closeThankYouModalX")?.addEventListener("click", () => {
  console.log("Закрытие модального окна благодарности (крестик)");
  thankYouModal.style.display = "none";
});

document.getElementById("closeThankYouModal")?.addEventListener("click", () => {
  console.log("Закрытие модального окна благодарности (кнопка)");
  thankYouModal.style.display = "none";
});

// Выпадающий список (Dropdown)
const dropdownSelected = document.querySelector(".dropdown-selected");
const dropdownList = document.querySelector(".dropdown-list");
const arrow = document.querySelector(".certificate-modal_arrow");
const selectedService = document.getElementById("selected-service");
const serviceInput = document.getElementById("service-input");

dropdownSelected?.addEventListener("click", () => {
  const isOpen = dropdownList.style.display === "block";
  dropdownList.style.display = isOpen ? "none" : "block";
  arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(90deg)";
});

dropdownList?.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    selectedService.textContent = e.target.textContent;
    serviceInput.value = e.target.textContent;
    dropdownList.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
    validateFields(); // Проверяем поля после выбора
  }
});

// Проверка полей формы
const nameInput = document.getElementById("fio");
const telInput = document.getElementById("tel");
const submitButton = document.getElementById("submitCertificate");

// Функция проверки заполненности полей
function validateFields() {
  const isValid =
    serviceInput.value &&
    nameInput.value.trim() !== "" &&
    telInput.value.trim() !== "";

  submitButton.classList.toggle("active", isValid);
}

[nameInput, telInput].forEach((input) =>
  input.addEventListener("input", validateFields)
);

// Отправка формы
submitButton.addEventListener("click", async () => {
  // Проверяем, что кнопка активна
  if (!submitButton.classList.contains("active")) {
    alert("Заполните все поля!");
    return;
  }

  // Сбор данных из формы
  const formData = new FormData();
  formData.append("service", serviceInput.value);
  formData.append("fio", nameInput.value.trim());
  formData.append("tel", telInput.value.trim());

  try {
    // Отправляем данные через fetch
    const response = await fetch("process_form-certificate.php", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    // Если отправлено успешно
    if (result.status === "success") {
      certificateModal.style.display = "none"; // Скрываем основную модалку
      thankYouModal.style.display = "flex"; // Показываем благодарственное окно
    } else {
      alert(result.message || "Ошибка отправки!");
    }
  } catch (error) {
    console.error("Ошибка при отправке:", error);
    alert("Ошибка при отправке. Проверьте подключение к сети.");
  }
});