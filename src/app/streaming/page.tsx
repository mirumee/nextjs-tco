// import { Suspense } from "react";

export default function StreamingPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Streaming Example</h1>
      {/* <Suspense fallback={<p>Loading chunk 1...</p>}>
        <ContentChunk1 />
      </Suspense>
      <Suspense fallback={<p>Loading chunk 2...</p>}>
        <ContentChunk2 />
      </Suspense>
      <Suspense fallback={<p>Loading chunk 3...</p>}>
        <ContentChunk3 />
      </Suspense> */}
    </div>
  );
}

// async function ContentChunk1() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return <p>Chunk 1: This content loaded after 1 second.</p>;
// }

// async function ContentChunk2() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return <p>Chunk 2: This content loaded after 2 seconds.</p>;
// }

// async function ContentChunk3() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return <p>Chunk 3: This content loaded after 3 seconds.</p>;
// } 