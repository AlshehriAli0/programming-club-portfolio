import Image from "next/image";
import logo from '../asset/logo.svg'
import Shape from '../asset/FooterShape.svg'
import { content } from "@/content";

export default function Footer() {
  return (
    <footer className="bg-biscay flex-col">
      <Image src={Shape} alt="sphere" className="w-full"/>
      <div className="flex flex-row justify-around items-center">
        <div className="flex flex-col text-primary-white gap-y-3">
          <div>
            <p className="font-bold text-3xl">{content.footer.topPTag}</p>
            <a href="" className="font-extralight text-xl">{content.footer.topATag}</a>
          </div>
          <div>
            <p className="font-bold text-3xl">{content.footer.bottomPTag}</p>
            <a href="" className="font-extralight text-xl">{content.footer.bottomATag}</a>
          </div>
        </div>

        {/* Image */}
        <Image src={logo} alt="logo" className="w-52" />
      </div>
    </footer>
  )
}
