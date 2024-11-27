import Image from 'next/image'
import React from 'react'


const SingleMember = ({name , role}: any) => {
  return(
    <div className='flex flex-col items-center text-center'>
      <Image src='/Home/Avatar.png' className='sm:w-36 w-28 sm:h-36 h-28' width={300} height={300} alt='Avatar' />
      <h1 className='text-black sm:text-[25.05px] text-2xl font-extrabold'>{name}</h1>
      <h4 className='text-black text-[23.17px] font-extralight'>{role}</h4>
    </div>
  )
}

export default function LeadersAndHeads({ title , boldTitle , contentOfMember }:any) {
  return (
    <section className='flex flex-col gap-6'>
      <span className='sm:text-[45.95px] text-3xl text-breaker-bay flex flex-wrap gap-x-2 justify-center text-start'>{title}<h1 className='font-extrabold text-breaker-bay'>{boldTitle}</h1></span>
      <div className='bg-[#e9eced] flex flex-wrap justify-center gap-10 p-6'>
        {
          contentOfMember.map((val: { name: string; role: string }, index: number) => {
            return <SingleMember name={val.name} role={val.role} key={index} />
          })
        }
      </div>
    </section>
  )
}
