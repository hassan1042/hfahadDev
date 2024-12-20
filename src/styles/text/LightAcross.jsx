import React from "react";
import "./lightAcross.css";

function LightAcross({ text }) {
  return (
    <div>
      <p className="btn-shine text-[16px] 2xl:text-[35px]">{text}</p>
    </div>
  );
}

export default LightAcross;
