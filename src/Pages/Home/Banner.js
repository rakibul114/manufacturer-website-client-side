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
        <div class="carousel w-full autoplay: true">
          <div id="item1" class="carousel-item w-full">
            <img src={slide1} class="w-full" alt="" />
          </div>
          <div id="item2" class="carousel-item w-full">
            <img src={slide2} class="w-full" alt="" />
          </div>
          <div id="item3" class="carousel-item w-full">
            <img src={slide3} class="w-full" alt="" />
          </div>
          <div id="item4" class="carousel-item w-full">
            <img src={slide4} class="w-full" alt="" />
          </div>
        </div>        
        <HightLightBanner></HightLightBanner>
      </div>
    );
};

export default Banner;