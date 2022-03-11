import {
  picSize,
  modalContainer,
  bestMovie,
  BestCatData,
  CAT1Data,
  CAT2Data,
  CAT3Data,
} from '../../main.js';

/**
* inject data about best movie on top banner
* @param {string} url best movie url from API
*/
async function injectBest(url) {
  const response = await fetch(url);
  const movie = await response.json();
  const picture = document.querySelector('.bestMoviePictureContainer');
  const title = document.querySelector('.bestMovieTitle');
  const descr = document.querySelector('.bestMovieDescr');
  picture.innerHTML = `<img class="bestMoviePicture" \
  src=${movie.image_url} alt=Photo de montage>`;
  title.innerHTML = movie.title;
  descr.innerHTML = movie.description;
}

/**
*get request for a genre category,return 5 results
* @param {string} url for category genre from API
*/
async function fetchgenrepage(url) {
  const response = await fetch(url);
  const movies = await response.json();
  return movies;
}

/**
 * get request for a movie data
 * @param {string} url for a movie page from API
 */
async function fetchmoviepage(url) {
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

/**
 *  take movie pictures from a category and inject them into the carousel
 * @param {Array} categoryPictures Pictures from a genre category collected
 * @param {querySelector} id ID for a category carousel li
 */
function injectImage(categoryPictures, id) {
  const element = document.querySelectorAll(id);
  for (let i = 0; i < element.length; i++) {
    element[i].innerHTML = `<img class="moviepicture" \
    src=${categoryPictures[i]} alt=Photo de montage>`;
  }
}

/**
 * add sliding effect to carousel
 * @param {document} carouselDocument take one carousel document
*/
const addSlider = (carouselDocument) => {
  const CarouselTrack = carouselDocument.querySelector('.carousel__track');
  CarouselTrack.addEventListener('transitionend', function() {
    CarouselTrack.appendChild(CarouselTrack.firstElementChild);
    CarouselTrack.style.transition = 'none';
    CarouselTrack.style.transform = `translate(0)`;
    setTimeout(function() {
      CarouselTrack.style.transition = 'all 0.5s';
    });
  });
};

// make next button functional
const addNextButon = (carouselDocument) => {
  const CarouselTrack = carouselDocument.querySelector('.carousel__track');
  const NextButton = carouselDocument.querySelector('.carousel__button--right');
  NextButton.addEventListener('click', (e) => {
    CarouselTrack.style.transform = `translate(-${picSize}px)`;
    CarouselTrack.parentElement.style.justifyContent = 'flex-start';
  });
};

// make previous button functional
const addPrevButon = (carouselDocument) => {
  const CarouselTrack = carouselDocument.querySelector('.carousel__track');
  const NextButton = carouselDocument.querySelector('.carousel__button--left');
  NextButton.addEventListener('click', (e) => {
    CarouselTrack.style.transform = `translate(${picSize}px)`;
    CarouselTrack.parentElement.style.justifyContent = 'flex-end';
  });
};

// add the modal opening event to a DOM
const addModalOpeningEvent = (document) => {
  const buttons = document.querySelectorAll('.moviepicture');
  for (const button of buttons) {
    button.addEventListener('click', () => {
      modalContainer.classList.add('show');
    });
  }
};

// apply movie selector to a particular category according to ID
const modalContentSelector = (eventid) => {
  if (eventid.substring(0, 1) == 'C') {
    movieselector(eventid);
  } else if (eventid == 'bestMovieButton') {
    modalContentLoader(bestMovie);
  } else if (eventid.substring(0, 2) == 'BC') {
    modalContentLoader(BestCatData[eventid.slice(-1)]);
  }
};

/**
 * Load data from a movie Page into the modal
 * @param {string} movieurl url to a movie page from the API
 */
async function modalContentLoader(movieurl) {
  const movieresult = await fetchmoviepage(movieurl);
  console.log(movieresult);
  const modal = document.querySelector('.modalInformation');
  const title = modal.querySelector('#modalTitle');
  title.innerHTML = `${movieresult.title} <br>`;
  const genre = modal.querySelector('#modalGenre');
  genre.innerHTML = `${movieresult.genres} <br>`;
  const date = modal.querySelector('#modalDate');
  date.innerHTML = `${movieresult.date_published} <br>`;
  const rating = modal.querySelector('#modalRating');
  rating.innerHTML = `${movieresult.avg_vote} <br>`;
  const imdb = modal.querySelector('#modalImdb');
  imdb.innerHTML = `${movieresult.imdb_score} <br>`;
  const realisator = modal.querySelector('#modalRealisator');
  realisator.innerHTML = `${movieresult.directors} <br>`;
  const actors = modal.querySelector('#modalActors');
  actors.innerHTML = `${movieresult.actors} <br>`;
  const duration = modal.querySelector('#modalDuration');
  duration.innerHTML = `${movieresult.duration}mn <br>`;
  const origin = modal.querySelector('#modalOrigin');
  origin.innerHTML = `${movieresult.countries} <br>`;
  if (movieresult.worldwide_gross_income == null) {
    const boxOffice = modal.querySelector('#modalBoxoffice');
    boxOffice.innerHTML = `Pas d'information disponible <br>`;
  } else {
    const boxOffice = modal.querySelector('#modalBoxoffice');
    boxOffice.innerHTML = `${movieresult.worldwide_gross_income} <br>`;
  }
  const synopsis = modal.querySelector('#modalSynopsis');
  synopsis.innerHTML = `${movieresult.long_description} <br>`;
  const pictureCont = document.querySelector('.modalPictureContainer');
  pictureCont.innerHTML = `<img class="modalPicture" \
  src=${movieresult.image_url} alt=Photo de montage>`;
}

/*  Select tthe movie data to load according to category and clicked ID
*/
const movieselector = (eventid) => {
  if (eventid.substring(1, 2) == '1') {
    modalContentLoader(CAT1Data[eventid.slice(-1)]);
  } else if (eventid.substring(1, 2) == '2') {
    modalContentLoader(CAT2Data[eventid.slice(-1)]);
  } if (eventid.substring(1, 2) == '3') {
    modalContentLoader(CAT3Data[eventid.slice(-1)]);
  }
};

export {
  injectBest,
  fetchgenrepage,
  fetchmoviepage,
  injectImage,
  addNextButon,
  addPrevButon,
  addSlider,
  addModalOpeningEvent,
  modalContentSelector,
  modalContentLoader,
};
