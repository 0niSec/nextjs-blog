import BlogPageListingItem from "@/components/BlogPageListingItem";
import { posts } from "#site/content";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div
        id="tags-sidebar"
        className="bg-neutral-800 col-span-1 p-4 rounded-sm"
      >
        <h4>All Posts</h4>
        <ul className="ml-4">
          <li>Tag 1</li>
          <li>Tag 2</li>
        </ul>
      </div>
      <div id="post-listing" className="col-span-3">
        <ul>
          {posts.map((post) => (
            <BlogPageListingItem
              key={post.title}
              title={post.title}
              tags={post.tags}
              description={post.description as string}
              date={post.date}
              slug={post.permalink}
              id={post.slug}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
