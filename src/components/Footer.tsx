import Image from "next/image";
import logo from '../asset/logo.svg'
import Shape from '../asset/FooterShape.svg'
import { content } from "@/content";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-biscay flex-col">
      <Image src={Shape} alt="sphere" className="w-full"/>
      <div className="flex flex-row justify-around items-center p-12">
        <div className="flex flex-col text-primary-white gap-y-3">
          <div>
            <p className="font-bold sm:text-3xl text-xl">{content.footer.topPTag}</p>
            <a href="" className="font-extralight text-xl">{content.footer.topATag}</a>
          </div>
          <div>
            <p className="font-bold sm:text-3xl text-xll">{content.footer.bottomPTag}</p>
            <a href="" className="font-extralight text-xl">{content.footer.bottomATag}</a>
          </div>
        </div>

        {/* Image */}
        <Link href={'/'}>
          <Image src={logo} alt="logo" className="sm:w-52 w-32" />
        </Link>
      </div>
    </footer>
  )
}
