import React from "react";
const date = new Date();
const update = date.getFullYear();
console.log(update);

const Footerheader = () => {
  return (
    <div className="w-full h-full bg-[black] p-4">
      <p className="text-center capitalize text-[white]">
        copyrights &copy; {update}. All rights reserved
        <span className="text-[#f6901e]">
          {" "}
          Nepal Realistic Solution Pvt. Ltd.
        </span>
      </p>
    </div>
  );
};

export default Footerheader;
