function ShowMenu() {
    let menu = document.querySelector(".container-aside"),
        btnShowMenu = document.querySelector(".containerMain-ShowMenu");
    menu.classList.toggle("showMenu");
    if (btnShowMenu.innerHTML == "<i class=\"bi-list\"></i>")
        btnShowMenu.innerHTML = "<i class=\"bi-x-lg\"></i>";
    else
        btnShowMenu.innerHTML = "<i class=\"bi-list\"></i>";
}