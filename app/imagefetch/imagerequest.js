import {fetchgenrepage} from '../base/base.js';
import * as cons from '../const/const.js';

/**
 * Take an array of collected url from API genre page
 *  and save the movie pictures by rank,7 by default
 * @param {Array} imagesUrlArray pre defined array to store urls
 * @param {JSON} response response from the api genre page
 * @param {number} numberToSave number of movie to save
 * @return {Array} urlArray an array of movie urls with wanted number of movies
 */
function addToImagesURLDataArray(imagesUrlArray, response, numberToSave = 7) {
  let movieNumber = 0;
  while (imagesUrlArray.length < numberToSave && movieNumber <= 4) {
    imagesUrlArray.push(response.results[movieNumber].image_url);
    movieNumber++;
  }
  return imagesUrlArray;
};

/**
 * Collect up to 10 movies pictures from the two first
 * page of a movie genre ranked by score
 * @param {string} endPoint the ending of the API endpoint for a genre
 * @param {number} numberToSave number of movie to save,7 by default
 * @return {Array} A list of X movies pictures from a genre ranked by score
 */
async function collectCategoryImagesURL(endPoint, numberToSave = 7) {
  const moviesImagesURL = [];
  const firstpage = await fetchgenrepage(`${cons.URISTART}${endPoint}`);
  addToImagesURLDataArray(moviesImagesURL, firstpage, numberToSave);
  const secondPage = await fetchgenrepage(firstpage.next);
  addToImagesURLDataArray(moviesImagesURL, secondPage, numberToSave);
  return moviesImagesURL;
};

export {addToImagesURLDataArray, collectCategoryImagesURL};
