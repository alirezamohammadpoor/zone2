import React from "react";
import "./HeroButton.css";

const HeroButton = ({ text, onClick }) => {
  return (
    <button className="hero-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default HeroButton;
