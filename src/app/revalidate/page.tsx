import Image from "next/image";

export interface Pattern {
  id: number
  title: string
  userName: string
  numViews: number
  numVotes: number
  numComments: number
  numHearts: number
  rank: number
  dateCreated: string
  hex: string
  rgb: Rgb
  hsv: Hsv
  description: string
  url: string
  imageUrl: string
  badgeUrl: string
  apiUrl: string
}

export interface Rgb {
  red: number
  green: number
  blue: number
}

export interface Hsv {
  hue: number
  saturation: number
  value: number
}

// Next.js will invalidate the cache when a
// request comes in, at most once every 10 seconds.
export const revalidate = 10


export default async function Page() {
  const generatedAt = new Date().toLocaleString();
  const pattern: Pattern[] = await fetch(`https://www.colourlovers.com/api/patterns/random?format=json`).then(
    (res) => res.json()
  )
  return (
    <main>
      <p>{pattern[0].id}</p>
      <p>{pattern[0].title}</p>
      <p>{pattern[0].imageUrl}</p>
      <Image alt={pattern[0].title} src={pattern[0].imageUrl} width={1000} height={1000}/>
      <p className="text-lg">
        Page generated at: <span className="font-mono">{generatedAt}</span>
      </p>
    </main>
  )
}