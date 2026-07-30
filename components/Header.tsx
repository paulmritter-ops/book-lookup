export default function Header() {
  return (
    <>
      <header className="bg-purple-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Bulldog Book Finder
          </h1>

          <p className="mt-3 text-lg">
            Wylie West Intermediate Book Information Resource
          </p>
        </div>
      </header>

      <div className="h-2 bg-yellow-400"></div>
    </>
  );
}