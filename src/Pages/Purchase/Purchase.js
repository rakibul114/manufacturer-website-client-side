import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';



const Purchase = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const { toolId } = useParams();
  const [tool, setTool] = useState({});
  console.log(tool);

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