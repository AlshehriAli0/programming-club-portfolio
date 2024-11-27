import Image from "next/image";

const SingleMember = ({ name, role }: { name: string; role: string }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src="/Home/Avatar.png" className="h-36 w-36" width={300} height={300} alt="Avatar" />
      <h1 className="text-[25.05px] font-extrabold text-black">{name}</h1>
      <h4 className="text-[23.17px] font-extralight text-black">{role}</h4>
    </div>
  );
};

export default function LeadersAndHeads({
  title,
  boldTitle,
  contentOfMember,
}: {
  title: string;
  boldTitle: string;
  contentOfMember: { name: string; role: string }[];
}) {
  return (
    <section className="flex flex-col gap-4">
      <span className="flex flex-wrap justify-center text-start text-[45.95px] text-breaker-bay">
        {title}
        <h1 className="font-extrabold text-breaker-bay">{boldTitle}</h1>
      </span>
      <div className="flex flex-wrap justify-center gap-x-10 bg-[#e9eced] p-6">
        {contentOfMember.map((val: { name: string; role: string }, index: number) => {
          return <SingleMember name={val.name} role={val.role} key={index} />;
        })}
      </div>
    </section>
  );
}
