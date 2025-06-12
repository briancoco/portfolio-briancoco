import React from 'react'
import Link from 'next/link'

const BlogIcon = ({title, date, description, src}) => {
  return (
    <Link href={`/blog/${src}`}>
    <div className='border-1 border-zinc-800 rounded-lg py-3 px-5 my-10 bg-zinc-900 hover:bg-zinc-800 transition'>
      <section className='flex justify-between mb-5'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p>{date}</p>
      </section>
      <p className='text-sm'>{description}</p>
    </div>
    </Link>
  )
}

export default BlogIcon