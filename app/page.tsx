import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBox from "@/components/SearchBox";
import FeatureCard from "@/components/FeatureCard";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      <Header />


      <section className="max-w-3xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-purple-900">
          Find Information About Any Book
        </h2>

        <p className="text-gray-700 mb-8 text-lg">
          Search by title, author, or ISBN to find reading levels,
          AR points, and detailed book information.
        </p>

        <SearchBox />

      </section>


      <section className="bg-white py-12">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-center mb-8 text-purple-900">
            Information Available
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <FeatureCard
              icon="⭐"
              title="AR Points"
              description="Official values when available and estimated values when needed."
            />

            <FeatureCard
              icon="📊"
              title="Reading Levels"
              description="Lexile, grade levels, and difficulty information."
            />

            <FeatureCard
              icon="📚"
              title="Book Details"
              description="Pages, author, description, and publication information."
            />

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}