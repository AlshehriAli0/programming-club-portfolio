import Image from "next/image"
import logo from '../../src/asset/logo.svg'
import Link from "next/link"
import { content } from "@/content";

export default function Nav() {
  return (
    <nav className="mx-auto max-w-[85rem] sticky top-0 left-0 p-5 sm:px-5 px-8 bg-biscay text-primary-white">
      <div className="flex justify-between items-center">
        <Link href={'#'}>
          <Image src={logo} width={100} height={100} alt="Logo"/>
        </Link>
        {/* Tabs */}
        <div className="sm:flex space-x-5 hidden">
          {content.nav.nameOfTabs.map((words) => {return <Link className="active:font-bold" href={'#'}>{words}</Link>})}
        </div>
        {/* ham icon */}
        <div className="bg-primary-white p-2 flex flex-col justify-center items-center space-y-1 sm:hidden rounded-md">
          {[0,0,0].map(() => {return <span className="h-[6px] w-7 bg-biscay rounded-full"></span>})}
        </div>
      </div>
      {/* Toggled menu */}
      <div className="sm:hidden flex flex-col items-center space-y-5 mt-9">
          {content.nav.nameOfTabs.map((words) => {return <Link className="active:font-bold" href={'#'}>{words}</Link>})}
      </div>
    </nav>
  )
}
