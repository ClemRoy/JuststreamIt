import { picSize, modal_container } from "../../main.js"

async function InjectBest(url ) {
    const response = await fetch(url)
    let movie = await response.json()
    let picture = document.querySelector(".bestMoviePictureContainer")
    let title = document.querySelector(".bestMovieTitle")
    let descr = document.querySelector(".bestMovieDescr")
    picture.innerHTML = `<img class="bestMoviePicture" src=${movie.image_url} alt=Photo de montage>`;
    title.innerHTML = movie.title
    descr.innerHTML = movie.description
  }

async function fetchgenrepage(url) {
    const response = await fetch(url)
    let movies = await response.json()
    return movies
}

async function fetchmoviepage(url) {
    const response = await fetch(url)
    let movie = await response.json()
    return movie
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
        CarouselTrack.parentElement.style.justifyContent = "flex-start"
    })
}

const addPrevButon = (carouselDocument) => {
    const CarouselTrack = carouselDocument.querySelector(".carousel__track");
    const NextButton = carouselDocument.querySelector(".carousel__button--left");
    NextButton.addEventListener("click", e=>{
        CarouselTrack.style.transform = `translate(${picSize}px)`
        CarouselTrack.parentElement.style.justifyContent = "flex-end"
    })
}

const AddModalOpeningEvent = (document) => {
    let buttons = document.querySelectorAll(".moviepicture")
    for (let button of buttons) {
        button.addEventListener('click', ()=> {
            modal_container.classList.add('show')
        })
    }
}

export {
    InjectBest,
    fetchgenrepage,
    fetchmoviepage,
    injectImage,
    addNextButon,
    addPrevButon,
    addSlider,
    AddModalOpeningEvent
}