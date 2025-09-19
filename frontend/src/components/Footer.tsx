import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden text-foreground" style={{
      background: 'linear-gradient(135deg, #3d2f2a 0%, #4a3530 25%, #563a35 50%, #3d2f2a 75%, #4a3530 100%)'
    }}>
      {/* Retro Footer Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, #8B4513 15px, #8B4513 17px),
                           repeating-linear-gradient(-45deg, transparent, transparent 30px, #CD853F 30px, #CD853F 32px)`,
        }}></div>
        
        {/* Vintage corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border border-orange-300/20" style={{
          clipPath: 'polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)'
        }}></div>
        <div className="absolute top-8 right-8 w-16 h-16 border border-orange-300/20" style={{
          clipPath: 'polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)'
        }}></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border border-orange-300/20" style={{
          clipPath: 'polygon(0% 50%, 50% 50%, 50% 100%, 0% 100%)'
        }}></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border border-orange-300/20" style={{
          clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2 text-orange-200">ArteNact</h3>
              <p className="text-orange-100/80 text-sm leading-relaxed">
                Connecting artisans with art lovers worldwide. Discover authentic handcrafted pieces 
                and support traditional craftsmanship.
              </p>
            </div>
            
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-orange-200 hover:bg-orange-200/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-orange-200 hover:bg-orange-200/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-orange-200 hover:bg-orange-200/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-200">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-orange-100/80 hover:text-orange-100 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-100/80 hover:text-orange-100 transition-colors">
                  Artisans
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-100/80 hover:text-orange-100 transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-100/80 hover:text-orange-100 transition-colors">
                  AI Branding
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-100/80 hover:text-orange-100 transition-colors">
                  Become an Artisan
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-200">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-orange-100/80 hover:text-orange-100 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-100/80 hover:text-orange-100 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-100/80 hover:text-orange-100 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-100/80 hover:text-orange-100 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-100/80 hover:text-orange-100 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-200">Stay Connected</h4>
            <p className="text-orange-100/80 text-sm mb-4">
              Get updates on new artisans and exclusive collections.
            </p>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-orange-100/10 border-orange-100/20 text-orange-100 placeholder:text-orange-100/60"
                />
                <Button variant="secondary" size="sm" className="bg-orange-200 text-orange-900 hover:bg-orange-100">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2 text-xs text-orange-100/60">
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  <span>hello@artenact.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-100/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-orange-100/60">
            <p>&copy; 2025 ArteNact. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-100 transition-colors">Terms</a>
              <a href="#" className="hover:text-orange-100 transition-colors">Privacy</a>
              <a href="#" className="hover:text-orange-100 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}