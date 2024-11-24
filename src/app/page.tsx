import CardSwipe from "@/components/Home/CardSwipe";
import LeadersAndHeads from "@/components/Home/LeadersAndHeads";
import MainCard from "@/components/Home/MainCard";
import TopPart from "@/components/Home/TopPart";
import CardJoin from "@/components/Home2/CardJoin";
import { content } from "@/content";

export default function Home() {
  return <main className="mx-auto min-h-screen w-full">
        <TopPart />
        <div className="py-4 flex flex-col gap-y-24">
          <CardSwipe />
          <MainCard /> 
          {
            content.Home.MembersSection.map((val , index)=>{
              return (<LeadersAndHeads  title={val.title} boldTitle={val.boldTitle} contentOfMember={val.members} key={index}/>)
            })
          }

        <section className="flex flex-wrap justify-around gap-12">
          <CardJoin />
          <CardJoin />
          <CardJoin />
        </section>
        </div>
  </main>;
}
