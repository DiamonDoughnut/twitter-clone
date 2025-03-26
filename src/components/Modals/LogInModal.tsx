"use client";
import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks/reduxTSAdapter";
import { closeLogInModal, openLogInModal } from "@/lib/modalSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const LogInModal = () => {
  const isOpen = useAppSelector((state) => state.modals.logInModalOpen);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  async function handleSignIn() {
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function handleGuestSignIn() {
    await signInWithEmailAndPassword(auth, 'guest156584651861@gmail.com', 'Z4N{i5;-DZ9{Q&sR_w6wzJP|5gt#r)7Q/"')
  }

  return (
    <>
      <button
        className='bg-white text-black w-[160px] h-[40px] rounded-full hover:bg-[#CBD2D7]'
        onClick={() => dispatch(openLogInModal())}
      >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLogInModal())}
        className='flex justify-center items-center'
      >
        <div className='w-[90%] h-fit bg-black text-white md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg flex justify-center'>
          <div className='w-[90%] mt-8 flex flex-col'>
            <h1 className='mt-4 font-bold text-4xl'>Sign In to your account</h1>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='mt-8 h-10 rounded-md bg-transparent border-gray-700 border p-6'
              placeholder='Email'
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              className='mt-8 h-10 rounded-md bg-transparent border-gray-700 border p-6'
              placeholder='Password'
            />
            <button onClick={handleSignIn} className='bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md'>
              Sign In
            </button>
            <h1 className='text-center mt-8 font-bold text-lg'>OR</h1>
            <button onClick={handleGuestSignIn} className='bg-white text-black w-full font-bold text-lg p-2 my-8 rounded-md'>
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LogInModal;
