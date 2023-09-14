import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authproviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // const navItems = { Home,About,Services,Blog,Contact};
  const navItems = (
    <>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="services">Services</Link>
      </li>
      <li>
        <Link to="blog">Blog</Link>
      </li>
      {user?.email ? (
        <>
          <li><Link to="/bookings">My Bookings</Link></li>
          <li>
            <button onClick={handleLogOut}>Log out</button>
          </li>
        </>
      ) : (
        <li>
          {" "}
          <Link to="/login">Login</Link>{" "}
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* DROPDOWN HEADER */}

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link>
          <img src={logo} alt="" />
        </Link>
      </div>

      {/*MAIN  HEADER  */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-secondary">Secondary</button>
      </div>
    </div>
  );
};

export default Navbar;
