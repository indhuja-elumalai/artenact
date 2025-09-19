import { Button } from "./ui/button";
import { Archive, BookOpen, Users, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeritageBannerProps {
  onHeritageCapsuleClick: () => void;
}

export function HeritageBanner({ onHeritageCapsuleClick }: HeritageBannerProps) {
  return (
    <section className="py-16 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #faf7f2 0%, #f8f5f0 25%, #f3efe8 50%, #f6f3ee 75%, #f9f6f1 100%)'
    }}>
      {/* Retro Heritage Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vintage book/manuscript texture */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(90deg, transparent 49%, #8B4513 50%, #8B4513 51%, transparent 52%),
                           linear-gradient(0deg, transparent 49%, #CD853F 50%, #CD853F 51%, transparent 52%)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Vintage ornamental borders */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-300/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-300/40 to-transparent"></div>
        
        {/* Retro decorative flourishes */}
        <div className="absolute top-12 left-12 w-6 h-6 border-2 border-amber-400/25 transform rotate-45"></div>
        <div className="absolute top-12 right-12 w-6 h-6 border-2 border-amber-400/25 transform -rotate-45"></div>
        <div className="absolute bottom-12 left-12 w-8 h-2 bg-orange-400/20 transform rotate-12"></div>
        <div className="absolute bottom-12 right-12 w-8 h-2 bg-orange-400/20 transform -rotate-12"></div>
        
        {/* Vintage corner ornaments */}
        <div className="absolute top-6 left-6 w-12 h-12 border border-orange-300/30" style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 30%, 70% 30%, 70% 70%, 30% 70%, 30% 100%, 0% 100%)'
        }}></div>
        <div className="absolute top-6 right-6 w-12 h-12 border border-orange-300/30" style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 70% 100%, 70% 70%, 30% 70%, 30% 30%, 0% 30%)'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Archive className="h-5 w-5 text-orange-600" />
              <span className="text-orange-700 font-medium text-sm uppercase tracking-wide">
                Heritage Capsule
              </span>
            </div>
            
            <h2 className="text-4xl font-bold">
              <span className="text-foreground">
                Preserve Cultural
              </span>
              <br />
              <span className="text-orange-600">
                Stories & Traditions
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dive into our digital archive where artisans share the stories, techniques, 
              and cultural heritage behind their crafts. Every piece has a history, every 
              technique tells a story.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="flex items-center gap-3 p-4 bg-white/70 rounded-lg border border-orange-100">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-medium text-sm text-foreground">Cultural Stories</div>
                  <div className="text-xs text-muted-foreground">Artisan narratives</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white/70 rounded-lg border border-orange-100">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-medium text-sm text-foreground">Traditions</div>
                  <div className="text-xs text-muted-foreground">Generational wisdom</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onHeritageCapsuleClick}
                className="bg-orange-600 hover:bg-orange-700"
              >
                <Archive className="h-4 w-4 mr-2" />
                Explore Heritage
              </Button>
              <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                <Clock className="h-4 w-4 mr-2" />
                Latest Additions
              </Button>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main showcase image */}
              <div className="col-span-2 relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1676190365174-c6d1f21fab51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGhlcml0YWdlJTIwdHJhZGl0aW9uYWwlMjBhcnR8ZW58MXx8fHwxNzU4MjYxNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cultural heritage art"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Featured Story</div>
                  <div className="text-xs opacity-90">Traditional Patterns</div>
                </div>
              </div>
              
              {/* Smaller preview images */}
              <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1738322212738-40d684b36beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNyYWZ0JTIwdGVjaG5pcXVlJTIwaGFuZHN8ZW58MXx8fHwxNzU4MjYxNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Craft techniques"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1715705717344-880404f93506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwdGV4dGlsZSUyMHdlYXZpbmclMjBsb29tfGVufDF8fHx8MTc1ODI2MTU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Weaving traditions"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Simplified stats */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-sm p-3 border border-orange-100">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">150+</div>
                <div className="text-xs text-muted-foreground">Stories</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-sm p-3 border border-orange-100">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">25+</div>
                <div className="text-xs text-muted-foreground">Cultures</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}