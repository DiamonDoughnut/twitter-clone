'use client'
import React from "react";
import { Modal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks/reduxTSAdapter";
import { closeSignUpModal, openSignUpModal } from "@/lib/modalSlice";

const SignUpModal = () => {
  const isOpen = useAppSelector(state => state.modals.signUpModalOpen)
  const dispatch = useAppDispatch()

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
        className="flex justify-center items-center"
      >
        <div className='w-[400px] h-[200px] bg-white'>Sign Up Here</div>
      </Modal>
    </>
  );
};

export default SignUpModal;
