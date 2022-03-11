import {fetchgenrepage} from '../base/base.js';
import * as cons from '../const/const.js';

/**
 * Take an array of collected url from API genre page
 *  and save them by rank,7 by default
 * @param {Array} urlArray pre defined array to store urls
 * @param {JSON} response response from the api genre page
 * @param {number} numberToSave number of movie to save
 * @return {Array} urlArray an array of movie urls with wanted number of movies
 */
function addToURLDataArray(urlArray, response, numberToSave = 7) {
  let movieNumber = 0;
  while (urlArray.length < numberToSave && movieNumber <= 4) {
    urlArray.push(response.results[movieNumber].url);
    movieNumber++;
  }
  return urlArray;
}

/**
 * Collect up to 10 movies from the two first page
 *  of a movie genre ranked by score
 * @param {string} endPoint the ending of the API endpoint for a genre
 * @param {number} numberToSave number of movie to save,7 by default
 * @return {Array} A list of X movies from a genre ranked by score
 */
async function collectCategoryURL(endPoint, numberToSave = 7) {
  const moviesURL = [];
  const firstpage = await fetchgenrepage(`${cons.URISTART}${endPoint}`);
  addToURLDataArray(moviesURL, firstpage, numberToSave);
  const secondPage = await fetchgenrepage(firstpage.next);
  addToURLDataArray(moviesURL, secondPage, numberToSave);
  return moviesURL;
}

export {addToURLDataArray, collectCategoryURL};
