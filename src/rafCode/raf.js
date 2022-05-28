import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://afternoon-sierra-85387.herokuapp.com/order?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
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

  const deleteTool = (id) => {
    const proceed = window.confirm("Are you Sure?");
    if (proceed) {
      const url = `https://afternoon-sierra-85387.herokuapp.com/order/${id}`;
      console.log(url);
      axios.delete(url, orders).then((response) => {
        const { data } = response;
        const remaining = orders.filter((item) => item._id !== id);
        setOrders(remaining);
        if (data.deleteCount) {
          toast("Your item has been deleted");
        }
      });
    }
  };

  return (
    <div className="container mx-auto px-10">
      <h2 className="text-center text-2xl my-5">My Orders: {orders.length}</h2>
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
            {orders.map((od, index) => (
              <tr key={od._id}>
                <th>{index + 1}</th>
                <td>{od.tool}</td>
                <td>{od.available}</td>
                <td>{od.price}</td>
                <td>{parseInt(od.available * od.price)}</td>
                <td>
                  {od.price && !od.paid && (
                    <Link to={`/dashboard/payment/${od._id}`}>
                      <button className="btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {od.price && od.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{od.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => deleteTool(od._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
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
