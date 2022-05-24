import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../assets/google.png';
import facebookIcon from '../../assets/facebook.png';
import Loading from '../Shared/Loading';




const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user2, loading2, error2] =
    useSignInWithFacebook(auth);
  

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";


  let errorElement;

  if (loading || loading2) {
    return <Loading></Loading>;
  }

  if (error || error2) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {error2?.message}
        </p>
      </div>
    );
  }

  if (user || user2) {
    navigate(from, { replace: true });
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