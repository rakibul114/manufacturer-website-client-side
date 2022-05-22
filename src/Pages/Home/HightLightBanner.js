import React from 'react';

// images for hight-light banner
import deliveryIcon from '../../assets/hightlight-banner/icon-delivery.png';
import brandsIcon from "../../assets/hightlight-banner/icon-brands.png";
import storesIcon from "../../assets/hightlight-banner/icon-stores.png";
import ausIcon from "../../assets/hightlight-banner/icon-aus.png";
import whyIcon from "../../assets/hightlight-banner/icon-why.png";

const HightLightBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center bg-info py-3 gap-0">
      <div className="delivery-icon flex justify-center items-center">
        <img style={{ height: "60px" }} src={deliveryIcon} alt="" />
        <h1 className="text-primary text-xl ml-3">We Deliver Everywhere</h1>
      </div>
      <div className="brands-icon flex justify-center items-center">
        <img style={{ height: "60px" }} src={brandsIcon} alt="" />
        <h1 className="text-primary text-xl ml-3">Your Favorite Brands</h1>
      </div>
      <div className="stores-icon flex justify-center items-center">
        <img style={{ height: "60px" }} src={storesIcon} alt="" />
        <h1 className="text-primary text-xl ml-3">About Our Stores</h1>
      </div>
      <div className="aus-icon flex justify-center items-center">
        <img style={{ height: "60px" }} src={ausIcon} alt="" />
        <h1 className="text-primary text-xl ml-3">Australian Owned</h1>
      </div>
      <div className="why-icon flex justify-center items-center">
        <img style={{ height: "60px" }} src={whyIcon} alt="" />
        <h1 className="text-primary text-xl ml-3">Why Shop with Timbecon</h1>
      </div>
    </div>
  );
};

export default HightLightBanner;