import { getTourPackages } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar } from "lucide-react"

export default async function Tours() {
  // BACKEND INTEGRATION: This will automatically work with real API when data.ts is updated
  const tours = await getTourPackages()

  return (
    <section id="tours" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Tour Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Carefully crafted itineraries combining adventure, culture, and relaxation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-lg">
                  ${tour.price.toLocaleString()}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{tour.title}</CardTitle>
                <p className="text-muted-foreground">{tour.destination}</p>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4 leading-relaxed">{tour.description}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} className="text-primary" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} className="text-primary" />
                    <span>Max {tour.maxGuests} guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    <span>
                      {new Date(tour.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Tour Highlights:</p>
                  <ul className="space-y-1">
                    {tour.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
