import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import loginImg from '../../assets/login-img.jpeg';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);  
    
    const navigate = useNavigate();    
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
        event.target.reset();
    };  
  

  let signInError;

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (error) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

    const navigateToRegister = () => {
        navigate('/register');
    };

    // Password reset
    const resetPassword = async () => {
      const email = emailRef.current.value;
      if (email) {
        await sendPasswordResetEmail(email);
        toast("Sent email");
      } else {
        toast("Please enter your email address");
      }
    };



    return (
      <div className="container mx-auto px-10 my-24 grid grid-cols-1 md:grid-cols-2 lg:grid items-center md:gap-x-16 gap-y-6">
        <div className="mx-auto bg-info p-6 rounded-md">
          <h1 className="text-center text-3xl mb-4">Please Login</h1>
          <form onSubmit={handleLogin}>
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
              login
            </button>
          </form>
          {signInError}
          <p className="mt-2">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-danger text-decoration-none"
              onClick={navigateToRegister}
            >
              <span className="text-red-600">Please Register</span>
            </Link>
          </p>
          <p className="">
            Forget password?{" "}
            <button className="" onClick={resetPassword}>
              Reset Password
            </button>
          </p>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </div>
        {/*Banner*/}
        <div className="mx-auto">
          <img className="rounded-md" src={loginImg} alt="" />
        </div>
        <ToastContainer />
      </div>
    );
};

export default Login;