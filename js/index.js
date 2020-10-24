document.addEventListener("DOMContentLoaded", function (event) {
    let mePic = document.getElementsByClassName("resume__image");
    let description = document.getElementsByClassName("resume");
    let body = document.getElementsByClassName("down-body");


    description[0].classList.remove("up-title");
    description[0].classList.add("down-title");

    body[0].classList.add("up-body");
    body[1].classList.add("up-body");
    body[1].classList.remove("down-body");
    body[0].classList.remove("down-body");

    setTimeout(()=>{
        mePic[0].classList.add("rotate");
    },1100)
});