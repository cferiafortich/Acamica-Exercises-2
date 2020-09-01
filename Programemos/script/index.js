const API_KEY = 'bWxdHUpMboxqFxYI9YqCBnRQzj2Aokpv';
const URL_AUTOCOMPLETE = 'https://api.giphy.com/v1/gifs/search/tags';
const URL_SEARCH = 'https://api.giphy.com/v1/gifs/search';

let input = document.getElementById('movieName');
let autocompleteList = document.getElementById('auto-complete-list');
let searchResult = document.getElementById('search-result');

input.addEventListener('keyup', ()=>{
    getAutocomplete(input.value);
});

async function getAutocomplete(gifComplete) {
    let url = `${URL_AUTOCOMPLETE}?api_key=${API_KEY}&q=${gifComplete}`;
    let response = await fetch(url);
    let data = await response.json();
    
    autocompleteList.innerHTML = '';

    data.data.forEach(e => {
        let li = document.createElement('li');
        li.addEventListener('click', ()=>{  autocompleteList.innerHTML = '';
        buscar(e.name)});
        li.textContent = e.name;
        autocompleteList.appendChild(li);
    });
}
async function buscar(text){
    let url = `${URL_SEARCH}?api_key=${API_KEY}&q=${text}`;
    let response = await fetch(url);
    let data = await response.json();

    searchResult.innerHTML = ''
    data.data.forEach(e => {
        let img = document.createElement('img');
        img.src = e.images.preview_gif.url;
        img.alt = e.title;
        searchResult.appendChild(img);
    });
}


let search = () => {
    let movieName = input.value;
    if (movieName === '') {
        alert("Ingrese un nombre de película");
    } else {
        getMovieByTitle(movieName).then((movieData) => {
            console.log(movieData);
            if (movieData.Response === 'False'){
                alert(movieData.Error);
                return;
            }
            let poster = document.createElement('img');
            poster.src = movieData.Poster;

            let title = document.createElement('h2');
            title.textContent = movieData.Title;

            let rating = document.createElement('p');
            rating.innerText = "Rating: " + movieData.imdbRating;

            results.appendChild(poster);
            results.appendChild(title);
            results.appendChild(rating);
        });
    }

}