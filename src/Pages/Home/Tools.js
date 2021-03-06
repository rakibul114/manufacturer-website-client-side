import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-sierra-85387.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [tools]);

  return (
    <div>
      <h2 className="text-center text-4xl text-primary font-bold my-24">
        OUR TOOLS
      </h2>
      <div className="container lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 px-12">
        {tools.slice(0, 6).map((singleTool) => (
          <Tool key={singleTool._id} singleTool={singleTool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
