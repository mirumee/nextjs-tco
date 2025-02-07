import fs from "fs";
import path from "path";
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
        const currentRoute = routePrefix + "/" + entry.name;
        traverse(path.join(dir, entry.name), currentRoute);
      } else if (entry.isFile() && entry.name === "page.tsx") {
        if (routePrefix === "") {
          links.push({ label: "Home", path: "/" });
        } else {
          links.push({ label: routePrefix, path: routePrefix });
        }
      }
    }
  }

  traverse(pagesDir, "");
  return links;
}

export default function Navigation() {
  const pageLinks = getPageLinks();

  return (
    <nav className="w-full p-4 bg-gray-100 dark:bg-gray-800">
      <ul className="flex gap-4">
        {pageLinks.map((link) => (
          <li key={link.path}>
            <Link href={link.path} className="text-blue-600 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 