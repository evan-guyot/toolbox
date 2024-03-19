export default function Home() {
  return (
    <div className="m-auto grid text-center">
      <a
        href="/weather"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <div className="flex row m-3 justify-center">
          <h2 className="text-2xl font-semibold">Weather Forecast 🌡️</h2>
        </div>
      </a>
      <a
        href="/recipes"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <div className="flex row m-3 justify-center">
          <h2 className="text-2xl font-semibold">Recipes 🍳</h2>
        </div>
      </a>
    </div>
  );
}
