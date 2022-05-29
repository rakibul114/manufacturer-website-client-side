import React from 'react';
import './MyPortfolio.css';
import project1 from '../../assets/project/project-1.png';
import project2 from '../../assets/project/project-2.png';
import project3 from '../../assets/project/project-3.png';
import ProgressBar from "react-animated-progress-bar";


const MyPortfolio = () => {
    return (
      <div>
        <h1 className="text-center text-3xl my-6">WELCOME TO MY PORTFOLIO</h1>
        <div className="grid grid-cols-1 mg:grid-cols-1 lg:grid-cols-2">
          <div className="container px-10">
            <div className="my-5 bg-slate-100 shadow-lg p-5 rounded-lg">
              <h1>Md Rakibul Islam</h1>
              <h2>Front-end Developer</h2>
              <p>Email: rakibulislam114@gmail.com</p>
              <p>Education:</p>
              <ul>
                <li>Bachelor of Business Studies: 2017-2020</li>
                <li>Higher Secondary School Certificate: 2007-2009</li>
              </ul>
              <div>
                <h1>Top Skills</h1>
                <div className='flex items-center'>
                  <h1 className='mr-2'>HTML5</h1>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="70"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                    placeholder="React"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10">
            <img className="" src={project1} alt="" />
            <img className="" src={project2} alt="" />
            <img className="" src={project3} alt="" />
          </div>
        </div>
      </div>
    );
};

export default MyPortfolio;