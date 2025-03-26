import React from 'react'
import TweetHeader from './Tweet/TweetHeader'
import { ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'

const Tweet = () => {
  return (
    <div className="border-b border-gray-700">
      <TweetHeader />
      <div className="p-3 ml-16 text-gray-500 flex space-x-14">
        <ChatBubbleOvalLeftEllipsisIcon className='w-5 cursor-pointer hover:text-green-400' />
        <HeartIcon className='w-5 cursor-pointer hover:text-pink-500' />
        <ChartBarIcon className='w-5 cursor-not-allowed' />
        <ArrowUpTrayIcon className='w-5 cursor-not-allowed' />
      </div>
    </div>
  )
}

export default Tweet