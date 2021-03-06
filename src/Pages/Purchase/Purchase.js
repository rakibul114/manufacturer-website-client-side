import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import useToolDetail from "../../hooks/useToolDetail";

const Purchase = () => {
  const { toolId } = useParams();
  const [tool] = useToolDetail(toolId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      clientName: user.displayName,
      email: user.email,
      tool: tool.name,
      toolId: toolId,
      available: tool.available,
      minimumOrder: tool.minimumOrder,
      price: tool.price,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://afternoon-sierra-85387.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast('Your order is book');
          event.target.reset();
        }
      });
  };

  // // Decrease quantity
  // const decreaseQuantity = () => {
  //   let newQuantity = parseInt(quantity - 1);
  //   const newProduct = { ...product, quantity: newQuantity };
  //   setProduct(newProduct);
  //   if (newProduct.length <= 0) {
  //     return;
  //   }

  return (
    <div className="mb-10">
      <h2 className="text-center text-3xl mt-5">
        You are about to order: {tool.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center items-center mt-10">
        {/*Tool photo and info*/}
        <div className="card lg:w-96 md:w-80 w-80 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img style={{ height: "180px" }} src={tool.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Product: {tool.name}</h2>
            <p>
              Available Quantity: {tool.available} <span>pcs</span>
            </p>
            <p>
              Price: ${tool.price} <span>per unit</span>{" "}
            </p>
            <div>
              <p>
                Minimum Order: <span>pcs</span>
              </p>
              <input
                type="number"
                value={tool.minimumOrder}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">
                <span className="text-white">Increase</span>
              </button>
              <button className="btn btn-primary">
                <span className="text-white">Decrease</span>
              </button>
            </div>
          </div>
        </div>
        {/*form*/}
        <div className="mx-auto bg-base-100 shadow-xl p-7 rounded-2xl">
          <form onSubmit={handlePlaceOrder} className="flex flex-col">
            <input
              className="w-80 mb-2 p-4 border-2 rounded-md"
              type="text"
              name="name"
              value={user?.displayName}
              id="name"
              placeholder="Name"
              required
              readOnly
              disabled
            />
            <input
              className="w-80 mb-2 p-4 border-2 rounded-md"
              type="email"
              name="email"
              value={user?.email}
              id="email"
              placeholder="Email"
              required
              readOnly
              disabled
            />
            <input
              className="w-80 mb-2 p-4 border-2 rounded-md"
              type="text"
              value={tool.name}
              name="service"
              id="name"
              placeholder="Service"
              readOnly
            />
            <input
              className="w-80 mb-2 p-4 border-2 rounded-md"
              type="text"
              value={"Available quantity: " + tool.available + "pcs"}
              name="service"
              id="name"
              placeholder="Service"
              readOnly
            />
            <input
              className="w-80 mb-2 p-4 border-2 rounded-md"
              type="text"
              value={"Minimum order: " + tool.minimumOrder + "pcs"}
              name="service"
              id="name"
              placeholder="Service"
              readOnly
            />
            <input
              className="w-80 mb-2 p-4 border-2 rounded-md"
              type="text"
              value={tool.name}
              name="service"
              id="name"
              placeholder="Service"
              readOnly
            />
            <input
              className="w-80 mb-2 p-4 border-2 rounded-md"
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              autoComplete="off"
              required
            />
            <input
              className="w-80 mb-2 p-4 border-2 rounded-md"
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              required
            />
            <input
              className="btn btn-primary mb-5"
              type="submit"
              value="Place Order"
            />
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Purchase;
