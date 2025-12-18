import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import TeamPage from "./pages/TeamPage"
import ValuesPage from "./pages/ValuesPage"
import DestinationsPage from "./pages/DestinationsPage"
import AfricaPage from "./pages/AfricaPage"
import EastAfricaPage from "./pages/EastAfricaPage"
import RwandaPage from "./pages/RwandaPage"
import SafariToursPage from "./pages/SafariToursPage"
import ItinerariesPage from "./pages/ItinerariesPage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/team" element={<TeamPage />} />
            <Route path="/about/values" element={<ValuesPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destinations/africa" element={<AfricaPage />} />
            <Route path="/destinations/east-africa" element={<EastAfricaPage />} />
            <Route path="/destinations/rwanda" element={<RwandaPage />} />
            <Route path="/destinations/safari-tours" element={<SafariToursPage />} />
            <Route path="/itineraries" element={<ItinerariesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
