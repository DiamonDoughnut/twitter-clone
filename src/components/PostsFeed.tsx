'use client'
import React, { useEffect, useState } from "react";
import TweetInput from "./PostsFeed/Tweet/TweetInput";
import Tweet, { TweetProps } from "./PostsFeed/Tweet";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const PostsFeed = () => {

  const [tweets, setTweets] = useState<unknown[]>()

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timeStamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTweets(snapshot.docs)
      console.log(snapshot.docs[0].data())
    })

    
    return unsubscribe;
  }, [])
  
  
  return (
    <div className='sm:ml-16 xl:ml-80 max-w-2xl grow border-gray-700 border-x'>
      <div className='px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50 bg-black'>
        Home
      </div>
      <TweetInput />
      {tweets?.map((tweet, index) => <Tweet key={tweet.id + index} data={tweet.data() as TweetProps}/>)}
      
    </div>
  );
};

export default PostsFeed;
