import FormattedDate from "@/components/FormattedDate";
import { getPostBySlug, getPreviousPost } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}) {
  const post = getPostBySlug(params.slug);

  // If the blog post requested does not exist, throw a 404 using Next's notFound function - neat!
  // https://nextjs.org/docs/app/api-reference/functions/not-found
  if (post == null) notFound();

  const previousPost = getPreviousPost(post?.slug as string);

  return (
    <section className="prose container prose-headings:text-neutral-300 text-neutral-200 max-w-none">
      <article>
        <div className="pb-6 text-center">
          <h2 className="not-prose text-base mb-2 text-neutral-500">
            <FormattedDate date={post.date} />
          </h2>
          <h1 className="text-5xl not-prose">{post.title}</h1>
        </div>
        <div className="grid grid-cols-4 grid-rows-[auto_1fr] mt-10">
          <div className="text-sm pb-8">
            <h5 className="font-bold uppercase tracking-wide">Tags</h5>
            <div className="flex flex-wrap gap-x-4">
              {post.tags.map((tag) => (
                <Link href={`/tags/${tag}`} key={tag}>
                  {tag}
                </Link>
              ))}
            </div>
            <div className="flex text-sm flex-col py-8">
              <h5 className="font-bold uppercase tracking-wide">
                Next Article
              </h5>
              <Link
                href={`/blog/${previousPost.slug}`}
                className="not-prose text-accent-primary hover:text-accent-secondary"
                prefetch={true}
              >
                {previousPost.title}
              </Link>
            </div>
          </div>
          <div className="col-span-3">
            <div id="box-info" className="">
              <h2 className="not-prose">Introduction</h2>
              <p>{post.description}</p>
              <Image
                src={post.cover}
                alt="hero image"
                placeholder="blur"
                width={550}
                height={550}
              />
            </div>
            <div className="flex flex-col">{children}</div>
          </div>
        </div>
      </article>
    </section>
  );
}
