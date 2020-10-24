document.addEventListener("DOMContentLoaded", function (event) {
    let mePic = document.getElementsByClassName("resume__image");
    let description = document.getElementsByClassName("up-title");
    let body = document.getElementsByClassName("down-body");

    body[0].classList.add("up-body");
    body[1].classList.add("up-body");
    body[1].classList.remove("down-body");
    body[0].classList.remove("down-body");

    setTimeout(()=>{
        mePic[0].classList.add("rotate");
    },1100)
});