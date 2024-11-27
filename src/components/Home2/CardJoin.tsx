import { Code } from 'lucide-react'
import React from 'react'

interface CardJoinProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function CardJoin({ title, description, buttonText }: CardJoinProps) {
  return (
    <div className='flex flex-grow flex-col bg-biscay text-primary-white p-10 rounded-xl'>
      <div className='flex flex-col gap-y-12'>
        <div className='flex flex-col gap-y-3'>
          <span className='flex items-center gap-x-4 text-3xl font-bold'>
          <Code size={40}/> 
            <h1>{title}</h1>
          </span>
          <p>{description}</p>
        </div>
        <a className='bg-primary-white text-biscay py-3 px-10 rounded-2xl self-start'>
          {buttonText}
        </a>
      </div>
    </div>
  )
}
