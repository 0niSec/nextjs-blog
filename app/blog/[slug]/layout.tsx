import { getPostBySlug } from "@/app/lib/utils";
import { notFound } from "next/navigation";

export default function BlogPost({
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

  return (
    <main className="flex min-h-screen flex-col">
      <section className="prose container prose-headings:text-neutral-300 text-neutral-200 max-w-4xl">
        <article>
          <h1></h1>
          {children}
        </article>
      </section>
    </main>
  );
}
