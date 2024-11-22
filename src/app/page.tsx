import CardSwipe from "@/components/Home/CardSwipe";
import MainCard from "@/components/Home/MainCard";
import TopPart from "@/components/Home/TopPart";
import { content } from "@/content";

export default function Home() {
  return <main className="mx-auto min-h-screen w-full">
        <TopPart />
        <div className="py-4 flex flex-col gap-y-24">
          <CardSwipe />
          <MainCard /> 
        </div>
    
  </main>;
}
