import React from "react";
import reactlogo from "../../assets/reactlogo.png";

const Blog = () => {
  return (
    <div className="container mx-auto my-12 px-12">
      <h1 className="text-5xl mb-8 font-bold">Frequently Asked Questions</h1>
      <div className="bg-info">
        <h1 className="bg-secondary p-4 text-xl font-bold">
          How to improve the performance of a React Application?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start mx-auto">
          <div>
            <p className="p-6 text-justify">
              <p className="font-bold">
                Here are some steps to improve React App performance:
              </p>
              <p className="font-semibold">1. useMemo():</p>
              <p>
                This is a React hook that is used to cache functions in React,
                CPU-expensive functions. We have an expensive function expFunc
                that takes 3 mins to execute, it takes an input count waits for
                3 mins before returning the multiple of 90. We have a variable
                resCount that calls the expFunc with the count variable from the
                useState hook. We have an input that sets the count state
                whenever we type anything.
              </p>
            </p>
          </div>
          <div>
            <img src={reactlogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
