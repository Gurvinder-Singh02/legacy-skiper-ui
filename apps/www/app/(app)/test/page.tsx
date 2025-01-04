import React from 'react'

import AnimatedNumberRandomDemo from './animated-number-random-demo'
import AnimatedNumberCountDownDemo from './animated-number-contdown-demo'

const page = () => {
  return (
    <div className='mt-40' >
      <AnimatedNumberRandomDemo />
      <AnimatedNumberCountDownDemo />
    </div>
  )
}

export default page