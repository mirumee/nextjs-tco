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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center flex-1">
        <DancingPig />
        <h2 className="text-xl font-bold mt-8">Welcome to the Home Page</h2>
      </main>
      <footer className="flex gap-6 flex-col items-center justify-center">
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
