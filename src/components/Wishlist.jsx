import { useEffect, useState } from "react"; 
import { Link } from 'react-router';

const Wishlist = () => {    
    const [Movies,setMovies] = useState([]); //}

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=579822ffa7fd55b63567c5fd42294b32') 
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(error => console.error('Error fetching movies:', error));
    }, []);
    return (
        <div>
            <h1>Ma liste de souhaits</h1>
            <ul>
                {Movies.map((Movie) => (
                    <li key={Movie.id}>
                        {Movie.original_title} -{Movie.vote_average} 
                        <div>
                            <br/>
                        </div>
                        <div>{Movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} alt={Movie.original_title} width={150}/>}</div> 
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Wishlist;