import Image from 'next/image'
import React from 'react'


const SingleMember = ({name , role}: any) => {
  return(
    <div className='flex flex-col items-center'>
      <Image src='/Home/Avatar.png' className='w-36 h-36' width={300} height={300} alt='Avatar' />
      <h1 className='text-black text-[25.05px] font-extrabold'>{name}</h1>
      <h4 className='text-black text-[23.17px] font-extralight'>{role}</h4>
    </div>
  )
}

export default function LeadersAndHeads({ title , boldTitle , contentOfMember }:any) {
  return (
    <section className='flex flex-col gap-4'>
      <span className='text-[45.95px] text-breaker-bay flex flex-wrap justify-center text-start'>{title}<h1 className='font-extrabold text-breaker-bay'>{boldTitle}</h1></span>
      <div className='bg-[#e9eced] flex flex-wrap justify-center gap-x-10 p-6'>
        {
          contentOfMember.map((val: { name: string; role: string }, index: number) => {
            return <SingleMember name={val.name} role={val.role} key={index} />
          })
        }
      </div>
    </section>
  )
}
