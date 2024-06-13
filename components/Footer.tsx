import Link from "next/link";

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="container px-4 md:px-0 max-w-5xl text-sm py-10 flex flex-col items-center justify-center">
      <p className="text-xs text-neutral-200/25">
        0niSec Blog &copy; 2024-{getCurrentYear()}.
      </p>
      <Link
        href={"/privacy-policy"}
        className="mt-4 text-accent-primary hover:text-neutral-200"
      >
        Privacy Policy
      </Link>
    </footer>
  );
}
