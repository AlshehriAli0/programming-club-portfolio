import { content } from "@/content";
import Image from "next/image";
import Shape from "../asset/FooterShape.svg";
import logo from "../asset/logo.svg";

export default function Footer() {
  return (
    <footer className="flex-col bg-biscay">
      <Image src={Shape} alt="sphere" className="w-full" />
      <div className="flex flex-row items-center justify-around px-4 py-10">
        <div className="flex flex-col gap-y-3 text-primary-white">
          <div>
            <p className="text-3xl font-bold">{content.footer.topPTag}</p>
            <a href="" className="text-xl font-extralight">
              {content.footer.topATag}
            </a>
          </div>
          <div>
            <p className="text-3xl font-bold">{content.footer.bottomPTag}</p>
            <a href="" className="text-xl font-extralight">
              {content.footer.bottomATag}
            </a>
          </div>
        </div>

        {/* Image */}
        <Image src={logo} alt="logo" className="w-52" />
      </div>
    </footer>
  );
}
