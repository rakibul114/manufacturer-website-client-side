import React from 'react';
import CountUp from "react-countup";


const BusinessSummary = () => {
    return (
      <div className="text-center">
        <div className="grid grid-cols-3 bg-info my-12 p-10">
          <div>
            <h1 className="text-2xl">OVER</h1>
            <div className="text-5xl">
              <CountUp start={0} end={300} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <h3 className="text-2xl">PRODUCTS</h3>
          </div>
          <div>
            <h1 className="text-2xl">WE COME WITH</h1>
            <div className="text-5xl">
              <CountUp start={0} end={15} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
            </div>
            <h3 className="text-2xl">YEARS OF EXPERIENCE</h3>
          </div>
          <div>
            <h1 className="text-2xl">PRESENCE IN OVER</h1>
            <div className="text-5xl">
              <CountUp start={0} end={45} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <h3 className="text-2xl">COUNTRIES</h3>
          </div>
        </div>
      </div>
    );
};

export default BusinessSummary;