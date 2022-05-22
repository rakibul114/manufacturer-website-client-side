import React from 'react';
import greenLogo from '../../assets/timbecon-logo-green.png';

import { Icon } from "@iconify/react";

// payment option icon
import mastercard from '../../assets/payment-option/mastercard.svg';
import paypal from '../../assets/payment-option/paypal.svg';
import visa from '../../assets/payment-option/visa.svg';


const Footer = () => {
    return (
      <div className="bg-secondary h-auto mt-28 py-10">
          <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img style={{ height: "40px" }} src={greenLogo} alt="" />
              <h1 className="text-xl text-primary my-2">1300 980 667</h1>
              <p className="text-xl text-primary">sales@timbecon.com.au</p>
              <div className="flex items-center mt-5">
                <div>
                  <Icon
                    className="text-primary text-6xl"
                    icon="jam:facebook-circle"
                  />
                </div>
                <div>
                  <Icon
                    className="text-primary text-6xl"
                    icon="jam:youtube-circle"
                  />
                </div>
                <div>
                  <Icon
                    className="text-primary text-5xl ml-1"
                    icon="bi:instagram"
                  />
                </div>
              </div>
            </div>

            <div>
              <div>
                <p className="text-primary text-xl font-bold">PERTH</p>
                <p className="text-primary">
                  31 Canvale Road,
                  <br /> Canning Vale, WA 6155
                  <br /> Ph. 08 6161 0392
                  <br />
                  perth.shop@timbecon.com.au
                </p>
              </div>
              <div>
                <h1 className="text-primary text-xl font-bold">MELBOURNE</h1>
                <p className="text-primary">
                  U6/3b Newlands Road,
                  <br /> Reservoir, VIC 3073
                  <br /> Ph. 03 9448 8300
                  <br />
                  melbourne.shop@timbecon.com.au
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-primary text-xl font-bold">SHOP WITH US</h1>
              <div className="text-primary">
                <p>Shop In-Store</p>
                <p>Sale</p>
                <p>Payment Options</p>
                <p>Trade & Wholesale</p>
              </div>
            </div>
            <div>
              <h1 className="text-primary text-xl font-bold">
                CUSTOMER SERVICE
              </h1>
              <div className="text-primary">
                <p>FAQ</p>
                <p>Contact Us</p>
                <p>My Account</p>
                <p>Returns</p>
                <p>Warranties</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div>
              <p className="text-primary">
                <small>Timbecon Pty Ltd &copy; 2022</small>
              </p>
            </div>
            <div className="flex">
              <img style={{ height: "30px" }} src={mastercard} alt="" />
              <img
                className="mx-2"
                style={{ height: "30px" }}
                src={paypal}
                alt=""
              />
              <img style={{ height: "30px" }} src={visa} alt="" />
            </div>
          </div>
      </div>
    );
};

export default Footer;