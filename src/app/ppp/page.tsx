// import Clock from "@/components/Clock";
// import { Suspense } from "react";

export const experimental_ppr = true;

export default function PartialPrerenderPage() {
  // This buildTime value is computed during prerendering

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Partial Prerendering Example</h1>
      This is static part of the page.

      ⬇️ This is a dynamic component that is rendered on the server.
      {/* <Suspense fallback={<p>Searching for the time...</p>}>
        <Clock />
      </Suspense> */}
    </div>
  );
} 