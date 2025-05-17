document.querySelectorAll(".article-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("open");
  });
});

document.querySelector(".all-article-btn").addEventListener("click", () => {
  window.location.href = "/blog.html";
});