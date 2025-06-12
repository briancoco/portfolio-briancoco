'use client'
import React from 'react'
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";

const Intro = () => {
  return (
    <div className='p-10 flex justify-around gap-10'>
      <img src='/pic-self-cropped.jpg' className='w-70 rounded-full aspect-square object-cover' />
      <section className='flex flex-col justify-center items-center gap-10'>
        <h1 className='font-bold text-6xl text-center  p-2'>Brian Nguyen</h1>
        <section className='flex justify-center gap-10'>
          <p className='flex items-center gap-1'>
            <PiSuitcaseSimpleLight className='text-xl'/> Meta
          </p>
          <p className='flex items-center gap-1'>
            <CiLocationOn className='text-xl'/>
            Austin, Texas
          </p>
          <p className='flex items-center gap-1'>
            <FiGithub className='text-lg'/>
            Github
          </p>
          <p className='flex items-center gap-1'>
            <CiLinkedin className='text-2xl'/>
            Linkedin
          </p>
        </section>
      </section>
    </div>
  )
}

export default Intro