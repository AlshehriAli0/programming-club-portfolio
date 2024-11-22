import React from 'react'
import { Cpu } from 'lucide-react';



const  SingleMaineCard = () => {
  return(
    <div className='w-full bg-white flex flex-col sm:flex-row gap-6 items-center rounded-2xl p-8'>
      {/* Icons */}
      <div>
        <Cpu className='w-24 h-24' color='black' /> 
      </div>
      {/* Text */}
      <div className='flex flex-col gap-y-4'>
        <h1 className='text-biscay text-[21.29px] font-semibold'>web development unit</h1>
        <p>Work in passionate environment to develop and design impactful websites. Collaborate with (Project management team) to plan and ensure smooth effective execution, (UI/UX team) to create user-friendly visual designs, or (Frontend/Backend team) to maintain robust, high-performance and scalable website.</p>
      </div>
    </div>
  )
}

export default function MainCard() {
  return (
    <section className='flex flex-col gap-y-4 bg-biscay p-5'>
      <h1 className='text-white text-3xl font-bold'>Programming club units</h1>
      <h2 className='text-white/80 text-2xl font-extralight'>Find your place and join the Programming club, be part of the change!</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-9 justify-between items-center '>
        <SingleMaineCard />
        <SingleMaineCard />
        <SingleMaineCard />
        <SingleMaineCard />
      </div>
    </section>
  )
}

