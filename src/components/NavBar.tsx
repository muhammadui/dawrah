import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold">
          Dawrah
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="text-white hover:text-gray-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" className="text-white hover:text-gray-300">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/donate" className="text-white hover:text-gray-300">
              Donate
            </NavLink>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
