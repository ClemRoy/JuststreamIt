const URISTART = "http://localhost:8000/api/v1/titles"
const BEST = `?sort_by=-imdb_score`
const CAT1 = `?sort_by=-imdb_score&genre=Action`
const CAT2 = `?sort_by=-imdb_score&genre=Sci-Fi`
const CAT3 = `?sort_by=-imdb_score&genre=Animation`
const SlideSize = document.querySelector(".carousel__slide").getBoundingClientRect().width;



export {URISTART, BEST, CAT1, CAT2, CAT3, SlideSize}