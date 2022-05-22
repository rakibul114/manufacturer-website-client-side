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
            interval={2000}
          >
            <div>
              <div className="card w-96 bg-base-100 shadow-2xl mx-auto my-6">
                <div className="card-body">
                  <p>
                    <small>
                      Timbecon was amazing, I had a very specific requirement
                      for my project and I didn’t know where to start. They
                      helped me design the perfect solution that made the
                      project seamless.
                    </small>
                  </p>
                  <div>
                    <div className="card-actions justify-center items-center">
                      <img style={{ width: "50px" }} src={client1} alt="" />
                      <div>
                        <p>Hodges Brandy</p>
                        <p>Bankstown, NSW</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-2xl mx-auto my-6">
                <div className="card-body">
                  <p>
                    <small>
                      I searched everywhere at local hardware stores for help
                      with a customized drill bit, Timbecon helped when no-one
                      else could. Thanks so much guys!
                    </small>
                  </p>
                  <div>
                    <div className="card-actions justify-center items-center">
                      <img style={{ width: "50px" }} src={client2} alt="" />
                      <div>
                        <p>Penelope Howell</p>
                        <p>Newcastle, NSW</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-2xl mx-auto my-6">
                <div className="card-body">
                  <p>
                    <small>
                      My company needed to upgrade our machining capability with
                      the acquisition of two state-of-the-art CNC machines
                      tools. We chose to make these acquisitions through
                      Timbecon after receiving proposals from other companies.
                    </small>
                  </p>
                  <div>
                    <div className="card-actions justify-center items-center">
                      <img style={{ width: "50px" }} src={client3} alt="" />
                      <div>
                        <p>Marissa Phillips</p>
                        <p>Broken Hill, NSW</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-2xl mx-auto my-6">
                <div className="card-body">
                  <p>
                    <small>
                      They supplied all the necessary tools for carpentry
                      works.Their price range is also reasonable than other
                      manufacturer. I highly recommend to try their tools once.
                    </small>
                  </p>
                  <div>
                    <div className="card-actions justify-center items-center">
                      <img style={{ width: "50px" }} src={client4} alt="" />
                      <div>
                        <p>Tamika Mcpherson</p>
                        <p>Ballina, NSW</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
};

export default Reviews;