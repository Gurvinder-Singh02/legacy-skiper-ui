import React from 'react'
import ThemeToggleButton from './theme-toggle-button'

const page = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center ' >
      <ThemeToggleButton />
      <ThemeToggleButton showLabel variant="circle-blur" start="bottom-right" />
      <ThemeToggleButton variant="circle-blur" start="top-right" />

      <ThemeToggleButton variant="circle" start="bottom-left" />
      <ThemeToggleButton variant="circle-blur" start="bottom-left" />
      <ThemeToggleButton variant="circle-blur" start="bottom-left" />
      <ThemeToggleButton variant="circle-blur" start="bottom-left" />
    </div>
  )
}

export default page