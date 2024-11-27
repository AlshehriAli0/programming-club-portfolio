import React from 'react'
import { Mail } from 'lucide-react';

export default function SingleCard() {
  return (
    <div className='text-center sm:p-44 p-20 flex flex-col items-center'>
      <div className='p-3 border-2 border-biscay rounded-full bg-white'>
        <Mail />
      </div>
      <div className='flex flex-col items-center gap-y-4'>
        <h1 className='font-bold text-xl text-biscay'>
          Our Message
        </h1>
        <p className='text-justify sm:text-2xl text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae, eos laboriosam nobis iusto doloribus ab minima cumque sunt temporibus quia quos quas nostrum magnam dolor ut autem dicta soluta?
        </p>

      </div>
    </div>
  )
}
