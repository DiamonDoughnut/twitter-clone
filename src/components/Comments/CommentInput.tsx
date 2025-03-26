"use client";
import { useAppSelector } from "@/app/hooks/reduxTSAdapter";
import Image from "next/image";
import React from "react";

const CommentInput = () => {
  const user = useAppSelector((state) => state.user);
  
  if (user) {
      return (
          <div className='flex justify-between items-center p-2 border-b border-gray-700'>
      <div className='flex items-center, justify-center p-1 space-x-2'>
        <Image
          src={user.photoUrl || '/assets/kylie.png'}
          alt=''
          height={40}
          width={40}
          className='h-12 w-12 rounded-full object-cover'
        />
        <h1 className='text-2xl text-gray-500'>Tweet your reply</h1>
      </div>
      <button
        disabled={true}
        className='bg-[#1D9BF0] rounded-full px-4 py-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
        >
        Tweet
      </button>
    </div>
  );
}
};

export default CommentInput;
