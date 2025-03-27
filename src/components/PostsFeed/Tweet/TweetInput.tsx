"use client";
import React, { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { db, storage } from "../../../../firebase";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxTSAdapter";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { openLogInModal } from "@/lib/modalSlice";

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
  const [image, setImage] = useState<string | null | undefined>(null);
  const [loading, setLoading] = useState(false)

  const filePickerRef = useRef(null)

  const dispatch = useAppDispatch()

  async function sendTweet() {
    if (!user.userName) {
      dispatch(openLogInModal());
      return;
    }
    setLoading(true)
    const docRef = await addDoc(collection(db, "posts"), {
      userName: user.userName,
      name: user.name,
      photoUrl: user.photoUrl,
      uid: user.uid,
      timeStamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });
    
    if (image) {
      const imageRef = ref(storage, `/tweet-images/${docRef.id}`);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const uploadImage = await uploadString(imageRef, image, 'data_url')
      const downloadUrl = await getDownloadURL(imageRef)
      await updateDoc(doc(db, 'posts', docRef.id),  {
        image: downloadUrl
      })
    }

    setText("");
    setImage(null);
    setLoading(false);
  }

  function addImageToTweet(e: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    if (e.target.files?.[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.addEventListener('load', e => {
      setImage(e.target?.result as string | undefined | null)
    })
  }

  return (
    <div className='flex space-x-3 p-3 border-b border-gray-700'>
      <Image
        src={user.photoUrl || "/assets/twitter-logo.png"}
        alt='profile image'
        height={800}
        width={700}
        className='h-11 w-11 rounded-full object-cover'
      />
      {loading && (<h1 className="text-2xl text-gray-500">Uploading Post...</h1>)}
      {!loading && (<div className='w-full'>
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          name='tweet'
          id='tweet'
          className='bg-transparent resize-none outline-none w-full min-h-[50px] text-lg'
          placeholder="What's on your mind?"
        />

        {
          image && (
            <div className="mb-4 relative">
              <div className="absolute top-1 left-1 bg-[#272C26] rounded-full w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-white/10" onClick={() => setImage(null)}>
                <XMarkIcon className="h-5" />
              </div>
              <Image src={image} alt="" height={250} width={250} className="rounded-2xl max-h-80 object-contain" />
            </div>
          )
        }


        <div className='flex justify-between border-t border-gray-700 pt-4'>
          <div className='div flex space-x-0'>
            <div onClick={() => filePickerRef!.current!.click()} className='iconsHover'>
              <PhotoIcon className='h-[22px] text-[#1D9BF0]' />
            </div>
            <input onChange={addImageToTweet} ref={filePickerRef} className='hidden' type='file' />
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
            disabled={(text.trim() === "" || !text) && !image}
            onClick={() => sendTweet()}
            className='bg-[#1D9BF0] rounded-full px-4 py-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Tweet
          </button>
        </div>
      </div>)}
    </div>
  );
};

export default TweetInput;
