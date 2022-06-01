import React from 'react';
import { useNavigate } from 'react-router-dom';


const Tool = ({ singleTool }) => {
  console.log(singleTool);
  const { _id, image, price, minimumOrder, available, name, description } =
    singleTool;

  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/tool/${id}`);
  };

  return (
    <div>
      <div className="card lg:w-96 md:w-80 w-80 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img style={{ height: "180px" }} src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p title={description}>
            {description.length >= 20 ? description.slice(0, 50) : description}
            ...
  </p>
          <p>
            Minimum Order: {minimumOrder}{" "}
            <span className="text-secondary">pcs</span>
          </p>
          <p>
            Available Quantity: {available}{" "}
            <span className="text-secondary">pcs</span>
          </p>
          <p>
            Price: ${price} <span className="text-secondary">per unit</span>{" "}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigateToPurchase(_id)}
              className="btn btn-primary"
            >
              <span className="text-white">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;