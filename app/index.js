import { URISTART, BEST, CAT1, CAT2, CAT3 } from "./const/const.js";
import { fetchgenrepage, injectImage } from "./base/base.js";
import { addToURLDataArray, collectCategoryURL } from "./datafetch/urlrequest.js";
import { fetchImage, addToImagesURLDataArray, collectCategoryImagesURL } from "./imagefetch/imagerequest.js";

export { 
    URISTART,
    BEST,
    CAT1,
    CAT2,
    CAT3,
    fetchgenrepage,
    injectImage,
    addToURLDataArray,
    collectCategoryURL,
    fetchImage,
    addToImagesURLDataArray,
    collectCategoryImagesURL
}