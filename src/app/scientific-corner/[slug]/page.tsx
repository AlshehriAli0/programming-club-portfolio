import { getPostBySlug } from "@/lib/articles";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

type Params = {
  slug: string;
};

const page = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  const { meta, content } = post;

  return (
    <main className="mx-auto flex min-h-screen max-w-[85rem] flex-col overflow-x-hidden px-2 py-16 md:px-10">
      <Link
        href={"/scientific-corner"}
        className="ml-1 w-fit rounded-3xl bg-smalt-blue px-5 py-1 text-xl font-bold text-white md:px-7 md:py-2 lg:ml-[12%]"
      >
        Back
      </Link>
      <section className="px-2 py-16 lg:px-64">
        <div>
          <div className="flex flex-col gap-8 md:gap-16">
            <div className="flex items-center justify-start gap-6">
              <div
                style={{ boxShadow: "0px 0px 7.8px 2px #6499A2" }}
                className="mt-4 rounded-3xl bg-white px-2 py-1 text-sm font-bold text-[#64738B] md:text-base"
              >
                {meta.section}
              </div>

              <span className="mt-4 block text-base font-semibold text-black/50 md:text-xl">
                <time dateTime={post.date}>
                  {new Intl.DateTimeFormat("en-GB", {
                    dateStyle: "medium",
                  }).format(new Date(post.date))}
                </time>
              </span>
            </div>
            <h1 className="text-3xl font-bold text-black md:text-6xl">{meta.title}</h1>
            <Image
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 75vw, (max-width: 1280px) 50vw, 100vw"
              src={meta.image}
              alt={meta.title}
              width={800}
              height={400}
              quality={100}
            />
          </div>
        </div>

        <section className="py-12">
          <article className="prose prose-lg table-wrapper">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {content}
            </ReactMarkdown>
          </article>
        </section>
      </section>
    </main>
  );
};

export default page;
