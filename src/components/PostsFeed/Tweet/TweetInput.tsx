"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { db } from "../../../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAppSelector } from "@/app/hooks/reduxTSAdapter";

export type TweetType = {
  userName: string,
  name: string,
  photoUrl: string,
  uid: string,
  timestamp: Date,
  likes: string[],
  tweet: string
}

const TweetInput = () => {
  const user = useAppSelector((state) => state.user);
  const [text, setText] = useState("");

  async function sendTweet() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const docRef = await addDoc(collection(db, "posts"), {
      userName: user.userName,
      name: user.name,
      photoUrl: user.photoUrl,
      uid: user.uid,
      timeStamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });

    setText("");
  }

  return (
    <div className='flex space-x-3 p-3 border-b border-gray-700'>
      <Image
        src={user.photoUrl || "/assets/kylie.png"}
        alt='profile image'
        height={800}
        width={700}
        className='h-11 w-11 rounded-full object-cover'
      />
      <div className='w-full'>
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          name='tweet'
          id='tweet'
          className='bg-transparent resize-none outline-none w-full min-h-[50px] text-lg'
          placeholder="What's on your mind?"
        />
        <div className='flex justify-between border-t border-gray-700 pt-4'>
          <div className='div flex space-x-0'>
            <div className='iconsHover'>
              <PhotoIcon className='h-[22px] text-[#1D9BF0]' />
            </div>
            <div className='iconsHover'>
              <ChartBarIcon className='h-[22px] text-[#1D9BF0]' />
            </div>
            <div className='iconsHover'>
              <FaceSmileIcon className='h-[22px] text-[#1D9BF0]' />
            </div>
            <div className='iconsHover'>
              <CalendarIcon className='h-[22px] text-[#1D9BF0]' />
            </div>
            <div className='iconsHover'>
              <MapPinIcon className='h-[22px] text-[#1D9BF0]' />
            </div>
          </div>
          <button
            disabled={text.trim() === "" || !text}
            onClick={() => sendTweet()}
            className='bg-[#1D9BF0] rounded-full px-4 py-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
