import React from "react";
import { FiLogOut } from "react-icons/fi";
import { BiErrorCircle } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import profileImg from "./assests/profile.jpeg";
import ProgressBar from "./CustomComponents/ProgressBar";
import "./Profile.css";

const Profile = () => {
  const subjectData = [
    {
      category: "B2",
      title: "Maths",
      div: "High Intermediate",
      percentage: "40",
    },
    {
      category: "C1",
      title: "Spanish",
      div: "Advanced",
      percentage: "80",
    },
  ];

  const courseDetails = [
    {
      icon: <BiErrorCircle color="#FF606D" />,
      title: "English - Vocabulary test",
      date: "24 sept, 2019",
      status: false,
    },
    {
      icon: <FiMail color="#6083F4" />,
      title: "English - Send grammer homework",
      date: "24 sept, 2019",
      status: true,
    },
    {
      icon: <FiMail color="#6083F4" />,
      title: "English - Send essay",
      date: "24 sept, 2019",
      status: true,
    },
  ];
  return (
    <div className="profile-container">
      <div className="profile-logout-container">
        <div className="profile-logout">Logout</div>
        <div className="profile-logout-icon">
          <FiLogOut />
        </div>
      </div>
      <div className="profile-img-container">
        <div className="profile-image">
          <img className="profile-image-src" src={profileImg} alt="profile" />
        </div>
        <div className="profile-name">Sadia Tasnim</div>
        <div className="profile-bio">Student</div>
      </div>
      {subjectData.map((data, index) => {
        return (
          <div key={index} className="profile-subjects-container">
            <div className="profile-sub-category-content">
              <div className="profile-subject-category">{data.category}</div>
            </div>
            <div className="profile-sub-content">
              <div className="profile-subject">{data.title}</div>
              <div className="profile-subject-div">{data.div}</div>
            </div>
            <div className="profile-sub-div-content">
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
      <div className="course-details-wrapper">
        {courseDetails.map((data, index) => {
          return (
            <div key={index} className="course-details-container">
              <div className="course-details-icon-container">
                <div
                  className="course-details-icon"
                  style={{
                    background: data.status === false ? "#FDF2F3" : "EEF2FD",
                  }}
                >
                  {data.icon}
                </div>
              </div>
              <div className="course-details-content">
                <div className="course-subject">{data.title}</div>
                <div className="course-subject-date">{data.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
