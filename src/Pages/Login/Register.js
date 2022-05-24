import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import signupImg from '../../assets/sign-up.jpeg';
import auth from '../../firebase.init';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
      const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        createUserWithEmailAndPassword(email, password);

        event.target.reset();      
    };

    const navigateToRegister = () => {
      navigate("/register");
    };

    if (user) {
        navigate('/');
    }


    return (
      <div className="container mx-auto px-10 my-24 grid grid-cols-1 md:grid-cols-2 lg:grid items-center md:gap-x-16 gap-y-6">
        <div className="mx-auto bg-info p-6 rounded-md">
          <h1 className="text-center text-3xl mb-4">Please Register</h1>
          <form onSubmit={handleRegister}>
            <label htmlFor="name">Name</label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs mb-2 block"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs mb-2"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Your Password"
              className="input input-bordered w-full max-w-xs block"
              required
            />
            <button className="btn px-32 block mt-6 bg-primary text-white">
              Register
            </button>
          </form>
          <p className="mt-2">
            Already Registered?{" "}
            <Link
              to="/login"
              className="text-danger text-decoration-none"
              onClick={navigateToRegister}
            >
              <span className="text-green-600">Please Login</span>
            </Link>
          </p>
        </div>

        <div className="mx-auto">
          <img className="rounded-md" src={signupImg} alt="" />
        </div>
      </div>
    );
};

export default Register;