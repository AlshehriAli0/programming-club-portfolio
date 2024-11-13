'use client'

import Image from "next/image"
import logo from '../../src/asset/logo.svg'
import Link from "next/link"
import { content } from "@/content";
import { useState } from "react";

export default function Nav() {
  const [visible ,setVisible ] = useState(false)

  return (
    <nav className="mx-auto sticky top-0 left-0 p-5 sm:px-5 px-8 bg-biscay text-primary-white z-50 shadow-lg">
      <div className="flex justify-between items-center">
        <Link href={'#'}>
          <Image src={logo} width={100} height={100} alt="Logo"/>
        </Link>
        {/* Tabs */}
        <div className="sm:flex space-x-5 hidden">
          {content.nav.nameOfTabs.map((words, index) => {return <Link key={index} className="active:font-bold" href={words.url}>{words.name}</Link>})}
        </div>
        {/* ham icon */}
        <button onClick={() => setVisible(!visible)} className="bg-primary-white p-2 flex flex-col justify-center items-center space-y-1 sm:hidden rounded-md">
          {[0,0,0].map(() => {return <span className="h-[6px] w-7 bg-biscay rounded-full"></span>})}
        </button>
      </div>
      {/* Toggled menu */}
      {visible ?
      <div className="sm:hidden flex flex-col items-center space-y-5 mt-9">
          {content.nav.nameOfTabs.map((words, index) => {return <Link key={index} className="active:font-bold" href={words.url}>{words.name}</Link>})}
      </div>
      : null
      }
    </nav>
  )
}
