import React from "react";
import SignUpModal from "./Modals/SignUpModal";

const BottomBanner = () => {
  return (
    <div className='fixed w-full h-[80px] xl:space-x-[200px] bg-[#1D9BF0] bottom-0 flex justify-center items-center'>
      <div className='hidden xl:inline text-white'>
        <h1 className='text-2xl font-bold'>{"Don't Miss What's Happening"}</h1>
        <span className='text-[18px] font-normal'>
          People on Twitter are the first to know.
        </span>
      </div>
      <div className='space-x-3'>
        <button className='bg-white text-black w-[160px] h-[40px] rounded-full hover:bg-[#CBD2D7]'>
          Log In
        </button>
        <SignUpModal />
      </div>
    </div>
  );
};

export default BottomBanner;
