import { useEffect, useState } from "react"; 
import { useParams } from "react-router";



const SearchMovie = () => {
    const { valeur } = useParams();
    const [Movies,setMovies] = useState([]); //}
   
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=579822ffa7fd55b63567c5fd42294b32&query=${valeur}`
        ) 
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(error => console.error('Error fetching movies:', error));
    }, [valeur]);
    if (!Movies) return <div>Loading...</div>; 
    return (
        <div>
            <h1>Résultats de la recherche pour : {valeur}</h1>              
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
export default SearchMovie;