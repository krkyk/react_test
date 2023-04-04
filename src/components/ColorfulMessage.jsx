import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentGreenStyle = {
    color: color,
    fontSize: "20px"
  };

  return <p style={contentGreenStyle}>{children}</p>;
};

export default ColorfulMessage;
