'use client'
import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  BellIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import SidebarLink from "./Sidebar/SidebarLink";
import Image from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxTSAdapter";
import { signOutUser } from "@/lib/userSlice";
import { closeLogInModal, closeSignUpModal } from "@/lib/modalSlice";

const Sidebar = () => {
  
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  async function handleSignOut() {

    await signOut(auth)

    dispatch(signOutUser())

    dispatch(closeSignUpModal())
    dispatch(closeLogInModal())

  }


  return (
    <div className='hidden md:flex flex-col fixed h-full xl:ml-24'>
      <nav className='xl:space-y-1.5 relative h-full'>
        <div className='xl:p-3 py-3 flex justify-center items-center xl:justify-start'>
          <Image
            src={"/assets/twitter-logo.png"}
            alt='Twitter Logo'
            height={34}
            width={34}
          />
        </div>
        <ul>
          <SidebarLink
            text='Home'
            Icon={HomeIcon}
          />
          <SidebarLink
            text='Explore'
            Icon={HashtagIcon}
          />
          <SidebarLink
            text='Notifications'
            Icon={InboxIcon}
          />
          <SidebarLink
            text='Messages'
            Icon={BellIcon}
          />
          <SidebarLink
            text='Bookmarks'
            Icon={BookmarkIcon}
          />
          <SidebarLink
            text='Profile'
            Icon={UserIcon}
          />
          <SidebarLink
            text='More'
            Icon={EllipsisHorizontalCircleIcon}
          />
        </ul>
        <button className='hidden xl:inline bg-[#1D9BF0] rounded-full h-[52px] w-[200px] text-lg font-bold mt-2'>
          Tweet
        </button>
        {user && 
        <div onClick={handleSignOut} className='hover:bg-white/10 rounded-full cursor-pointer bottom-0 absolute flex justify-center items-center p-1 xl:p-3 space-x-3'>
          <Image src={user.photoUrl || '/assets/kylie.png'} alt="" height={40} width={40} className="rounded-full object-cover"/>
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
            <h1 className="text-gray-500">@{user.userName}</h1>
          </div>
          <EllipsisHorizontalIcon className="h-5 hidden xl:inline" />
        </div>
        }
      </nav>
    </div>
  );
};

export default Sidebar;
