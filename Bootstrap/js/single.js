const detaljiFilmaElement=document.querySelector('#detalji-filma');

const apiKey= 'a1deaf535fdf12c23dfa28fbd3fb35db';

let trenutniFilm = {};

window.addEventListener('load',()=>{
    detaljiFilma();
});

const detaljiFilma = () => {
    let jedanFilm = sessionStorage.getItem('filmId');
    console.log(jedanFilm);

    fetch(`https://api.themoviedb.org/3/movie/${jedanFilm}?api_key=${apiKey}`)
    .then(response=>response.json())
    .then(responseJson => {
    trenutniFilm=responseJson;
    console.log(trenutniFilm);
    detaljiFilmaElement.innerHTML='';

    detaljiFilmaElement.innerHTML+=`
    <div class="row g-0">
          <div class="col-md-5">
            <img src="http://image.tmdb.org/t/p/original/${trenutniFilm.poster_path}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3 class="card-title">${trenutniFilm.title}</h3>
              <p class="card-text">${trenutniFilm.overview}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <hr>
            <p>Zanr: <span>${trenutniFilm.genres.map(genre=>genre.name).join(', ')}</span></p>
            <hr>
            <button class="btn btn-danger" onClick="dodajOmiljen(trenutniFilm)">Dodaj u omiljene</button>
            </div>
          </div>
        </div>`

    })
    .catch(err=>console.log(err)
)

}

const dodajOmiljen = (trenutniFilm) => {
    if(!sessionStorage.getItem('omiljeniFilmovi')) {
    sessionStorage.setItem('omiljeniFilmovi', '[]');
    }


//kao i kada radimo fatch-sve dobijamo u textualnom obliku, i zato sada pretvaramo u JSON 
omiljeniFilmovi = JSON.parse(sessionStorage.getItem('omiljeniFilmovi'));

//sada tu dodajemo novi film

omiljeniFilmovi.push(trenutniFilm);
//a onda nas film vracamo u sesionstorage

sessionStorage.setItem('omiljeniFilmovi', JSON.stringify(omiljeniFilmovi));
window.location=('filmovi.html')
}

