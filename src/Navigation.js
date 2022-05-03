import React from "react";
import "./Navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsFolder, BsCalendar2, BsChatText } from "react-icons/bs";
import { FiBook, FiSettings } from "react-icons/fi";

const Navigation = () => {
  const links = [
    {
      name: "Dashboard",
      icon: <AiOutlineHome />,
    },
    {
      name: "Classes",
      icon: <BsFolder />,
    },
    {
      name: "Resources",
      icon: <FiBook />,
    },
    {
      name: "Learning Plan",
      icon: <BsCalendar2 />,
    },
    {
      name: "Chat",
      icon: <BsChatText />,
    },
    {
      name: "Settings",
      icon: <FiSettings />,
    },
  ];

  return (
    <div className="navigation-container">
      <div className="navigation-header">Stringle</div>
      <div className="navigation-menu">
        {links.map((item, index) => {
          return (
            <div key={index}>
              <div className="navigation-item">
                <div className="navigation-icon-style">{item.icon}</div>
                <div className="navigation-nav-item">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="navigation-upgrade-btn">Upgrade</button>
    </div>
  );
};

export default Navigation;
