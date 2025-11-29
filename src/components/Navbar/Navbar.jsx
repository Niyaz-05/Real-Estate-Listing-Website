import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link className="logo" to="/">RealEstate</Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/listings">Listings</Link></li>
        {user && <li><Link to="/add-property">Add Property</Link></li>}
      </ul>

      <div className="auth-section">
        {!user ? (
          <Link className="login-btn" to="/login">Login</Link>
        ) : (
          <button className="logout-btn" onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};
