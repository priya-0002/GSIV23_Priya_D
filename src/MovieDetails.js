import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from './api';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const details = await getMovieDetails(id);
    setMovie(details);
  };

  const theme = useTheme(); 

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h3 className="text-center mt-4">{movie.title}</h3>
      <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt="Live from space album cover"
      
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
  
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <p>Rating: {movie.vote_average}</p>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <p>Year: {movie.release_date}</p>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <p>Length: {movie.runtime} min</p>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <p>Release Date: {movie.release_date}</p>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <p>Orignal Language: {movie.original_language}</p>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <p> Overview: {movie.overview}</p>
          </Typography>
        </CardContent>
        
      </Box>
     
    </Card>
    </div>
  );
}

export default MovieDetails;
