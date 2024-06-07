import { notFound } from "next/navigation";
import { getPostBySlug } from "@/app/lib/utils";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  // If the blog post requested does not exist, throw a 404 using Next's notFound function - neat!
  // https://nextjs.org/docs/app/api-reference/functions/not-found
  if (post == null) notFound();

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </>
  );
}
