import React from 'react'

const Interest = ({interest}) => {
  return (
    <div className='text-xs border-1 border-zinc-800 p-2 rounded-xl text-center bg-zinc-900 hover:bg-zinc-800 transition whitespace-nowrap'>
      {interest}
    </div>
  )
}

export default Interest