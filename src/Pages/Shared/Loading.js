import React from 'react';
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
    return (
      <div className="flex justify-center items-center mt-32">
        <BallTriangle
          height="100"
          width="100"
          color="grey"
          ariaLabel="loading"
        />
      </div>
    );
};

export default Loading;