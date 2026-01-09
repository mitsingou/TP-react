import MovieList from "./MovieList";
import { useParams } from "react-router";
import { useEffect, useState } from "react";


const Details = () => {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=579822ffa7fd55b63567c5fd42294b32`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);
  if (!movie) return <div>Loading...</div>;
  return (
    <div >
      Détails
      <p>{movie.original_title}</p>
      <p>
        {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} width={200}/>}
      </p>
      <p>
        <strong>Description:</strong> {movie.overview}
      </p>
      <p>
        <strong>Note:</strong> {movie.vote_average}
      </p>
      <p>
        <strong>Date de sortie:</strong> {movie.release_date}
      </p>
      <p>
        <input type="button" value="Ajouter à la liste de souhaits" />
        <br/>
        <input type="button" value="Retier à la liste des films" />
        
      </p>

    </div>
  );
};

export default Details;