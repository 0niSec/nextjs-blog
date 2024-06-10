import Image from "next/image";
import { posts } from "#site/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="container mt-8 flex min-h-screen flex-col">
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
