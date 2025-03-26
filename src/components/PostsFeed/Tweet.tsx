"use client";
import React from "react";
import TweetHeader from "./Tweet/TweetHeader";
import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { Timestamp } from "firebase/firestore";
import { useAppDispatch } from "@/app/hooks/reduxTSAdapter";
import { openCommentModal, setCommentTweet } from "@/lib/modalSlice";
import { useRouter } from "next/navigation";

export interface TweetProps {
  userName: string;
  name: string;
  timeStamp: Timestamp;
  photoUrl: string;
  tweet: string;
  id: string;
}

const Tweet = ({ data }: { data: TweetProps }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div onClick={() => router.push("/" + data.id)} className='border-b border-gray-700 cursor-pointer'>
      <TweetHeader data={data} />
      <div className='p-3 ml-16 text-gray-500 flex space-x-14'>
        <div
          role='button'
          onClick={(e) => {
            e.stopPropagation();
            dispatch(openCommentModal());
            dispatch(
              setCommentTweet({
                id: data.id,
                text: data.tweet,
                photoUrl: data.photoUrl,
                name: data.name,
                userName: data.userName,
              })
            );
          }}
        >
          <ChatBubbleOvalLeftEllipsisIcon className='w-5 cursor-pointer hover:text-green-400' />
        </div>
        <HeartIcon className='w-5 cursor-pointer hover:text-pink-500' />
        <ChartBarIcon className='w-5 cursor-not-allowed' />
        <ArrowUpTrayIcon className='w-5 cursor-not-allowed' />
      </div>
    </div>
  );
};

export default Tweet;
