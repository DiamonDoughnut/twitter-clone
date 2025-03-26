"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxTSAdapter";
import { closeCommentModal } from "@/lib/modalSlice";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useRouter } from "next/navigation";

const CommentModal = () => {
  const isOpen = useAppSelector((state) => state.modals.commentModalOpen);
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user)

  const commentTweetDetails = useAppSelector(state => state.modals.commentTweetDetails)

  const [comment, setComment] = useState('');

  const router = useRouter();

  async function sendComment() {
    if (commentTweetDetails.id) {
        const docRef = doc(db, 'posts', commentTweetDetails.id)
        const commentDetails = {
            userName: user.userName,
            name: user.name,
            photoUrl: user.photoUrl,
            comment
        }
        await updateDoc(docRef, {
            comments: arrayUnion(commentDetails)
        })
        dispatch(closeCommentModal());
        router.push(`/${commentTweetDetails.id}`)
    }
  }

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
        className='flex justify-center items-center'
      >
        <div className='relative w-full sm:w-[600px] h-full sm:h-[396px] rounded-lg bg-black border-gray-500 border text-white sm:p-10 p-4'>
          <div className="absolute w-[2px] h-[77px] bg-gray-500 left-[40px] top-[96px] sm:left-[64px] sm:top-[120px]" />
          <div className="absolute top-4 cursor-pointer" onClick={() => dispatch(closeCommentModal())}>
            <XMarkIcon className="w-6" />
          </div>
          <div className='mt-8'>
            <div className='flex space-x-3'>
              <Image
                src={commentTweetDetails.photoUrl!}
                alt=''
                height={48}
                width={48}
                className='object-cover rounded-full h-12 w-12'
              />
              <div>
                <div className='flex space-x-1.5'>
                  <h1 className='font-bold'>{commentTweetDetails.name}</h1>
                  <h1 className='font-gray-500'>@{commentTweetDetails.userName}</h1>
                </div>
                <p className='mt-1'>{commentTweetDetails.text}</p>
                <h1 className='text-gray-500 text-[15px] mt-2'>
                  Replying to <span className='text-[#1B9BF0]'>@{commentTweetDetails.userName}</span>
                </h1>
              </div>
            </div>
          </div>
          <div className='mt-11'>
            <div className='flex space-x-3'>
              <Image
                src={user.photoUrl!}
                alt=''
                height={48}
                width={48}
                className='object-cover h-12 w-12 rounded-full'
              />
              <div className='w-full'>
                <textarea
                  name='comment'
                  id='comment'
                  onChange={(e) => setComment(e.target.value)}
                  className='w-full bg-transparent resize-none text-lg outline-none'
                  placeholder='Tweet your reply'
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
                  <button onClick={sendComment} disabled={comment.trim() === '' || !comment} className='bg-[#1D9BF0] rounded-full px-4 py-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'>
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommentModal;
