import React from 'react'

const Experience = ({image, title, company, dates, children}) => {
  return (
    <div className='flex items-start gap-10 text-gray-400'>
      <img className='w-12 mt-5 rounded-lg' src={image}/>
      <section className='bg-zinc-900 rounded-xl px-5 py-2.5 w-175 flex flex-col gap-1 border-1 border-zinc-800 hover:bg-zinc-800 transition'>
        <section className='flex items-center justify-between text-white'>
          <h1 className='font-bold text-lg flex'>{company}</h1>
          <div className="text-sm">{dates}</div>
        </section>
        <h2 className='text-sm'>{title}</h2>
        {children}
      </section>
    </div>
  )
}

export default Experience