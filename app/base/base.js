async function fetchgenrepage(url) {
    const response = await fetch(url)
    let movies = await response.json()
    return movies
}

function injectImage(categoryPicture , id ) {
    let element = document.querySelectorAll( id )
    for (let i = 0; i < element.length; i++) {
        element[i].innerHTML = `<img class="moviepicture" src=${categoryPicture[i]} alt=Photo de montage>`
    }
}


export {fetchgenrepage, injectImage}