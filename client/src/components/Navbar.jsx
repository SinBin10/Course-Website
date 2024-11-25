import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="text-purple-600">
        <div className="flex justify-between max-w-[76rem] px-16 py-9 m-auto">
          <div className="logo">
            <NavLink to="/">LearnWeb</NavLink>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
