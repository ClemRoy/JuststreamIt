import * as cons from "../const/const.js"

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

const setslidePosition = (slide, index) => {
    slide.style.left = cons.SlideSize * index + "px"
}

const selectCarousel = ( queryselector ) => {
    const track = document.querySelector(queryselector);
    const Slides = Array.from(track.children)
    return Slides
}

const setCarouselSlidesPos = ( querySelector ) => {
    let Slides = selectCarousel(querySelector);
    Slides.forEach(setslidePosition)
}

const moveToSlide = (track, currentSlide, targetslide) => {
    if ( targetslide != null ) {
        track.style.transform = 'translateX(-' + targetslide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetslide.classList.add('current-slide')
    }
}


const addNextButon = (carouselDocument) => {
    const NextButton = carouselDocument.querySelector(".carousel__button--right")
    NextButton.addEventListener("click", e=>{
        const CarouselTrack = carouselDocument.querySelector(".carousel__track")
        const currentSlide = CarouselTrack.querySelector(".current-slide")
        const nextSlide = currentSlide.nextElementSibling;
        moveToSlide(CarouselTrack, currentSlide, nextSlide)
    })
}

const addPrevButon = (carouselDocument) => {
    const PrevButton = carouselDocument.querySelector(".carousel__button--left")
    PrevButton.addEventListener("click", e=>{
        const CarouselTrack = carouselDocument.querySelector(".carousel__track")
        const currentSlide = CarouselTrack.querySelector(".current-slide")
        const nextSlide = currentSlide.previousElementSibling;
        moveToSlide(CarouselTrack, currentSlide, nextSlide)
    })
}

export {
    fetchgenrepage,
    injectImage,
    setslidePosition,
    selectCarousel,
    setCarouselSlidesPos,
    addNextButon,
    addPrevButon
}