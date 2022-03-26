import React from 'react'
import './Illustration.css'
import Lottie from 'react-lottie';
import animationData from './77323-profile-lock.json'
export default function Illustration() {
  return (
    <div className='illustration'>
      <Lottie
      options={{
        loop:true,
        autoplay:true,
        animationData,
        rendererSettings:{
          preserveAspectRation:"xMidYMid slice"
        }
      }}
      />
    </div>
  )
}
