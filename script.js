const menuOpenEvent = () => {
  const menu = document.getElementById("menu-icon");
  menu.addEventListener("click", () => {
    document.querySelectorAll(".li").forEach((element) => {
      element.classList.remove("hide");
    });
    document.querySelector("#menu-hide-icon").classList.remove("hide");
    menu.classList.add("hide");
  });
};

const menuCloseEvent = () => {
  const menu = document.getElementById("menu-icon");
  document.querySelector("#menu-hide-icon").addEventListener("click", () => {
    document.querySelectorAll(".li").forEach((element) => {
      element.classList.add("hide");
    });
    document.querySelector("#menu-hide-icon").classList.add("hide");
    menu.classList.remove("hide");
  });
};

menuOpenEvent();
menuCloseEvent();
