import React from "react";

export const HeroBackground = ({ title }) => {
  return (
    <div className="background-green">
      <div>
        <h3 className="text-white px-5 pt-5 h1">{title}</h3>
      </div>
    </div>
  );
};
