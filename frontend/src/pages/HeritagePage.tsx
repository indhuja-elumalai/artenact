// src/pages/HeritagePage.tsx

import { useLocation, Link } from "react-router-dom";
import { Card } from "../components/ui/card"; // Assuming your Card component path
import { Button } from "../components/ui/button"; // Assuming your Button component path
import { ArrowLeft, Share2, Languages, BookOpen, Star, FileImage } from "lucide-react"; // Icons
import { ImageWithFallback } from "../components/figma/ImageWithFallback"; // Assuming your ImageWithFallback component path

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

export default function 
HeritagePage() {
  const location = useLocation();
  const { brandingResult, businessName } = location.state as { brandingResult: ComprehensiveBrandingResult, businessName: string };

  if (!brandingResult) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">No Branding Details Found</h2>
        <p className="text-gray-600 mb-6">It looks like you landed here without publishing any brand. Please go back to the studio to generate and publish a brand.</p>
        <Link to="/">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go to Branding Studio
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-2 mb-6 border-b pb-4">
        <BookOpen className="h-6 w-6 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">Heritage Brand Showcase</h1>
      </div>

      <Card className="p-8 shadow-xl bg-white border border-gray-100 mb-8">
        <div className="flex items-start gap-6 mb-8 pb-6 border-b border-gray-100">
          <span className="text-7xl leading-none">{brandingResult.logo}</span>
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{businessName || "Unnamed Artisan Brand"}</h2>
            <p className="text-xl font-semibold text-gray-700 italic">{brandingResult.tagline}</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Brand Story & Vision</h3>
          <p className="text-md text-gray-700 leading-relaxed mb-4">{brandingResult.description}</p>
          <div className="bg-orange-50 border-l-4 border-orange-400 pl-4 py-3 rounded-r-md">
            <p className="text-lg italic text-orange-800 font-medium">"{brandingResult.culturalStory}"</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Visual Identity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg text-gray-700 mb-2">Color Palette</h4>
              <div className="flex flex-wrap gap-3">
                {brandingResult.colorPalette.map((c) => (
                  <div key={c} className="h-12 w-12 rounded-full border-2 border-gray-200 shadow-sm flex items-center justify-center text-xs text-gray-700 relative group" style={{ backgroundColor: c }}>
                    <span className="absolute bottom-full mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-700 mb-2">Key Marketing Image</h4>
              <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 shadow-inner">
                {brandingResult.marketingImages && brandingResult.marketingImages.length > 0 ? (
                  <ImageWithFallback
                    src={brandingResult.marketingImages[0]}
                    alt="Brand marketing image"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center text-sm text-gray-500 p-4">
                    <FileImage className="mx-auto h-8 w-8 mb-2 text-gray-400" />
                    No image provided.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Featured Creations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandingResult.productDescriptions.map((p, idx) => (
              <Card key={idx} className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-xl text-gray-800 mb-2">{p.name}</h4>
                <p className="text-sm text-gray-700 mb-3">{p.description}</p>
                <p className="text-sm text-orange-700 mb-2 font-medium"><Star className="inline h-4 w-4 mr-1 mb-0.5" /> Cultural Significance: {p.culturalSignificance}</p>
                <p className="text-xs text-gray-600 mb-2">Materials: <span className="font-medium">{p.materials.join(", ")}</span></p>
                <p className="text-lg font-semibold text-gray-800 mt-3">Price: {p.pricing}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><Share2 className="h-6 w-6 text-blue-500" />Social Media Voice</h3>
          <div className="space-y-4">
            {brandingResult.socialMediaContent.map((post, idx) => (
              <Card key={idx} className="p-4 text-base bg-blue-50 border border-blue-200 rounded-lg">
                <p>{post}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><Languages className="h-6 w-6 text-green-600" />Global Reach (Translations)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(brandingResult.translations).map(([lang, data]) => (
              <Card key={lang} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-bold text-lg text-green-800 capitalize mb-1">{lang}</h4>
                <p className="text-sm text-gray-700"><strong>Tagline:</strong> {data.tagline}</p>
                <p className="text-xs text-gray-600"><strong>Description:</strong> {data.description}</p>
              </Card>
            ))}
          </div>
        </div>

      </Card>

      <div className="mt-8 flex justify-center">
        <Link to="/">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Branding Studio
          </Button>
        </Link>
      </div>
    </div>
  );
}