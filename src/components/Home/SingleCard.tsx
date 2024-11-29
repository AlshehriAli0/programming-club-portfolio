import { Mail } from "lucide-react";

export default function SingleCard() {
  return (
    <div className="flex flex-col items-center p-10 pb-16 text-center sm:p-32">
      <div className="rounded-full border-2 border-biscay bg-white p-3">
        <Mail />
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-xl font-bold text-biscay">Our Message</h1>
        <p className="text-justify text-xl sm:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae, eos laboriosam nobis iusto
          doloribus ab minima cumque sunt temporibus quia quos quas nostrum magnam dolor ut autem dicta
          soluta?
        </p>
      </div>
    </div>
  );
}
