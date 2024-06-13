import Link from "next/link";

export default function TagLinks(props: { tags: string[] }) {
  if (!Array.isArray(props.tags)) {
    console.error("TagLinks: props.tags must be an array of strings");
  }

  const formattedTags = props.tags.map((tag) => (
    <Link
      href={`/tags/${tag}`}
      key={tag}
      className="text-sm font-medium text-accent-primary no-underline hover:text-accent-secondary"
    >
      {tag}
    </Link>
  ));

  return (
    <div className="md:flex md:flex-row flex-wrap space-x-3">
      {formattedTags}
    </div>
  );
}
