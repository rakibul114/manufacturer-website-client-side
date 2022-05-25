import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Purchase = () => {
   const [user] = useAuthState(auth);  
  const { toolId } = useParams();
  const [tool, setTool] = useState({});
  console.log(tool);

  useEffect(() => {
    const url = `http://localhost:5000/tool/${toolId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolId]);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      tool: tool.name,
      toolId: toolId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://secret-island-02232.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Your order is booked!");
          event.target.reset();
        }
      });
  };


  return (
    <div>
      <h2 className="text-center text-3xl mt-5">
        You are about to order: {tool.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center items-center mt-10">
        {/*Tool photo and info*/}
        <div className="justify-center items-center p-10 mx-auto">
          <div className="container mx-auto">
            <div class="overflow-x-auto w-auto">
              <table class="table w-auto">
                {/* head */}
                <thead>
                  <tr>
                    <th>Tool Sample</th>
                    <th>Available Quantity</th>
                    <th>Minimum Order</th>
                    <th>Price (per unit)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>
                      <div class="flex items-center space-x-3">
                        <div class="avatar">
                          <div class="mask mask-squircle w-24 h-24">
                            <img src={tool.image} alt="" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-2xl">
                        {tool.available} <span>pcs</span>
                      </p>
                    </td>
                    <td>
                      <p className="text-2xl">
                        {tool.minimumOrder} <span>pcs</span>
                      </p>
                    </td>
                    <td>
                      <p className="text-2xl">${tool.price}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*form*/}
        <div className="mx-auto">
          <form onSubmit={handlePlaceOrder} className="flex flex-col">
            <input
              className="w-80 mb-2 p-4"
              type="text"
              name="name"
              value={user?.displayName}
              id=""
              placeholder="Name"
              required
              readOnly
              disabled
            />
            <input
              className="w-80 mb-2 p-4"
              type="email"
              name="email"
              value={user?.email}
              id=""
              placeholder="Email"
              required
              readOnly
              disabled
            />
            <input
              className="w-80 mb-2 p-4"
              type="text"
              value={tool.name}
              name="service"
              id=""
              placeholder="Service"
              required
              readOnly
            />
            <input
              className="w-80 mb-2 p-4"
              type="text"
              name="address"
              id=""
              placeholder="Address"
              autoComplete="off"
              required
            />
            <input
              className="w-80 mb-2 p-4"
              type="text"
              name="phone"
              id=""
              placeholder="Phone"
              required
            />
            <input
              className="btn btn-primary mb-10"
              type="submit"
              value="Place Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;