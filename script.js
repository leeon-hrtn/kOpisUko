const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle Mobile Menu Visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Toggle close
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

