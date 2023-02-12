import React, { useState } from "react";
import "./index.css";

const HeadingBanner2 = () => {
  return (
    <>
      <div className="bg-[black] my-5">
        <p className="text-[white] justify-center p-5 lg:text-[1.7rem] lg:flex md:flex ">
          Looking for an
          <span className="text-[#f6901e] px-2">
            Ultimate Business Solution?
          </span>
          <button className="text-[1rem] border-2 rounded-[3px] p-1 lg:px-2 uppercase lg:mx-2 my-4 lg:my-0 md:my-0   let-dicuss-btn">
            let's disscuss
          </button>
        </p>
      </div>
    </>
  );
};

export default HeadingBanner2;
