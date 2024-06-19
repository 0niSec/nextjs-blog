import GitHubLoginButton from "@/components/GithubLoginButton";
import GuestbookFeed from "@/components/GuestbookFeed";

export default async function GuestbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Sign my guestbook</h2>
      <div className="flex">
        <GitHubLoginButton />
      </div>
      <div>
        {children}
        <GuestbookFeed />
      </div>
    </section>
  );
}
