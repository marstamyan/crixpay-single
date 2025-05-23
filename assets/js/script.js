;(function () {
//mobile menu
const headerNav = document.querySelector(".header-nav")
  const burgerCheckbox = document.querySelector("#burger-checkbox")
  const burgerBtn = document.querySelector("#menu-btn")
  const menuLinks = document.querySelectorAll(".menu-nav__list-link")

  if (headerNav) {
    burgerBtn.addEventListener("click", (e) => {
      headerNav.classList.toggle("menu-active")
    })
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      headerNav.classList.remove("menu-active")
      burgerCheckbox.checked = false
    })
  })
})()
