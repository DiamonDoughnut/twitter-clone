'use client'
import { useAppDispatch, useAppSelector } from '@/app/hooks/reduxTSAdapter'
import { closeCommentModal } from '@/lib/modalSlice'
import { Modal } from '@mui/material'
import React, { useEffect } from 'react'

const CommentModal = () => {

    const isOpen = useAppSelector(state => state.modals.commentModalOpen)
    const dispatch = useAppDispatch()



  return (
    <>

        <Modal open={isOpen} onClose={() => dispatch(closeCommentModal())} className='flex justify-center items-center'>
            <div className='w-[500px] h-[500px] bg-white'>
                comment modal
            </div>
        </Modal>
    </>
  )
}

export default CommentModal