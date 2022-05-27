// Navbar previous code
//=======================
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/timbecon-logo.png";
import auth from "../../firebase.init";

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
                    stroke="white"
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
                    <Link as={Link} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/tools">
                      Tools
                    </Link>
                  </li>
                  <li>
                    {user && (
                      <Link className="mr-4" to="/dashboard">
                        Dashboard
                      </Link>
                    )}
                  </li>
                  <li>
                    {user ? (
                      <div className="flex">
                        <h1 className="font-normal">{user.displayName}</h1>
                        <button className="ml-2" onClick={handleSignOut}>
                          Sign Out
                        </button>
                      </div>
                    ) : (
                      <Link as={Link} to="/login">
                        Login
                      </Link>
                    )}
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
              <nav className="menu menu-horizontal p-0 text-white font-bold text-xl items-center">
                <Link as={Link} to="/">
                  Home
                </Link>
                <Link className="mx-4" as={Link} to="/tools">
                  Tools
                </Link>
                <Link className="mr-4" as={Link} to="/about">
                  About
                </Link>
                {user && (
                  <Link className="mr-4" to="/dashboard">
                    Dashboard
                  </Link>
                )}
                {user ? (
                  <div className="flex">
                    <h1 className="font-normal">{user.displayName}</h1>
                    <button className="ml-2" onClick={handleSignOut}>
                      Sign Out
                    </button>
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
        {/*Side nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link as={Link} to="/">
              Home
            </Link>
            <Link className="mx-4" as={Link} to="/tools">
              Tools
            </Link>
            <Link className="mr-4" as={Link} to="/about">
              About
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <label
            tabIndex="1"
            htmlFor="dashboard-sidebar"
            className="btn btn-ghost lg:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// home banner
<div className="carousel w-full autoplay: true">
  {/*previous */}
  <div id="item4" className="carousel-item w-full">
    <img src={slide4} className="w-full" alt="" />
  </div>
</div>; 


<Carousel
  style={{
    position: "absolute",
    display: "block",
    zIndex: -2,
    minHeight: "100%",
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  }}
  autoPlay={true}
  infiniteLoop={true}
  showArrows={false}
  showStatus={false}
  showIndicators={false}
  showThumbs={false}
  interval={2000}
>
  <div>
    <div className="bg-base-100 mx-auto">
      <div className="card-body">
        <div className="card-actions justify-center items-center">
          <img src={slide1} alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* slide 2 */}
  <div className="bg-base-100 mx-auto">
    <div className="card-body">
      <div>
        <div className="card-actions justify-center items-center">
          <img src={slide2} alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* slide 3 */}
  <div className="bg-base-100 mx-auto">
    <div className="card-body">
      <div className="card-actions justify-center items-center">
        <img src={slide3} alt="" />
      </div>
    </div>
  </div>
  {/* slide 4 */}

  <div className="bg-base-100 mx-auto w-it">
    <div className="card-body">
      <div className="card-actions justify-center items-center">
        <img src={slide4} alt="" />
      </div>
    </div>
  </div>
</Carousel>;


