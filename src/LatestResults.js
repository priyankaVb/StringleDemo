import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProgressBar from "./CustomComponents/ProgressBar";
import "./LatestResults.css";

const LatestResults = () => {
  const results = [
    {
      unit: "unit 5",
      subject: "Technology",
      percentage: "25",
    },
    {
      unit: "unit 12",
      subject: "Ecology",
      percentage: "44",
    },
    {
      unit: "unit 9",
      subject: "Real estate",
      percentage: "40",
    },
    {
      unit: "unit 8",
      subject: "Education",
      percentage: "90",
    },
    {
      unit: "unit 16",
      subject: "Job Market",
      percentage: "80",
    },
  ];
  return (
    <div>
      <div className="latestresults-container">
        <div className="latestresults-header">Latest results</div>
        <div className="latestresults-header-icon">
          More <AiOutlineArrowRight className="latestresults-arrow-icon" />
        </div>
      </div>
      {results.map((data, index) => {
        return (
          <div key={index} className="latestresults-subjects-container">
            <div className="latestresults-sub-content">
              <div className="latestresults-subject">
                <span className="latestresults-unit">{data.unit}</span>
                {" - "}
                <span className="latestresults-sub">{data.subject}</span>
              </div>
            </div>
            <div className="latestresults-sub-div-content">
              <ProgressBar
                bgcolor="#5E81F4"
                progress={data.percentage}
                height={6}
                flag={false}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LatestResults;
