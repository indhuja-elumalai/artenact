import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Heart, Book, Clock, MapPin, Users, Play, Pause, Volume2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Story {
  id: string;
  title: string;
  artisan: string;
  location: string;
  culture: string;
  craft: string;
  excerpt: string;
  content: string;
  image: string;
  audioUrl?: string;
  duration: string;
  tags: string[];
  isPlaying?: boolean;
}

interface LivingStoriesProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LivingStories({ isOpen, onClose }: LivingStoriesProps) {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [playingStory, setPlayingStory] = useState<string | null>(null);

  const stories: Story[] = [
    {
      id: "1",
      title: "The Clay Whisperer: Generations of Pottery Wisdom",
      artisan: "María Elena Vásquez",
      location: "Oaxaca, Mexico",
      culture: "Zapotec",
      craft: "Traditional Pottery",
      excerpt: "In the mountains of Oaxaca, María Elena continues a 500-year tradition of black clay pottery, where each piece carries the spirit of her ancestors...",
      content: "For five centuries, the women of my family have shaped clay with their hands, each generation passing down not just techniques, but the sacred connection between earth and spirit. I learned from my grandmother, who learned from hers, in an unbroken chain of wisdom that stretches back to our Zapotec ancestors. Every morning, I begin with a prayer to the clay, asking permission to transform it into something beautiful. The black clay of our region is special - it has a soul, my grandmother used to say. When you work with it, you must listen to what it wants to become. The traditional burnishing technique we use has remained unchanged for generations. We use smooth stones passed down through families, each one worn by countless hands before mine. The designs we create tell stories - of rain and sun, of mountains and valleys, of the spirits that protect our community. When tourists buy our pottery, they're not just buying a vessel; they're taking home a piece of our living history, a connection to the ancient ways that we refuse to let die.",
      image: "https://images.unsplash.com/photo-1546006200-f8c574598b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY3JhZnRpbmclMjBwb3R0ZXJ5JTIwaGFuZHN8ZW58MXx8fHwxNzU4MjY0NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "8 min read",
      tags: ["Pottery", "Zapotec", "Family Tradition", "Sacred Craft"]
    },
    {
      id: "2", 
      title: "Threads of Memory: Weaving Stories in Silk",
      artisan: "Raj Kumar Singh",
      location: "Varanasi, India",
      culture: "North Indian",
      craft: "Silk Weaving",
      excerpt: "In the ancient city of Varanasi, Raj continues the intricate art of Banarasi silk weaving, where each thread tells a story of devotion...",
      content: "The looms in our family workshop have been singing the same ancient songs for over 200 years. My great-great-grandfather established this weaving tradition when the Mughal courts still commissioned our finest silk saris. Today, I am the fifth generation to carry forward this legacy. Each Banarasi silk sari takes months to create, with patterns so intricate they seem painted by the gods themselves. We use real gold and silver threads, just as our ancestors did, because tradition demands authenticity. The designs we weave are not mere decorations - they are prayers made visible. The paisleys represent the flame of life, the florals honor the divine feminine, and the geometric patterns reflect the cosmic order. My father taught me that a true weaver doesn't just create fabric; he weaves dreams, hopes, and blessings into every thread. When a bride wears our sari on her wedding day, she carries with her the prayers of all the hands that touched those threads, the hopes of generations of weavers who believed in beauty as a form of worship.",
      image: "https://images.unsplash.com/photo-1705475815904-9955cd589e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2xrJTIwYXJ0JTIwcGF0dGVybnMlMjB0cmFkaXRpb25hbCUyMHRleHRpbGVzfGVufDF8fHx8MTc1ODI2NDQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "12 min read",
      tags: ["Silk Weaving", "Banarasi", "Wedding Traditions", "Sacred Art"]
    },
    {
      id: "3",
      title: "Carving Dreams: The Soul of Wood Speaking",
      artisan: "Elder Joseph Crow Feather",
      location: "Montana, USA",
      culture: "Native American",
      craft: "Wood Carving",
      excerpt: "Elder Joseph shares how traditional wood carving connects him to his ancestors and the living spirit of the forest...",
      content: "When I select a piece of wood for carving, I first ask the tree's permission. This is the old way, the way my grandfather taught me when I was just seven years old. Each tree has lived a full life, witnessed seasons change, sheltered birds, and weathered storms. To carve it is to honor that life, to give it new purpose in the human world. My carvings tell the stories of our people - the Eagle, representing courage and vision; the Bear, symbolizing strength and protection; the Wolf, embodying loyalty and family. These are not just decorative objects; they are teaching tools, spiritual guides, reminders of our connection to all living things. The tools I use belonged to my grandfather and his grandfather before him. The steel may be old, but the spirit in them is eternal. When young people from our reservation come to learn, I teach them first to listen to the wood, to feel its grain, to understand its character. Only then can they begin to carve. In our tradition, the artist doesn't impose their will on the wood; they discover what the wood wants to become and help it achieve that destiny.",
      image: "https://images.unsplash.com/photo-1650678192504-13af4e9efab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsJTIwdHJhZGl0aW9uYWwlMjBtdXNpY3xlbnwxfHx8fDE3NTgyNjQ0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "10 min read",
      tags: ["Wood Carving", "Native American", "Spiritual Practice", "Elder Wisdom"]
    }
  ];

