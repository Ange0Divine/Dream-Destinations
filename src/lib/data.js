// Centralized mock data - easily replaceable with API calls
// TODO: Replace these functions with actual API endpoints

export const getDestinations = () => {
  return [
    {
      id: 1,
      name: "Santorini, Greece",
      description: "Experience the magic of white-washed buildings and stunning sunsets",
      image: "/santorini-sunset.png",
      price: 2499,
      duration: "7 days",
      rating: 4.9,
      featured: true,
    },
    {
      id: 2,
      name: "Bali, Indonesia",
      description: "Discover tropical paradise with pristine beaches and ancient temples",
      image: "/bali-indonesia-rice-terraces-temple-tropical.jpg",
      price: 1899,
      duration: "10 days",
      rating: 4.8,
      featured: true,
    },
    {
      id: 3,
      name: "Paris, France",
      description: "Romance and culture in the City of Light",
      image: "/paris-france-eiffel-tower-romantic-street.jpg",
      price: 2799,
      duration: "6 days",
      rating: 4.9,
      featured: true,
    },
    {
      id: 4,
      name: "Dubai, UAE",
      description: "Luxury and adventure in the desert metropolis",
      image: "/dubai-uae-burj-khalifa-luxury-skyline.jpg",
      price: 3299,
      duration: "5 days",
      rating: 4.7,
      featured: false,
    },
  ]
}

export const getTours = () => {
  return [
    {
      id: 1,
      title: "Mediterranean Escape",
      destination: "Santorini, Greece",
      duration: "7 days",
      price: 2499,
      image: "/mediterranean-cruise-santorini-luxury.jpg",
      highlights: [
        "Luxury accommodation with caldera views",
        "Private wine tasting tour",
        "Sunset cruise around the island",
        "Traditional Greek cooking class",
      ],
      included: ["Accommodation", "Breakfast", "Guided tours", "Airport transfers"],
      rating: 4.9,
      reviews: 234,
    },
    {
      id: 2,
      title: "Bali Adventure",
      destination: "Bali, Indonesia",
      duration: "10 days",
      price: 1899,
      image: "/bali-adventure-temple-beach-culture.jpg",
      highlights: [
        "Explore ancient temples and rice terraces",
        "Snorkeling in crystal clear waters",
        "Traditional Balinese spa experience",
        "Visit to sacred monkey forest",
      ],
      included: ["Accommodation", "Daily breakfast", "Tours", "Local guide"],
      rating: 4.8,
      reviews: 189,
    },
    {
      id: 3,
      title: "Parisian Romance",
      destination: "Paris, France",
      duration: "6 days",
      price: 2799,
      image: "/paris-romance-seine-river-notre-dame.jpg",
      highlights: [
        "Skip-the-line Eiffel Tower access",
        "Seine river dinner cruise",
        "Louvre Museum private tour",
        "Champagne tasting in Montmartre",
      ],
      included: ["Boutique hotel", "Breakfast", "Museum passes", "City transport"],
      rating: 4.9,
      reviews: 312,
    },
    {
      id: 4,
      title: "Dubai Luxury",
      destination: "Dubai, UAE",
      duration: "5 days",
      price: 3299,
      image: "/dubai-luxury-burj-khalifa-desert-safari.jpg",
      highlights: [
        "Burj Khalifa observatory visit",
        "Desert safari with dinner",
        "Luxury yacht cruise",
        "Gold souk and spice market tour",
      ],
      included: ["5-star hotel", "All meals", "Private transfers", "Activities"],
      rating: 4.7,
      reviews: 156,
    },
  ]
}

export const getTestimonials = () => {
  return [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "Dream Destinations made our honeymoon unforgettable. Every detail was perfectly planned!",
      rating: 5,
      tour: "Santorini Romance Package",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      text: "Professional service and amazing experiences. Will definitely book again!",
      rating: 5,
      tour: "Bali Adventure",
    },
    {
      id: 3,
      name: "Emma Williams",
      location: "London, UK",
      text: "The attention to detail and personalized service exceeded all expectations.",
      rating: 5,
      tour: "Parisian Getaway",
    },
  ]
}

export const getTeamMembers = () => {
  return [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      bio: "With over 20 years in the travel industry, Sarah founded Dream Destinations to share her passion for creating meaningful travel experiences.",
      image: "/team-sarah-ceo.jpg",
    },
    {
      id: 2,
      name: "David Omondi",
      role: "Head of African Safari Tours",
      bio: "Born and raised in Kenya, David brings authentic local knowledge and deep connections throughout East Africa.",
      image: "/team-david-safari-guide.jpg",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Travel Experience Designer",
      bio: "Maria crafts personalized itineraries that transform trips into unforgettable adventures tailored to each traveler.",
      image: "/team-maria-designer.jpg",
    },
    {
      id: 4,
      name: "James Chen",
      role: "Customer Success Manager",
      bio: "James ensures every journey exceeds expectations with 24/7 support and meticulous attention to detail.",
      image: "/team-james-support.jpg",
    },
  ]
}

export const submitContactForm = async (formData) => {
  // TODO: Replace with actual API endpoint
  // Example: return await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

  console.log("Contact form submitted:", formData)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Thank you! We will contact you soon." })
    }, 1000)
  })
}

export const submitBooking = async (bookingData) => {
  // TODO: Replace with actual API endpoint
  // Example: return await fetch('/api/bookings', { method: 'POST', body: JSON.stringify(bookingData) })

  console.log("Booking submitted:", bookingData)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Booking request received!",
        bookingId: Math.random().toString(36).substr(2, 9),
      })
    }, 1000)
  })
}
