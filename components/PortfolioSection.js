import React from 'react'

const PortfolioSection = ({title, children}) => {
  return (
    <div className='flex'>
      <h1 className='font-bold text-xl w-80 h-20'>{title}</h1>
      {children}
    </div>
  )
}

export default PortfolioSection