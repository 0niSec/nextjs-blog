import Link from "next/link";
import TagLinks from "./TagLinks";
import FormattedDate from "./FormattedDate";

export default function HomePageListingItem(props: {
  title: string;
  description: string;
  tags: string[];
  date: any;
  slug: string;
  keyProp: string;
}) {
  return (
    <li className="py-10" key={props.keyProp}>
      <div className="grid grid-cols-4">
        <div className="col-start-1">
          <h3 className="">
            <FormattedDate date={props.date} />
          </h3>
        </div>
        <div className="col-start-2 col-span-3">
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
