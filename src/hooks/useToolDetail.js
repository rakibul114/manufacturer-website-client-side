import { useEffect, useState } from "react";

const useToolDetail = (toolId) => {
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `https://calm-fjord-47074.herokuapp.com/tool/${toolId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolId]);

  return [tool];
};

export default useToolDetail;
