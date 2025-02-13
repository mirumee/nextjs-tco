// Next.js will invalidate the cache when a
// request comes in, at most once every 10 seconds.
export const revalidate = 10


export default async function Page() {
  const generatedAt = new Date().toLocaleString();

  
  return (
    <main>
      <p>Revalidate 10s</p>
      <p className="text-lg">
        Page generated at: <span className="font-mono">{generatedAt}</span>
      </p>
    </main>
  )
}