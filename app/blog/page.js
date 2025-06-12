import React from 'react'
import BlogIcon from '../../components/BlogIcon'
const Blogs = () => {
  return (
    <div className='p-20'>
      <section className='text-center'>
        <h1 className='font-bold text-5xl pb-5'>Blogs</h1>
        <p className='text-md'>A collection of my thoughts</p>
      </section>
      <BlogIcon title='My First Blog' description="This is my first blog" date='6/12/2025' src='first-blog'/>
    </div>
  )
}

export default Blogs