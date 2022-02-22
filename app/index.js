import { URISTART, BEST, CAT1, CAT2, CAT3, SlideSize,BESTCATDOC,CAT1DOC,CAT2DOC,CAT3DOC } from "./const/const.js";
import { fetchgenrepage, injectImage, setslidePosition, selectCarousel, setCarouselSlidesPos, addNextButon, addPrevButon} from "./base/base.js";
import { addToURLDataArray, collectCategoryURL } from "./datafetch/urlrequest.js";
import { fetchImage, addToImagesURLDataArray, collectCategoryImagesURL } from "./imagefetch/imagerequest.js";

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
    fetchgenrepage,
    injectImage,
    addToURLDataArray,
    collectCategoryURL,
    fetchImage,
    addToImagesURLDataArray,
    collectCategoryImagesURL,
    setslidePosition,
    selectCarousel,
    setCarouselSlidesPos,
    addNextButon,
    addPrevButon
}