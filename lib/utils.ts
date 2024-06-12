import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { posts } from "#site/content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPreviousPost(currentSlug: string) {
  const currentPostIndex = posts.findIndex((p) => p.slug === currentSlug);
  if (currentPostIndex > 0) {
    return posts[currentPostIndex - 1];
  } else {
    return posts[currentPostIndex + 1];
  }
}
