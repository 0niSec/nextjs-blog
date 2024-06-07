import { posts } from "#site/content";

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
