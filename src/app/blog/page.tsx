import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Travel Blog</h1>
        <p className="text-lg mb-8">
          Insights, stories, and tips from our African safari adventures.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="border border-border rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">Top 10 Wildlife Photography Tips</h2>
              <p className="text-sm text-muted-foreground mb-4">December 15, 2025</p>
              <p>Learn how to capture stunning wildlife photos on your African safari...</p>
            </div>
          </article>
          <article className="border border-border rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">Best Time to Visit East Africa</h2>
              <p className="text-sm text-muted-foreground mb-4">December 10, 2025</p>
              <p>Discover the optimal seasons for wildlife viewing and gorilla trekking...</p>
            </div>
          </article>
          <article className="border border-border rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">Packing Guide for Safari</h2>
              <p className="text-sm text-muted-foreground mb-4">December 5, 2025</p>
              <p>Essential items to pack for your African safari adventure...</p>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
}
