import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  artisan: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  isFavorite: boolean;
}

export function ProductCard({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="group bg-white dark:bg-zinc-900 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-green-600 text-white shadow-md">New</Badge>
          )}
          {product.isFeatured && (
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md">
              Featured
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-red-600 text-white shadow-md">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 h-9 w-9 p-0 bg-white dark:bg-zinc-800 rounded-full shadow-md hover:scale-110 transition-transform"
          onClick={() => onToggleFavorite(product.id)}
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </Button>

        {/* Quick Add Button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground italic">{product.category}</span>
          <div className="flex items-center gap-1 text-xs font-medium">
            <span className="text-yellow-500">★</span>
            <span className="text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>

        {/* Artisan */}
        <p className="text-sm text-muted-foreground">by {product.artisan}</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
