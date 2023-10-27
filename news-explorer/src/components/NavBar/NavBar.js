import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar({ children }) {
  return (
      <nav className="navbar">
          <NavLink to="/" className="navbar__link" activeClassName="navbar__link_active">Home</NavLink>
          <NavLink to="/SavedArticle" className="navbar__link" activeClassName="navbar__link_active">Saved articles</NavLink>
      </nav>
  );
}

export default NavBar;
