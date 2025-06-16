import React from 'react'

const PortfolioSection = ({title, children}) => {
  return (
    <div className='flex'>
      <h1 className='font-bold text-xl w-50 h-20 flex-shrink-0'>{title}</h1>
      <div className='flex-1'>
        {children}
      </div>
    </div>
  )
}

export default PortfolioSection