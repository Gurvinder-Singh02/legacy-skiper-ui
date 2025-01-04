import React from 'react'

import AnimatedNumberRandomDemo from './animated-number-random-demo'
import AnimatedNumberCountDownDemo from './animated-number-contdown-demo'
import AnimatedNumberCounterDemo from './animated-number-counter-demo'

const page = () => {
  return (
    <div className='mt-40 flex flex-col gap-10' >
      <AnimatedNumberRandomDemo />
      <AnimatedNumberCountDownDemo />
      <AnimatedNumberCounterDemo />
    </div>
  )
}

export default page