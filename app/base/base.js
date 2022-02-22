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

export {fetchgenrepage, injectImage, setslidePosition, selectCarousel, setCarouselSlidesPos}