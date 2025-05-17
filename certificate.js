document
  .querySelector(".adresses-rectangle_lower_btn")
  .addEventListener("click", () => {
    window.location.href = "/salons.html";
  });

////////// Лисенер для сертификатов

document.querySelectorAll('[id^="certificate-"]').forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = `/${element.id}.html`;
  });
});