import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Star, MapPin, Home as HomeIcon, ArrowRight, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import homepageImg from "../../assets/homepage.jpg";
import standartRoom from "../../assets/standard-room.jpg";

export function Home() {
  const features = [
    {
      icon: <MapPin className="size-5 text-white" />,
      title: "Beautiful locations across the countryside",
    },
    {
      icon: <HomeIcon className="size-5 text-white" />,
      title: "Flexible Rooms",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing experience! The hosts were incredibly welcoming and the room was spotless. Felt like home!",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Best homestay I've ever stayed at. The breakfast was delicious and the location was perfect.",
    },
    {
      name: "Emma Williams",
      rating: 5,
      comment: "Highly recommend! Beautiful rooms, friendly staff, and great value for money.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-start">
        <ImageWithFallback
          src={homepageImg}
          alt="CozyStay Living Room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium">4.9 • 200+ Happy Guests</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="text-white block">Your Home</span>
              <span className="text-amber-400 block">Away From Home</span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Experience authentic comfort and warm hospitality in our carefully curated
              homestays. Create lasting memories in spaces that feel like home.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg"
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <span className="text-sm">{feature.title}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/rooms">
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-base group"
              >
                Book Your Stay
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Rooms</h2>
            <p className="text-gray-600">Comfortable and well-appointed spaces for every traveler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src={standartRoom}
                alt="Deluxe Room"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-2">Deluxe Room</h3>
                <p className="text-gray-600 mb-4">Spacious room with king-size bed and mountain view</p>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="size-4 text-gray-500" />
                  <span className="text-sm text-gray-600">2 Guests</span>
                </div>
                <p className="text-amber-600 text-xl">$89/night</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczMzAyMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Premium Suite"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-2">Premium Suite</h3>
                <p className="text-gray-600 mb-4">Luxurious suite with separate living area</p>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="size-4 text-gray-500" />
                  <span className="text-sm text-gray-600">3 Guests</span>
                </div>
                <p className="text-amber-600 text-xl">$129/night</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645241910657-15bc4c16e0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByb29tJTIwY296eXxlbnwxfHx8fDE3NzMzNzM2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Family Room"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-2">Family Room</h3>
                <p className="text-gray-600 mb-4">Perfect for families with multiple beds</p>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="size-4 text-gray-500" />
                  <span className="text-sm text-gray-600">4 Guests</span>
                </div>
                <p className="text-amber-600 text-xl">$159/night</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/rooms">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">What Our Guests Say</h2>
            <p className="text-gray-600">Read reviews from our happy guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <p className="text-amber-600">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8">
            Contact us today and experience the comfort of CozyStay
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}