# Dream Destinations - Routing Structure

This document explains the complete routing setup for the Dream Destinations website.

## Navigation Structure

### Main Navigation Items

1. **Home** (`/`)
   - Landing page with Hero, Destinations, Tours, and About sections

2. **About Us** (dropdown)
   - Company Overview (`/about`)
   - Our Team (`/about/team`)
   - Our Values (`/about/values`)

3. **Destinations** (dropdown)
   - Africa (`/destinations/africa`)
   - East Africa (`/destinations/east-africa`)
   - Rwanda (`/destinations/rwanda`)
   - Safari Tours (`/destinations/safari-tours`)

4. **Itineraries** (`/itineraries`)
   - Detailed tour itineraries page

5. **Blog** (`/blog`)
   - Travel blog and articles

6. **Contact Us** (`/contact`)
   - Contact form and information

## File Structure

```
src/
├── App.jsx                    # Main app with Router setup
├── components/
│   ├── Header.jsx            # Navigation with dropdowns
│   ├── Hero.jsx              # Hero section
│   ├── Destinations.jsx      # Destinations section
│   ├── Tours.jsx             # Tours section
│   ├── About.jsx             # About section
│   ├── Contact.jsx           # Contact form
│   └── Footer.jsx            # Footer
└── pages/
    ├── HomePage.jsx          # / route
    ├── AboutPage.jsx         # /about route
    ├── TeamPage.jsx          # /about/team route
    ├── ValuesPage.jsx        # /about/values route
    ├── DestinationsPage.jsx # /destinations route
    ├── AfricaPage.jsx        # /destinations/africa route
    ├── EastAfricaPage.jsx    # /destinations/east-africa route
    ├── RwandaPage.jsx        # /destinations/rwanda route
    ├── SafariToursPage.jsx   # /destinations/safari-tours route
    ├── ItinerariesPage.jsx   # /itineraries route
    ├── BlogPage.jsx          # /blog route
    └── ContactPage.jsx       # /contact route
```

## Key Features

### Sticky Header
- The header remains fixed at the top when scrolling
- Active page is highlighted with an underline
- Smooth transitions and hover effects

### Dropdown Menus
- **Desktop**: Dropdowns open on hover
- **Mobile**: Dropdowns open on click/tap
- Accessible with keyboard navigation
- Visual feedback with arrows (▼/▲)

### Mobile Responsiveness
- Hamburger menu for mobile devices
- Full-screen navigation menu
- Touch-friendly dropdown toggles
- Optimized spacing for mobile

### Active State Highlighting
- Current page is highlighted in the navigation
- Green underline appears under active links
- Parent menu items are highlighted when on child pages

## How to Add New Pages

1. **Create the page component** in `src/pages/`
   ```jsx
   export default function NewPage() {
     return (
       <div className="page-container">
         <div className="page-header">
           <div className="container">
             <h1 className="page-title">Page Title</h1>
             <p className="page-subtitle">Subtitle text</p>
           </div>
         </div>
         <section className="section">
           <div className="container">
             {/* Your content here */}
           </div>
         </section>
       </div>
     )
   }
   ```

2. **Add the route** in `src/App.jsx`
   ```jsx
   import NewPage from "./pages/NewPage"
   
   // Inside <Routes>
   <Route path="/new-page" element={<NewPage />} />
   ```

3. **Add navigation link** in `src/components/Header.jsx`
   ```jsx
   <Link 
     to="/new-page" 
     className={`nav-link ${isActive("/new-page") ? "active" : ""}`}
     onClick={closeMenu}
   >
     New Page
   </Link>
   ```

## Styling Classes

### Page Layout Classes
- `.page-container` - Main page wrapper (min-height: 60vh)
- `.page-header` - Green gradient header section
- `.page-title` - Large centered title
- `.page-subtitle` - Subtitle text below title

### Content Classes
- `.section` - Content section with padding
- `.container` - Centered container (max-width: 1200px)
- `.content-wrapper` - Content grid layout
- `.content-text` - Text content styling

### Component-Specific Classes
- `.team-grid` - Grid for team members
- `.values-grid` - Grid for company values
- `.blog-grid` - Grid for blog posts
- `.destinations-grid` - Grid for destination cards

## Dependencies

- **react-router-dom** (v7.10.1) - For routing functionality
- Already included in package.json

## Notes

- All routes use React Router's `BrowserRouter`
- Navigation uses `Link` components for SPA behavior
- Active states use `useLocation()` hook
- Mobile menu closes automatically on navigation
- Dropdown menus close when clicking outside (on mobile)
