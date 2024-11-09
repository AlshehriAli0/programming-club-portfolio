import { content } from "@/content";

export const ScientificHero = () => {
  return (
    <div className="relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen">
      <div
        style={{
          backgroundImage: "url('/scitenfic-hero.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <div className="mx-auto max-w-[85rem] px-8">
          <div className="text-primary-white flex flex-col gap-7 py-44">
            <h1 className="text-shadow text-6xl font-bold">{content.scientificCorner.hero.title}</h1>
            <h3 className="text-4xl">{content.scientificCorner.hero.titleWelcome}</h3>
            <p className="text-2xl font-light">{content.scientificCorner.hero.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
