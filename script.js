const menu = document.querySelector("#box");
const burger_menu = document.querySelector(".mobile-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("active")
    burger_menu.classList.toggle("active")
})

