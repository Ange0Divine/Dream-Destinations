import Header from "@/components/header"
import Footer from "@/components/footer"
import Tours from "@/components/tours"

export default function SafariToursPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Safari Tours</h1>
        <p className="text-lg mb-8">
          Choose from our carefully curated safari experiences designed to showcase the best of African wildlife.
        </p>
      </div>
      <Tours />
      <Footer />
    </main>
  )
}
