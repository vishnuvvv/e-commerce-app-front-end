import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <h1>Congratulations Payment successful !!!</h1>
    </div>
  );
};

export default Success;
