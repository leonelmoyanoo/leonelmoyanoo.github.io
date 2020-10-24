document.addEventListener("DOMContentLoaded", function (event) {
    let mePic = document.getElementsByClassName("resume__image");
    let description = document.getElementsByClassName("up-title");
    let body = document.getElementsByClassName("down-body");
    console.log(description);


    description[1].classList.add("down-title");
    description[1].classList.remove("up-title");

    body[0].classList.add("up-body");
    body[1].classList.add("up-body");
    body[1].classList.remove("down-body");
    body[0].classList.remove("down-body");


    description[0].classList.add("container");
    description[0].classList.remove("up-title");

    setTimeout(()=>{
        mePic[0].classList.add("rotate");
    },1100)
});