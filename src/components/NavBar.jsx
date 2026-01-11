import { Link } from "react-router";    

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to='/'>Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to='/MovieList'>Films populaires</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
