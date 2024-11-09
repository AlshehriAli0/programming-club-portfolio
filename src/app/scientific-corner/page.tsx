import { ScientificHero } from "@/components/ScientificHero";
import { SquareBanner } from "@/components/SquareBanner";

export const dynamic = "force-static";

export default function ScientificCornerPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[85rem] flex-col gap-28 px-10 pb-20">
      <ScientificHero />
      <SquareBanner />
    </main>
  );
}
