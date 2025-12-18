import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/african-safari-landscape-sunset.jpg" alt="African landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Your Journey to Dream Destinations Begins Here
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto text-pretty">
          Exceptional, affordable, and memorable travel experiences through reliable services and personalized
          itineraries
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
            Explore Tours
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8 backdrop-blur-sm"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
