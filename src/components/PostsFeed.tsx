import React from "react";
import TweetInput from "./PostsFeed/Tweet/TweetInput";
import Tweet from "./PostsFeed/Tweet";

const PostsFeed = () => {
  return (
    <div className='sm:ml-16 xl:ml-80 max-w-2xl grow border-gray-700 border-x'>
      <div className='px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50 bg-black'>
        Home
      </div>
      <TweetInput />
      <Tweet/>
    </div>
  );
};

export default PostsFeed;
