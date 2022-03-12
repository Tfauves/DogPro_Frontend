import React from "react";

const Splash = (props) => {
  return (
    <div 
      style={{
        ...style,
        ...props.style,
        backgroundImage: `url(${props.image})`,
      }}
    >
      {props.children}
    </div>
  );
};

const style = {
  backgroundSize: "cover",
  height: "95vh",
//   justifyContent: "center",
//   alignItems: "center",
//   flexDirection: "column",
  width: "100%",
  zIndex: 0,
};

export default Splash;
