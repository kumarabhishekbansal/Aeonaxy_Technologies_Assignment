import React from 'react'

const Heading = ({title}) => {
  return (
   <div className='font-bold text-black first-letter:capitalize'>
        {title}
   </div>
  )
}

export default Heading