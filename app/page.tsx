export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">

        <h1 className="text-5xl font-bold mb-4">
          📚 Book Lookup
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Find AR points, Lexile levels, reading levels,
          and other information about books.
        </p>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
          />

          <button
            className="bg-blue-600 text-white rounded-lg px-6 py-3"
          >
            Search
          </button>
        </div>

      </div>
    </main>
  );
}