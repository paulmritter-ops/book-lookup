export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
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

      {/* Gold Accent */}
      <div className="h-2 bg-yellow-400"></div>


      {/* Search Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-purple-900">
          Find Information About Any Book
        </h2>

        <p className="text-gray-700 mb-8 text-lg">
          Search by title, author, or ISBN to find reading levels,
          AR points, and detailed book information.
        </p>


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

      </section>


      {/* Features */}
      <section className="bg-white py-12">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-center mb-8 text-purple-900">
            Information Available
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


            {/* AR Card */}
            <div className="border-t-4 border-yellow-400 rounded-lg p-6 text-center shadow-sm">

              <div className="text-4xl">
                ⭐
              </div>

              <h3 className="font-bold text-xl mt-3 text-purple-900">
                AR Points
              </h3>

              <p className="text-gray-700 mt-2">
                Official values when available and estimated values when needed.
              </p>

            </div>


            {/* Reading Levels Card */}
            <div className="border-t-4 border-yellow-400 rounded-lg p-6 text-center shadow-sm">

              <div className="text-4xl">
                📊
              </div>

              <h3 className="font-bold text-xl mt-3 text-purple-900">
                Reading Levels
              </h3>

              <p className="text-gray-700 mt-2">
                Lexile, grade levels, and difficulty information.
              </p>

            </div>


            {/* Book Details Card */}
            <div className="border-t-4 border-yellow-400 rounded-lg p-6 text-center shadow-sm">

              <div className="text-4xl">
                📚
              </div>

              <h3 className="font-bold text-xl mt-3 text-purple-900">
                Book Details
              </h3>

              <p className="text-gray-700 mt-2">
                Pages, author, description, and publication information.
              </p>

            </div>


          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-purple-900 text-white text-center py-6 border-t-4 border-yellow-400">

        <p>
          Bulldog Book Finder
        </p>

        <p className="text-sm mt-2">
          Wylie West Intermediate
        </p>

      </footer>


    </main>
  );
}