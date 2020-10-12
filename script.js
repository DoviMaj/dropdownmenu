const createMenu = (menuOpenIconId, menuCloseIconId, menuItemsClass) => {
  const menu = document.getElementById(menuOpenIconId);
  // menu open event
  menu.addEventListener("click", () => {
    document.querySelectorAll(menuItemsClass).forEach((element) => {
      element.classList.remove("hide");
    });
    document.getElementById(menuCloseIconId).classList.remove("hide");
    menu.classList.add("hide");
  });
  // menu close event
  document.getElementById(menuCloseIconId).addEventListener("click", () => {
    document.querySelectorAll(menuItemsClass).forEach((element) => {
      element.classList.add("hide");
    });
    document.getElementById(menuCloseIconId).classList.add("hide");
    menu.classList.remove("hide");
  });
};

createMenu("menu-icon", "menu-hide-icon", ".menu-items1");
