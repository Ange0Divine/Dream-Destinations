import Header from "@/components/header"
import Hero from "@/components/hero"
import Destinations from "@/components/destinations"
import Tours from "@/components/tours"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Destinations />
      <Tours />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
