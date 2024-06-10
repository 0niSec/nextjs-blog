import { getPostBySlug } from "@/app/lib/utils";
import { Metadata } from "next";
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
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return <div dangerouslySetInnerHTML={{ __html: post!.content }}></div>;
}
