import React from "react";
import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Mission</div>
      <button onClick={() => navigate(-1)}>Geriye Dön</button>
    </div>
  );
}

export default Mission;
