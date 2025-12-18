export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Dream Destinations</h3>
            <p className="text-sm text-background/80 leading-relaxed">
              Your trusted partner for exceptional East African travel experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#destinations" className="text-background/80 hover:text-accent transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#tours" className="text-background/80 hover:text-accent transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">Safari Tours</li>
              <li className="text-background/80">Beach Holidays</li>
              <li className="text-background/80">Mountain Trekking</li>
              <li className="text-background/80">Cultural Experiences</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Dar es Salaam, Tanzania</li>
              <li>info@dreamdestinations.com</li>
              <li>+255 123 456 789</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Dream Destinations Tours & Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
