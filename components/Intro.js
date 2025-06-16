'use client'
import React from 'react'
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";
import Link from 'next/link';

const Intro = () => {
  return (
    <div className='p-10 flex justify-center  gap-10'>
      <img src='/pic-self-cropped.jpg' className='w-70 rounded-full aspect-square object-cover' />
      <section className='flex flex-col justify-center items-center gap-10'>
        <h1 className='font-bold text-4xl text-center  p-2'>Brian Nguyen</h1>
        <section className='flex justify-center gap-10'>
          <p className='flex items-center gap-1'>
            <PiSuitcaseSimpleLight className='text-xl'/>
            <Link href='https://www.meta.com/about/' rel="noopener noreferrer" target="_blank">Meta</Link>
          </p>
          <p className='flex items-center gap-1 justify-center w-40'>
            <CiLocationOn className='text-xl'/>
            <Link href='https://g.co/kgs/FctEyt7' rel="noopener noreferrer" target="_blank">Austin, TX</Link>
          </p>
          <p className='flex items-center gap-1'>
            <FiGithub className='text-lg'/>
            <Link href='https://github.com/briancoco' rel="noopener noreferrer" target="_blank">Github</Link>
          </p>
          <p className='flex items-center gap-1'>
            <CiLinkedin className='text-2xl'/>
            <Link href='https://www.linkedin.com/in/brian-doan-nguyen/' rel="noopener noreferrer" target="_blank">Linkedin</Link>
          </p>
        </section>
      </section>
    </div>
  )
}

export default Intro