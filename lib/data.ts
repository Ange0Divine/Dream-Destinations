// Centralized mock data
// BACKEND INTEGRATION: Replace these functions with actual API calls

export interface Destination {
  id: string
  name: string
  country: string
  description: string
  image: string
  featured: boolean
  createdAt: string
}

export interface TourPackage {
  id: string
  title: string
  destination: string
  duration: string
  price: number
  currency: string
  image: string
  description: string
  highlights: string[]
  available: boolean
  startDate: string
  endDate: string
  maxGuests: number
  createdAt: string
}

// Mock destinations data
const mockDestinations: Destination[] = [
  {
    id: "dest-1",
    name: "Serengeti National Park",
    country: "Tanzania",
    description:
      "Experience the great migration and witness the raw beauty of African wildlife in their natural habitat.",
    image: "/serengeti-safari.png",
    featured: true,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "dest-2",
    name: "Zanzibar Beach",
    country: "Tanzania",
    description: "Relax on pristine white sand beaches and explore the rich cultural heritage of Stone Town.",
    image: "/zanzibar-beach-turquoise-water.jpg",
    featured: true,
    createdAt: "2024-01-16T10:00:00Z",
  },
  {
    id: "dest-3",
    name: "Mount Kilimanjaro",
    country: "Tanzania",
    description: "Conquer Africa's highest peak and experience breathtaking views from the roof of Africa.",
    image: "/mount-kilimanjaro-snow-peak.jpg",
    featured: true,
    createdAt: "2024-01-17T10:00:00Z",
  },
  {
    id: "dest-4",
    name: "Maasai Mara",
    country: "Kenya",
    description: "Witness the spectacular wildebeest migration and encounter diverse wildlife.",
    image: "/maasai-mara-lions-safari.jpg",
    featured: false,
    createdAt: "2024-01-18T10:00:00Z",
  },
]

// Mock tour packages data
const mockTourPackages: TourPackage[] = [
  {
    id: "tour-1",
    title: "Safari Adventure Deluxe",
    destination: "Serengeti National Park",
    duration: "7 days",
    price: 2500,
    currency: "USD",
    image: "/luxury-safari-camp-tent.jpg",
    description:
      "Embark on an unforgettable safari adventure with expert guides, luxury accommodations, and exclusive wildlife viewing.",
    highlights: [
      "Daily game drives with professional guides",
      "Luxury tented camp accommodation",
      "All meals and beverages included",
      "Airport transfers and internal flights",
      "Visit to Maasai village",
    ],
    available: true,
    startDate: "2024-06-15",
    endDate: "2024-06-22",
    maxGuests: 12,
    createdAt: "2024-01-20T10:00:00Z",
  },
  {
    id: "tour-2",
    title: "Zanzibar Beach Escape",
    destination: "Zanzibar Beach",
    duration: "5 days",
    price: 1800,
    currency: "USD",
    image: "/zanzibar-beach-resort-palm-trees.jpg",
    description:
      "Unwind on pristine beaches, explore historic Stone Town, and indulge in water sports at this tropical paradise.",
    highlights: [
      "Beachfront resort accommodation",
      "Stone Town cultural tour",
      "Snorkeling and diving excursions",
      "Spice farm tour",
      "Sunset dhow cruise",
    ],
    available: true,
    startDate: "2024-07-01",
    endDate: "2024-07-06",
    maxGuests: 20,
    createdAt: "2024-01-21T10:00:00Z",
  },
  {
    id: "tour-3",
    title: "Kilimanjaro Summit Trek",
    destination: "Mount Kilimanjaro",
    duration: "8 days",
    price: 3200,
    currency: "USD",
    image: "/kilimanjaro-trekking-hikers.jpg",
    description: "Challenge yourself with a guided ascent of Africa's highest mountain via the scenic Machame route.",
    highlights: [
      "Experienced mountain guides",
      "Full board camping accommodation",
      "All park fees and permits",
      "Porter service for equipment",
      "Pre-trek briefing and gear check",
    ],
    available: true,
    startDate: "2024-08-10",
    endDate: "2024-08-18",
    maxGuests: 10,
    createdAt: "2024-01-22T10:00:00Z",
  },
  {
    id: "tour-4",
    title: "East Africa Explorer",
    destination: "Multiple",
    duration: "14 days",
    price: 4500,
    currency: "USD",
    image: "/african-landscape-acacia-trees.jpg",
    description: "The ultimate East African adventure combining safari, culture, and beach relaxation.",
    highlights: [
      "Serengeti and Maasai Mara safaris",
      "Cultural experiences with local tribes",
      "Zanzibar beach extension",
      "Internal flights included",
      "Mix of luxury lodges and tented camps",
    ],
    available: true,
    startDate: "2024-09-05",
    endDate: "2024-09-19",
    maxGuests: 16,
    createdAt: "2024-01-23T10:00:00Z",
  },
]

// BACKEND INTEGRATION: Replace with actual API calls
export async function getDestinations(): Promise<Destination[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockDestinations
}

export async function getFeaturedDestinations(): Promise<Destination[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockDestinations.filter((dest) => dest.featured)
}

export async function getTourPackages(): Promise<TourPackage[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockTourPackages
}

export async function getTourPackageById(id: string): Promise<TourPackage | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockTourPackages.find((tour) => tour.id === id)
}
