import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog App</h1>
      <div className="links">
        <Link to="/">Homepage</Link>
      </div>
    </nav>
  );
};

export default Navbar;
