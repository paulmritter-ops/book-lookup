export default function SearchBox() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">

      <input
        type="text"
        placeholder="Search title, author, or ISBN"
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-900"
      />

      <button
        className="bg-purple-900 text-white rounded-lg px-8 py-3 font-semibold border-2 border-yellow-400 hover:bg-purple-800 transition"
      >
        Search
      </button>

    </div>
  );
}