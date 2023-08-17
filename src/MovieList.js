import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import { setUpcomingMovies, setSearchResults } from './redux/actions/movies';
import { getUpcomingMovies, searchMovies } from './api';

function MovieList() {
  const dispatch = useDispatch();
  const { upcomingMovies, searchResults } = useSelector((state) => state.movies);

  useEffect(() => {
    fetchUpcomingMoviesData();
  }, []);

  const fetchUpcomingMoviesData = async () => {
    const movies = await getUpcomingMovies();
    dispatch(setUpcomingMovies(movies));
  };

  const handleSearch = async (query) => {
    if (query === '') {
      dispatch(setSearchResults([]));
    } else {
      const results = await searchMovies(query);
      dispatch(setSearchResults(results));
    }
  };

  const moviesToRender = searchResults.length > 0 ? searchResults : upcomingMovies;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <div className=" row row-cols-1 row-cols-md-4 g-4">
        {moviesToRender.map((movie) => (
          <div key={movie.id} className="col mb-4">
            <MovieCard movie={movie} />
          </div>
        ))}
        </div>
     
    </div>
  );
}

export default MovieList;
