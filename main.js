import * as index from "./app/index.js"
export { picSize, modal_container }

let tempBestCatData = await index.collectCategoryURL(index.BEST, 8);
const bestMovie = tempBestCatData[0]
tempBestCatData.shift();
const BestCatData = tempBestCatData;
let tempBestCatPictures = await index.collectCategoryImagesURL(index.BEST,8);
tempBestCatPictures.shift();
const BestCatPictures = tempBestCatPictures;
const CAT1Pic = await index.collectCategoryImagesURL(index.CAT1);
const CAT2Pic = await index.collectCategoryImagesURL(index.CAT2);
const CAT3Pic = await index.collectCategoryImagesURL(index.CAT3);
const CAT1Data = await index.collectCategoryURL(index.CAT1)
const CAT2Data = await index.collectCategoryURL(index.CAT2)
const CAT3Data = await index.collectCategoryURL(index.CAT3)



index.InjectBest(bestMovie);
index.injectImage(BestCatPictures, "#rowBestRankingCategory li");
index.injectImage(CAT1Pic, "#rowCategory1 li");
index.injectImage(CAT2Pic, "#rowCategory2 li");
index.injectImage(CAT3Pic, "#rowCategory3 li");
index.addNextButon(index.BESTCATDOC)
index.addNextButon(index.CAT1DOC)
index.addNextButon(index.CAT2DOC)
index.addNextButon(index.CAT3DOC)
index.addPrevButon(index.BESTCATDOC)
index.addPrevButon(index.CAT1DOC)
index.addPrevButon(index.CAT2DOC)
index.addPrevButon(index.CAT3DOC)

const picSize = document.querySelector(".moviepicture").getBoundingClientRect().width + 10

index.addSlider(index.BESTCATDOC)
index.addSlider(index.CAT1DOC)
index.addSlider(index.CAT2DOC)
index.addSlider(index.CAT3DOC)

const open = document.getElementById("bestMovieButton")
const modal_container = document.getElementById("modal-container")
const close = document.getElementById("closeModale")

open.addEventListener('click', ()=> {
    modal_container.classList.add('show')
})

close.addEventListener('click', ()=> {
    modal_container.classList.remove('show')
})

index.AddModalOpeningEvent(document)