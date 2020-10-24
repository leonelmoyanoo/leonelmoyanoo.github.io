document.addEventListener("DOMContentLoaded", function (event) {
    let mePic = document.getElementsByClassName("resume__image");

    setTimeout(()=>{
        mePic[0].classList.add("rotate");
    },500)
});