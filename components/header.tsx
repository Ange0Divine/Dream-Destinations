"use client"

import { useState, useRef } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  const handleDropdownEnter = (dropdown: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpenDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  const handleLinkClick = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpenDropdown(null)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity">
              <Image
                src="/placeholder-logo.png"
                alt="Dream Destinations Logo"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
                priority
              />
              <span className="text-lg sm:text-xl font-bold text-primary hidden sm:inline">
                Dream Destinations
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("about")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className={`text-foreground hover:text-primary transition-colors font-medium ${
                pathname?.startsWith("/about") ? "text-primary" : ""
              }`}>
                About Us ▾
              </button>
              {openDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg py-2">
                  <Link href="/about" className="block px-4 py-2 text-sm hover:bg-accent" onClick={handleLinkClick}>
                    Company Overview
                  </Link>
                  <Link href="/about/team" className="block px-4 py-2 text-sm hover:bg-accent" onClick={handleLinkClick}>
                    Our Team
                  </Link>
                  <Link href="/about/values" className="block px-4 py-2 text-sm hover:bg-accent" onClick={handleLinkClick}>
                    Our Values
                  </Link>
                </div>
              )}
            </div>

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("destinations")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className={`text-foreground hover:text-primary transition-colors font-medium ${
                pathname?.startsWith("/destinations") ? "text-primary" : ""
              }`}>
                Destinations ▾
              </button>
              {openDropdown === "destinations" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg py-2">
                  <Link href="/destinations" className="block px-4 py-2 text-sm hover:bg-accent" onClick={handleLinkClick}>
                    All Destinations
                  </Link>
                  <Link href="/destinations/africa" className="block px-4 py-2 text-sm hover:bg-accent" onClick={handleLinkClick}>
                    Africa
                  </Link>
                  <Link href="/destinations/east-africa" className="block px-4 py-2 text-sm hover:bg-accent" onClick={handleLinkClick}>
                    East Africa
                  </Link>
                  <Link href="/destinations/rwanda" className="block px-4 py-2 text-sm hover:bg-accent" onClick={handleLinkClick}>
                    Rwanda
                  </Link>
                  <Link href="/destinations/safari-tours" className="block px-4 py-2 text-sm hover:bg-accent" onClick={handleLinkClick}>
                    Safari Tours
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/itineraries"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                pathname === "/itineraries" ? "text-primary" : ""
              }`}
            >
              Itineraries
            </Link>
            <Link
              href="/blog"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                pathname === "/blog" ? "text-primary" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                pathname === "/contact" ? "text-primary" : ""
              }`}
            >
              Contact Us
            </Link>
            <Link href="/inquiry">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Inquiry
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className={`text-foreground hover:text-primary transition-colors font-medium ${
                  pathname === "/" ? "text-primary" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* About Us Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
                  className={`text-foreground hover:text-primary transition-colors font-medium w-full text-left ${
                    pathname?.startsWith("/about") ? "text-primary" : ""
                  }`}
                >
                  About Us {openDropdown === "about" ? "▲" : "▼"}
                </button>
                {openDropdown === "about" && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link href="/about" className="text-sm hover:text-primary" onClick={() => { setMobileMenuOpen(false); setOpenDropdown(null); }}>
                      Company Overview
                    </Link>
                    <Link href="/about/team" className="text-sm hover:text-primary" onClick={() => { setMobileMenuOpen(false); setOpenDropdown(null); }}>
                      Our Team
                    </Link>
                    <Link href="/about/values" className="text-sm hover:text-primary" onClick={() => { setMobileMenuOpen(false); setOpenDropdown(null); }}>
                      Our Values
                    </Link>
                  </div>
                )}
              </div>

              {/* Destinations Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "destinations" ? null : "destinations")}
                  className={`text-foreground hover:text-primary transition-colors font-medium w-full text-left ${
                    pathname?.startsWith("/destinations") ? "text-primary" : ""
                  }`}
                >
                  Destinations {openDropdown === "destinations" ? "▲" : "▼"}
                </button>
                {openDropdown === "destinations" && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link href="/destinations" className="text-sm hover:text-primary" onClick={() => { setMobileMenuOpen(false); setOpenDropdown(null); }}>
                      All Destinations
                    </Link>
                    <Link href="/destinations/africa" className="text-sm hover:text-primary" onClick={() => { setMobileMenuOpen(false); setOpenDropdown(null); }}>
                      Africa
                    </Link>
                    <Link href="/destinations/east-africa" className="text-sm hover:text-primary" onClick={() => { setMobileMenuOpen(false); setOpenDropdown(null); }}>
                      East Africa
                    </Link>
                    <Link href="/destinations/rwanda" className="text-sm hover:text-primary" onClick={() => { setMobileMenuOpen(false); setOpenDropdown(null); }}>
                      Rwanda
                    </Link>
                    <Link href="/destinations/safari-tours" className="text-sm hover:text-primary" onClick={() => { setMobileMenuOpen(false); setOpenDropdown(null); }}>
                      Safari Tours
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/itineraries"
                className={`text-foreground hover:text-primary transition-colors font-medium ${
                  pathname === "/itineraries" ? "text-primary" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Itineraries
              </Link>
              <Link
                href="/blog"
                className={`text-foreground hover:text-primary transition-colors font-medium ${
                  pathname === "/blog" ? "text-primary" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`text-foreground hover:text-primary transition-colors font-medium ${
                  pathname === "/contact" ? "text-primary" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link href="/inquiry" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Inquiry
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
