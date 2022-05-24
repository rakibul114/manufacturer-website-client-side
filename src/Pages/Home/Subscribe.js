import React from 'react';

const Subscribe = () => {
    return (
      <div className="bg-primary rounded-l-full p-24 grid grid-cols-1 lg:grid-cols-2 items-center mt-14">
        <div>
          <h2 className="text-white text-5xl font-bold mb-2">
            Stay up to date with<br/> all the actions
          </h2>
          <p className="text-white text-2xl">
            Subscribe to the mailing list to be notified of the latest product
            releases, news & events.
          </p>
        </div>
        <div className='mt-8'>
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full max-w-xs rounded-full block"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs rounded-full block my-3"
          />
          <button className="btn btn-warning rounded-full px-10">Subscribe</button>
        </div>
      </div>
    );
};

export default Subscribe;