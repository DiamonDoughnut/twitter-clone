'use client'
import React from 'react'
import Moment from 'react-moment'

const MomentComponent = ({ timeStamp }: { timeStamp: Date }) => {
  return (
    <Moment fromNow>{timeStamp}</Moment>
  )
}

export default MomentComponent