import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login-img.jpeg';

const Login = () => {
    const navigate = useNavigate();    
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    };

    const navigateToRegister = () => {
        navigate('/register');
    };



    return (
      <div className="container mx-auto px-10 my-24 grid grid-cols-1 md:grid-cols-2 lg:grid items-center">
        <div className="mx-auto">
          <h1 className="text-center text-3xl mb-4">Please Login</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs mb-2" required
            />
            <label htmlFor="password">Password</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Your Password"
              className="input input-bordered w-full max-w-xs block" required
            />
            <button className="btn px-36 block mt-6 bg-primary text-white">
              login
            </button>
          </form>
          <p className="mt-2">
            New to Genius Car?{" "}
            <Link
              to="/register"
              className="text-danger text-decoration-none"
              onClick={navigateToRegister}
            >
              Please Register
            </Link>
          </p>
        </div>

        <div className="mx-auto">
          <img src={loginImg} alt="" />
        </div>
      </div>
    );
};

export default Login;