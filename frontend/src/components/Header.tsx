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
  MdLogin as Login,
  MdPersonAdd as PersonAdd,
  MdHome as Home
} from "react-icons/md";

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
  onAIBrandingClick: () => void;
  onHeritageCapsuleClick: () => void;
  onLivingStoriesClick: () => void;
  onEventCalendarClick: () => void;
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

export function Header({
  cartItems,
  onCartClick,
  onHeritageCapsuleClick,
  onLivingStoriesClick,
  onEventCalendarClick,
  onSignInClick,
  onSignUpClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[rgba(34,0,0,0.9)] via-[rgba(50,0,0,0.88)] to-[rgba(34,0,0,0.9)] backdrop-blur-lg border-b border-orange-900/40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-md cursor-pointer" onClick={() => (window.location.hash = "#/")}>
                ArteNact
              </h1>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
            <span className="hidden sm:block text-sm text-orange-100/80 italic">
              Folk Artisans Marketplace
            </span>
          </div>

          {/* Desktop Menu & Actions */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.hash = "#/")}
              className="flex items-center space-x-1 rounded-lg border-orange-200/30 text-orange-200 bg-orange-100/10 hover:bg-orange-100/20 hover:shadow-md"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onLivingStoriesClick}
              className="flex items-center space-x-1 rounded-lg border-orange-200/30 text-orange-200 bg-orange-100/10 hover:bg-orange-100/20 hover:shadow-md"
            >
              <Book className="h-4 w-4" />
              <span>Stories</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onEventCalendarClick}
              className="flex items-center space-x-1 rounded-lg border-orange-200/30 text-orange-200 bg-orange-100/10 hover:bg-orange-100/20 hover:shadow-md"
            >
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onHeritageCapsuleClick}
              className="flex items-center space-x-1 rounded-lg border-orange-200/30 text-orange-200 bg-orange-100/10 hover:bg-orange-100/20 hover:shadow-md"
            >
              <Archive className="h-4 w-4" />
              <span>Heritage</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.hash = "#/studio")}
              className="flex items-center space-x-1 rounded-lg border-orange-300/40 text-orange-100 bg-orange-200/20 hover:bg-orange-200/30 hover:shadow-md"
            >
              <Palette className="h-4 w-4" />
              <span>AI Studio</span>
            </Button>

            {/* Auth Buttons */}
            <Button
              variant="outline"
              size="sm"
              onClick={onSignInClick}
              className="flex items-center space-x-1 rounded-lg border-orange-200/30 text-orange-200 bg-orange-100/10 hover:bg-orange-100/20 hover:shadow-md"
            >
              <Login className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
            

            <Button
              size="sm"
              onClick={onSignUpClick}
              className="flex mr-10  items-center space-x-1 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 shadow-md"
            >
              <PersonAdd className="h-4 w-4" />
              <span>Sign Up</span>
            </Button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex text-orange-200 hover:bg-orange-200/10 rounded-full"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onCartClick}
              className="relative text-orange-200 hover:bg-orange-200/10 rounded-full"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center shadow-lg">
                  {cartItems}
                </span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-orange-200 hover:bg-orange-200/10 rounded-full"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-md md:hidden">
          <div className="flex justify-between items-center p-6 border-b border-orange-900/40">
            <h2 className="text-lg font-bold text-orange-200">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-orange-200 hover:bg-orange-200/10 rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Close className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-grow overflow-auto px-6 py-4 space-y-6 text-orange-100 font-medium">
            {["Artisans", "Products", "Collections", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-xl hover:text-orange-300 transition-colors"
              >
                {item}
              </a>
            ))}

            <div className="mt-8 space-y-4">
              {[
                { label: "Home", icon: Home, onClick: () => { window.location.hash = "#/"; setMobileMenuOpen(false); } },
                { label: "Stories", icon: Book, onClick: onLivingStoriesClick },
                { label: "Events", icon: Calendar, onClick: onEventCalendarClick },
                { label: "Heritage", icon: Archive, onClick: onHeritageCapsuleClick },
                {
                  label: "AI Studio",
                  icon: Palette,
                  onClick: () => {
                    window.location.hash = "#/studio";
                    setMobileMenuOpen(false);
                  },
                },
              ].map((btn) => (
                <Button
                  key={btn.label}
                  variant="outline"
                  
                  onClick={btn.onClick}
                  className="w-full flex items-center space-x-2 rounded-lg border-orange-200/30 text-orange-200 bg-orange-100/10 hover:bg-orange-100/20"
                >
                  <btn.icon className="h-5 w-5" />
                  <span>{btn.label}</span>
                </Button>
              ))}

              {/* Auth */}
              <Button
                variant="outline"
               
                onClick={onSignInClick}
                className="w-full flex items-center space-x-2 rounded-lg border-orange-200/30 text-orange-200 bg-orange-100/10 hover:bg-orange-100/20"
              >
                <Login className="h-5 w-5" />
                <span>Sign In</span>
              </Button>

              <Button
               
                onClick={onSignUpClick}
                className="w-full flex items-center space-x-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 shadow-md"
              >
                <PersonAdd className="h-5 w-5" />
                <span>Sign Up</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
