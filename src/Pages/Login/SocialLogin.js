import React from 'react';

const SocialLogin = () => {
    return (
      <div>
        {/*Google login */}
        <div className="text-center">
          <button
            onClick={() => signInWithGoogle()}
            className="google-button w-75 p-2 bg-light rounded"
          >
            <img height={40} src={googleIcon} alt="" /> Google Sign In
          </button>
        </div>
        {/*Facebook login */}
        <div className="text-center">
          <button className="facebook-button w-75 p-2 bg-light rounded my-3">
            <img height={40} src={facebookIcon} alt="" /> Facebook Sign In
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;