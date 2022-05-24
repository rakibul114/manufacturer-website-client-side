import React from 'react';
import CountUp from "react-countup";
import toolsIcon from '../../assets/tools.png';
import expertIcon from '../../assets/expert.png';
import countriesIcon from '../../assets/countries.png';


const BusinessSummary = () => {
    return (
      <div className="text-center my-24">
        <div className="grid grid-cols-3 bg-info my-12 p-12 items-center">
          <div className="mx-auto">
            <div>
              <img
                className="mx-auto"
                style={{ height: "60px" }}
                src={toolsIcon}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl">OVER</h1>
            </div>
            <div className="text-5xl">
              <CountUp start={0} end={300} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div>
              <h3 className="text-xl">TOOLS</h3>
            </div>
          </div>
          {/*second */}
          <div className="grid justify-center items-center">
            <div>
              <img
                className="mx-auto"
                style={{ height: "70px" }}
                src={expertIcon}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl">WE COME WITH</h1>
            </div>
            <div className="text-5xl">
              <CountUp start={0} end={15} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
            </div>
            <div>
              <h3 className="text-xl">YEARS OF SERVICES</h3>
            </div>
          </div>
          {/*third*/}
          <div>
            <div>
              <img
                style={{ height: "70px" }}
                className="mx-auto"
                src={countriesIcon}
                alt=""
              />
            </div>
            <h1 className="text-xl">PRESENCE IN OVER</h1>
            <div className="text-5xl">
              <CountUp start={0} end={45} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <h3 className="text-xl">COUNTRIES</h3>
          </div>
        </div>
      </div>
    );
};

export default BusinessSummary;