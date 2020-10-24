
var navBar = document.getElementsByClassName("header__nav")[0];
document.addEventListener("DOMContentLoaded", function (event) {
    var mePic = document.getElementsByClassName("resume__image");

    setTimeout(() => {
        mePic[0].classList.add("rotate");
    }, 500)


});
function subMenu() {
    if (navBar.className === "header__nav") {
        navBar.className += " responsive";
    } else {
        navBar.className = "header__nav";
    }
}
function redirectOnTheSamePage(){
    if (navBar.className === "header__nav responsive") {
        navBar.className = "header__nav";
    }
}