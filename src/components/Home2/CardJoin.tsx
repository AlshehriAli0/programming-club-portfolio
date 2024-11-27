import { Code } from 'lucide-react'
import React from 'react'

export default function CardJoin() {
  return (
    <div className='flex flex-col bg-biscay text-primary-white p-10 rounded-xl'>
      <div className='flex flex-col gap-y-12'>
        <div className='flex flex-col gap-y-3'>
          <span className='flex items-center gap-x-4 text-3xl font-bold'>
            <Code size={40}/> 
            <h1>Can you find the bugs in the bank?</h1>
          </span>
          <p>lets have a fun time finding errors</p>
        </div>
        <a className='bg-primary-white text-biscay py-3 px-10 rounded-2xl self-start'>
          Join Us!
        </a>
      </div>
    </div>
  )
}
