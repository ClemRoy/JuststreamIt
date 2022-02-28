import { picSize } from "../../main.js"

async function fetchgenrepage(url) {
    const response = await fetch(url)
    let movies = await response.json()
    return movies
}

function injectImage(categoryPicture , id ) {
    let element = document.querySelectorAll( id )
    for (let i = 0; i < element.length; i++) {
        element[i].innerHTML = `<img class="moviepicture" src=${categoryPicture[i]} alt=Photo de montage>`
    }
}

const addSlider = (carouselDocument) => {
    const CarouselTrack = carouselDocument.querySelector(".carousel__track");
    CarouselTrack.addEventListener("transitionend", function() {
        CarouselTrack.appendChild(CarouselTrack.firstElementChild);
        CarouselTrack.style.transition = "none";
        CarouselTrack.style.transform = `translate(0)`;
        setTimeout(function() {
            CarouselTrack.style.transition = "all 0.5s";
        })
    })
}


const addNextButon = (carouselDocument) => {
    const CarouselTrack = carouselDocument.querySelector(".carousel__track");
    const NextButton = carouselDocument.querySelector(".carousel__button--right");
    NextButton.addEventListener("click", e=>{
        CarouselTrack.style.transform = `translate(-${picSize}px)`
    })
}

const addPrevButon = (carouselDocument) => {
    const CarouselTrack = carouselDocument.querySelector(".carousel__track");
    const NextButton = carouselDocument.querySelector(".carousel__button--left");
    NextButton.addEventListener("click", e=>{
        CarouselTrack.style.transform = `translate(${picSize}px)`
    })
}

export {
    fetchgenrepage,
    injectImage,
    addNextButon,
    addPrevButon,
    addSlider
}