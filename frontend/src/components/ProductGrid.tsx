import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ProductCard } from "./ProductCard";
import type { Product } from "./ProductCard";
import { Filter, SortAsc } from "lucide-react";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: "1",
    name: "Handcrafted Ceramic Bowl Set",
    price: 89,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1695740639466-7baecca4224d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjZXJhbWljc3xlbnwxfHx8fDE3NTgyNjEyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    artisan: "Maria Santos",
    category: "Pottery",
    rating: 4.9,
    reviews: 47,
    isNew: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Traditional Woven Table Runner",
    price: 65,
    image: "https://images.unsplash.com/photo-1593671186131-d58817e7dee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHRleHRpbGVzJTIwd2VhdmluZ3xlbnwxfHx8fDE3NTgyNjEyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    artisan: "Rajesh Kumar",
    category: "Textiles",
    rating: 4.8,
    reviews: 32,
    isFeatured: true
  },
  {
    id: "3",
    name: "Silver Pendant Necklace",
    price: 145,
    originalPrice: 180,
    image: "https://images.unsplash.com/photo-1756792339453-bc4aa26fc0cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwamV3ZWxyeSUyMGhhbmRtYWRlfGVufDF8fHx8MTc1ODI2MTI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    artisan: "Elena Popov",
    category: "Jewelry",
    rating: 4.7,
    reviews: 28
  },
  {
    id: "4",
    name: "Hand-carved Wooden Sculpture",
    price: 220,
    image: "https://images.unsplash.com/photo-1643944406742-a5c2c7add564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY2FydmluZyUyMGNyYWZ0c3xlbnwxfHx8fDE3NTgyNjEyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    artisan: "James Wilson",
    category: "Wood Art",
    rating: 4.9,
    reviews: 19,
    isNew: true
  },
  {
    id: "5",
    name: "Embroidered Throw Pillow",
    price: 42,
    originalPrice: 55,
    image: "https://images.unsplash.com/photo-1613544591623-38e1d59c20fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZvbGslMjBhcnR8ZW58MXx8fHwxNzU4MjYxMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    artisan: "Ana Rodriguez",
    category: "Textiles",
    rating: 4.6,
    reviews: 15
  },
  {
    id: "6",
    name: "Ceramic Tea Set",
    price: 125,
    image: "https://images.unsplash.com/photo-1695740639466-7baecca4224d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjZXJhbWljc3xlbnwxfHx8fDE3NTgyNjEyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    artisan: "Maria Santos",
    category: "Pottery",
    rating: 4.8,
    reviews: 41
  }
];

const categories = ["All", "Pottery", "Textiles", "Jewelry", "Wood Art"];

export function ProductGrid({ onAddToCart }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredProducts = products.filter(product =>
    selectedCategory === "All" || product.category === selectedCategory
  );

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <section className="py-16 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #f9f6f1 0%, #f6f2eb 50%, #f3efea 100%)'
    }}>
      {/* Retro Market Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vintage marketplace texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, #8B4513 1deg, transparent 2deg),
                           repeating-radial-gradient(circle at 30% 70%, transparent 0px, #CD853F 2px, transparent 4px)`,
          backgroundSize: '120px 120px, 60px 60px'
        }}></div>

        {/* Retro shop-style decorations */}
        <div className="absolute top-20 left-1/4 w-6 h-6 border-2 border-orange-300/25 transform rotate-45"></div>
        <div className="absolute top-40 right-1/3 w-4 h-8 bg-amber-400/15 transform -rotate-30"></div>
        <div className="absolute bottom-32 left-1/3 w-8 h-4 bg-red-400/10 transform rotate-15"></div>
        <div className="absolute bottom-20 right-1/4 w-5 h-5 border border-orange-400/20 rounded-full"></div>

        {/* Vintage storefront elements */}
        <div className="absolute top-10 left-10 w-20 h-1 bg-orange-300/30"></div>
        <div className="absolute top-10 right-10 w-20 h-1 bg-orange-300/30"></div>
        <div className="absolute bottom-10 left-10 w-16 h-1 bg-amber-400/30"></div>
        <div className="absolute bottom-10 right-10 w-16 h-1 bg-amber-400/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <div className="w-16 h-0.5 bg-orange-500 mb-3"></div>
            <p className="text-muted-foreground">Discover unique handcrafted items from artisans worldwide</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <SortAsc className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProducts.length} products
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>

          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="text-xs">
              {selectedCategory}
            </Badge>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={toggleFavorite}
              isFavorite={favorites.has(product.id)}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
}
