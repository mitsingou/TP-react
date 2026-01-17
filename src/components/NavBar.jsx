import { Link } from "react-router";    

function Navbar() {
  return ( 
     <div className="nav-container">  
      <nav>
          <ul className="nav-menu" id="navMenu">
              <li><Link to='/'>Accueil</Link></li>
              <li><Link to='/Wishlist'>Liste de souhaits</Link></li>
          </ul>
      </nav>
      <br/>
      <br/>
    </div>   
  );
}
export default Navbar;



