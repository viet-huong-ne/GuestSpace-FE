import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg mb-4">About CozyStay</h3>
            <p className="text-sm">
              Experience the warmth of home away from home. Our homestay offers
              comfortable rooms, authentic hospitality, and unforgettable memories.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-amber-600" />
                <span className="text-sm">123 Peaceful Street, Mountain View</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-amber-600" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-amber-600" />
                <span className="text-sm">info@cozystay.com</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Twitter className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 CozyStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
