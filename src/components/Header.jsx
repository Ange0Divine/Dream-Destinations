"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + "/")
  }

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <h1 className="logo">Dream Destinations</h1>
          </Link>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <Link
              to="/"
              className={`nav-link ${isActive("/") && location.pathname === "/" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>

            <div
              className="nav-dropdown"
              onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown("about")}
              onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
            >
              <button
                className={`nav-link dropdown-toggle ${isActive("/about") ? "active" : ""}`}
                onClick={() => toggleDropdown("about")}
                aria-expanded={openDropdown === "about"}
              >
                About Us
                <span className="dropdown-arrow">{openDropdown === "about" ? "▲" : "▼"}</span>
              </button>
              <div className={`dropdown-menu ${openDropdown === "about" ? "open" : ""}`}>
                <Link to="/about" className="dropdown-item" onClick={closeMenu}>
                  Company Overview
                </Link>
                <Link to="/about/team" className="dropdown-item" onClick={closeMenu}>
                  Our Team
                </Link>
                <Link to="/about/values" className="dropdown-item" onClick={closeMenu}>
                  Our Values
                </Link>
              </div>
            </div>

            <div
              className="nav-dropdown"
              onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown("destinations")}
              onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
            >
              <button
                className={`nav-link dropdown-toggle ${isActive("/destinations") ? "active" : ""}`}
                onClick={() => toggleDropdown("destinations")}
                aria-expanded={openDropdown === "destinations"}
              >
                Destinations
                <span className="dropdown-arrow">{openDropdown === "destinations" ? "▲" : "▼"}</span>
              </button>
              <div className={`dropdown-menu ${openDropdown === "destinations" ? "open" : ""}`}>
                <Link to="/destinations" className="dropdown-item" onClick={closeMenu}>
                  All Destinations
                </Link>
                <Link to="/destinations/africa" className="dropdown-item" onClick={closeMenu}>
                  Africa
                </Link>
                <Link to="/destinations/east-africa" className="dropdown-item" onClick={closeMenu}>
                  East Africa
                </Link>
                <Link to="/destinations/rwanda" className="dropdown-item" onClick={closeMenu}>
                  Rwanda
                </Link>
                <Link to="/destinations/safari-tours" className="dropdown-item" onClick={closeMenu}>
                  Safari Tours
                </Link>
              </div>
            </div>

            <Link
              to="/itineraries"
              className={`nav-link ${isActive("/itineraries") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Itineraries
            </Link>

            <Link to="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`} onClick={closeMenu}>
              Blog
            </Link>

            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`} onClick={closeMenu}>
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
