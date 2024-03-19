export default function Header() {
  return (
    <header className="fixed w-full bg-white/25 dark:bg-black/25 z-50 top-0 p-3 border-b border-black dark:border-white">
      <nav className="px-4 lg:px-6 py-2.5 h-16">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="text-3xl font-bold mx-auto"> Toolbox </h1>
        </div>
      </nav>
    </header>
  );
}
