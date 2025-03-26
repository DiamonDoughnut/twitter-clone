import BottomBanner from "@/components/BottomBanner";
import PostsFeed from "@/components/PostsFeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";

export default function Home() {
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
        <BottomBanner />
      </div>
    </div>
  );
}
