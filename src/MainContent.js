import React from "react";
import { BiSearch } from "react-icons/bi";
import image from "./assests/img.png";
import CourseList from "./CourseList";
import LatestResults from "./LatestResults";
import "./MainContent.css";
import TimeChart from "./TimeChart";

const MainContent = () => {
  return (
    <div className="maincontent-container">
      <div className="maincontent-date-content">
        <div className="maincontent-date">
          <div className="maincontent-date-time">3rd May 2022</div>
        </div>
        <div className="maincontent-search-content">
          <div className="maincontent-search">
            <BiSearch color="#5E81F4" />
          </div>
        </div>
      </div>
      <div className="maincontent-message-main-container">
        <div className="maincontent-message-container">
          <div className="maincontent-message">
            <div className="maincontent-message-title">Welcome back Anna!</div>
            <div className="maincontent-message-body">
              You’ve learned 80% of your goal this week! Keep it up and improve
              your results!
            </div>
          </div>
          <div className="maincontent-image">
            <img className="maincontent-image-src" src={image} alt="image" />
          </div>
        </div>
      </div>

      <div className="maincontent-results-main-container">
        <div className="maincontent-results-container">
          <div className="maincontent-results-chart-container">
            <LatestResults />
          </div>
          <div className="maincontent-time-chart-container">
            <TimeChart />
          </div>
        </div>
      </div>
      <CourseList />
    </div>
  );
};

export default MainContent;
