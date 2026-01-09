import { createContext, useState } from "react";
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    
    const addMovie = (movie) => {
        setMovies([...movies, movie]);
    };

    const removeMovie = (movieId) => {
        setMovies(movies.filter(movie => movie.id !== movieId));
    }; 
    return (
        <MovieContext.Provider value={{ movies, addMovie, removeMovie }}>
            {children}
        </MovieContext.Provider>
    );
}  