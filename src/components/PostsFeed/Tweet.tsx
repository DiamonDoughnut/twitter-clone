"use client";
import React, { useEffect, useState } from "react";
import TweetHeader from "./Tweet/TweetHeader";
import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/24/solid";
import { arrayRemove, arrayUnion, deleteDoc, doc, onSnapshot, Timestamp, updateDoc } from "firebase/firestore";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxTSAdapter";
import { openCommentModal, openLogInModal, setCommentTweet } from "@/lib/modalSlice";
import { useRouter } from "next/navigation";
import { db } from "../../../firebase";

export interface TweetProps {
  userName: string;
  name: string;
  timeStamp: Timestamp;
  photoUrl: string;
  tweet: string;
  uid: string;
  id: string;
  image: string | undefined;
}

const Tweet = ({ data }: { data: TweetProps }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector(state => state.user)

  async function likeComment(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    e.stopPropagation()

    if (!user.userName) {
      dispatch(openLogInModal());
      return
    }

    if (likes.includes(user.uid as string)) {
      await updateDoc(doc(db, 'posts', data.id), {
        likes: arrayRemove(user.uid)
      })
    } else {
      await updateDoc(doc(db, 'posts', data.id), {
        likes: arrayUnion(user.uid)
      })
    }
  }

  async function deleteTweet(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    await deleteDoc(doc(db, 'posts', data.id));
  }

  const [likes, setLikes] = useState<string[]>([])
  const [comments, setComments] = useState<unknown[]>([])

  useEffect(() => {

    if (!data.id) {
      return;
    }
    const unsubscribe = onSnapshot(doc(db, 'posts', data?.id), (doc) => {
      setLikes(doc.data()?.likes)
      setComments(doc.data()?.comments)
    })

    return unsubscribe;
  }, [data.id])

  return (
    <div onClick={() => router.push("/" + data?.id)} className='border-b border-gray-700 cursor-pointer'>
      <TweetHeader data={data} />
      <div className='p-3 ml-16 text-gray-500 flex space-x-14'>
        <div
          role='button'
          onClick={(e) => {
            e.stopPropagation();
            if (!user.userName) {
              dispatch(openLogInModal()) 
              return;
            }
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
          <div className="flex justify-center items-center space-x-2">
            <ChatBubbleOvalLeftEllipsisIcon className='w-5 cursor-pointer hover:text-green-400' />
            {comments?.length > 0 && <span className="-mr-[16.5px] -translate-y-0.5 -mb-1">{comments.length}</span>}
          </div>
        </div>
        <div 
          className="flex justify-center items-center space-x-2"
          onClick={likeComment}
        >
          {
            likes?.includes(user.uid as string) ? 
            (
              <FilledHeartIcon className="w-5 cursor-pointer hover:text-pink-500" />
            ) : (
              <HeartIcon className='w-5 cursor-pointer hover:text-pink-500' />
            )
          }
          {likes?.length > 0 && <span className="-mr-[16.5px] -translate-y-0.5 -mb-1">{likes.length}</span>}
        </div>
        {user?.uid === data?.uid && 
          (<div 
            className="cursor-pointer hover:text-red-600"
            onClick={deleteTweet}
          >
            <TrashIcon className="w-5" />
          </div>)
        }
        <ChartBarIcon className='w-5 cursor-not-allowed' />
        <ArrowUpTrayIcon className='w-5 cursor-not-allowed' />
      </div>
    </div>
  );
};

export default Tweet;