  const handlePlayAudio = (storyId: string) => {
    if (playingStory === storyId) {
      setPlayingStory(null);
    } else {
      setPlayingStory(storyId);
      // In a real app, this would start audio playback
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Book className="h-5 w-5 text-primary" />
            Living Stories - Artisan Heritage
          </DialogTitle>
        </DialogHeader>

        {!selectedStory ? (
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-orange-50 border-orange-200">
                  <div className="relative">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 text-black text-xs mb-2">
                        {story.culture} • {story.craft}
                      </Badge>
                      <h3 className="text-white font-semibold text-sm leading-tight">
                        {story.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span className="font-medium">{story.artisan}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{story.location}</span>
                    </div>
                    
                    <p className="text-sm line-clamp-3 text-muted-foreground">
                      {story.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {story.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{story.duration}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handlePlayAudio(story.id)}
                          className="h-8 w-8 p-0"
                        >
                          {playingStory === story.id ? (
                            <Pause className="h-3 w-3" />
                          ) : (
                            <Play className="h-3 w-3" />
                          )}
                        </Button>
                        
                        <Button
                          size="sm"
                          onClick={() => setSelectedStory(story)}
                          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                        >
                          Read Story
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Call to Action */}
            <Card className="mt-8 p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">Share Your Story</h3>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Every artisan has a unique story to tell. Share your cultural heritage, family traditions, 
                and the passion behind your craft with the ArteNact community.
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Submit Your Story
              </Button>
            </Card>
          </div>
        ) : (
          <div className="mt-6">
            <Button
              variant="outline"
              onClick={() => setSelectedStory(null)}
              className="mb-6"
            >
              ← Back to Stories
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-4">{selectedStory.title}</h1>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span className="font-medium">{selectedStory.artisan}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedStory.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{selectedStory.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedStory.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <ImageWithFallback
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-wrap">
                    {selectedStory.content}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-blue-500" />
                    Listen to Story
                  </h3>
                  <Button
                    onClick={() => handlePlayAudio(selectedStory.id)}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                  >
                    {playingStory === selectedStory.id ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Pause Audio
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Play Audio Story
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Experience the story in the artisan's own voice
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
                  <h3 className="font-semibold mb-4">About the Artisan</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-green-700">Name</label>
                      <p className="text-sm">{selectedStory.artisan}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-green-700">Cultural Background</label>
                      <p className="text-sm">{selectedStory.culture}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-green-700">Craft Specialty</label>
                      <p className="text-sm">{selectedStory.craft}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-green-700">Location</label>
                      <p className="text-sm">{selectedStory.location}</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                  <h3 className="font-semibold mb-4">Support This Artisan</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Help preserve traditional crafts by supporting artisans directly.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                    View Artisan's Products
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}