var menuItemsCount = 16,
    lastWindowWidth = this.window.innerWidth;
CheckResponsive();

window.addEventListener("resize", function () {
    CheckResponsive();
    lastWindowWidth = this.window.innerWidth;
});

function CheckResponsive() {
    for (var i = 0; i <= menuItemsCount; i++) {

        if (this.window.innerWidth < 1650) {
            var menuItem = document.getElementsByClassName("navbar-menuItem"),
                menuItemWith = menuItem[menuItemsCount].clientWidth,
                navPos = document.querySelector("#navbar-rightSide").getBoundingClientRect().x,
                menuItemPos = menuItem[menuItemsCount].getBoundingClientRect().x + menuItemWith;

            if (lastWindowWidth >= this.window.innerWidth && navPos < menuItemPos) {
                menuItem[menuItemsCount].style = "display: none;";
                menuItemsCount--;
            }
            else if (lastWindowWidth <= this.window.innerWidth && navPos > menuItemPos) {
                menuItemsCount++;
                if (menuItemsCount > 16) menuItemsCount = 16;
                menuItem[menuItemsCount].style = "display: flex";
            }
        }
    }
}

function LightMode() {
    let navbar = document.getElementsByClassName("navbar"),
    contents = document.getElementsByTagName("a");
    navbar[0].classList.toggle("light-mode");
    for (let i = 0; i < contents.length; i++)
        contents[i].classList.toggle("light-mode");
}

function ShowSearchbar() {
    let searchBox = document.querySelector(".navbar-searchBox");
    searchBox.classList.toggle("hide");
}