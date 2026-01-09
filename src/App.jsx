import React from "react"; 
import { Routes, Route } from "react-router";
import MovieList from "./components/MovieList.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Details from "./components/details.jsx";
import SearchMovie from "./components/SearchMovie.jsx";




function App() {
  return (         
      <Routes>   
          <Route path="/" element={<MovieList />} />    
          <Route path="/details/:id" element={<Details />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/searchMovie/:valeur" element={<SearchMovie />} />  
          
      </Routes> 
  );
}

export default App;