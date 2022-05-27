import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


     useEffect(() => {
       if (user) {
         fetch(`http://localhost:5000/booking?patient=${user.email}`, {
           method: "GET",
           headers: {
             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
         })
           .then((res) => {
             console.log("res", res);
             if (res.status === 401 || res.status === 403) {
               signOut(auth);
               localStorage.removeItem("accessToken");
               navigate("/");
             }
             return res.json();
           })
           .then((data) => {
             setOrders(data);
           });
       }
     }, [user, navigate]);



    return (
        <div>
            <h1 className='text-center text-2xl'>All my orders</h1>
        </div>
    );
};

export default MyOrders;