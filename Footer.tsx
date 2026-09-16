import { profile } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 text-sm text-muted sm:flex-row md:px-10">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono text-xs">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
