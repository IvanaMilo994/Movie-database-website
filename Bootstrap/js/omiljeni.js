const omiljeniFilmoviElement=document.querySelector('#omiljeni-filmovi');

window.addEventListener('load', ()=>{
    prikaziOmiljene();
});

const prikaziOmiljene =() =>{
    if(!sessionStorage.getItem('omiljeniFilmovi')) {
        sessionStorage.setItem('omiljeniFilmovi', '[]') 
        }

omiljeniFilmovi = JSON.parse(sessionStorage.getItem('omiljeniFilmovi'))

omiljeniFilmoviElement.innerHTML='';

omiljeniFilmovi.forEach((film, idx)=>{
    console.log(film);
    omiljeniFilmoviElement.innerHTML+=`
    <div class="col">
            <a href=""><img src="http://image.tmdb.org/t/p/original/${film.poster_path}" alt="" class="img-fluid mb-3"></a>
            <button class="btn btn-danger mt-1" onClick="ukloniFilm(${idx})">Ukloni</button>
            <hr>
       </div>
    `

})


}

const ukloniFilm = (idx) =>{
    omiljeniFilmovi = JSON.parse(sessionStorage.getItem('omiljeniFilmovi'));
    omiljeniFilmovi.splice(idx,1);
    sessionStorage.setItem('omiljeniFilmovi', JSON.stringify(omiljeniFilmovi));
    prikaziOmiljene();
}
