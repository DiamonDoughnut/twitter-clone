import React from "react";
import Image from "next/image";
const TweetHeader = () => {
  return (
    <div className="flex space-x-3 p-3">
      <Image
        src={"/assets/kylie.png"}
        height={800}
        width={700}
        alt='profile'
        className='w-11 h-11 rounded-full object-cover'
      />
      <div>
        <div className="flex items-center space-x-2 text-gray-500 mb-1">
          <span>@kylie</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full" />
          <span>2 hours ago</span>
        </div>
        <span>Text</span>
      </div>
    </div>
  );
};

export default TweetHeader;
