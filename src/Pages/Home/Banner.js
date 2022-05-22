import React from 'react';
// images for slide
import slide1 from '../../assets/banner/slide1.jpg';
import slide2 from "../../assets/banner/slide2.jpg";
import slide3 from "../../assets/banner/slide3.jpg";
import slide4 from "../../assets/banner/slide4.jpg";
import HightLightBanner from './HightLightBanner';



const Banner = () => {
    return (
      <div>
        <div className="carousel w-full autoplay: true">
          <div id="item1" className="carousel-item w-full">
            <img src={slide1} className="w-full" alt="" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={slide2} className="w-full" alt="" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={slide3} className="w-full" alt="" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src={slide4} className="w-full" alt="" />
          </div>
        </div>        
        <HightLightBanner></HightLightBanner>
      </div>
    );
};

export default Banner;