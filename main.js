const d = document;
const menu_button = d.querySelector(".ham-btn");
const menu = d.querySelector(".nav-menus-box");
const bars = d.querySelectorAll(".ham-btn span");
const submenu_btn = d.querySelectorAll(".submenu-btn");
const arrow_icon = d.querySelectorAll(".arrow");

/*menu functionality on mobile device*/

menu_button.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  bars.forEach((child) => {
    child.classList.toggle("animation");
  });
});

for (let i = 0; i < submenu_btn.length; i++) {
  submenu_btn[i].addEventListener("click", function () {
    if (window.innerWidth <= 1024) {
      const sub_menu = this.nextElementSibling;
      const height = sub_menu.scrollHeight;
      if (sub_menu.classList.contains("show-submenu")) {
        sub_menu.classList.remove("show-submenu");
        sub_menu.removeAttribute("style");
      } else {
        sub_menu.classList.add("show-submenu");
        sub_menu.style.height = height + "px";
        sub_menu.style.margin = "12px 0 0 0";
        sub_menu.style.overflow = "visible";
      }
    }
    arrow_icon[i].classList.toggle("rotate-arrow");
  });
}
