import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">About Dream Destinations</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Welcome to Dream Destinations Tours & Travel, your premier partner in creating unforgettable African safari experiences.
          </p>
          <p className="text-lg mb-4">
            With years of expertise in curating exceptional travel experiences, we specialize in bringing you closer to the wonders of Africa's wildlife and natural beauty.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            To provide authentic, sustainable, and transformative travel experiences that connect our guests with the breathtaking landscapes and diverse wildlife of Africa.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
