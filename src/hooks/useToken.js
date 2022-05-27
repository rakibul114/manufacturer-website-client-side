import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {  
    const email = user?.user?.email;
    const currentUser = { email: email };
    console.log(currentUser);
    if (email) {
      fetch(`https://calm-fjord-47074.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(currentUser)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside useToken", data);
          //   const accessToken = data.token;
          //   console.log(accessToken);
          // localStorage.setItem("accessToken", accessToken);
          // setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
