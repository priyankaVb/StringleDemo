import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./CourseList.css";

const CourseList = () => {
  const courses = [
    {
      category: "B1",
      title: "Business  english",
      subject: "Grammer",
      color: "#4d4cac",
      tagColor: "#6767b8",
    },
    {
      category: "B2",
      title: "Common english",
      subject: "Phrasels verbs",
      color: "#9698D6",
      tagColor: "#A6A7DC",
    },
    {
      category: "C1",
      title: "Business  spanish",
      subject: "Vocabulary",
      color: "#F37E8B",
      tagColor: "#F4929B",
    },
  ];

  return (
    <div>
      <div className="courselist-container">
        <div className="courselist-header">Your Cources</div>
        <div className="courselist-header-icon">
          More <AiOutlineArrowRight className="courselist-arrow-icon" />
        </div>
      </div>
      <div className="courselist-courses-main-container">
        {courses.map((data, index) => {
          return (
            <div
              key={index}
              className="courselist-subjects-container"
              style={{ background: data.color }}
            >
              <div className="courselist-sub-category-content">
                <div
                  className="courselist-subject-category"
                  style={{ background: data.tagColor }}
                >
                  {data.category}
                </div>
              </div>
              <div className="courselist-sub-content">
                <div className="courselist-subject">{data.title}</div>
                <div className="courselist-subject-div">{data.subject}</div>
              </div>
              <div className="courselist-sub-div-content">
                <AiOutlineArrowRight className="courselist-course-arrow-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseList;
