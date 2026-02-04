import Link from "next/link";
import { ptSerif } from "@/utils/Fonts";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className={`text-6xl font-bold text-[#0C5E41] mb-4 ${ptSerif.className}`}>
          404
        </h1>
        <h2 className={`text-2xl font-semibold text-[#1a1a1a] mb-4 ${ptSerif.className}`}>
          Page Not Found
        </h2>
        <p className="text-[#4a4a4a] mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link href="/">
          <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#0C5E41] rounded-full hover:bg-[#0a4f36] transition-colors">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
