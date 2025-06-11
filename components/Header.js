import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between font-bold'>
      <h1 className='text-lg bg-gradient-to-t from-gray-50 to-gray-300 bg-clip-text text-transparent'>briancoco.dev</h1>
      <section className='flex gap-10'>
        <div>Blog</div>
        <div>Contact</div>
      </section>
      
    </div>
  )
}

export default Header