import { getPostBySlug } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

type Props = {
  params: {
    slug: string;
  };
};

const getPostBySlugInPage = cache(async (slug: any) => {
  const post = await getPostBySlug(slug);
  return {
    title: post?.title,
    description: post?.description,
  };
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getPostBySlugInPage(params.slug);
  return {
    title: data?.title,
    description: data?.description,
    openGraph: {
      title: data?.title,
      description: data?.description,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  // If the blog post requested does not exist, throw a 404 using Next's notFound function - neat!
  // https://nextjs.org/docs/app/api-reference/functions/not-found
  if (post == null) notFound();

  return post.isMachineActive ? (
    <section>
      <p>こんにちわ！ Hello!👋</p>
      <p>
        This machine is still active. Per Hack The Box rules, this writeup will
        be released once the machine is retired and writeups are allowed to be
        posted.
      </p>
    </section>
  ) : (
    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
  );
}
