import Image from 'next/image'
import React from 'react'
import sphere from '../../asset/FooterShape.svg'
import logo from '../../../src/asset/logo.svg'
import { content } from '@/content'

export default function TopPart() {
  return (

    <div className='flex flex-col bg-biscay'>
    <div className=' text-primary-white flex flex-row items-center justify-around p-11'>

    <div className="text-center">
      <span style={{ color: '#6499a2' }} className="sm:text-5xl text-3xl font-black font-['Raleway']">{content.Home.topPart.topText}<br/></span>
      <span className="sm:text-5xl text-3xl font-black font-['Raleway']">{content.Home.topPart.bottom}</span>
    </div>
      <div>
        <Image src={logo} alt='logo'     
        height="0"
        sizes="100vw"
        className="w-full h-44" 
        />
      </div>
    </div>
    <Image src={sphere} alt='sphere'   
    width="0"
    height="0"
    sizes="100vw"
    className="w-full h-full rotate-180" 
    loading='lazy'
    />
    </div>
  )
}
