import { content } from "@/content";
import Image from "next/image";
import Link from "next/link";
import Shape from "../asset/FooterShape.svg";
import logo from "../asset/logo.svg";

export default function Footer() {
  return (
    <footer className="flex-col bg-biscay">
      <Image src={Shape} alt="sphere" className="w-full" />
      <div className="flex flex-row items-center justify-around p-12">
        <div className="flex flex-col gap-y-3 text-primary-white">
          <div>
            <p className="text-xl font-bold sm:text-3xl">{content.footer.topPTag}</p>
            <a href="" className="text-xl font-extralight">
              {content.footer.topATag}
            </a>
          </div>
          <div>
            <p className="text-xll font-bold sm:text-3xl">{content.footer.bottomPTag}</p>
            <a href="" className="text-xl font-extralight">
              {content.footer.bottomATag}
            </a>
          </div>
        </div>

        {/* Image */}
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-32 sm:w-52" quality={100} />
        </Link>
      </div>
    </footer>
  );
}
