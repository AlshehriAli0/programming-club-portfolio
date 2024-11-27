'use client'

import React from 'react'
import { content } from '@/content'

const  SingleMaineCard = ({icon, title , desc } : any) => {
  return(
    <div className='w-full bg-white flex flex-col sm:flex-row gap-6 items-center rounded-2xl p-8 h-full'>
      {/* Icons */}
      <div className='text-6xl'>
        {React.createElement(icon, { className: 'w-24 h-full' })}
      </div>
      {/* Text */}
      <div className='flex flex-col gap-y-4'>
        <h1 className='text-biscay text-[21.29px] font-semibold'>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default function MainCard() {
  return (
    <section className='flex flex-col gap-y-4 bg-biscay p-28'>
      <h1 className='text-white text-3xl font-bold'>{content.Home.ProgramUnit.title}</h1>
      <h2 className='text-white/80 text-2xl font-extralight'>{content.Home.ProgramUnit.desc}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-9 justify-between items-center '>
        {
          content.Home.ProgramUnit.ProgramUnitCard.map((val, index) => (
            <SingleMaineCard key={index} icon={val.logo} title={val.headerOfTitle} desc={val.info} />
          ))
        }
      </div>
    </section>
  )
}

