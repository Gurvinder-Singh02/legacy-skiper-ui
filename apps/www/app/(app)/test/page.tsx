import React from 'react'
import ThemeToggleButton from './theme-toggle-button'

const page = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center ' >
      <ThemeToggleButton showLabel  />
      <ThemeToggleButton showLabel variant="circle-blur" start="top-right" />
      <ThemeToggleButton showLabel variant="circle-blur" start="bottom-left" />
      <ThemeToggleButton showLabel variant="circle-blur" start="bottom-right" />

      <ThemeToggleButton showLabel variant="circle" start="top-left" />
      <ThemeToggleButton showLabel variant="circle" start="top-right" />
      <ThemeToggleButton showLabel variant="circle" start="bottom-left" />
      <ThemeToggleButton showLabel variant="circle" start="bottom-right" />

      <ThemeToggleButton showLabel variant="circle" start='center'  />

      <ThemeToggleButton showLabel variant="gif" url="https://media.tenor.com/cyORI7kwShQAAAAi/shigure-ui-dance.gif"  />
      <ThemeToggleButton showLabel variant="gif" url="https://media1.tenor.com/m/LSXljvwDAjYAAAAC/innovation-creativity.gif"  />
    </div>
  )
}

export default page