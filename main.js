import {
    collectCategoryURL,
    collectCategoryImagesURL,
    InjectBest,
    injectImage,
    addNextButon,
    addPrevButon,
    addSlider,
    AddModalOpeningEvent,
    modalContentSelector
} from "./app/index.js"

import {
    BEST,
    BESTCATDOC,
    CAT1DOC,
    CAT2DOC,
    CAT3DOC,
    CAT1,
    CAT2,
    CAT3
} from "./app/const/const.js"

export {
    picSize,
    bestMovie,
    modal_container,
    BestCatData,
    CAT1Data,
    CAT2Data,
    CAT3Data
}

let tempBestCatData = await collectCategoryURL(BEST, 8);
const bestMovie = tempBestCatData[0]
tempBestCatData.shift();
const BestCatData = tempBestCatData;
let tempBestCatPictures = await collectCategoryImagesURL(BEST, 8);
tempBestCatPictures.shift();
const BestCatPictures = tempBestCatPictures;
const CAT1Pic = await collectCategoryImagesURL(CAT1);
const CAT2Pic = await collectCategoryImagesURL(CAT2);
const CAT3Pic = await collectCategoryImagesURL(CAT3);

InjectBest(bestMovie);
injectImage(BestCatPictures, "#rowBestRankingCategory li");

injectImage(CAT1Pic, "#rowCategory1 li");
injectImage(CAT2Pic, "#rowCategory2 li");
injectImage(CAT3Pic, "#rowCategory3 li");
addNextButon(BESTCATDOC)
addNextButon(CAT1DOC)
addNextButon(CAT2DOC)
addNextButon(CAT3DOC)
addPrevButon(BESTCATDOC)
addPrevButon(CAT1DOC)
addPrevButon(CAT2DOC)
addPrevButon(CAT3DOC)

const picSize = document.querySelector(".moviepicture").getBoundingClientRect().width + 10

addSlider(BESTCATDOC)

addSlider(CAT1DOC)
addSlider(CAT2DOC)
addSlider(CAT3DOC)

const open = document.getElementById("bestMovieButton")
const modal_container = document.getElementById("modal-container")
const close = document.getElementById("closeModale")

open.addEventListener('click', () => {
    modal_container.classList.add('show')
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
})

AddModalOpeningEvent(document)

const CAT1Data = await collectCategoryURL(CAT1)
const CAT2Data = await collectCategoryURL(CAT2)
const CAT3Data = await collectCategoryURL(CAT3)

const buttons = document.querySelectorAll(".carousel__slide, #bestMovieButton")
Array.from(buttons).forEach(function (element) {
    element.addEventListener("click", function (e) {
        modalContentSelector(e.currentTarget.id)
    })
})