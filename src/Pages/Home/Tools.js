import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        const url = 'tools.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);


    return (
      <div>
        <h2 className="text-center text-4xl text-primary font-bold my-10">
          OUR TOOLS
        </h2>
        <div className='container lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 px-12'>
          {tools.map((tool) => (
            <Tool key={tool._id} tool={tool}></Tool>
          ))}
        </div>
      </div>
    );
};

export default Tools;