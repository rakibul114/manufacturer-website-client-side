import React from 'react';
import bgImage from '../../assets/contact-us-banner.PNG';

const ProjectDeal = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
          
        }}
        className="mb-0 mt-20 p-14"
      >
        <div className=" flex justify-evenly items-center">
          <h1 className="text-3xl font-bold">
            Ready to discuss your next project big or small?
          </h1>
          <div>
            <button class="btn btn-warning px-10">
              <span className="text-neutral">contact us now</span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default ProjectDeal;