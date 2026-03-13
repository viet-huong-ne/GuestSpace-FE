import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Wifi,
  Coffee,
  Utensils,
  Car,
  Dumbbell,
  Wind,
  Tv,
  Bath,
  ShieldCheck,
  Clock,
  BookOpen,
  UtensilsCrossed,
} from "lucide-react";

export function Amenities() {
  const amenities = [
    {
      icon: <Wifi className="size-8 text-amber-600" />,
      title: "Free High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet throughout the property.",
    },
    {
      icon: <Coffee className="size-8 text-amber-600" />,
      title: "Complimentary Breakfast",
      description: "Enjoy a delicious homemade breakfast every morning with local and international options.",
    },
    {
      icon: <Utensils className="size-8 text-amber-600" />,
      title: "Shared Kitchen",
      description: "Access to a fully-equipped kitchen for guests who prefer to prepare their own meals.",
    },
    {
      icon: <Car className="size-8 text-amber-600" />,
      title: "Free Parking",
      description: "Complimentary on-site parking available for all guests with vehicles.",
    },
    {
      icon: <Dumbbell className="size-8 text-amber-600" />,
      title: "Fitness Center",
      description: "Stay active with our well-equipped fitness center open 24/7.",
    },
    {
      icon: <Wind className="size-8 text-amber-600" />,
      title: "Air Conditioning",
      description: "Climate-controlled rooms ensure comfort year-round.",
    },
    {
      icon: <Tv className="size-8 text-amber-600" />,
      title: "Cable TV",
      description: "Flat-screen TVs with cable channels in all rooms.",
    },
    {
      icon: <Bath className="size-8 text-amber-600" />,
      title: "Private Bathrooms",
      description: "Modern bathrooms with hot water, toiletries, and fresh towels.",
    },
    {
      icon: <ShieldCheck className="size-8 text-amber-600" />,
      title: "24/7 Security",
      description: "Round-the-clock security and surveillance for your peace of mind.",
    },
    {
      icon: <Clock className="size-8 text-amber-600" />,
      title: "24-Hour Reception",
      description: "Our friendly staff is available anytime to assist you.",
    },
    {
      icon: <BookOpen className="size-8 text-amber-600" />,
      title: "Library & Lounge",
      description: "Relax in our cozy lounge area with a collection of books and magazines.",
    },
    {
      icon: <UtensilsCrossed className="size-8 text-amber-600" />,
      title: "On-site Dining",
      description: "Enjoy meals at our on-site restaurant featuring local and international cuisine.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-amber-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-4">Our Amenities</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Enjoy a wide range of facilities and services designed to make your stay comfortable and convenient.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{amenity.icon}</div>
                <h3 className="text-xl mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl mb-4">Experience Comfort</h2>
              <p className="text-gray-700 mb-4">
                At CozyStay, we believe that the little things matter. From the moment you arrive,
                you'll notice our attention to detail and commitment to your comfort.
              </p>
              <p className="text-gray-700 mb-4">
                Our amenities are carefully selected to ensure you have everything you need for
                a relaxing and enjoyable stay, whether you're traveling for business or pleasure.
              </p>
              <p className="text-gray-700">
                We continuously update our facilities based on guest feedback to provide the best
                possible experience.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663330269065-6cf931a08e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lc3RheSUyMGJyZWFrZmFzdCUyMGRpbmluZ3xlbnwxfHx8fDE3NzMzNzM2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Breakfast Dining"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-8">Additional Services</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Laundry Service</h3>
                <p className="text-gray-600">
                  Professional laundry and dry cleaning services available upon request (additional charges apply).
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl mb-2">Airport Transfer</h3>
                <p className="text-gray-600">
                  Convenient airport pickup and drop-off services can be arranged with advance notice.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl mb-2">Tour Arrangements</h3>
                <p className="text-gray-600">
                  Our staff can help arrange local tours and activities to make the most of your visit.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl mb-2">Bicycle Rental</h3>
                <p className="text-gray-600">
                  Explore the area at your own pace with our complimentary bicycle rental service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
