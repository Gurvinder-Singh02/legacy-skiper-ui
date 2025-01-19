import React from 'react'
import ThemeToggleButton from './theme-toggle-button'

const page = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center ' >
      <ThemeToggleButton showLabel />
      <ThemeToggleButton showLabel variant="circle-blur" start="top-right" />
      <ThemeToggleButton showLabel variant="circle-blur" start="bottom-left" />
      <ThemeToggleButton showLabel variant="circle-blur" start="bottom-right" />

      <ThemeToggleButton showLabel variant="circle" start="top-left" />
      <ThemeToggleButton showLabel variant="circle" start="top-right" />
      <ThemeToggleButton showLabel variant="circle" start="bottom-left" />
      <ThemeToggleButton showLabel variant="circle" start="bottom-right" />

      <ThemeToggleButton showLabel variant="circle" start='center'  />

      <ThemeToggleButton showLabel variant="gif" url=""  />
    </div>
  )
}

export default page