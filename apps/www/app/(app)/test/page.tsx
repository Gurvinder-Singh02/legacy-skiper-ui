import React from 'react'
import { ThemeToggleButton } from './theme-toggle-animation'


const page = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center ' >
      <ThemeToggleButton variant='circle-blur' start='bottom-left' />
    </div>
  )
}

export default page