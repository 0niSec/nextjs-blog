import Error from "next/error";
import Link from "next/link";

export default function TagLinks(props: { tags: string[] }) {
  if (!Array.isArray(props.tags)) {
    console.error("TagLinks: props.tags must be an array of strings");
  }

  const formattedTags = props.tags.map((tag) => (
    <Link
      href={`/tags/${tag}`}
      key={tag}
      className="text-sm font-medium text-accent-primary"
    >
      {tag}
    </Link>
  ));

  return <div className="flex flex-row space-x-3">{formattedTags}</div>;
}
