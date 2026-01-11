import { useEffect, useState } from "react"; 
import { Link } from 'react-router';
import Navbar from "./NavBar.jsx";



const MovieList = () => {
    const [Movies,setMovies] = useState([]); //}
    const [valeur, setValeur] = useState("");

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=579822ffa7fd55b63567c5fd42294b32') 
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(error => console.error('Error fetching movies:', error));
    }, []);


    if (!Movies) return <div>Loading...</div>; 
    return (
        <div>
            <div><Navbar /></div>,            
            <div> 
                <input                   
                    type="text"
                    value={valeur}                    
                    onChange={(e) => setValeur(e.target.value)}
                    placeholder="Chercher un film..."
                />
                <button><Link to={`/searchMovie/${valeur}`}>Chercher</Link></button>                
            </div>
            
            <h1>Liste des films</h1>              
            <ul>
                {Movies.map((Movie) => (
                    <li key={Movie.id}>
                        <Link to={`/details/${Movie.id}`}> 
                            {Movie.original_title} -{Movie.vote_average} 
                        <div>
                            <br/>
                        </div>
                        <div>{Movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} alt={Movie.original_title} width={150}/>}</div>
                        
                        <button>Voir les détails</button> 
                        <div><br/></div>
                        </Link>
                    </li>
                ))} 
            </ul>     
        </div>
    );
};
export default MovieList; 
