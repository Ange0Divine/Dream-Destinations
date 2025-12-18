import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Globe, Shield } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Recognized for delivering outstanding customer service and unique travel experiences",
    },
    {
      icon: Users,
      title: "Customer-Centered",
      description: "Personalized itineraries tailored to your preferences and travel dreams",
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Expert local knowledge and authentic cultural experiences throughout East Africa",
    },
    {
      icon: Shield,
      title: "Safety & Trust",
      description: "Your safety is our priority with transparent, reliable, and professional guidance",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Dream Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            We deliver exceptional, affordable, and memorable travel experiences through reliable services, personalized
            itineraries, and professional guidance. Our mission is to become one of East Africa&apos;s most trusted and
            innovative travel agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
