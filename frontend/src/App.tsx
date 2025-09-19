import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedArtisans } from "./components/FeaturedArtisans";
import { HeritageBanner } from "./components/HeritageBanner";
import { ProductGrid } from "./components/ProductGrid";
import { AIBrandingTool } from "./components/AIBrandingTool";
import { HeritageCapsule } from "./components/HeritageCapsule";
import { LivingStories } from "./components/LivingStories";
import { EventCalendar } from "./components/EventCalendar";
import { ShoppingCart } from "./components/ShoppingCart";
import { Footer } from "./components/Footer";
import type { Product } from "./components/ProductCard";

interface CartItem {
  product: Product;
  quantity: number;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAIBrandingOpen, setIsAIBrandingOpen] = useState(false);
  const [isHeritageCapsuleOpen, setIsHeritageCapsuleOpen] = useState(false);
  const [isLivingStoriesOpen, setIsLivingStoriesOpen] = useState(false);
  const [isEventCalendarOpen, setIsEventCalendarOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeItem(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.product.id !== productId)
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen relative" style={{
      background: 'linear-gradient(135deg, #f8f5f0 0%, #f4f1e8 25%, #f6f3ee 50%, #f2efe8 75%, #f7f4f1 100%)'
    }}>
      {/* Global Retro Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(30deg, transparent 40%, #8B4513 41%, #8B4513 42%, transparent 43%),
                           linear-gradient(150deg, transparent 40%, #CD853F 41%, #CD853F 42%, transparent 43%)`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      <div className="relative z-10">
        <Header
          cartItems={totalItems}
          onCartClick={() => setIsCartOpen(true)}
          onAIBrandingClick={() => setIsAIBrandingOpen(true)}
          onHeritageCapsuleClick={() => setIsHeritageCapsuleOpen(true)}
          onLivingStoriesClick={() => setIsLivingStoriesOpen(true)}
          onEventCalendarClick={() => setIsEventCalendarOpen(true)}
        />
        
        <main>
          <Hero 
            onAIBrandingClick={() => setIsAIBrandingOpen(true)}
            onEventCalendarClick={() => setIsEventCalendarOpen(true)}
            onLivingStoriesClick={() => setIsLivingStoriesOpen(true)}
          />
          <FeaturedArtisans />
          <HeritageBanner onHeritageCapsuleClick={() => setIsHeritageCapsuleOpen(true)} />
          <ProductGrid onAddToCart={addToCart} />
        </main>

        <Footer />
      </div>

      {/* Modals */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      <AIBrandingTool
        isOpen={isAIBrandingOpen}
        onClose={() => setIsAIBrandingOpen(false)}
      />

      <HeritageCapsule
        isOpen={isHeritageCapsuleOpen}
        onClose={() => setIsHeritageCapsuleOpen(false)}
      />

      <LivingStories
        isOpen={isLivingStoriesOpen}
        onClose={() => setIsLivingStoriesOpen(false)}
      />

      <EventCalendar
        isOpen={isEventCalendarOpen}
        onClose={() => setIsEventCalendarOpen(false)}
      />
    </div>
  );
}