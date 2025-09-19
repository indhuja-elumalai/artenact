import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Archive, 
  Clock, 
  MapPin, 
  Play, 
  BookOpen, 
  Users, 
  Heart,
  Share2,
  Eye,
  Scroll,
  Palette,
  Hammer,
  Star
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeritageItem {
  id: string;
  title: string;
  type: 'story' | 'technique' | 'history' | 'tradition';
  artisan: string;
  location: string;
  culture: string;
  dateAdded: string;
  views: number;
  likes: number;
  duration?: string;
  image: string;
  preview: string;
  tags: string[];
  isVerified: boolean;
}

interface HeritageCapsuleProps {
  isOpen: boolean;
  onClose: () => void;
}

const heritageItems: HeritageItem[] = [
  {
    id: "1",
    title: "The Ancient Art of Oaxacan Pottery",
    type: "technique",
    artisan: "Maria Santos",
    location: "Oaxaca, Mexico",
    culture: "Zapotec",
    dateAdded: "2 days ago",
    views: 1247,
    likes: 89,
    duration: "12 min",
    image: "https://images.unsplash.com/photo-1662845114342-256fdc45981d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHBvdHRlcnklMjB3aGVlbCUyMGNsYXl8ZW58MXx8fHwxNzU4MjYxNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    preview: "Learn the traditional methods passed down through generations, from clay preparation to the sacred firing rituals...",
    tags: ["pottery", "zapotec", "clay", "traditional"],
    isVerified: true
  },
  {
    id: "2",
    title: "Stories from the Silk Road: A Weaver's Legacy",
    type: "story",
    artisan: "Rajesh Kumar",
    location: "Jaipur, India",
    culture: "Rajasthani",
    dateAdded: "1 week ago",
    views: 2156,
    likes: 142,
    duration: "8 min",
    image: "https://images.unsplash.com/photo-1715705717344-880404f93506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwdGV4dGlsZSUyMHdlYXZpbmclMjBsb29tfGVufDF8fHx8MTc1ODI2MTU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    preview: "My grandfather used to tell me stories while I learned to weave. Each pattern holds the memory of our ancestors...",
    tags: ["textiles", "family", "heritage", "weaving"],
    isVerified: true
  },
  {
    id: "3",
    title: "The Sacred Geometry of Bulgarian Silver",
    type: "history",
    artisan: "Elena Popov",
    location: "Sofia, Bulgaria",
    culture: "Bulgarian",
    dateAdded: "3 days ago",
    views: 856,
    likes: 67,
    duration: "15 min",
    image: "https://images.unsplash.com/photo-1676190365174-c6d1f21fab51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGhlcml0YWdlJTIwdHJhZGl0aW9uYWwlMjBhcnR8ZW58MXx8fHwxNzU4MjYxNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    preview: "The intricate patterns in Bulgarian silverwork represent ancient symbols of protection and prosperity...",
    tags: ["silver", "geometry", "symbols", "bulgarian"],
    isVerified: true
  },
  {
    id: "4",
    title: "Vermont Wood Carving Traditions",
    type: "tradition",
    artisan: "James Wilson",
    location: "Vermont, USA",
    culture: "American Colonial",
    dateAdded: "5 days ago",
    views: 1432,
    likes: 98,
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1738322212738-40d684b36beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNyYWZ0JTIwdGVjaG5pcXVlJTIwaGFuZHN8ZW58MXx8fHwxNzU4MjYxNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    preview: "The colonial era brought unique woodworking techniques to Vermont. Here's how these traditions survive today...",
    tags: ["woodcarving", "colonial", "american", "techniques"],
    isVerified: true
  }
];

const typeIcons = {
  story: BookOpen,
  technique: Hammer,
  history: Scroll,
  tradition: Users
};

const typeColors = {
  story: "bg-blue-500",
  technique: "bg-green-500", 
  history: "bg-purple-500",
  tradition: "bg-orange-500"
};

export function HeritageCapsule({ isOpen, onClose }: HeritageCapsuleProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState<HeritageItem | null>(null);
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());

  const filteredItems = activeTab === "all" 
    ? heritageItems 
    : heritageItems.filter(item => item.type === activeTab);

  const toggleLike = (itemId: string) => {
    const newLiked = new Set(likedItems);
    if (newLiked.has(itemId)) {
      newLiked.delete(itemId);
    } else {
      newLiked.add(itemId);
    }
    setLikedItems(newLiked);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="relative">
              <Archive className="h-6 w-6 text-primary" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Heritage Capsule
              </span>
              <p className="text-sm text-muted-foreground font-normal mt-1">
                Preserving Cultural Stories & Traditional Crafts
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            {/* Tab Navigation */}
            <div className="relative">
              <TabsList className="grid w-full grid-cols-5 bg-muted/30">
                <TabsTrigger value="all" className="relative">
                  <Star className="h-4 w-4 mr-2" />
                  All
                </TabsTrigger>
                <TabsTrigger value="story" className="relative">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Stories
                </TabsTrigger>
                <TabsTrigger value="technique" className="relative">
                  <Hammer className="h-4 w-4 mr-2" />
                  Techniques
                </TabsTrigger>
                <TabsTrigger value="history" className="relative">
                  <Scroll className="h-4 w-4 mr-2" />
                  History
                </TabsTrigger>
                <TabsTrigger value="tradition" className="relative">
                  <Users className="h-4 w-4 mr-2" />
                  Traditions
                </TabsTrigger>
              </TabsList>
              
              {/* Decorative border */}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            </div>

            {/* Content */}
            <TabsContent value={activeTab} className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 p-4 bg-gradient-to-r from-muted/30 to-accent/20 rounded-xl border border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{heritageItems.length}</div>
                  <div className="text-xs text-muted-foreground">Total Items</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-xs text-muted-foreground">Cultures</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8.5k</div>
                  <div className="text-xs text-muted-foreground">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">450</div>
                  <div className="text-xs text-muted-foreground">Likes</div>
                </div>
              </div>

              {/* Heritage Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-96 overflow-y-auto pr-2">
                {filteredItems.map((item) => {
                  const IconComponent = typeIcons[item.type];
                  const typeColor = typeColors[item.type];
                  
                  return (
                    <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/20">
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Type Badge */}
                        <div className={`absolute top-3 left-3 ${typeColor} text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
                          <IconComponent className="h-3 w-3" />
                          {item.type}
                        </div>

                        {/* Duration */}
                        {item.duration && (
                          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                            <Play className="h-3 w-3" />
                            {item.duration}
                          </div>
                        )}

                        {/* Verified Badge */}
                        {item.isVerified && (
                          <div className="absolute bottom-3 left-3">
                            <Badge variant="secondary" className="text-xs">
                              ✓ Verified
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-3">
                        {/* Title */}
                        <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>

                        {/* Artisan & Location */}
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Palette className="h-3 w-3" />
                            <span>{item.artisan}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{item.location} • {item.culture}</span>
                          </div>
                        </div>

                        {/* Preview */}
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.preview}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {item.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {item.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {item.dateAdded}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0"
                              onClick={() => toggleLike(item.id)}
                            >
                              <Heart 
                                className={`h-3 w-3 ${likedItems.has(item.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
                              />
                            </Button>
                            <span className="text-xs text-muted-foreground">
                              {item.likes + (likedItems.has(item.id) ? 1 : 0)}
                            </span>
                            
                            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                              <Share2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Upload CTA */}
              <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/10 border-dashed border-2 border-primary/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Archive className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Share Your Heritage</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Help preserve cultural traditions by sharing your stories, techniques, and knowledge with the world.
                    </p>
                    <Button>
                      Upload Heritage Content
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}