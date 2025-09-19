import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { MdRemove as Minus, MdAdd as Plus, MdDelete as Trash2, MdShoppingBag as ShoppingBag } from "react-icons/md";
import type { Product } from "./ProductCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CartItem {
  product: Product;
  quantity: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function ShoppingCart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: ShoppingCartProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart ({items.length})
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-medium mb-2">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Add some beautiful handcrafted items to get started
              </p>
              <Button onClick={onClose}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Cart Items */}
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <Card key={item.product.id} className="p-4">
                    <div className="flex gap-3">
                      {/* Product Image */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2">{item.product.name}</h4>
                        <p className="text-xs text-muted-foreground">by {item.product.artisan}</p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-semibold text-sm">${item.product.price}</span>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => onUpdateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                              onClick={() => onRemoveItem(item.product.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <Card className="p-4 bg-muted/30">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping === 0 && (
                    <div className="flex justify-end">
                      <Badge variant="secondary" className="text-xs">Free shipping on orders $100+</Badge>
                    </div>
                  )}
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </Card>

              {/* Checkout Button */}
              <div className="space-y-2">
                <Button className="w-full">
                  Proceed to Checkout
                </Button>
                <Button variant="outline" className="w-full" onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}