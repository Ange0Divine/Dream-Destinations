import Destinations from "@/components/destinations"

export default function DestinationsPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Explore Our Destinations</h1>
        <p className="text-lg mb-8">
          Discover the breathtaking landscapes and wildlife that await you across Africa.
        </p>
      </div>
      <Destinations />
    </>
  )
}
