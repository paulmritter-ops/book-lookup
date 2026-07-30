"use client";

import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);


  async function searchBooks() {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(
        `/api/books?q=${encodeURIComponent(query)}`
      );

      const data = await response.json();

      setResults(data.items || []);

    } catch (error) {
      console.error("Error searching books:", error);
      setResults([]);

    } finally {
      setLoading(false);
    }
  }


  return (
    <div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchBooks();
        }}
        className="flex flex-col sm:flex-row gap-3"
      >

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search title, author, or ISBN"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-900"
        />


        <button
          type="submit"
          disabled={loading}
          className="bg-purple-900 text-white rounded-lg px-8 py-3 font-semibold border-2 border-yellow-400 hover:bg-purple-800 transition disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>

      </form>


      {loading && (
        <p className="mt-6 text-purple-900">
          Searching for books...
        </p>
      )}


      <div className="mt-8 space-y-4">

        {results.map((book) => (

          <div
            key={book.id}
            className="bg-white border rounded-lg p-5 text-left shadow-sm"
          >

            <h3 className="text-xl font-bold text-purple-900">
              {book.volumeInfo.title}
            </h3>


            <p className="text-gray-700 mt-1">
              {book.volumeInfo.authors?.join(", ") || "Author unavailable"}
            </p>


            {book.volumeInfo.imageLinks?.thumbnail && (

              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="mt-4 h-40"
              />

            )}


            <p className="mt-3 text-gray-700">
              Pages: {book.volumeInfo.pageCount || "Not available"}
            </p>


          </div>

        ))}

      </div>

    </div>
  );
}