export default function FormattedDate(props: any) {
  const date = new Date(props.date);

  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  } as Intl.DateTimeFormatOptions;

  const formattedDate = date.toLocaleDateString("en-US", options);
  return <time dateTime={props.date}>{formattedDate}</time>;
}
