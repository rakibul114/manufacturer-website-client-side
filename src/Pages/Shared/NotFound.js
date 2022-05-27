import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFoundImg from '../../assets/not-found.png';


const NotFound = () => {
    const navigate = useNavigate();

    const backToHomepage = () => {
      navigate("/");
    };

    return (
      <div className="container text-center mb-5 mx-auto">
        <div>
          <img className='mx-auto' width={350} src={notFoundImg} alt="" />
          <h1 className='text-3xl mb-4'>This page could not be found!</h1>
          <p className='text-xl mb-5'>
            We are sorry. But the page you are looking for is not available.{" "}
            <br />
            Perhaps you can try a new search.
          </p>          
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button
            onClick={backToHomepage}
            className="btn btn-primary d-flex block text-center mx-auto mt-5"
          >
            BACK TO HOMEPAGE
          </button>
        </div>
      </div>
    );
};

export default NotFound;