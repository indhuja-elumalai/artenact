import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Calendar, Clock, MapPin, Users, Star, Heart, Camera, Music, Palette } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Event {
  id: string;
  title: string;
  type: "workshop" | "festival" | "exhibition" | "market" | "performance";
  date: string;
  time: string;
  location: string;
  artisan: string;
  culture: string;
  description: string;
  image: string;
  price: string;
  capacity: number;
  registered: number;
  tags: string[];
  featured: boolean;
}

interface EventCalendarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EventCalendar({ isOpen, onClose }: EventCalendarProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "calendar">("grid");
  const [filterType, setFilterType] = useState<string>("all");

  const events: Event[] = [
    {
      id: "1",
      title: "Traditional Pottery Workshop: Sacred Clay Techniques",
      type: "workshop",
      date: "2025-01-25",
      time: "10:00 AM - 4:00 PM",
      location: "Oaxaca Cultural Center, Mexico",
      artisan: "María Elena Vásquez",
      culture: "Zapotec",
      description: "Learn the ancient art of Zapotec black clay pottery in this immersive workshop. María Elena will guide you through traditional techniques passed down through five generations, including the sacred clay preparation, hand-building methods, and the mystical burnishing process. Participants will create their own piece to take home and gain deep insights into the cultural significance of each technique.",
      image: "https://images.unsplash.com/photo-1546006200-f8c574598b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY3JhZnRpbmclMjBwb3R0ZXJ5JTIwaGFuZHN8ZW58MXx8fHwxNzU4MjY0NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$85",
      capacity: 12,
      registered: 8,
      tags: ["Pottery", "Hands-on", "Traditional", "Sacred Arts"],
      featured: true
    },
    {
      id: "2",
      title: "Banarasi Silk Weaving Festival",
      type: "festival",
      date: "2025-02-08",
      time: "9:00 AM - 8:00 PM",
      location: "Varanasi, India",
      artisan: "Raj Kumar Singh & Master Weavers",
      culture: "North Indian",
      description: "A spectacular celebration of Banarasi silk weaving featuring live demonstrations, cultural performances, and the opportunity to witness master weavers creating intricate patterns on traditional looms. The festival includes storytelling sessions about the history of silk weaving, musical performances, and a marketplace where visitors can purchase authentic handwoven textiles directly from artisan families.",
      image: "https://images.unsplash.com/photo-1705475815904-9955cd589e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2xrJTIwYXJ0JTIwcGF0dGVybnMlMjB0cmFkaXRpb25hbCUyMHRleHRpbGVzfGVufDF8fHx8MTc1ODI2NDQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "Free",
      capacity: 500,
      registered: 234,
      tags: ["Festival", "Silk", "Music", "Cultural Heritage"],
      featured: true
    },
    {
      id: "3",
      title: "Native American Wood Carving Exhibition",
      type: "exhibition",
      date: "2025-01-30",
      time: "12:00 PM - 6:00 PM",
      location: "Montana Heritage Museum, USA",
      artisan: "Elder Joseph Crow Feather",
      culture: "Native American",
      description: "An inspiring exhibition showcasing the spiritual art of Native American wood carving. Elder Joseph will display his lifetime collection of sacred carvings and share the stories behind each piece. Visitors will learn about the spiritual significance of different animals in Native American culture and the traditional tools and techniques used in this ancient art form.",
      image: "https://images.unsplash.com/photo-1650678192504-13af4e9efab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsJTIwdHJhZGl0aW9uYWwlMjBtdXNpY3xlbnwxfHx8fDE3NTgyNjQ0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$15",
      capacity: 100,
      registered: 45,
      tags: ["Exhibition", "Wood Carving", "Spiritual Art", "Elder Wisdom"],
      featured: false
    },
    {
      id: "4",
      title: "Global Artisan Marketplace & Cultural Exchange",
      type: "market",
      date: "2025-02-15",
      time: "10:00 AM - 7:00 PM",
      location: "ArteNact Global Hub, Virtual & Physical",
      artisan: "International Artisan Collective",
      culture: "Multi-Cultural",
      description: "A vibrant marketplace bringing together artisans from around the world to showcase and sell their handcrafted treasures. This unique event combines virtual reality experiences with physical displays, allowing visitors to 'travel' to different artisan workshops globally while purchasing authentic handmade goods. Features live cultural performances, cooking demonstrations, and collaborative art projects.",
      image: "https://images.unsplash.com/photo-1546006200-f8c574598b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY3JhZnRpbmclMjBwb3R0ZXJ5JTIwaGFuZHN8ZW58MXx8fHwxNzU4MjY0NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$25",
      capacity: 300,
      registered: 156,
      tags: ["Marketplace", "Global", "VR Experience", "Cultural Exchange"],
      featured: true
    },
    {
      id: "5",
      title: "Storytelling Through Crafts: Living Heritage Performance",
      type: "performance",
      date: "2025-02-20",
      time: "7:00 PM - 9:00 PM",
      location: "ArteNact Heritage Theater",
      artisan: "International Storytelling Collective",
      culture: "Multi-Cultural",
      description: "An enchanting evening where master artisans combine their craft demonstrations with traditional storytelling, music, and dance. Watch as pottery wheels spin to ancient rhythms, looms weave stories into fabric, and carving tools shape wood while tales of cultural heritage unfold. This multimedia performance celebrates the living spirit of traditional crafts.",
      image: "https://images.unsplash.com/photo-1650678192504-13af4e9efab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsJTIwdHJhZGl0aW9uYWwlMjBtdXNpY3xlbnwxfHx8fDE3NTgyNjQ0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$40",
      capacity: 150,
      registered: 89,
      tags: ["Performance", "Storytelling", "Music", "Live Crafting"],
      featured: false
    }
  ];

  const getEventIcon = (type: Event["type"]) => {
    switch (type) {
      case "workshop": return Palette;
      case "festival": return Music;
      case "exhibition": return Camera;
      case "market": return Users;
      case "performance": return Star;
      default: return Calendar;
    }
  };

  const getEventColor = (type: Event["type"]) => {
    switch (type) {
      case "workshop": return "bg-blue-100 text-blue-700";
      case "festival": return "bg-purple-100 text-purple-700";
      case "exhibition": return "bg-green-100 text-green-700";
      case "market": return "bg-orange-100 text-orange-700";
      case "performance": return "bg-pink-100 text-pink-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const filteredEvents = filterType === "all" ? events : events.filter(event => event.type === filterType);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Cultural Events & Artisan Showcases
          </DialogTitle>
        </DialogHeader>

        {!selectedEvent ? (
          <div className="mt-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Button
                variant={filterType === "all" ? "default" : "outline"}
                onClick={() => setFilterType("all")}
                size="sm"
              >
                All Events
              </Button>
              <Button
                variant={filterType === "workshop" ? "default" : "outline"}
                onClick={() => setFilterType("workshop")}
                size="sm"
                className={filterType === "workshop" ? "bg-blue-500" : ""}
              >
                Workshops
              </Button>
              <Button
                variant={filterType === "festival" ? "default" : "outline"}
                onClick={() => setFilterType("festival")}
                size="sm"
                className={filterType === "festival" ? "bg-purple-500" : ""}
              >
                Festivals
              </Button>
              <Button
                variant={filterType === "exhibition" ? "default" : "outline"}
                onClick={() => setFilterType("exhibition")}
                size="sm"
                className={filterType === "exhibition" ? "bg-green-500" : ""}
              >
                Exhibitions
              </Button>
              <Button
                variant={filterType === "market" ? "default" : "outline"}
                onClick={() => setFilterType("market")}
                size="sm"
                className={filterType === "market" ? "bg-orange-500" : ""}
              >
                Markets
              </Button>
              <Button
                variant={filterType === "performance" ? "default" : "outline"}
                onClick={() => setFilterType("performance")}
                size="sm"
                className={filterType === "performance" ? "bg-pink-500" : ""}
              >
                Performances
              </Button>
            </div>

            {/* Featured Events Banner */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Featured Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.filter(event => event.featured).map((event) => {
                  const IconComponent = getEventIcon(event.type);
                  return (
                    <Card key={event.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                      <div className="absolute top-2 right-2 z-10">
                        <Badge className="bg-yellow-400 text-yellow-900">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      <div className="relative">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <Badge className={`${getEventColor(event.type)} text-xs mb-1`}>
                            <IconComponent className="h-3 w-3 mr-1" />
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-3 space-y-2">
                        <h3 className="font-semibold text-sm leading-tight line-clamp-2">
                          {event.title}
                        </h3>
                        
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="text-sm font-semibold text-green-600">
                            {event.price}
                          </div>
                          <Button
                            size="sm"
                            onClick={() => setSelectedEvent(event)}
                            className="h-6 text-xs bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                          >
                            Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* All Events */}
            <div>
              <h2 className="text-xl font-semibold mb-4">All Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => {
                  const IconComponent = getEventIcon(event.type);
                  return (
                    <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50 border-blue-200">
                      <div className="relative">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge className={`${getEventColor(event.type)} text-xs mb-2`}>
                            <IconComponent className="h-3 w-3 mr-1" />
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                          <h3 className="text-white font-semibold text-sm leading-tight">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="p-4 space-y-3">
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-3 w-3" />
                            <span>{event.registered}/{event.capacity} registered</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {event.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="text-lg font-semibold text-green-600">
                            {event.price}
                          </div>
                          <Button
                            onClick={() => setSelectedEvent(event)}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <Button
              variant="outline"
              onClick={() => setSelectedEvent(null)}
              className="mb-6"
            >
              ← Back to Events
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{selectedEvent.title}</h1>
                      <Badge className={`${getEventColor(selectedEvent.type)} mb-4`}>
                        {React.createElement(getEventIcon(selectedEvent.type), { className: "h-4 w-4 mr-1" })}
                        {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                      </Badge>
                    </div>
                    {selectedEvent.featured && (
                      <Badge className="bg-yellow-400 text-yellow-900">
                        <Star className="h-4 w-4 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Date</div>
                        <div>{formatDate(selectedEvent.date)}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Time</div>
                        <div>{selectedEvent.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Location</div>
                        <div>{selectedEvent.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Capacity</div>
                        <div>{selectedEvent.registered}/{selectedEvent.capacity}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ImageWithFallback
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">About This Event</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Event Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
                  <h3 className="font-semibold mb-4 text-center">Event Registration</h3>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600 mb-1">{selectedEvent.price}</div>
                    <div className="text-sm text-muted-foreground">per person</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Spots Available</span>
                      <span>{selectedEvent.capacity - selectedEvent.registered} remaining</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(selectedEvent.registered / selectedEvent.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                    <Heart className="h-4 w-4 mr-2" />
                    Register for Event
                  </Button>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                  <h3 className="font-semibold mb-4">About the Artisan</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-blue-700">Name</label>
                      <p className="text-sm">{selectedEvent.artisan}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-700">Cultural Background</label>
                      <p className="text-sm">{selectedEvent.culture}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-blue-300 text-blue-600 hover:bg-blue-50">
                    View Artisan Profile
                  </Button>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                  <h3 className="font-semibold mb-4">Share This Event</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      Share on Social Media
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Add to Calendar
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Email to Friend
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}