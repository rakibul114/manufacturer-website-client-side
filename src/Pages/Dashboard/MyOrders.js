import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);  
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


     useEffect(() => {
       if (user) {
         fetch(`http://localhost:5000/order?email=${user.email}`, {
           method: "GET",
           headers: {
             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
         })
           .then((res) => {             
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
     }, [user]);



    return (
      <div>
        <h2>My Appointments: {orders.length}</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Tool Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
                <th>Payment</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((a, index) => (
                <tr key={a._id}>
                  <th>{index + 1}</th>
                  <td>{a.tool}</td>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                  <td>{a.treatment}</td>
                  <td>
                    {a.price && !a.paid && (
                      <Link to={`/dashboard/payment/${a._id}`}>
                        <button className="btn btn-xs btn-success">pay</button>
                      </Link>
                    )}
                    {a.price && a.paid && (
                      <div>
                        <p>
                          <span className="text-success">Paid</span>
                        </p>
                        <p>
                          Transaction id:{" "}
                          <span className="text-success">
                            {a.transactionId}
                          </span>
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyOrders;