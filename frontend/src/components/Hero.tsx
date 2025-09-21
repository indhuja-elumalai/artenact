import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Heart, Calendar, Book } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onAIBrandingClick?: () => void;
  onEventCalendarClick?: () => void;
  onLivingStoriesClick?: () => void;
}

export function Hero({ onAIBrandingClick, onEventCalendarClick, onLivingStoriesClick }: HeroProps = {}) {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #f4f1e8 0%, #f9f6f0 25%, #faf8f3 50%, #f6f3ee 75%, #f2efe8 100%)'
    }}>
      {/* Retro Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vintage paper texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8B4513 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #D2691E 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Retro geometric shapes */}
        <div className="absolute top-10 left-10 w-8 h-8 border-2 border-amber-600/20 transform rotate-45"></div>
        <div className="absolute top-32 right-16 w-6 h-12 bg-orange-400/10 transform -rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-red-400/15 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-10 h-3 bg-amber-500/10 transform rotate-6"></div>
        
        {/* Vintage ornamental corners */}
        <div className="absolute top-8 left-8 w-16 h-16 border border-orange-300/30 rounded-full"></div>
        <div className="absolute top-8 right-8 w-12 h-12 border border-red-300/30 transform rotate-45"></div>
        <div className="absolute bottom-8 left-8 w-8 h-8 border-2 border-amber-400/30"></div>
        <div className="absolute bottom-8 right-8 w-14 h-14 border border-orange-400/30 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          {/* Artistic Decorative Elements */}
          <div className="absolute -top-8 left-1/4 w-24 h-24 border-2 border-orange-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 -left-4 w-8 h-16 bg-gradient-to-b from-orange-300/20 to-red-300/20 transform -rotate-12"></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-amber-400/30 transform rotate-45"></div>
          
          {/* Content */}
          <div className="space-y-10 relative">
            {/* Celebration Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-6 py-3 rounded-full border border-orange-300/50 shadow-sm px-[24px] py-[12px]">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold tracking-wide uppercase">🎨 Celebrating Folk Artists</span>
            </div>
            
            <div className="space-y-8">
              <h1 className="relative">
                <span className="block sm:text-7xl lg:text-8xl font-serif italic bg-gradient-to-r from-orange-700 via-red-600 to-orange-600 bg-clip-text text-transparent leading-none text-[64px]">
                  Where
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-light text-foreground/80 tracking-wider ml-4 -mt-2 text-[48px]">
                  Tradition
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent ml-8 -mt-1 text-[64px]">
                  LIVES!
                </span>
                
                {/* Artistic flourish */}
                <div className="absolute -right-8 top-1/2 w-16 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
                <div className="absolute -left-4 bottom-4 w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
              </h1>
              
              <div className="relative bg-gradient-to-r from-orange-50/80 to-amber-50/80 p-6 rounded-[12px] border border-orange-200/50">
                <p className="text-foreground/90 leading-relaxed font-light italic text-[18px] font-[Abril_Fatface]">
                  "Every thread tells a story, every craft carries culture"
                </p>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-400 transform rotate-45"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-400 transform rotate-45"></div>
              </div>
              
              {/* Celebration Features */}
              <div className="flex flex-wrap gap-3">
                <div className="group hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-5 py-3 rounded-2xl border border-purple-200 shadow-sm">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="font-bold">Heritage Stories</span>
                    <span className="text-xs bg-purple-200 px-2 py-1 rounded-full">✨ New</span>
                  </div>
                </div>
                <div className="group hover:scale-105 transition-transform">

                </div>
                <div className="group hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-5 py-3 rounded-2xl border border-green-200 shadow-sm">
                    <Sparkles className="h-4 w-4 text-green-600" />
                    <span className="font-bold">AI Magic Studio</span>
                    <span className="text-xs bg-green-200 px-2 py-1 rounded-full">🚀 Hot</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-xl font-bold py-4 px-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all" onClick={() => { window.location.hash = '#/studio'; }}>
                🌟 Explore Masterpieces
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-orange-300 text-orange-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 text-xl font-bold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all"
                onClick={() => { window.location.hash = '#/studio'; }}
              >
                <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                🎨 Create Magic
              </Button>
            </div>

            {/* Celebration Stats */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-red-100/50 rounded-3xl blur-xl"></div>
              <div className="relative grid grid-cols-3 gap-8 bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-orange-200/50 shadow-xl">
                <div className="text-center group hover:scale-110 transition-transform">
                  <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-serif">500+</div>
                  <div className="text-sm font-bold text-foreground/70 tracking-wide uppercase">Master Artists</div>
                  <div className="text-xs text-orange-600 font-medium">🏆 Certified</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform">
                  <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-serif">2K+</div>
                  <div className="text-sm font-bold text-foreground/70 tracking-wide uppercase">Unique Crafts</div>
                  <div className="text-xs text-orange-600 font-medium">✨ Handmade</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform">
                  <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-serif">50+</div>
                  <div className="text-sm font-bold text-foreground/70 tracking-wide uppercase">Cultures</div>
                  <div className="text-xs text-orange-600 font-medium">🌍 Global</div>
                </div>
              </div>
            </div>

            {/* Artist Celebration Links */}
            <div className="flex justify-center gap-8 pt-4">
              <button 
                className="group flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors font-bold text-lg"
                onClick={onLivingStoriesClick}
              >
                <Book className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Artist Stories
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button 
                className="group flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors font-bold text-lg"
                onClick={onEventCalendarClick}
              >
                <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Cultural Events
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Enhanced Artistic Image */}
          <div className="relative">
            {/* Artistic frame elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-200/30 via-red-200/20 to-amber-200/30 rounded-3xl blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-12 h-12 border-4 border-orange-300/50 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-4 border-red-300/50 rounded-full"></div>
            <div className="absolute top-1/4 -right-8 w-8 h-20 bg-gradient-to-b from-orange-300/40 to-transparent transform rotate-12"></div>
            
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl ring-4 ring-orange-200/30">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZvbGslMjBhcnQlMjBkaXZlcnNlJTIwY3VsdHVyZXMlMjBoYW5kbWFkZXxlbnwxfHx8fDE3NTgyNjQ4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Traditional folk art and diverse cultural crafts"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Artistic overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-red-500/10 pointer-events-none"></div>
              
              {/* Multiple celebration badges */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-white to-orange-50 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-orange-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-black text-orange-800 tracking-wide uppercase">Living Heritage</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-purple-200">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-black text-purple-800">AI Powered</span>
                </div>
              </div>
            </div>
            
            {/* Floating celebration elements */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center shadow-xl border-4 border-white animate-bounce">
              <span className="text-2xl">🎨</span>
            </div>
            <div className="absolute -top-4 right-1/3 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
              <span className="text-lg">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}