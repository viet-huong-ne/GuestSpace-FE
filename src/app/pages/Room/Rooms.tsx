import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Users, Bed, Square, Wifi, Coffee, Tv, Wind, Bath } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router";
import { JSX } from "react";

export function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: 89,
      image: "https://images.unsplash.com/photo-1696217612904-64c78f5c588a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG9tZXN0YXklMjBiZWRyb29tfGVufDF8fHx8MTc3MzM3MzY2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      guests: 2,
      beds: "1 King Bed",
      size: "320 sq ft",
      amenities: ["WiFi", "Air Conditioning", "TV", "Private Bathroom"],
      description: "Spacious and elegantly designed room with mountain views and modern amenities.",
    },
    {
      id: 2,
      name: "Premium Suite",
      price: 129,
      image: "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczMzAyMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      guests: 3,
      beds: "1 King + 1 Single",
      size: "450 sq ft",
      amenities: ["WiFi", "Air Conditioning", "TV", "Private Bathroom", "Living Area", "Mini Fridge"],
      description: "Luxurious suite featuring a separate living area, perfect for extended stays.",
    },
    {
      id: 3,
      name: "Family Room",
      price: 159,
      image: "https://images.unsplash.com/photo-1645241910657-15bc4c16e0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByb29tJTIwY296eXxlbnwxfHx8fDE3NzMzNzM2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      guests: 4,
      beds: "2 Queen Beds",
      size: "520 sq ft",
      amenities: ["WiFi", "Air Conditioning", "TV", "Private Bathroom", "Coffee Maker", "Work Desk"],
      description: "Ideal for families with comfortable sleeping arrangements and ample space.",
    },
    {
      id: 4,
      name: "Standard Room",
      price: 69,
      image: "https://images.unsplash.com/photo-1680503397107-475907e4f3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lc3RheSUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzczMzczNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      guests: 2,
      beds: "1 Queen Bed",
      size: "280 sq ft",
      amenities: ["WiFi", "Air Conditioning", "TV", "Shared Bathroom"],
      description: "Cozy and affordable room perfect for budget-conscious travelers.",
    },
  ];

  const amenityIcons: { [key: string]: JSX.Element } = {
    "WiFi": <Wifi className="size-4" />,
    "Air Conditioning": <Wind className="size-4" />,
    "TV": <Tv className="size-4" />,
    "Private Bathroom": <Bath className="size-4" />,
    "Shared Bathroom": <Bath className="size-4" />,
    "Living Area": <Square className="size-4" />,
    "Mini Fridge": <Coffee className="size-4" />,
    "Coffee Maker": <Coffee className="size-4" />,
    "Work Desk": <Square className="size-4" />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-amber-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-4">Our Rooms</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Choose from our selection of comfortable and well-appointed rooms, each designed to make your stay memorable.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Room Image */}
                  <div className="h-80 md:h-auto">
                    <ImageWithFallback
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Room Details */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-3xl">{room.name}</h2>
                      <div className="text-right">
                        <p className="text-3xl text-amber-600">${room.price}</p>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">{room.description}</p>

                    {/* Room Info */}
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                      <div className="flex items-center gap-2">
                        <Users className="size-5 text-amber-600" />
                        <div>
                          <p className="text-sm text-gray-600">Guests</p>
                          <p className="font-medium">{room.guests}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="size-5 text-amber-600" />
                        <div>
                          <p className="text-sm text-gray-600">Beds</p>
                          <p className="font-medium text-sm">{room.beds}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Square className="size-5 text-amber-600" />
                        <div>
                          <p className="text-sm text-gray-600">Size</p>
                          <p className="font-medium text-sm">{room.size}</p>
                        </div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h3 className="text-lg mb-3">Amenities</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-700">
                            {amenityIcons[amenity]}
                            <span className="text-sm">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Book Button */}
                    <Link to="/contact">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-6">
            Our team is here to help you find the perfect room for your stay. Contact us for personalized recommendations.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
