import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Not Found</h2>

        <p className="text-1xl font-bold mb-4">
          Could not find requested resource
        </p>
        <Link
          size="lg"
          className={`${buttonVariants()} bg-purple-600 hover:bg-purple-700`}
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
