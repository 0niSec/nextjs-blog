import Image from "next/image";
import { allPosts } from "content-collections";

export default function Home() {
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {allPosts.map((post) => (
          <a href={post._meta.path}>{post.title}</a>
        ))}
      </ul>
    </main>
  );
}
