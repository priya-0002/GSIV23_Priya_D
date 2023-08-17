import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
     
  <div class="card" style={{width:'18rem'}}>
  <img class="card-img-top" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
  <div class="card-body">
  <div class="card-body-flex">
  <h6 className='card-title title-truncate'>{movie.title}</h6>
        <p>Rating: {movie.vote_average}</p>
        
  </div>
  <p className='movie-description'>{movie.overview}</p> 
  </div>
</div>
      </Link>
    </div>
  );
}

export default MovieCard;
