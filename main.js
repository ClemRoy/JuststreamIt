import * as index from "./app/index.js"

let tempBestCatData = await index.collectCategoryURL(index.BEST, 8);
tempBestCatData.shift();
const BestCatData = tempBestCatData;
let tempBestCatPictures = await index.collectCategoryImagesURL(index.BEST,8);
tempBestCatPictures.shift();
const BestCatPictures = tempBestCatPictures;
const CAT1Data = await index.collectCategoryURL(index.CAT1);
const CAT1Pic = await index.collectCategoryImagesURL(index.CAT1);
const CAT2Data = await index.collectCategoryURL(index.CAT2);
const CAT2Pic = await index.collectCategoryImagesURL(index.CAT2);
const CAT3Data = await index.collectCategoryURL(index.CAT3);
const CAT3Pic = await index.collectCategoryImagesURL(index.CAT3);

index.fetchImage(`${index.URISTART}${index.BEST}`, "bestMoviePicture");
index.injectImage(BestCatPictures, "#rowBestRankingCategory li");
index.injectImage(CAT1Pic, "#rowCategory1 li");
index.injectImage(CAT2Pic, "#rowCategory2 li");
index.injectImage(CAT3Pic, "#rowCategory3 li");

index.setCarouselSlidesPos("#rowBestRankingCategory .carousel__track");
index.setCarouselSlidesPos("#rowCategory1 .carousel__track");
index.setCarouselSlidesPos("#rowCategory2 .carousel__track");
index.setCarouselSlidesPos("#rowCategory3 .carousel__track");

index.addNextButon(index.BESTCATDOC)
index.addNextButon(index.CAT1DOC)
index.addNextButon(index.CAT2DOC)
index.addNextButon(index.CAT3DOC)

index.addPrevButon(index.BESTCATDOC)
index.addPrevButon(index.CAT1DOC)
index.addPrevButon(index.CAT2DOC)
index.addPrevButon(index.CAT3DOC)
