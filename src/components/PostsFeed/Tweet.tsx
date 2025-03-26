'use client'
import React from 'react'
import TweetHeader from './Tweet/TweetHeader'
import { ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import { Timestamp } from 'firebase/firestore'
import { useAppDispatch } from '@/app/hooks/reduxTSAdapter'
import { openCommentModal } from '@/lib/modalSlice'

export interface TweetProps {
  userName: string,
  name: string,
  timeStamp: Timestamp,
  photoUrl: string,
  tweet: string
}

const Tweet = ({ data }: { data: TweetProps }) => {
  const dispatch = useAppDispatch()
  return (
    <div className="border-b border-gray-700">
      <TweetHeader data={data} />
      <div className="p-3 ml-16 text-gray-500 flex space-x-14">
        <div role='button' onClick={(e_: React.MouseEvent<HTMLDivElement>) => {dispatch(openCommentModal())}}>
          <ChatBubbleOvalLeftEllipsisIcon className='w-5 cursor-pointer hover:text-green-400' />
        </div>
        <HeartIcon className='w-5 cursor-pointer hover:text-pink-500' />
        <ChartBarIcon className='w-5 cursor-not-allowed' />
        <ArrowUpTrayIcon className='w-5 cursor-not-allowed' />
      </div>
    </div>
  )
}

export default Tweet