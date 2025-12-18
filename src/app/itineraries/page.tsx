import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ItinerariesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Sample Itineraries</h1>
        <p className="text-lg mb-8">
          Browse our curated itineraries or let us create a custom journey just for you.
        </p>
        <div className="space-y-8">
          <div className="border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-3">7-Day Kenya Safari</h2>
            <p className="mb-4">Experience the Maasai Mara, Amboseli, and Lake Nakuru</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Day 1-3: Maasai Mara National Reserve</li>
              <li>Day 4-5: Amboseli National Park</li>
              <li>Day 6-7: Lake Nakuru National Park</li>
            </ul>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-3">10-Day Rwanda Gorilla Trek</h2>
            <p className="mb-4">Mountain gorillas, chimpanzees, and cultural experiences</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Day 1-4: Volcanoes National Park (Gorilla Trekking)</li>
              <li>Day 5-7: Nyungwe Forest (Chimpanzee Tracking)</li>
              <li>Day 8-10: Lake Kivu</li>
            </ul>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-3">14-Day East Africa Explorer</h2>
            <p className="mb-4">The ultimate East African adventure across multiple countries</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Day 1-5: Tanzania (Serengeti & Ngorongoro)</li>
              <li>Day 6-9: Kenya (Maasai Mara)</li>
              <li>Day 10-14: Uganda (Gorilla Trekking & Murchison Falls)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
