import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logoIcon from "figma:asset/f7af4c4b662c088bf588f986eb865f20859cf420.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Services", path: "/amenities" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="size-10 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-semibold text-xl text-gray-900">Không Gian Khách</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors text-sm ${
                  isActive(link.path)
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact & Book Button */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="size-4" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <Link to="/contact">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isActive(link.path)
                      ? "bg-amber-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-2 text-gray-600 text-sm flex items-center gap-2">
                <Phone className="size-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}