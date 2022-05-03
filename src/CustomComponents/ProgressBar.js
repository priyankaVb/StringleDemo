import React from "react";

const ProgressBar = ({ bgcolor, progress, height, flag }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        {flag && <span style={progresstext}>{`${progress}`}</span>}
      </div>
    </div>
  );
};

export default ProgressBar;
