export default function GuestbookFeed(props) {
  return (
    <div className="comment flex space-x-2 mt-8">
      <span className="authorId font-bold text-lime-400">
        {/* Username */}
        {`Test: ` ?? "Unknown"}
      </span>
      {/* Comment */}
      <p className=""> Test</p>
    </div>
  );
}
