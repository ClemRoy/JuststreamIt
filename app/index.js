import { URISTART, BEST, CAT1, CAT2, CAT3, SlideSize,BESTCATDOC,CAT1DOC,CAT2DOC,CAT3DOC } from "./const/const.js";
import { InjectBest, fetchgenrepage, fetchmoviepage, injectImage, addSlider, addNextButon, addPrevButon, AddModalOpeningEvent} from "./base/base.js";
import { addToURLDataArray, collectCategoryURL } from "./datafetch/urlrequest.js";
import { addToImagesURLDataArray, collectCategoryImagesURL } from "./imagefetch/imagerequest.js";

export { 
    URISTART,
    BEST,
    CAT1,
    CAT2,
    CAT3,
    SlideSize,
    BESTCATDOC,
    CAT1DOC,
    CAT2DOC,
    CAT3DOC,
    InjectBest,
    fetchgenrepage,
    fetchmoviepage,
    injectImage,
    addToURLDataArray,
    collectCategoryURL,
    addToImagesURLDataArray,
    collectCategoryImagesURL,
    addSlider,
    addNextButon,
    addPrevButon,
    AddModalOpeningEvent
}