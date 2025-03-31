import Link from "next/link"
import { BookOpen, Clock, Instagram, MapPin, Phone, Scissors, Star, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookingDialog } from "../components/booking-dialog"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6" />
            <span className="text-xl font-bold">CLASSIC CUTS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#home" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:underline underline-offset-4">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <BookingDialog>
            <Button>Book Now</Button>
          </BookingDialog>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="h-[600px] bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Barber Experience</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Where tradition meets style. Experience the art of grooming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingDialog>
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                    Book Appointment
                  </Button>
                </BookingDialog>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-amber-100 p-3">
                      <Scissors className="h-8 w-8 text-amber-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Haircut</h3>
                  <p className="text-center text-muted-foreground mb-4">
                    Precision cut tailored to your style and face shape.
                  </p>
                  <p className="text-center font-bold text-xl">$25</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-amber-100 p-3">
                      <Scissors className="h-8 w-8 text-amber-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Beard Trim</h3>
                  <p className="text-center text-muted-foreground mb-4">
                    Expert beard shaping and styling for the perfect look.
                  </p>
                  <p className="text-center font-bold text-xl">$15</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-amber-100 p-3">
                      <Scissors className="h-8 w-8 text-amber-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Hot Towel Shave</h3>
                  <p className="text-center text-muted-foreground mb-4">
                    Traditional straight razor shave with hot towel treatment.
                  </p>
                  <p className="text-center font-bold text-xl">$30</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" className="gap-2">
                <BookOpen className="h-4 w-4" />
                View Full Service Menu
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Classic Cuts</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2010, Classic Cuts has been providing premium grooming services to gentlemen who appreciate
                  tradition, quality, and style.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our team of skilled barbers combines time-honored techniques with modern styles to deliver an
                  exceptional experience every time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <span>10+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-600" />
                    <span>5-Star Rated</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="/placeholder.svg?height=400&width=600" alt="Barber shop interior" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=Haircut ${item}`}
                    alt={`Haircut style ${item}`}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" className="gap-2">
                <Instagram className="h-4 w-4" />
                Follow Us on Instagram
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John D.",
                  text: "Best haircut I've ever had. The attention to detail is incredible and the atmosphere is perfect.",
                },
                {
                  name: "Michael R.",
                  text: "I've been coming here for years. The service is consistently excellent and the staff is friendly and professional.",
                },
                {
                  name: "David S.",
                  text: "The hot towel shave is an experience every man should try. Relaxing and the results are fantastic.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex mb-4 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold">— {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">123 Main Street, Anytown, USA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-muted-foreground">Mon-Fri: 9am-7pm</p>
                        <p className="text-muted-foreground">Sat: 9am-5pm</p>
                        <p className="text-muted-foreground">Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Follow Us</h4>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon">
                        <Instagram className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-[300px] md:h-auto">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Map"
                  alt="Map location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 bg-card">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Scissors className="h-5 w-5" />
              <span className="font-bold">CLASSIC CUTS</span>
            </div>
            <div className="text-center md:text-right text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Classic Cuts Barber Shop. All rights reserved.</p>
              <p>Designed with pride in Anytown, USA</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

