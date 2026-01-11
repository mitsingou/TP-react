import { useEffect, useState } from "react"; 
import { Link } from 'react-router';

const Wishlist = () => {    
    const [Movies,setMovies] = useState([]); 

    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) {
            setMovies(JSON.parse(storedWishlist));
        }
    }, []);

    return (
        <div>
            <h1>My Wishlist</h1>
            {Movies.length === 0 ? (
                <p>La liste est vide.</p>
            ) : (
                <ul>
                    {Movies.map((movie) => (
                        <li key={movie.id}> 
                            <Link to={`/movies/${movie.id}`}>
                                <h2>{movie.title}</h2>
                            </Link>
                            <p>{movie.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default Wishlist;           