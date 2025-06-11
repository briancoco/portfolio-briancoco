import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between font-bold'>
      <h1 className='text-lg'>briancoco.dev</h1>
      <section className='flex gap-10'>
        <div>Link1</div>
        <div>Link2</div>
      </section>
      
    </div>
  )
}

export default Header