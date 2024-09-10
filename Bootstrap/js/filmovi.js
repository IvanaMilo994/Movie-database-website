const pretragaFilmovaElement = document.querySelector('#pretraga-filmova');

const pretragaTekstElement = document.querySelector('#pretraga-tekst');
const pretragaBtnElement = document.querySelector('#pretraga-btn');

const apiKey= 'a1deaf535fdf12c23dfa28fbd3fb35db';

window.addEventListener('load', () => {
    dohvatiFilmove();
});

const dohvatiFilmove = () => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
    .then(response => response.json())
    .then(responseJson => {
        console.log(responseJson.results);
        izlistajFilmove(responseJson.results)

    })
    .catch(err => console.log(err)
    )
}

const izlistajFilmove = (filmovi) => {
    pretragaFilmovaElement.innerHTML='';
    filmovi.forEach(film => {
        pretragaFilmovaElement.innerHTML +=`
        <div class="col">
            <a onClick=jedanFilm(${film.id})><img src="http://image.tmdb.org/t/p/original/${film.poster_path}" alt="" class="img-fluid mb-3"></a>
        </div>
        `



})
}

const jedanFilm = (filmId) => {
    sessionStorage.setItem('filmId', filmId);
    window.location = 'single.html'
}

 pretragaBtnElement.addEventListener('click', (event) => {
    event.preventDefault();

    let upitFilm = pretragaTekstElement.value; 
    fetch(`https://api.themoviedb.org/3/search/movie?query=${upitFilm}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(responseJson => {
        //console.log(responseJson.results);
        izlistajFilmove(responseJson.results)

    })
    .catch(err => console.log(err)
    )


 })

