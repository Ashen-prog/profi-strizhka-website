const stylingLinkMobile = document.querySelector("#menu_styling-mobile");

window.addEventListener("load", () => {
  if (location.hash === "#scrollToStylingMobile") {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    const scrollPosition = documentHeight - windowHeight - 700;

    window.scrollTo(0, scrollPosition);
  }
});

stylingLinkMobile.addEventListener("click", () => {
  window.location.href = "/price-hair-women.html#scrollToStylingMobile";
});
