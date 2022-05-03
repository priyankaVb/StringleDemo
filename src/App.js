import React from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import MainContent from "./MainContent";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <MainContent />
      <Profile />
    </div>
  );
};

export default App;
