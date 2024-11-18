import CardSwipe from "@/components/Home/CardSwipe";
import TopPart from "@/components/Home/TopPart";
import { content } from "@/content";

export default function Home() {
  return <main className="mx-auto min-h-screen w-full">
        <TopPart />
        <CardSwipe />
    
  </main>;
}
