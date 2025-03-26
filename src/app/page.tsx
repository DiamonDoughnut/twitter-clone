'use client'
import BottomBanner from "@/components/BottomBanner";
import PostsFeed from "@/components/PostsFeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import { useAppSelector } from "./hooks/reduxTSAdapter";

export default function Home() {

  const userName = useAppSelector(state => state.user.userName)
  console.log(userName)

  return (
    <div className=''>
      <div className='bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto'>
        <Sidebar />
        <div className='flex'>
          <PostsFeed />
          <Trending />
        </div>
      </div>
      <div className=''>
        {!userName && <BottomBanner />}
      </div>
    </div>
  );
}
