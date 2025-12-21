export default function EastAfricaPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">East Africa Adventures</h1>
        <p className="text-lg mb-8">
          East Africa is home to some of the world's most spectacular wildlife destinations and natural wonders.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Kenya</h2>
            <p>Experience the Maasai Mara and witness the annual wildebeest migration.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Tanzania</h2>
            <p>Explore the Serengeti, climb Kilimanjaro, and relax in Zanzibar.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Uganda</h2>
            <p>Trek to see mountain gorillas and discover the source of the Nile.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Rwanda</h2>
            <p>The land of a thousand hills offers gorilla trekking and vibrant culture.</p>
          </div>
        </div>
      </div>
    </>
  )
}
