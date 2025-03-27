import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommentInput from "@/components/Comments/CommentInput";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import MomentComponent from "@/components/Comments/Moment";

interface CommentsProps {
    userName: string;
    name: string;
    photoUrl: string;
    text: string;
    comments: {
      comment: string;
      name: string;
      photoUrl: string;
      userName: string;
    }[];
    timeStamp: Date;
    image: string | undefined | null;
}





const CommentsPage = async ({ params }: { params: Promise<{ id: string }>}) => {

    const { id } = await params;

    async function getTweetFromParams(id: string) {
        const docRef = doc(db, 'posts', id)
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        const formattedData: CommentsProps = {
            userName: data?.username,
            name: data?.name,
            photoUrl: data?.photoUrl,
            text: data?.tweet,
            comments: data?.comments || null,
            timeStamp: data?.timeStamp.toDate(),
            image: data?.image || null
        }
    
        return formattedData
    }

    const data = await getTweetFromParams(id)

  return (
    <div className='bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto'>
      <Sidebar />
      <div className='flex'>
        <div className='sm:ml-16 xl:ml-80 max-w-2xl grow border-gray-700 border-x'>
          <div className='px-3 py-2 flex space-x-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50 bg-black'>
            <Link href={"/"}>
              <ArrowLeftIcon className='w-7 cursor-pointer' />
            </Link>
            <h1>Tweet</h1>
          </div>
          <div className='border-b border-gray-700'>
            <div className='flex space-x-3 p-3'>
              <Image
                src={data?.photoUrl || "/assets/kylie.png"}
                height={800}
                width={700}
                alt='profile'
                className='w-11 h-11 rounded-full object-cover'
              />
              <div>
                <div className='flex items-center space-x-2 text-gray-500 mb-1'>
                  <h1 className='text-white font-bold'>{data?.name}</h1>
                  <span>@{data?.userName}</span>
                  <div className='w-1 h-1 bg-gray-500 rounded-full' />
                  <MomentComponent timeStamp={data?.timeStamp}/>
                </div>
                <span className='text-2xl'>{data?.text}</span>
                {data?.image && (
                  <Image src={data.image} alt="" height={320} width={320} className='object-cover rounded-md mt-3 max-h-80 max-w-80 border border-gray-700' />
                )}
              </div>
            </div>
          </div>
          <CommentInput />
          {data?.comments?.map((comment, index) => (
            <div
              className='border-b border-gray-700'
              key={comment.userName + index}
            >
              <div className='flex space-x-3 p-3'>
                <Image
                  src={comment.photoUrl || "/assets/kylie.png"}
                  height={800}
                  width={700}
                  alt='profile'
                  className='w-11 h-11 rounded-full object-cover'
                />
                <div>
                  <div className='flex items-center space-x-2 text-gray-500 mb-1'>
                    <h1 className='text-white font-bold'>{comment.name}</h1>
                    <span>@{comment.userName}</span>
                  </div>
                  <span>{comment.comment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Trending />
      </div>
    </div>
  );
};

export default CommentsPage;
