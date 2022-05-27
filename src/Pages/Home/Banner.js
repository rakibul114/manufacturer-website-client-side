import React from 'react';
import Slider from "react-slick";


// images for slide
import slide1 from '../../assets/banner/slide1.jpg';
import slide2 from "../../assets/banner/slide2.jpg";
import slide3 from "../../assets/banner/slide3.jpg";
import slide4 from "../../assets/banner/slide4.jpg";
import HightLightBanner from './HightLightBanner';



const Banner = () => {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };

    return (
      <div>
        <div className="mx-auto">
          <Slider {...settings}>
            <div>
              <img src={slide1} alt="" />
            </div>
            <div>
              <img src={slide2} alt="" />
            </div>
            <div>
              <img src={slide3} alt="" />
            </div>
            <div>
              <img src={slide4} alt="" />
            </div>
          </Slider>
        </div>
        <HightLightBanner></HightLightBanner>
      </div>
    );
};

export default Banner;