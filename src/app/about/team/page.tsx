import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Our Team</h1>
        <p className="text-lg mb-8">
          Meet the passionate professionals who make your dream African safari a reality.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team members would go here */}
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
            <p>Our experienced guides bring the African wilderness to life with their knowledge and passion.</p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Travel Planners</h3>
            <p>Dedicated professionals who craft personalized itineraries for your perfect safari experience.</p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Support Staff</h3>
            <p>Our team ensures every detail of your journey is handled with care and professionalism.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
