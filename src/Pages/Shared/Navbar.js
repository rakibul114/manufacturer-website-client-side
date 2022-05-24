import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/timbecon-logo.png';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);  
  const handleSignOut = () => {
    signOut(auth);
  };


    return (
      <div>
        <div className="bg-accent">
          <h1 className="py-1 text-center font-bold text-primary">
            Saturday May 21: Perth store closed for stocktake.
          </h1>
        </div>
        <div className="bg-primary">
          <div className="container mx-auto px-12">
            <div className="navbar py-6">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
                  <ul
                    tabIndex="0"
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>Tools</a>
                    </li>

                    <li>
                      <a>Login</a>
                    </li>
                  </ul>
                </div>
                <Link
                  className="btn btn-ghost normal-case text-xl"
                  as={Link}
                  to="/"
                >
                  <img style={{ height: "40px" }} src={logo} alt="" />
                </Link>
              </div>
              <div className="navbar-end hidden lg:flex">
                <nav className="menu menu-horizontal p-0 text-white font-bold text-xl">
                  <Link as={Link} to="/">
                    Home
                  </Link>
                  <Link className="mx-4" as={Link} to="/tools">
                    Tools
                  </Link>
                  <Link className="mr-8" as={Link} to="/about">
                    About
                  </Link>
                  {user ? (
                    <div className="flex">
                      <h1 className="font-normal">{user.displayName}</h1>
                      <button className='ml-2' onClick={handleSignOut}>Sign Out</button>
                    </div>
                  ) : (
                    <Link as={Link} to="/login">
                      Login
                    </Link>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;