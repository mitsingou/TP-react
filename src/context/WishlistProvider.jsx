import { createContext, useState } from "react";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]); 
    
    const addToWishlist = (movie) => {
        setWishlist([...wishlist, movie]);
    };

    const removeFromWishlist = (movieId) => {
        setWishlist(wishlist.filter(movie => movie.id !== movieId));
    }; 
    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}     