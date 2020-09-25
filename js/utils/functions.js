function hide(index){
    /* SHOWING ALL DATA ABOUT THE project */
    let image = document.getElementById(`image__${index}`);
    let description = document.getElementById(`description__${index}`);
    let allData = document.getElementById(`allData__${index}`);
    image.classList.remove("rotateIn");
    image.classList.add("rotateOut");

    description.classList.remove("rotateIn");
    description.classList.add("rotateOut");

    allData.classList.remove("rotateOut");
    allData.classList.add("rotateIn");


    allData.parentElement.classList.add("descriptionIn");
    allData.parentElement.classList.remove("descriptionOut");
}
function show(index){
    /* SHOWING THE PICTURE */
    let image = document.getElementById(`image__${index}`);
    let description = document.getElementById(`description__${index}`);
    let allData = document.getElementById(`allData__${index}`);
    image.classList.remove("rotateOut");
    image.classList.add("rotateIn");

    description.classList.remove("rotateOut");
    description.classList.add("rotateIn");

    allData.classList.remove("rotateIn");
    allData.classList.add("rotateOut");


    allData.parentElement.classList.remove("descriptionIn");
    allData.parentElement.classList.add("descriptionOut");
}