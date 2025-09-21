import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Palette, Wand2, Download, RefreshCw, Sparkles, Globe, Heart, Book, Image as ImageIcon, ShoppingBag, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

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

export default function AIBrandingStudioPage() {
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
    setTimeout(() => {
      const culturalPalettes = {
        pottery: ["#8B4513", "#D2691E", "#CD853F", "#F4A460", "#DEB887"],
        textiles: ["#DC143C", "#FFD700", "#228B22", "#4169E1", "#8A2BE2"],
        jewelry: ["#FFD700", "#C0C0C0", "#B87333", "#E6E6FA", "#FF6347"],
        woodwork: ["#654321", "#8B4513", "#A0522D", "#D2691E", "#DEB887"],
        default: ["#8B4513", "#D2691E", "#228B22", "#FFD700", "#DC143C"],
      } as const;
      const palette = culturalPalettes[(industry.toLowerCase() as keyof typeof culturalPalettes) || "default"] || culturalPalettes.default;
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
            pricing: "$45 - $120",
          },
          {
            name: `Contemporary Heritage Line`,
            description: `Modern interpretations of classic designs, bridging the gap between traditional craftsmanship and contemporary aesthetics.`,
            culturalSignificance: `By adapting ancient motifs for modern life, these pieces ensure our cultural traditions remain relevant and alive for future generations.`,
            materials: ["Eco-friendly materials", "Traditional dyes", "Sustainable wood", "Recycled metals"],
            pricing: "$60 - $200",
          },
        ],
        socialMediaContent: [
          "🎨 Every piece tells a story of heritage and heart. Discover the soul of traditional craftsmanship.",
          "✨ Handcrafted with love, inspired by generations of artistic wisdom. #TraditionalArt #HandmadeTreasures",
          "🌟 Where ancient techniques meet modern beauty. Preserving culture, one creation at a time.",
        ],
        marketingImages: [
          "https://images.unsplash.com/photo-1705475815904-9955cd589e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2xrJTIwYXJ0JTIwcGF0dGVybnMlMjB0cmFkaXRpb25hbCUyMHRleHRpbGVzfGVufDF8fHx8MTc1ODI2NDQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
          "https://images.unsplash.com/photo-1546006200-f8c574598b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY3JhZnRpbmclMjBwb3R0ZXJ5JTIwaGFuZHN8ZW58MXx8fHwxNzU4MjY0NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        ],
        translations: {
          spanish: {
            tagline: `${businessName} - Donde la Herencia Encuentra el Arte`,
            description: `${businessName} celebra la belleza atemporal de ${industry || 'las artesanías tradicionales'} con piezas auténticas hechas a mano que cuentan historias de herencia cultural.`,
          },
          french: {
            tagline: `${businessName} - Où l'Héritage Rencontre l'Art`,
            description: `${businessName} célèbre la beauté intemporelle de ${industry || 'l\'artisanat traditionnel'} avec des pièces authentiques faites à la main qui racontent des histoires de patrimoine culturel.`,
          },
          hindi: {
            tagline: `${businessName} - जहाँ विरासत कला से मिलती है`,
            description: `${businessName} ${industry || 'पारंपरिक शिल्प'} की कालातीत सुंदरता का जश्न मनाता है और सांस्कृतिक विरासत की कहानियाँ कहने वाली प्रामाणिक, हस्तनिर्मित कृतियों के साथ।`,
          },
        },
      });
      setIsGenerating(false);
    }, 1200);
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-6 w-6 text-orange-600" />
        <h1 className="text-2xl font-bold">AI Folk Artisan Branding Studio</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="space-y-6">
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Heart className="h-4 w-4 text-red-500" />
              Artisan Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Business/Artist Name *</label>
                <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Enter your artisan name or business" className="border-orange-200 focus:border-orange-400" />
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
                <Input value={productType} onChange={(e) => setProductType(e.target.value)} placeholder="e.g., Bowls, Scarves, Necklaces, Sculptures" className="border-orange-200 focus:border-orange-400" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cultural Background</label>
                <Input value={culturalBackground} onChange={(e) => setCulturalBackground(e.target.value)} placeholder="e.g., Mexican Talavera, Indian Block Print, Japanese Raku" className="border-orange-200 focus:border-orange-400" />
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
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Share your artistic journey, inspiration, and what makes your craft special..." rows={4} className="border-orange-200 focus:border-orange-400" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Target Market</label>
                <Input value={targetMarket} onChange={(e) => setTargetMarket(e.target.value)} placeholder="e.g., Art collectors, Home decorators, Cultural enthusiasts" className="border-orange-200 focus:border-orange-400" />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleGenerate} disabled={!businessName.trim() || isGenerating} className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
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
                <Badge variant="secondary" className="bg-green-100 text-green-700">✨</Badge>
                <span>Logo & Palette</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">📝</Badge>
                <span>Story & Tagline</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">🌐</Badge>
                <span>Translations</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {result ? (
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{result.logo}</span>
                <div>
                  <div className="text-lg font-semibold">{result.tagline}</div>
                  <div className="text-sm text-muted-foreground">{businessName}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                {result.colorPalette.map((c) => (
                  <div key={c} className="h-6 w-6 rounded" style={{ backgroundColor: c }} />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-4">{result.description}</p>
              <p className="text-sm leading-relaxed mb-4">{result.culturalStory}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {result.productDescriptions.map((p) => (
                  <Card key={p.name} className="p-4">
                    <div className="font-semibold mb-1">{p.name}</div>
                    <div className="text-sm mb-2">{p.description}</div>
                    <div className="text-xs text-muted-foreground mb-2">{p.culturalSignificance}</div>
                    <div className="text-xs">Materials: {p.materials.join(", ")}</div>
                    <div className="text-xs font-medium mt-1">Pricing: {p.pricing}</div>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {result.marketingImages.map((src, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden">
                    <ImageWithFallback src={src} alt="Brand image" className="w-full h-40 object-cover" />
                  </div>
                ))}
              </div>
            </Card>
          ) : (
            <Card className="p-6 text-sm text-muted-foreground">
              Start by entering your details to generate a full brand kit.
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}