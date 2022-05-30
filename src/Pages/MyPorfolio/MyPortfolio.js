import React from 'react';

import ProgressBar from "react-animated-progress-bar";
import { Link } from 'react-router-dom';


const MyPortfolio = () => {
    return (
      <div>
        <h1 className="text-center text-3xl my-6">WELCOME TO MY PORTFOLIO</h1>
        <div className="grid grid-cols-1 mg:grid-cols-1 lg:grid-cols-2">
          <div className="container px-10">
            <div className="my-5 bg-slate-100 shadow-lg p-5 rounded-lg">
              <h1 className="text-2xl">Md Rakibul Islam</h1>
              <h2 className="text-xl">Front-end Developer</h2>
              <p>
                <b>Email:</b> rakibulislam114@gmail.com
              </p>
              <p className="font-bold">Education:</p>
              <ul>
                <li>Bachelor of Business Studies: 2017-2020</li>
                <li>Higher Secondary School Certificate: 2007-2009</li>
              </ul>
              <div>
                <h1 className="text-2xl font-bold">Top Skills</h1>
                {/*HTML */}
                <div className="flex items-center">
                  <h1 className="mr-16">HTML5</h1>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="88"
                    rectPadding="3px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                </div>
                {/*CSS */}
                <div className="flex items-center mt-0">
                  <h1 className="mr-20">CSS3</h1>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="88"
                    rectPadding="3px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                </div>
                {/*JavaScript */}
                <div className="flex items-center mt-0">
                  <h1 className="mr-10">JavaScript</h1>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="83"
                    rectPadding="3px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                </div>
                {/*Tailwind-CSS */}
                <div className="flex items-center mt-0">
                  <h1 className="mr-5">Tailwind-CSS</h1>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="88"
                    rectPadding="3px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                </div>
                {/*Bootstrap */}
                <div className="flex items-center mt-0">
                  <h1 className="mr-10">Bootstrap</h1>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="88"
                    rectPadding="3px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                </div>
                {/*React JS */}
                <div className="flex items-center mt-0">
                  <h1 className="mr-14">React JS</h1>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="83"
                    rectPadding="3px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                </div>
                {/*Node JS */}
                <div className="flex items-center mt-0">
                  <h1 className="mr-14">Node JS</h1>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="75"
                    rectPadding="3px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                </div>
                {/*Express JS */}
                <div className="flex items-center mt-0">
                  <h1 className="mr-12">Express JS</h1>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="75"
                    rectPadding="3px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                </div>
                {/*MongoDB */}
                <div className="flex items-center mt-0">
                  <h1 className="mr-12">MongoDB</h1>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="75"
                    rectPadding="3px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-3 md:gap-y-4 px-10 mt-5">
            {/*project 1 */}
            <div className="flex justify-center items-center w-60 h-60 bg-secondary shadow-lg rounded-lg font-bold text-xl">
              <Link
                target="_blank"
                to="https://warehouse-management-9c24b.web.app/"
              >
                Click To Preview
              </Link>
            </div>
            {/*project 2 */}
            <div className="flex justify-center items-center w-60 h-60 bg-secondary shadow-lg p-10 rounded-lg font-bold text-xl">
              <Link
                target="_blank"
                to="https://warehouse-management-9c24b.web.app/"
              >
                Click To Preview
              </Link>
            </div>
            {/*project 3 */}
            <div className="flex justify-center items-center w-60 h-60 bg-secondary shadow-lg p-10 rounded-lg font-bold text-xl">
              <Link
                target="_blank"
                to="https://warehouse-management-9c24b.web.app/"
              >
                Click To Preview
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyPortfolio;