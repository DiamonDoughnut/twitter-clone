"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks/reduxTSAdapter";
import { closeSignUpModal, openSignUpModal } from "@/lib/modalSlice";
import { auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser } from "@/lib/userSlice";
import { useRouter } from "next/navigation";

const SignUpModal = () => {
  const isOpen = useAppSelector((state) => state.modals.signUpModalOpen);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState('')

  const router = useRouter()

  async function handleSignUp() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser!, {
      displayName: name,
      photoURL: `/assets/profilePictures/pfp${Math.ceil(Math.random() * 6)}.png`
    });
    
    router.push('/')
  }

  async function handleGuestSignIn() {
      await signInWithEmailAndPassword(auth, 'guest156584651861@gmail.com', 'Z4N{i5;-DZ9{Q&sR_w6wzJP|5gt#r)7Q/"')
    }

  useEffect(() => {
    console.log('reloaded with', auth.currentUser?.displayName)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        return;
      }
      dispatch(
        setUser({
          userName: currentUser.email?.split("@")[0],
          name: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: currentUser.photoURL,
        })
      );
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <button
        className='bg-transparent border-white text-white w-[160px] h-[40px] rounded-full hover:bg-[#CBD2D7]'
        onClick={() => dispatch(openSignUpModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className='flex justify-center items-center'
      >
        <div className='w-[90%] h-fit bg-black text-white md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg flex justify-center'>
          <div className='w-[90%] mt-8 flex flex-col'>
            <button onClick={handleGuestSignIn} className='bg-white text-black w-full font-bold text-lg p-2 rounded-md'>
              Sign In as Guest
            </button>
            <h1 className='text-center mt-4 font-bold text-lg'>OR</h1>
            <h1 className='mt-4 font-bold text-4xl'>Create your account</h1>
            <input
            onChange={(e) => setName(e.target.value)}
              type='text'
              className='mt-8 h-10 rounded-md bg-transparent border-gray-700 border p-6'
              placeholder='Full Name'
            />
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
            <button
              onClick={handleSignUp}
              className='bg-white text-black w-full font-bold text-lg p-2 my-8 rounded-md'
            >
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignUpModal;
