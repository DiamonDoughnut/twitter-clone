import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  BellIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import SidebarLink from "./Sidebar/SidebarLink";
import Image from "next/image";

const Sidebar = () => {
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
        <div className='absolute bottom-0'>User</div>
      </nav>
    </div>
  );
};

export default Sidebar;
