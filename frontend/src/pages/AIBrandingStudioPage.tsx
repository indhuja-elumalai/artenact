"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useNavigate } from "react-router-dom"; // Added useNavigate

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Sparkles, Heart, Wand2, RefreshCw, Star, FileImage, Video, Share2, Languages, BookOpen } from "lucide-react"; // Added BookOpen icon
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
    english: { tagline: string; description: string; };
    hindi: { tagline: string; description: string; };
    tamil: { tagline: string; description: string; };
    kannada: { tagline: string; description: string; };
  };
}
// ⚠️ Warning: Exposing API keys on the client-side is a security risk.
// It's recommended to handle API calls through a backend service.
const API_KEY = "AIzaSyAhfC0HQ7ncYUC6spRsAxNrvgrinJoJp3I";


// ✅ Gemini init
const genAI = new GoogleGenerativeAI(API_KEY);

// Helper function to get a valid YouTube embed URL from various link formats
const getYoutubeEmbedUrl = (url: string) => {
  if (!url) return null;
  let videoId = null;
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  if (match) {
    videoId = match[1];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};


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

  const [userImageUrl, setUserImageUrl] = useState("");
  const [userVideoUrl, setUserVideoUrl] = useState("");

  const navigate = useNavigate(); // Initialize navigate hook

  const handleGenerate = async () => {
    if (!businessName.trim()) return;
    setIsGenerating(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

      // Updated Professional Prompt
      const prompt = `
        You are an Expert Brand Strategist and AI Consultant specializing in developing authentic, culturally-rich brand identities for folk artisans.

        Your task is to generate a comprehensive and professional branding package based on the user's input. The generated content should be evocative, authentic, and tailored to the specified target market.

        The output must be a single, valid JSON object, adhering **strictly** to the schema below. Do not include any explanatory text, markdown formatting like \`json\`, or any characters outside of the JSON object itself.

        ## 1. JSON Output Schema

        \`\`\`json
        {
          "logo": "string (emoji or simple symbol)",
          "colorPalette": ["#hex1", "#hex2", "#hex3", "#hex4", "#hex5"],
          "tagline": "string",
          "description": "string",
          "culturalStory": "string",
          "productDescriptions": [
            {
              "name": "string",
              "description": "string",
              "culturalSignificance": "string",
              "materials": ["string"],
              "pricing": "string"
            }
          ],
          "socialMediaContent": ["string1", "string2", "string3"],
          "marketingImages": ["string (direct image URL)", "string (direct image URL)"],
          "translations": {
            "english": { "tagline": "string", "description": "string" },
            "hindi": { "tagline": "string", "description": "string" },
            "tamil": { "tagline": "string", "description": "string" },
            "kannada": { "tagline": "string", "description": "string" }
          }
        }
        \`\`\`

        ---

        ## 2. Content Generation Guidelines

        -   **logo**: Choose a single, minimalist emoji that is culturally relevant and symbolic of the craft.
        -   **colorPalette**: Select five harmonious hex codes that reflect the specified cultural background and materials. The palette should be sophisticated and versatile for web and print.
        -   **tagline**: Create a short, memorable, and powerful tagline that captures the essence of the brand.
        -   **description**: Write a concise and engaging brand description.
        -   **culturalStory**: Craft a compelling narrative that connects the artisan's heritage, techniques, and vision to their creations.
        -   **productDescriptions**: Write vivid, sensory-rich descriptions. For the first product, invent a suitable name based on the \`productType\`.
        -   **socialMediaContent**: Generate three distinct social media post captions:
            1.  An introductory post about the brand's mission.
            2.  A "behind-the-scenes" post about the creation process.
            3.  A post highlighting a specific product's story and cultural significance.
        -   **marketingImages**: Provide two high-quality, direct image URLs from a royalty-free source (e.g., Unsplash, Pexels) that visually align with the brand's aesthetic, culture, and products.
        -   **translations**: Provide accurate and culturally appropriate translations for the \`tagline\` and \`description\` in English, Hindi, Tamil, and Kannada.

        ---

        ## 3. User Input

        -   **Business Name**: ${businessName}
        -   **Description**: ${description}
        -   **Industry**: ${industry}
        -   **Cultural Background**: ${culturalBackground}
        -   **Product Type**: ${productType}
        -   **Target Market**: ${targetMarket}
        -   **Primary Language**: ${language}
      `;

      const result = await model.generateContent(prompt);
      const text = result.response.text();

      let data: ComprehensiveBrandingResult | null = null;
      try {
        const cleanedText = text.replace(/```json|```/g, '').trim();
        data = JSON.parse(cleanedText);
      } catch (e) {
        console.error("❌ JSON parse error. Raw output:", text);
        // Attempt to fix common JSON issues if possible, or inform the user.
        alert("Failed to parse AI response. Please try again. The AI might have returned invalid JSON.");
      }

      if (data) {
        setResult(data);
      }
    } catch (err) {
      console.error("Gemini error:", err);
      alert("An error occurred during generation. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
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
    setUserImageUrl("");
    setUserVideoUrl("");
  };

  // New handlePublish function
  const handlePublish = () => {
    if (result) {
      navigate("/heritage-page", { state: { brandingResult: result, businessName: businessName } });
    }
  };

  const embedVideoUrl = getYoutubeEmbedUrl(userVideoUrl);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-6 w-6 text-orange-600" />
        <h1 className="text-2xl font-bold">AI Folk Artisan Branding Studio</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN: Generated Response */}
        <div className="space-y-6 order-2 lg:order-1"> {/* Order changed for mobile-first responsiveness */}
          {result ? (
            <Card className="p-6 shadow-lg bg-white border border-gray-100">
              <div className="flex items-start gap-4 mb-6 pb-4 border-b border-gray-100">
                <span className="text-5xl leading-none">{result.logo}</span>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{result.tagline}</h2>
                  <p className="text-md text-gray-600">for {businessName || "Your Artisan Brand"}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Brand Essence</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{result.description}</p>
                <p className="text-sm italic text-gray-500 border-l-4 border-orange-300 pl-4 py-2 bg-orange-50 rounded-r-md">
                  "{result.culturalStory}"
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Color Palette</h3>
                <div className="flex flex-wrap gap-3">
                  {result.colorPalette.map((c) => (
                    <div key={c} className="h-10 w-10 rounded-full border border-gray-200 shadow-sm flex items-center justify-center text-xs text-gray-700 relative group" style={{ backgroundColor: c }}>
                      <span className="absolute bottom-full mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Featured Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.productDescriptions.map((p) => (
                    <Card key={p.name} className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-gray-800 mb-1">{p.name}</h4>
                      <p className="text-sm text-gray-700 mb-2">{p.description}</p>
                      <p className="text-xs text-orange-600 mb-2 font-medium">Cultural Significance: {p.culturalSignificance}</p>
                      <p className="text-xs text-gray-500">Materials: <span className="font-medium">{p.materials.join(", ")}</span></p>
                      <p className="text-sm font-semibold text-gray-800 mt-2">Price: {p.pricing}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"><Share2 className="h-5 w-5 text-blue-500" />Social Media Content</h3>
                <div className="space-y-3">
                  {result.socialMediaContent.map((post, idx) => (
                    <Card key={idx} className="p-3 text-sm bg-blue-50 border border-blue-200 rounded-lg">
                      <p>{post}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"><Languages className="h-5 w-5 text-green-600" />Translations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(result.translations).map(([lang, data]) => (
                    <Card key={lang} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 capitalize mb-1">{lang}</h4>
                      <p className="text-sm text-gray-700"><strong>Tagline:</strong> {data.tagline}</p>
                      <p className="text-xs text-gray-600"><strong>Description:</strong> {data.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Add Publish button here */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <Button onClick={handlePublish} disabled={!result} className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Publish to Heritage Page
                </Button>
              </div>

            </Card>
          ) : (
            <Card className="p-8 text-muted-foreground h-full flex flex-col items-center justify-center text-center bg-white border border-gray-100 shadow-md">
              <Wand2 className="h-12 w-12 mb-4 text-orange-400" />
              <h3 className="text-xl font-bold mb-2 text-gray-700">Your Brand Awaits</h3>
              <p className="text-md text-gray-500 max-w-sm">Fill out the details on the right to generate a comprehensive cultural brand identity package, complete with visuals and translations.</p>
            </Card>
          )}
        </div>

        {/* RIGHT COLUMN: Visuals & Form */}
        <div className="space-y-6 order-1 lg:order-2"> {/* Order changed for mobile-first responsiveness */}

          {/* New Visuals Preview Section */}
          <Card className="p-6 bg-white border border-gray-100 shadow-md">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800"><FileImage className="h-5 w-5 text-purple-500" />Visual Preview</h3>
            <div className="grid grid-cols-1 gap-6">
              {/* Image Display */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Brand Image</label>
                <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 shadow-inner">
                  {(userImageUrl || (result && result.marketingImages.length > 0)) ? (
                    <ImageWithFallback
                      src={userImageUrl || (result ? result.marketingImages[0] : '')}
                      alt="Brand image"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-sm text-gray-500 p-4">
                      <FileImage className="mx-auto h-8 w-8 mb-2 text-gray-400" />
                      Provide an image URL or AI will generate one after submission.
                    </div>
                  )}
                </div>
              </div>

              {/* Video Display */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Brand Video (YouTube)</label>
                <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 shadow-inner">
                  {userVideoUrl && embedVideoUrl ? (
                    <iframe
                      className="w-full h-full"
                      src={embedVideoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="text-center text-sm text-gray-500 p-4">
                      <Video className="mx-auto h-8 w-8 mb-2 text-gray-400" />
                      Enter a YouTube URL to display a brand video.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>


          {/* Form */}
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 shadow-md">
            <h3 className="font-bold text-xl mb-5 flex items-center gap-2 text-orange-700">
              <Heart className="h-5 w-5 text-red-500" />
              1. Artisan & Brand Details
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Business/Artist Name <span className="text-red-500">*</span></label>
                <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="e.g., 'Ancestral Weaves' or 'Priya's Pottery'" className="border-orange-200 focus:ring-orange-300" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Craft Type</label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className="border-orange-200 focus:ring-orange-300">
                    <SelectValue placeholder="Select your craft type" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto bg-white text-gray-900 shadow-lg">
                    <SelectItem value="pottery">Pottery & Ceramics</SelectItem>
                    <SelectItem value="textiles">Textiles & Weaving</SelectItem>
                    <SelectItem value="jewelry">Jewelry & Metalwork</SelectItem>
                    <SelectItem value="woodwork">Woodwork & Carving</SelectItem>
                    <SelectItem value="painting">Traditional Painting</SelectItem>
                    <SelectItem value="sculpture">Sculpture & Carving</SelectItem>
                    <SelectItem value="basketry">Basketry</SelectItem>
                    <SelectItem value="glassblowing">Glassblowing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Product Type (e.g., 'Hand-painted ceramic vases', 'Block-printed silk scarves')</label>
                <Input value={productType} onChange={(e) => setProductType(e.target.value)} placeholder="e.g., Hand-painted ceramic vases" className="border-orange-200 focus:ring-orange-300" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Cultural Background (e.g., 'Indian folk art', 'Japanese Shibori', 'Native American weaving')</label>
                <Input value={culturalBackground} onChange={(e) => setCulturalBackground(e.target.value)} placeholder="e.g., Indian folk art" className="border-orange-200 focus:ring-orange-300" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Primary Language for Brand Content</label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="border-orange-200 focus:ring-orange-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto bg-white text-gray-900 shadow-lg">
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Español</SelectItem>
                    <SelectItem value="french">Français</SelectItem>
                    <SelectItem value="hindi">हिंदी</SelectItem>
                    <SelectItem value="tamil">தமிழ்</SelectItem>
                    <SelectItem value="kannada">ಕನ್ನಡ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Story & Vision (Describe your brand's unique story, values, and what you aim to achieve)</label>
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="e.g., 'Our brand preserves ancient weaving techniques...'" className="border-orange-200 focus:ring-orange-300" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Target Market (e.g., 'Eco-conscious consumers interested in handmade goods', 'Luxury gift market')</label>
                <Input value={targetMarket} onChange={(e) => setTargetMarket(e.target.value)} placeholder="e.g., Eco-conscious consumers" className="border-orange-200 focus:ring-orange-300" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button onClick={handleGenerate} disabled={!businessName.trim() || isGenerating} className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg">
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Crafting Brand Magic...
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-4 w-4 mr-2" />
                      Generate Complete Brand
                    </>
                  )}
                </Button>
                {result && (
                  <Button variant="outline" onClick={handleReset} className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Reset
                  </Button>
                )}
              </div>
            </div>
          </Card>

          {/* New Visual Assets Input Card */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-md">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-blue-700">
              <Star className="h-5 w-5 text-blue-500" />
              2. Custom Visual Assets (Optional)
            </h3>
            <p className="text-sm text-gray-600 mb-4">Provide URLs for your own brand image or YouTube video, or leave blank to let AI suggest images.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Your Brand Image URL</label>
                <Input value={userImageUrl} onChange={(e) => setUserImageUrl(e.target.value)} placeholder="https://example.com/your-image.jpg" className="border-blue-200 focus:ring-blue-300" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Your Brand Video (YouTube URL)</label>
                <Input value={userVideoUrl} onChange={(e) => setUserVideoUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=..." className="border-blue-200 focus:ring-blue-300" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}