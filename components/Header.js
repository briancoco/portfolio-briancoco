import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between font-bold'>
      <Link href='/'><h1 className='text-xl bg-gradient-to-t from-gray-50 to-gray-300 bg-clip-text text-transparent'>briancoco.dev</h1></Link>
      <section className='flex gap-10'>
        <Link href='/blog' className='hover:text-gray-300'>Blog</Link>
        <Link href='/contact' className='hover:text-gray-300'>Contact</Link>
      </section>
      
    </div>
  )
}

export default Header