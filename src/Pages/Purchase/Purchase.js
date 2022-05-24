import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Purchase = () => {
  const { toolId } = useParams();
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/tool/${toolId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolId]);

  return (
    <div>
      <h2 className="text-center text-3xl">
        You are about to book: {tool.name}
      </h2>
    </div>
  );
};

export default Purchase;