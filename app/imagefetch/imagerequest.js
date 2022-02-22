import { fetchgenrepage } from "../base/base.js";
import * as cons from "../const/const.js"

const fetchImage = (url, imageID) => {
  fetch(url)
  .then((res)=> res.ok ? res.json() : null)
  .then((value) => {
    let elt = document.getElementById(imageID);
    elt.innerHTML = `<img class="bestmoviepicture" src=${value.results[0].image_url} alt=Photo de montage>`
  })
};

function addToImagesURLDataArray(imagesUrlArray, response, numberToSave=7) {
  let movieNumber = 0;
  while (imagesUrlArray.length < numberToSave && movieNumber <= 4) {
      imagesUrlArray.push(response.results[movieNumber].image_url)
      movieNumber ++;
  }
  return imagesUrlArray
}


async function collectCategoryImagesURL( endPoint , numberToSave=7) {
  const moviesImagesURL = [];
  let firstpage = await fetchgenrepage(`${cons.URISTART}${endPoint}`);
  addToImagesURLDataArray(moviesImagesURL, firstpage, numberToSave)
  let secondPage = await fetchgenrepage(firstpage.next)
  addToImagesURLDataArray(moviesImagesURL,secondPage, numberToSave)
  return moviesImagesURL
}



export { fetchImage, addToImagesURLDataArray, collectCategoryImagesURL };