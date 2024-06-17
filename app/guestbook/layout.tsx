import GitHubLoginButton from "@/components/GithubLoginButton";
import GuestbookFeed from "@/components/GuestbookFeed";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default async function GuestbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <section>
        <h2>Sign my guestbook</h2>
        <SignedOut>
          <div className="flex">
            <SignInButton>
              <GitHubLoginButton />
            </SignInButton>
          </div>
          <div>
            <GuestbookFeed />
          </div>
        </SignedOut>
        <SignedIn>
          <div>
            {children} <GuestbookFeed />
          </div>
        </SignedIn>
      </section>
    </ClerkProvider>
  );
}
