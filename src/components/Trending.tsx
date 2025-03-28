import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Trending = () => {
  return (
    <div className='hidden lg:flex flex-col ml-7 mt-4'>
      <div className=' flex space-x-3 bg-white/10 w-[300px] h-[44px] p-3 rounded-3xl'>
        <MagnifyingGlassIcon className='w-6 text-gray-600 ' />
        <input
          type='text'
          placeholder='Search Twitter'
          className='bg-transparent focus:outline-none placeholder:text-gray-600'
        />
      </div>
      <div className='w-[300px] h-[500px] bg-white/10 rounded-3xl mt-3'>
        <h1 className='font-bold text-xl p-3'>What&apos;s Happening</h1>
        <div className='p-3 relative'>
          <EllipsisHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>China</h1>
          <p className='text-xs text-gray-500'>340k Tweets</p>
        </div>
        <div className='p-3 relative'>
          <EllipsisHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>China</h1>
          <p className='text-xs text-gray-500'>340k Tweets</p>
        </div>
        <div className='p-3 relative'>
          <EllipsisHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>China</h1>
          <p className='text-xs text-gray-500'>340k Tweets</p>
        </div>
        <div className='p-3 relative'>
          <EllipsisHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>China</h1>
          <p className='text-xs text-gray-500'>340k Tweets</p>
        </div>
        <div className='p-3 relative'>
          <EllipsisHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>China</h1>
          <p className='text-xs text-gray-500'>340k Tweets</p>
        </div>
      </div>
      <div className='w-[300px] h-[300px] bg-white/10 rounded-3xl mt-3'>
        <h1 className='font-bold text-xl p-3'>Who to Follow</h1>
        <div className='flex justify-between p-3'>
          <div className='flex space-x-3'>
            <Image
              src={"/assets/bragg.png"}
              alt=''
              height={225}
              width={225}
              className='w-11 h-11 object-cover rounded-full'
            />
            <div>
              <div className="flex space-x-1">
                <h1 className='font-bold'>David Bragg</h1>
                <CheckBadgeIcon className='w-[18px] text-blue-400' />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@davidbragg</h1>
            </div>
          </div>
          <button className='bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold'>Follow</button>
        </div>
        <div className='flex justify-between p-3'>
          <div className='flex space-x-3'>
            <Image
              src={"/assets/bragg.png"}
              alt=''
              height={225}
              width={225}
              className='w-11 h-11 object-cover rounded-full'
            />
            <div>
              <div className="flex space-x-1">
                <h1 className='font-bold'>David Bragg</h1>
                <CheckBadgeIcon className='w-[18px] text-blue-400' />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@davidbragg</h1>
            </div>
          </div>
          <button className='bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold'>Follow</button>
        </div>
        <div className='flex justify-between p-3'>
          <div className='flex space-x-3'>
            <Image
              src={"/assets/bragg.png"}
              alt=''
              height={225}
              width={225}
              className='w-11 h-11 object-cover rounded-full'
            />
            <div>
              <div className="flex space-x-1">
                <h1 className='font-bold'>David Bragg</h1>
                <CheckBadgeIcon className='w-[18px] text-blue-400' />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@davidbragg</h1>
            </div>
          </div>
          <button className='bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold'>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
