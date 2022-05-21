import React from 'react';
import logo from '../../assets/timbecon-logo.png';

const Navbar = () => {
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
                <a className="btn btn-ghost normal-case text-xl">
                  <img style={{ height: "40px" }} src={logo} alt="" />
                </a>
              </div>
              <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-white font-bold">
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
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;