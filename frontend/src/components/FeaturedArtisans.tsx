import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Artisan {
  id: string;
  name: string;
  location: string;
  specialty: string;
  rating: number;
  products: number;
  image: string;
  isVerified: boolean;
}

const featuredArtisans: Artisan[] = [
  {
    id: "1",
    name: "Maria Santos",
    location: "Oaxaca, Mexico",
    specialty: "Traditional Pottery",
    rating: 4.9,
    products: 47,
    image: "https://images.unsplash.com/photo-1695740639466-7baecca4224d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZvbGslMjBhcnR8ZW58MXx8fHwxNzU4MjYxMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVerified: true
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    location: "Jaipur, India",
    specialty: "Handwoven Textiles",
    rating: 4.8,
    products: 62,
    image: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHRleHRpbGVzJTIwd2VhdmluZ3xlbnwxfHx8fDE3NTgyNjEyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVerified: true
  },
  {
    id: "3",
    name: "Elena Popov",
    location: "Sofia, Bulgaria",
    specialty: "Silver Jewelry",
    rating: 4.7,
    products: 34,
    image: "https://images.unsplash.com/photo-1756792339453-bc4aa26fc0cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwamV3ZWxyeSUyMGhhbmRtYWRlfGVufDF8fHx8MTc1ODI2MTI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVerified: true
  },
  {
    id: "4",
    name: "James Wilson",
    location: "Vermont, USA",
    specialty: "Wood Carving",
    rating: 4.9,
    products: 28,
    image: "https://images.unsplash.com/photo-1643944406742-a5c2c7add564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY2FydmluZyUyMGNyYWZ0c3xlbnwxfHx8fDE3NTgyNjEyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVerified: true
  }
];

export function FeaturedArtisans() {
  return (
    <section className="py-16 relative overflow-hidden" style={{
      background: 'linear-gradient(45deg, #f7f4f1 0%, #f2edea 50%, #f5f2ef 100%)'
    }}>
      {/* Retro Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vintage wallpaper pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, #CD853F 20px, #CD853F 22px),
                           repeating-linear-gradient(-45deg, transparent, transparent 20px, #D2691E 20px, #D2691E 22px)`,
        }}></div>
        
        {/* Retro decorative elements */}
        <div className="absolute top-16 left-1/4 w-3 h-8 bg-orange-400/8 transform -rotate-12"></div>
        <div className="absolute top-32 right-1/3 w-6 h-6 border border-amber-400/20 rounded-full"></div>
        <div className="absolute bottom-24 left-1/3 w-4 h-4 bg-red-400/10 transform rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-8 h-2 bg-orange-300/15"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Artisans
          </h2>
          <div className="w-16 h-0.5 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the talented creators behind our unique collection. Each artisan brings 
            generations of traditional craftsmanship to their work.
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredArtisans.map((artisan) => (
            <div key={artisan.id} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-orange-200 transition-all duration-300 group">
              {/* Profile Image */}
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-2 ring-orange-100 group-hover:ring-orange-200 transition-all">
                  <ImageWithFallback
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {artisan.isVerified && (
                  <Badge variant="secondary" className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs bg-orange-50 text-orange-700 border-orange-200">
                    Verified
                  </Badge>
                )}
              </div>

              {/* Info */}
              <div className="text-center space-y-3">
                <h3 className="font-semibold text-foreground">{artisan.name}</h3>
                
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {artisan.location}
                </div>

                <p className="text-sm text-orange-600 font-medium">{artisan.specialty}</p>

                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                    {artisan.rating}
                  </div>
                  <div className="text-muted-foreground">
                    {artisan.products} products
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full border-orange-200 text-orange-700 hover:bg-orange-50">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline">
            View All Artisans
          </Button>
        </div>
      </div>
    </section>
  );
}