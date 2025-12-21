import Contact from "@/components/contact"

export default function ContactPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
        <p className="text-lg mb-8">
          Ready to start planning your African adventure? Get in touch with our team today.
        </p>
      </div>
      <Contact />
    </>
  )
}
