import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Palette, Wand2, Download, RefreshCw, Sparkles, Globe, Heart, Book, Image as ImageIcon, ShoppingBag, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AIBrandingToolProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ComprehensiveBrandingResult {
  logo: string;
  colorPalette: string[];
  tagline: string;
  description: string;
  culturalStory: string;
  productDescriptions: Array<{
    name: string;
    description: string;
    culturalSignificance: string;
    materials: string[];
    pricing: string;
  }>;
  socialMediaContent: string[];
  marketingImages: string[];
  translations: {
    [language: string]: {
      tagline: string;
      description: string;
    };
  };
}

export function AIBrandingTool({ isOpen, onClose }: AIBrandingToolProps) {
  const [businessName, setBusinessName] = useState("");
  const [description, setDescription] = useState("");
  const [industry, setIndustry] = useState("");
  const [language, setLanguage] = useState("english");
  const [culturalBackground, setCulturalBackground] = useState("");
  const [productType, setProductType] = useState("");
  const [targetMarket, setTargetMarket] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<ComprehensiveBrandingResult | null>(null);

  const handleGenerate = async () => {
    if (!businessName.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate comprehensive AI generation
    setTimeout(() => {
      const culturalPalettes = {
        "pottery": ["#8B4513", "#D2691E", "#CD853F", "#F4A460", "#DEB887"],
        "textiles": ["#DC143C", "#FFD700", "#228B22", "#4169E1", "#8A2BE2"],
        "jewelry": ["#FFD700", "#C0C0C0", "#B87333", "#E6E6FA", "#FF6347"],
        "woodwork": ["#654321", "#8B4513", "#A0522D", "#D2691E", "#DEB887"],
        "default": ["#8B4513", "#D2691E", "#228B22", "#FFD700", "#DC143C"]
      };

      const palette = culturalPalettes[industry.toLowerCase() as keyof typeof culturalPalettes] || culturalPalettes.default;

      setResult({
        logo: "🎨", 
        colorPalette: palette,
        tagline: `${businessName} - Where Heritage Meets Art`,
        description: `${businessName} celebrates the timeless beauty of ${industry || 'traditional crafts'} with authentic, handcrafted pieces that tell stories of cultural heritage. Each creation reflects generations of artistic wisdom passed down through skilled hands, bringing the soul of traditional artistry to modern life.`,
        culturalStory: `The art of ${industry || 'traditional craftsmanship'} has been woven into the fabric of our culture for centuries. At ${businessName}, we honor this legacy by preserving ancient techniques while embracing contemporary design. Our artisans are not just creators; they are cultural guardians, keeping alive the stories, symbols, and spiritual significance embedded in every piece.`,
        productDescriptions: [
          {
            name: `Traditional ${productType || 'Craft'} Collection`,
            description: `Handcrafted ${productType || 'pieces'} that embody the essence of traditional artistry. Each item is meticulously created using time-honored techniques passed down through generations.`,
            culturalSignificance: `These pieces represent more than just beautiful objects - they are carriers of cultural memory, each pattern and form holding deep meaning within our artistic heritage.`,
            materials: ["Natural clay", "Organic pigments", "Traditional tools", "Sustainable resources"],
            pricing: "$45 - $120"
          },
          {
            name: `Contemporary Heritage Line`,
            description: `Modern interpretations of classic designs, bridging the gap between traditional craftsmanship and contemporary aesthetics.`,
            culturalSignificance: `By adapting ancient motifs for modern life, these pieces ensure our cultural traditions remain relevant and alive for future generations.`,
            materials: ["Eco-friendly materials", "Traditional dyes", "Sustainable wood", "Recycled metals"],
            pricing: "$60 - $200"
          }
        ],
        socialMediaContent: [
          "🎨 Every piece tells a story of heritage and heart. Discover the soul of traditional craftsmanship.",
          "✨ Handcrafted with love, inspired by generations of artistic wisdom. #TraditionalArt #HandmadeTreasures",
          "🌟 Where ancient techniques meet modern beauty. Preserving culture, one creation at a time."
        ],
        marketingImages: [
          "https://images.unsplash.com/photo-1705475815904-9955cd589e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2xrJTIwYXJ0JTIwcGF0dGVybnMlMjB0cmFkaXRpb25hbCUyMHRleHRpbGVzfGVufDF8fHx8MTc1ODI2NDQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
          "https://images.unsplash.com/photo-1546006200-f8c574598b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY3JhZnRpbmclMjBwb3R0ZXJ5JTIwaGFuZHN8ZW58MXx8fHwxNzU4MjY0NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
        ],
        translations: {
          spanish: {
            tagline: `${businessName} - Donde la Herencia Encuentra el Arte`,
            description: `${businessName} celebra la belleza atemporal de ${industry || 'las artesanías tradicionales'} con piezas auténticas hechas a mano que cuentan historias de herencia cultural.`
          },
          french: {
            tagline: `${businessName} - Où l'Héritage Rencontre l'Art`,
            description: `${businessName} célèbre la beauté intemporelle de ${industry || 'l\'artisanat traditionnel'} avec des pièces authentiques faites à la main qui racontent des histoires de patrimoine culturel.`
          },
          hindi: {
            tagline: `${businessName} - जहाँ विरासत कला से मिलती है`,
            description: `${businessName} ${industry || 'पारंपरिक शिल्प'} की कालातीत सुंदरता का जश्न मनाता है और सांस्कृतिक विरासत की कहानियाँ कहने वाली प्रामाणिक, हस्तनिर्मित कृतियों के साथ।`
          }
        }
      });
      setIsGenerating(false);
    }, 4000);
  };

  const handleReset = () => {
    setResult(null);
    setBusinessName("");
    setDescription("");
    setIndustry("");
    setLanguage("english");
    setCulturalBackground("");
    setProductType("");
    setTargetMarket("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Folk Artisan Branding Studio
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Enhanced Input Form */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                Artisan Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Business/Artist Name *</label>
                  <Input
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Enter your artisan name or business"
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Craft Type</label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger className="border-orange-200">
                      <SelectValue placeholder="Select your craft type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pottery">Pottery & Ceramics</SelectItem>
                      <SelectItem value="textiles">Textiles & Weaving</SelectItem>
                      <SelectItem value="jewelry">Jewelry & Metalwork</SelectItem>
                      <SelectItem value="woodwork">Woodwork & Carving</SelectItem>
                      <SelectItem value="painting">Traditional Painting</SelectItem>
                      <SelectItem value="sculpture">Sculpture & Carving</SelectItem>
                      <SelectItem value="embroidery">Embroidery & Stitching</SelectItem>
                      <SelectItem value="basketry">Basketry & Weaving</SelectItem>
                      <SelectItem value="glasswork">Glasswork & Blowing</SelectItem>
                      <SelectItem value="other">Other Traditional Craft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Product Type</label>
                  <Input
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    placeholder="e.g., Bowls, Scarves, Necklaces, Sculptures"
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Cultural Background</label>
                  <Input
                    value={culturalBackground}
                    onChange={(e) => setCulturalBackground(e.target.value)}
                    placeholder="e.g., Mexican Talavera, Indian Block Print, Japanese Raku"
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Primary Language</label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="border-orange-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Español</SelectItem>
                      <SelectItem value="french">Français</SelectItem>
                      <SelectItem value="hindi">हिंदी</SelectItem>
                      <SelectItem value="portuguese">Português</SelectItem>
                      <SelectItem value="arabic">العربية</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Story & Vision</label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Share your artistic journey, inspiration, and what makes your craft special..."
                    rows={4}
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Target Market</label>
                  <Input
                    value={targetMarket}
                    onChange={(e) => setTargetMarket(e.target.value)}
                    placeholder="e.g., Art collectors, Home decorators, Cultural enthusiasts"
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={handleGenerate} 
                    disabled={!businessName.trim() || isGenerating}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Creating Magic...
                      </>
                    ) : (
                      <>
                        <Wand2 className="h-4 w-4 mr-2" />
                        Generate Complete Brand
                      </>
                    )}
                  </Button>
                  
                  {result && (
                    <Button variant="outline" onClick={handleReset} className="border-orange-300">
                      Reset
                    </Button>
                  )}
                </div>
              </div>
            </Card>

            {/* Enhanced Features */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Star className="h-4 w-4 text-blue-500" />
                AI Folk Art Features
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">🎨</Badge>
                  <span>Cultural Brand Identity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-red-100 text-red-700">🌈</Badge>
                  <span>Traditional Color Palettes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">📖</Badge>
                  <span>Cultural Stories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">🛍️</Badge>
                  <span>Product Descriptions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">🌍</Badge>
                  <span>Multi-language Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700">📱</Badge>
                  <span>Social Media Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">📸</Badge>
                  <span>Marketing Imagery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">💰</Badge>
                  <span>Pricing Suggestions</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Enhanced Results */}
          <div className="space-y-6">
            {isGenerating && (
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <Wand2 className="h-10 w-10 text-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Crafting Your Artisan Brand...</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Our AI is weaving together cultural heritage and modern marketing magic
                    </p>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full w-2/3 animate-pulse"></div>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </Card>
            )}

            {result && (
              <Tabs defaultValue="brand" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="brand">Brand</TabsTrigger>
                  <TabsTrigger value="products">Products</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="translations">Languages</TabsTrigger>
                </TabsList>
                
                <TabsContent value="brand" className="space-y-4">
                  {/* Logo & Brand Identity */}
                  <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Palette className="h-4 w-4 text-orange-500" />
                      Brand Identity
                    </h3>
                    <div className="bg-white rounded-lg p-8 text-center border border-orange-200">
                      <div className="text-6xl mb-4">{result.logo}</div>
                      <div className="text-2xl font-bold text-primary mb-2">{businessName}</div>
                      <p className="text-lg text-orange-600 font-medium">{result.tagline}</p>
                    </div>
                  </Card>

                  {/* Color Palette */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Cultural Color Palette</h3>
                    <div className="flex gap-2 mb-4">
                      {result.colorPalette.map((color, index) => (
                        <div key={index} className="flex-1">
                          <div 
                            className="h-20 rounded-lg mb-2 border-2 border-white shadow-lg"
                            style={{ backgroundColor: color }}
                          ></div>
                          <div className="text-xs text-center font-medium">
                            {color}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Colors inspired by traditional {industry} artistry</p>
                  </Card>

                  {/* Brand Story */}
                  <Card className="p-6 bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Book className="h-4 w-4 text-green-500" />
                      Cultural Story
                    </h3>
                    <p className="text-sm leading-relaxed">{result.culturalStory}</p>
                  </Card>
                </TabsContent>

                <TabsContent value="products" className="space-y-4">
                  {result.productDescriptions.map((product, index) => (
                    <Card key={index} className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4 text-blue-500" />
                        {product.name}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-blue-700">Product Description</label>
                          <p className="text-sm">{product.description}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-blue-700">Cultural Significance</label>
                          <p className="text-sm text-muted-foreground">{product.culturalSignificance}</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex-1">
                            <label className="text-sm font-medium text-blue-700">Materials</label>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {product.materials.map((material, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                                  {material}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-blue-700">Pricing Range</label>
                            <p className="text-lg font-bold text-green-600">{product.pricing}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="content" className="space-y-4">
                  {/* Social Media Content */}
                  <Card className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Heart className="h-4 w-4 text-pink-500" />
                      Social Media Content
                    </h3>
                    <div className="space-y-3">
                      {result.socialMediaContent.map((content, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border border-pink-200">
                          <p className="text-sm">{content}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Marketing Images */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <ImageIcon className="h-4 w-4 text-purple-500" />
                      Suggested Marketing Images
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {result.marketingImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <ImageWithFallback
                            src={image}
                            alt={`Marketing image ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all"></div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="translations" className="space-y-4">
                  {Object.entries(result.translations).map(([lang, translation]) => (
                    <Card key={lang} className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
                      <h3 className="font-semibold mb-4 flex items-center gap-2 capitalize">
                        <Globe className="h-4 w-4 text-indigo-500" />
                        {lang} Translation
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-indigo-700">Tagline</label>
                          <p className="font-medium text-lg">{translation.tagline}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-indigo-700">Description</label>
                          <p className="text-sm">{translation.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                {/* Enhanced Actions */}
                <div className="flex gap-2 mt-6">
                  <Button className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                    <Download className="h-4 w-4 mr-2" />
                    Download Complete Brand Package
                  </Button>
                  <Button variant="outline" onClick={handleGenerate} className="border-purple-300 text-purple-600 hover:bg-purple-50">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </Tabs>
            )}

            {!result && !isGenerating && (
              <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                <div className="text-center text-muted-foreground">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center">
                    <Sparkles className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-orange-800">Ready to Create Your Artisan Brand?</h3>
                  <p className="max-w-md mx-auto">Share your craft details and cultural background to generate a complete brand identity that honors your heritage while appealing to modern customers.</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}