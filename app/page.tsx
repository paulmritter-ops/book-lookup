export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-purple-900 text-white py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            Bulldog Book Finder
          </h1>

          <p className="mt-2 text-lg">
            Wylie West Intermediate Book Information Resource
          </p>
        </div>
      </header>


      {/* Search Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Find Information About Any Book
        </h2>

        <p className="text-gray-600 mb-8">
          Search by title, author, or ISBN to find reading levels,
          AR points, and book details.
        </p>


        <div className="flex flex-col sm:flex-row gap-3">

          <input
            type="text"
            placeholder="Search title, author, or ISBN"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3"
          />

          <button
            className="bg-purple-900 text-white rounded-lg px-8 py-3 font-semibold"
          >
            Search
          </button>

        </div>

      </section>


      {/* Features */}
      <section className="bg-white py-12">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-center mb-8">
            Information Available
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="border rounded-lg p-6 text-center">
              <div className="text-3xl">⭐</div>
              <h3 className="font-bold mt-3">
                AR Points
              </h3>
              <p className="text-gray-600">
                Official values when available and estimates when needed.
              </p>
            </div>


            <div className="border rounded-lg p-6 text-center">
              <div className="text-3xl">📊</div>
              <h3 className="font-bold mt-3">
                Reading Levels
              </h3>
              <p className="text-gray-600">
                Lexile, grade levels, and difficulty information.
              </p>
            </div>


            <div className="border rounded-lg p-6 text-center">
              <div className="text-3xl">📚</div>
              <h3 className="font-bold mt-3">
                Book Details
              </h3>
              <p className="text-gray-600">
                Pages, author, description, and publication information.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-purple-900 text-white text-center py-6">
        Bulldog Book Finder
      </footer>

    </main>
  );
}