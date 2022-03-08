import { picSize, modal_container, bestMovie, BestCatData, CAT1Data, CAT2Data, CAT3Data } from "../../main.js"

async function InjectBest(url) {
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

function injectImage(categoryPictures, id) {
    let element = document.querySelectorAll(id)
    for (let i = 0; i < element.length; i++) {
        element[i].innerHTML = `<img class="moviepicture" src=${categoryPictures[i]} alt=Photo de montage>`
    }
}

const addSlider = (carouselDocument) => {
    const CarouselTrack = carouselDocument.querySelector(".carousel__track");
    CarouselTrack.addEventListener("transitionend", function () {
        CarouselTrack.appendChild(CarouselTrack.firstElementChild);
        CarouselTrack.style.transition = "none";
        CarouselTrack.style.transform = `translate(0)`;
        setTimeout(function () {
            CarouselTrack.style.transition = "all 0.5s";
        })
    })
}

const addNextButon = (carouselDocument) => {
    const CarouselTrack = carouselDocument.querySelector(".carousel__track");
    const NextButton = carouselDocument.querySelector(".carousel__button--right");
    NextButton.addEventListener("click", e => {
        CarouselTrack.style.transform = `translate(-${picSize}px)`
        CarouselTrack.parentElement.style.justifyContent = "flex-start"
    })
}

const addPrevButon = (carouselDocument) => {
    const CarouselTrack = carouselDocument.querySelector(".carousel__track");
    const NextButton = carouselDocument.querySelector(".carousel__button--left");
    NextButton.addEventListener("click", e => {
        CarouselTrack.style.transform = `translate(${picSize}px)`
        CarouselTrack.parentElement.style.justifyContent = "flex-end"
    })
}

const AddModalOpeningEvent = (document) => {
    let buttons = document.querySelectorAll(".moviepicture")
    for (let button of buttons) {
        button.addEventListener('click', () => {
            modal_container.classList.add('show')
        })
    }
}

const modalContentSelector = (eventid) => {
    if (eventid.substring(0, 1) == "C") {
        movieselector(eventid)
    } else if (eventid == "bestMovieButton") {
        modalContentLoader(bestMovie)
    } else if (eventid.substring(0, 2) == "BC") {
        modalContentLoader(BestCatData[eventid.slice(-1)])
    }
}

async function modalContentLoader(movieurl) {
    let movieresult = await fetchmoviepage(movieurl)
    console.log(movieresult)
    let modal = document.querySelector(".modalInformation")
    modal.querySelector("#modalTitle").innerHTML = `${movieresult.title} <br>`;
    modal.querySelector("#modalGenre").innerHTML = `${movieresult.genres} <br>`;
    modal.querySelector("#modalDate").innerHTML = `${movieresult.date_published} <br>`;
    modal.querySelector("#modalRating").innerHTML = `${movieresult.avg_vote} <br>`;
    modal.querySelector("#modalImdb").innerHTML = `${movieresult.imdb_score} <br>`
    modal.querySelector("#modalRealisator").innerHTML = `${movieresult.directors} <br>`;
    modal.querySelector("#modalActors").innerHTML = `${movieresult.actors} <br>`;
    modal.querySelector("#modalDuration").innerHTML = `${movieresult.duration}mn <br>`;
    modal.querySelector("#modalOrigin").innerHTML = `${movieresult.countries} <br>`;
    if (movieresult.worldwide_gross_income == null) {
        modal.querySelector("#modalBoxoffice").innerHTML = `Pas d'information disponible <br>`
    } else {
        modal.querySelector("#modalBoxoffice").innerHTML = `${movieresult.worldwide_gross_income} <br>`
    }
    modal.querySelector("#modalSynopsis").innerHTML = `${movieresult.long_description} <br>`;
    document.querySelector(".modalPictureContainer").innerHTML = `<img class="modalPicture" src=${movieresult.image_url} alt=Photo de montage>`;
}

const movieselector = (eventid) => {
    if (eventid.substring(1, 2) == "1") {
        modalContentLoader(CAT1Data[eventid.slice(-1)])
    } else if (eventid.substring(1, 2) == "2") {
        modalContentLoader(CAT2Data[eventid.slice(-1)])
    } if (eventid.substring(1, 2) == "3") {
        modalContentLoader(CAT3Data[eventid.slice(-1)])
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
    AddModalOpeningEvent,
    modalContentSelector,
    modalContentLoader
}