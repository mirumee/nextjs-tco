import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

function getPageLinks() {
  const pagesDir = path.join(process.cwd(), "src/app");
  const links: { label: string; path: string }[] = [];
  const excludedDirs = new Set(["api", "components"]);

  function traverse(dir: string, routePrefix: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (excludedDirs.has(entry.name)) continue;
        // Build current route for subdirectory pages.
        const currentRoute = routePrefix + "/" + entry.name;
        traverse(path.join(dir, entry.name), currentRoute);
      } else if (entry.isFile() && entry.name === "page.tsx") {
        // Exclude the home page (empty routePrefix)
        if (routePrefix !== "") {
          links.push({ label: routePrefix, path: routePrefix });
        }
      }
    }
  }

  traverse(pagesDir, "");
  return links;
}

function DancingPig() {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-10 100 100; 10 100 100; -10 100 100"
          dur="2s"
          repeatCount="indefinite"
        />
        {/* Pig face */}
        <circle cx="100" cy="100" r="40" fill="#FFC0CB" stroke="#E91E63" strokeWidth="2" />
        {/* Left ear */}
        <polygon points="70,60 80,30 90,60" fill="#FFC0CB" stroke="#E91E63" strokeWidth="2" />
        {/* Right ear */}
        <polygon points="130,60 120,30 110,60" fill="#FFC0CB" stroke="#E91E63" strokeWidth="2" />
        {/* Eyes */}
        <circle cx="85" cy="90" r="5" fill="#000" />
        <circle cx="115" cy="90" r="5" fill="#000" />
        {/* Snout */}
        <ellipse cx="100" cy="115" rx="12" ry="8" fill="#FFB6C1" stroke="#E91E63" strokeWidth="2" />
        {/* Nostrils */}
        <circle cx="95" cy="115" r="1.5" fill="#000" />
        <circle cx="105" cy="115" r="1.5" fill="#000" />
      </g>
    </svg>
  );
}

export default function Home() {
  const pageLinks = getPageLinks();

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-1 flex-col gap-8 row-start-2 items-center sm:items-center">
        <DancingPig />
        <h2 className="text-xl font-bold mt-8">Available Pages</h2>
        <ul className="list-disc ml-4 text-sm">
          {pageLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className="text-blue-600 hover:underline">
                {link.label} ({link.path})
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Made with 🤪 by someone who probably needs more coffee
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          No pixels were harmed in the making of this website
        </p>
      </footer>
    </div>
  );
}
