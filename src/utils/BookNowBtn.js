import React from "react";

const BookNowBtn = ({ children }) => {
  return (
    <div className="px-[10px] py-[5px] border-0 text-white normal-case text-[14px] font-[400]  bg-gradient-to-r from-[#FA5A00] to-[#FF4004]  rounded-[5px]">
      {children}
    </div>
  );
};

export default BookNowBtn;
