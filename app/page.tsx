import Image from "next/image";
import { posts } from "#site/content";

export default function Home() {
  return (
    <main className="container mt-8 flex min-h-screen flex-col">
      <h1>Posts</h1>
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
