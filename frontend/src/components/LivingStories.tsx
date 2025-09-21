import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Book, Heart, Users, MapPin, Clock, Play, Pause, Star } from "lucide-react";
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
  featured?: boolean;
}

interface LivingStoriesProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LivingStories({ isOpen, onClose }: LivingStoriesProps) {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [playingStory, setPlayingStory] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<"all" | "Pottery" | "Silk Weaving" | "Wood Carving">("all");

  const stories: Story[] = [
    {
      id: "1",
      title: "The Clay Whisperer: Generations of Pottery Wisdom",
      artisan: "María Elena Vásquez",
      location: "Oaxaca, Mexico",
      culture: "Zapotec",
      craft: "Pottery",
      excerpt: "In the mountains of Oaxaca, María Elena continues a 500-year tradition of black clay pottery...",
      content: "For five centuries, the women of my family have shaped clay with their hands, each generation passing down not just techniques...",
      image: "https://images.unsplash.com/photo-1546006200-f8c574598b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "8 min read",
      tags: ["Pottery", "Zapotec", "Family Tradition"],
      featured: true
    },
    {
      id: "2",
      title: "Threads of Memory: Weaving Stories in Silk",
      artisan: "Raj Kumar Singh",
      location: "Varanasi, India",
      culture: "North Indian",
      craft: "Silk Weaving",
      excerpt: "In the ancient city of Varanasi, Raj continues the intricate art of Banarasi silk weaving...",
      content: "The looms in our family workshop have been singing the same ancient songs for over 200 years...",
      image: "https://images.unsplash.com/photo-1705475815904-9955cd589e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "12 min read",
      tags: ["Silk Weaving", "Banarasi", "Wedding Traditions"],
      featured: true
    },
    {
      id: "3",
      title: "Carving Dreams: The Soul of Wood Speaking",
      artisan: "Elder Joseph Crow Feather",
      location: "Montana, USA",
      culture: "Native American",
      craft: "Wood Carving",
      excerpt: "Elder Joseph shares how traditional wood carving connects him to his ancestors...",
      content: "When I select a piece of wood for carving, I first ask the tree's permission...",
      image: "https://images.unsplash.com/photo-1650678192504-13af4e9efab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "10 min read",
      tags: ["Wood Carving", "Native American", "Spiritual Practice"],
      featured: false
    }
  ];

  const handlePlayAudio = (storyId: string) => {
    setPlayingStory(playingStory === storyId ? null : storyId);
  };

  const filteredStories = filterType === "all" ? stories : stories.filter(s => s.craft === filterType);

  const getCraftColor = (craft: string) => {
    switch (craft) {
      case "Pottery": return "bg-blue-100 text-blue-700";
      case "Silk Weaving": return "bg-purple-100 text-purple-700";
      case "Wood Carving": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto bg-gray-50 dark:bg-gray-950 p-6 rounded-3xl transition-all duration-500">
        <DialogHeader>
          <div className="flex justify-between items-center mb-4">
            <DialogTitle className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
              <Book className="h-6 w-6 text-orange-500" />
              Living Stories
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full">
              ×
            </Button>
          </div>
        </DialogHeader>

        {!selectedStory ? (
          <div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["all", "Pottery", "Silk Weaving", "Wood Carving"].map((type) => (
                <Button
                  key={type}
                  size="sm"
                  variant={filterType === type ? "default" : "outline"}
                  onClick={() => setFilterType(type as any)}
                  className={filterType === type ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg" : ""}
                >
                  {type === "all" ? "All Crafts" : type}
                </Button>
              ))}
            </div>

            {/* Featured Stories */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-200">
                <Star className="h-5 w-5 text-yellow-500" />
                Featured Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.filter(s => s.featured).map((story) => (
                  <Card key={story.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 rounded-2xl border-2 border-orange-300/40">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-yellow-400 text-yellow-900 rounded-full px-3 flex items-center gap-1">
                        <Star className="h-3 w-3" /> Featured
                      </Badge>
                    </div>
                    <div className="relative">
                      <ImageWithFallback src={story.image} alt={story.title} className="w-full h-40 object-cover rounded-t-xl" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <Badge className={`${getCraftColor(story.craft)} text-xs mb-1 rounded-full px-3`}>
                          {story.craft}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold text-lg leading-tight line-clamp-2 text-gray-800 dark:text-gray-200">{story.title}</h3>
                      <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-orange-500" />
                          <span>{story.artisan}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-orange-500" />
                          <span>{story.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span>{story.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <Button size="sm" onClick={() => handlePlayAudio(story.id)} className="h-8 w-8 p-0">
                          {playingStory === story.id ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                        </Button>
                        <Button size="sm" onClick={() => setSelectedStory(story)} className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-md px-3 py-1">
                          Read Story
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Stories */}
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">All Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStories.map((story) => (
                <Card key={story.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 rounded-2xl border-2 border-orange-300/40">
                  <div className="relative">
                    <ImageWithFallback src={story.image} alt={story.title} className="w-full h-40 object-cover rounded-t-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <Badge className={`${getCraftColor(story.craft)} text-xs mb-1 rounded-full px-3`}>{story.craft}</Badge>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-lg leading-tight line-clamp-2 text-gray-800 dark:text-gray-200">{story.title}</h3>
                    <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-orange-500" />
                        <span>{story.artisan}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-orange-500" />
                        <span>{story.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span>{story.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <Button size="sm" onClick={() => handlePlayAudio(story.id)} className="h-8 w-8 p-0">
                        {playingStory === story.id ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                      </Button>
                      <Button size="sm" onClick={() => setSelectedStory(story)} className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-md px-3 py-1">
                        Read Story
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Button variant="ghost" size="sm" onClick={() => setSelectedStory(null)} className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full">
              ← Back
            </Button>
            <Card className="overflow-hidden rounded-2xl border-2 border-orange-300/40">
              <ImageWithFallback src={selectedStory.image} alt={selectedStory.title} className="w-full h-64 object-cover rounded-t-2xl" />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{selectedStory.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedStory.tags.map((tag, idx) => (
                    <Badge key={idx} className={`${getCraftColor(tag)} text-xs rounded-full px-3`}>{tag}</Badge>
                  ))}
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <p>{selectedStory.content}</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
