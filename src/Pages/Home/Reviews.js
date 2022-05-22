import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

import client1 from '../../assets/reviews/client1.png';
import client2 from '../../assets/reviews/client2.png';
import client3 from '../../assets/reviews/client3.png';
import client4 from '../../assets/reviews/client4.png';


const Reviews = () => {
    return (
      <div>
        <h1 className="text-center text-3xl">WHAT OUR CLIENTS SAY</h1>
        <div className="mx-auto my-10">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
          >
            <div>
              <img style={{ width: "50px" }} src={client1} alt="" />
            </div>
            <div>
              <img style={{ width: "50px" }} src={client2} alt="" />
            </div>
            <div>
              <img style={{ width: "50px" }} src={client3} alt="" />
            </div>
            <div>
              <img style={{ width: "50px" }} src={client4} alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    );
};

export default Reviews;