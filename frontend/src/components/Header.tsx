import { useState } from "react";
import { Button } from "./ui/button";
import {
  MdShoppingCart as ShoppingCart,
  MdSearch as Search,
  MdMenu as Menu,
  MdPalette as Palette,
  MdArchive as Archive,
  MdMenuBook as Book,
  MdCalendarToday as Calendar,
  MdClose as Close,
} from "react-icons/md";

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
  onAIBrandingClick: () => void;
  onHeritageCapsuleClick: () => void;
  onLivingStoriesClick: () => void;
  onEventCalendarClick: () => void;
}

export function Header({
  cartItems,
  onCartClick,
  onAIBrandingClick,
  onHeritageCapsuleClick,
  onLivingStoriesClick,
  onEventCalendarClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[rgba(34,0,0,0.86)] backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <h1 className="text-2xl font-bold text-orange-200">ArteNact</h1>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full opacity-80"></div>
            </div>
            <span className="ml-3 text-sm text-orange-100/80 italic hidden sm:block">
              Folk Artisans Marketplace
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Artisans", "Products", "Collections", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-orange-100/90 hover:text-orange-200 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex text-orange-200 hover:bg-orange-200/10"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Desktop Only Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onLivingStoriesClick}
                className="bg-orange-100/10 border-orange-200/30 text-orange-200 hover:bg-orange-100/20"
              >
                <Book className="h-4 w-4 mr-2" />
                Stories
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={onEventCalendarClick}
                className="bg-orange-100/10 border-orange-200/30 text-orange-200 hover:bg-orange-100/20"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={onHeritageCapsuleClick}
                className="bg-orange-100/10 border-orange-200/30 text-orange-200 hover:bg-orange-100/20"
              >
                <Archive className="h-4 w-4 mr-2" />
                Heritage
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={onAIBrandingClick}
                className="bg-orange-200/20 border-orange-300/40 text-orange-100 hover:bg-orange-200/30"
              >
                <Palette className="h-4 w-4 mr-2" />
                AI Studio
              </Button>
            </div>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onCartClick}
              className="relative text-orange-200 hover:bg-orange-200/10"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-orange-900 text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                  {cartItems}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-orange-200 hover:bg-orange-200/10"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 md:hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-[rgba(34,0,0,0.95)] shadow-lg p-6 flex flex-col space-y-6 animate-slide-in">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-orange-200">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
                className="text-orange-200 hover:bg-orange-200/10"
              >
                <Close className="h-5 w-5" />
              </Button>
            </div>

            {/* Links */}
            <nav className="flex flex-col space-y-4 text-orange-100">
              {["Artisans", "Products", "Collections", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-orange-200 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex flex-col space-y-3">
              <Button
                variant="outline"
                size="sm"
                onClick={onLivingStoriesClick}
                className="bg-orange-100/10 border-orange-200/30 text-orange-200"
              >
                <Book className="h-4 w-4 mr-2" />
                Stories
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onEventCalendarClick}
                className="bg-orange-100/10 border-orange-200/30 text-orange-200"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onHeritageCapsuleClick}
                className="bg-orange-100/10 border-orange-200/30 text-orange-200"
              >
                <Archive className="h-4 w-4 mr-2" />
                Heritage
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onAIBrandingClick}
                className="bg-orange-200/20 border-orange-300/40 text-orange-100"
              >
                <Palette className="h-4 w-4 mr-2" />
                AI Studio
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
