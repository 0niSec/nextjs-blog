import FormattedDate from "@/components/FormattedDate";
import Link from "next/link";
import TagLinks from "@/components/TagLinks";

export default function BlogPageListingItem(props: {
  title: string;
  description: string;
  tags: string[];
  date: any;
  slug: string;
  id: string | number;
}) {
  return (
    <li key={props.id} className="mt-10">
      <h4 className="text-neutral-400">
        <FormattedDate date={props.date} />
      </h4>
      <h2>
        <Link href={props.slug}>{props.title}</Link>
      </h2>
      <TagLinks tags={props.tags} />
      <p className="mt-4">{props.description}</p>
    </li>
  );
}
