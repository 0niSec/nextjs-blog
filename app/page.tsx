import Image from "next/image";
import { posts } from "#site/content";
import { Metadata } from "next";
import HomePageListingItem from "./components/HomePageListingItem";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  const recentPosts = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="flex flex-col divide-y">
      <h1 className="pb-10">Latest Posts</h1>
      <ul className="divide-y divide-y-neutral-800">
        {recentPosts.map((post, index) => (
          <HomePageListingItem
            title={post.title}
            slug={post.permalink}
            tags={post.tags}
            description={post.description as string}
            date={post.date}
            keyProp={post.slug}
          />
        ))}
      </ul>
    </div>
  );
}
