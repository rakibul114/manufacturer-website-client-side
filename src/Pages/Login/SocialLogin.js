import React, { useEffect } from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../assets/google.png';
import facebookIcon from '../../assets/facebook.png';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';


const SocialLogin = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fUser, fLoading, fError] =
    useSignInWithFacebook(auth);
  
  const [token] = useToken(gUser || fUser);
  

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
 

  if (gLoading || fLoading) {
    return <Loading></Loading>;
  }


  let errorElement;

  if (gError || fError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {gError?.message} {fError?.message}
        </p>
      </div>
    );
  } 


    return (
      <div>
        {/*Google login */}
        <div className="flex justify-center items-center">
          <button
            className="btn block px-16 mt-6 bg-sky-600 text-white"
            onClick={() => signInWithGoogle()}
          >
            <img style={{ height: "35px" }} src={googleIcon} alt="" />
            Continue with Google
          </button>
        </div>
        <p className='text-red-600'>{errorElement}</p>
        {/*Facebook login */}
        <div className="">
          <button
            className="btn block px-16 mt-6 bg-sky-600 text-white"
            onClick={() => signInWithFacebook()}
          >
            <img style={{ height: "35px" }} src={facebookIcon} alt="" />{" "}
            <p>Continue with Facebook</p>
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;