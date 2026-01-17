import React from "react"; 
import { Routes, Route } from "react-router";
import MovieList from "./components/MovieList.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Details from "./components/MovieDetail.jsx";
import SearchMovie from "./components/SearchMovie.jsx";
import Navbar from "./components/NavBar.jsx";
import './App.css'; 
import './components/NavBar.css'; 
import './components/MovieList.css';


function App() {
  return (
          <div className="App">
            <Navbar />
            <Routes>   
              <Route path="/" element={<MovieList />} />    
              <Route path="/details/:id" element={<Details />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/searchMovie/:valeur" element={<SearchMovie />} /> 
            </Routes>
          </div>
  );
}

export default App;