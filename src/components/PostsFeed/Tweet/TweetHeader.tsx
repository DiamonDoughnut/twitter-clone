import React from "react";
import Image from "next/image";
import { Timestamp } from "firebase/firestore";
import Moment from 'react-moment'

interface TweetHeaderProps {
  userName: string,
  name: string,
  timeStamp: Timestamp,
  photoUrl: string,
  tweet: string,
  image: string | undefined
}

const TweetHeader = ({ data }: {data: TweetHeaderProps}) => {
  return (
    <div className="flex space-x-3 p-3">
      <Image
        src={data.photoUrl || "/assets/kylie.png"}
        height={800}
        width={700}
        alt='profile'
        className='w-11 h-11 rounded-full object-cover'
      />
      <div>
        <div className="flex items-center space-x-2 text-gray-500 mb-1">
          <h1 className="text-white font-bold">{data.name}</h1>
          <span>@{data.userName}</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full" />
          <Moment fromNow>
          {data.timeStamp?.toDate()}
          </Moment>
        </div>
        <span>{data.tweet}</span>
        {data.image && <Image src={data.image} width={320} height={320} alt="" className="object-cover rounded-md mt-3 max-h-80 max-w-80 border border-gray-700" />}
      </div>
    </div>
  );
};

export default TweetHeader;
