import Link from "next/link";
import TagLinks from "./TagLinks";
import FormattedDate from "./FormattedDate";

export default function HomePageListingItem(props: {
  title: string;
  description: string;
  tags: string[];
  date: any;
  slug: string;
  key: string | number;
}) {
  return (
    <li key={props.key} className="py-10">
      <div className="flex flex-col md:grid md:grid-cols-4">
        <div className="col-start-1">
          <h3 className="">
            <FormattedDate date={props.date} />
          </h3>
        </div>
        <div className="md:col-start-2 md:col-span-3">
          <h2>
            <Link href={props.slug}>{props.title}</Link>
          </h2>
          <TagLinks tags={props.tags} />
          <p className="mt-4">{props.description}</p>
        </div>
      </div>
    </li>
  );
}
