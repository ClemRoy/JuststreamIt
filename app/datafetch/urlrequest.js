import { fetchgenrepage } from "../base/base.js";
import * as cons from "../const/const.js"

function addToURLDataArray(urlArray, response, numberToSave=7) {
    let movieNumber = 0;
    while (urlArray.length < numberToSave && movieNumber <= 4) {
        urlArray.push(response.results[movieNumber].url)
        movieNumber ++;
    }
    return urlArray
}

async function collectCategoryURL( endPoint , numberToSave=7) {
    const moviesURL = [];
    let firstpage = await fetchgenrepage(`${cons.URISTART}${endPoint}`);
    addToURLDataArray(moviesURL, firstpage, numberToSave)
    let secondPage = await fetchgenrepage(firstpage.next)
    addToURLDataArray(moviesURL,secondPage, numberToSave)
    return moviesURL
}

export {addToURLDataArray, collectCategoryURL}