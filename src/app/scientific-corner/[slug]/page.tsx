import { getPostBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

const page = ({ params }: { params: Params }) => {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();
  return <div>page</div>;
};

export default page;
