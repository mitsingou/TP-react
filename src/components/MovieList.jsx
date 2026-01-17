import { useEffect, useState } from "react";
import { Link } from "react-router";
import Navbar from "./NavBar.jsx";
import "./MovieList.css";

const MovieList = () => {
  const [Movies, setMovies] = useState([]); //}
  const [valeur, setValeur] = useState("");
  const [valeurCliquee, setValeurCliquee] = useState('popular');

 const handleClick = (value) => {
    setValeurCliquee(value);
    console.log('Value cliquée:', value);
  };

   useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${valeurCliquee}?api_key=579822ffa7fd55b63567c5fd42294b32`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results || []))
      .catch((error) => console.error("Error fetching movies:", error));
  }, [valeurCliquee]); 

  if (!Movies) return <div>Loading...</div>;
  return (
    <div className="movieList">
      <div className="movieList--searchItem">
        <input
          type="text"
          value={valeur}
          onChange={(e) => setValeur(e.target.value)}
          placeholder="Chercher un film..."
        />
        <br />
        <br />
        <button>
          <Link to={`/searchMovie/${valeur}`}>Chercher</Link>
        </button>
        <br></br><br></br>
        <div>
          <p>Films par catégorie</p>
          <br/>
          <p><button onClick={() => handleClick('popular')}>Populaires</button></p>
           <br/>
          <p><button onClick={() => handleClick('now_playing')}>En cours de diffusion</button></p>
           <br/>
          <p><button onClick={() => handleClick('top_rated')}>Les mieux notés</button></p>
           <br/>
          <p><button onClick={() => handleClick('upcoming')}>A venir</button></p>
        </div>
      </div>
      <div className="movieList--results">
        <ul>
          {Movies.map((Movie) => (
            <li key={Movie.id}>
              <Link to={`/details/${Movie.id}`}>
                {Movie.title} - {Movie.vote_average}
                <br />
                {Movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
                    alt={Movie.title}
                  />
                )}
                <div>
                  <br />
                </div>
                <button>Voir les détails</button>
                <div>
                  <br />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MovieList;
