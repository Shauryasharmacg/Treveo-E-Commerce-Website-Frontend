import React, { useState } from 'react';
import { Screen, Product, CartItem } from './types';
import { PRODUCTS } from './data/catalog';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingConcierge } from './components/FloatingConcierge';
import { CommissionModal } from './components/CommissionModal';
import { HomeView } from './views/HomeView';
import { CatalogView } from './views/CatalogView';
import { ProductView } from './views/ProductView';
import { CheckoutView } from './views/CheckoutView';
import { PatronPortalView } from './views/PatronPortalView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('atelier-chrono');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['atelier-chrono', 'aura-horizon']);

  // Custom product images with persistent browser storage
  const [customImages, setCustomImages] = useState<Record<string, string>>(() => {
    try {
      const stored = localStorage.getItem('atelier_custom_product_images');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const productsWithCustomImages = PRODUCTS.map((p) => ({
    ...p,
    imageUrl: customImages[p.id] || p.imageUrl,
  }));

  const handleUpdateProductImage = (productId: string, newImageUrl: string) => {
    setCustomImages((prev) => {
      const next = { ...prev, [productId]: newImageUrl };
      try {
        localStorage.setItem('atelier_custom_product_images', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleResetProductImage = (productId: string) => {
    setCustomImages((prev) => {
      const next = { ...prev };
      delete next[productId];
      try {
        localStorage.setItem('atelier_custom_product_images', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Initial cart items pre-populated to showcase rich interactions & match mockups
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Atelier Chrono
      quantity: 1,
      selectedColor: 'Aged Aerospace Brass',
      selectedTemp: '1800K Circadian Halo',
      customInscription: 'Salon Julian Vane • 2024'
    },
    {
      product: PRODUCTS[2], // Solstice Decanter Set
      quantity: 1,
      selectedColor: 'Smoked Lead-Free Crystal'
    }
  ]);

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentScreen('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, quantity = 1, color = 'Aged Aerospace Brass', temp = '1800K') => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [...prev, { product, quantity, selectedColor: color, selectedTemp: temp }];
    });
    setIsCartOpen(true);
  };

  const handleQuickAddById = (productId: string) => {
    const prod = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
    handleAddToCart(prod, 1);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.product.id !== productId));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F3] text-[#1D1B18] antialiased selection:bg-[#C5CAFA] selection:text-[#101D3B]">
      {/* Universal Top Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Main Screen Router */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentScreen === 'catalog' && (
          <CatalogView
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onQuickAdd={(product) => handleAddToCart(product, 1)}
            onOpenCommission={() => setIsCommissionOpen(true)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            products={productsWithCustomImages}
          />
        )}

        {currentScreen === 'product' && (
          <ProductView
            key={selectedProductId}
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            product={productsWithCustomImages.find(p => p.id === selectedProductId) || productsWithCustomImages[0]}
            onAddToCart={(product, qty, color, temp) => handleAddToCart(product, qty, color, temp)}
            isWishlisted={wishlistIds.includes(selectedProductId)}
            onToggleWishlist={() => handleToggleWishlist(selectedProductId)}
          />
        )}

        {currentScreen === 'checkout' && (
          <CheckoutView
            onNavigate={handleNavigate}
            cartItems={cartItems}
            onOrderSuccess={(orderId) => {
              // Could navigate to patron portal to see new order
              console.log('Order created:', orderId);
            }}
            onOpenConcierge={() => setIsConciergeOpen(true)}
          />
        )}

        {currentScreen === 'patron' && (
          <PatronPortalView
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleQuickAddById}
            onOpenCommission={() => setIsCommissionOpen(true)}
          />
        )}
      </main>

      {/* Universal Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCommission={() => setIsCommissionOpen(true)}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          handleNavigate('checkout');
        }}
        onOpenConcierge={() => {
          setIsCartOpen(false);
          setIsConciergeOpen(true);
        }}
      />

      {/* Floating Concierge Live Modal & Chat */}
      <FloatingConcierge
        isOpen={isConciergeOpen}
        onToggle={() => setIsConciergeOpen(!isConciergeOpen)}
        onClose={() => setIsConciergeOpen(false)}
      />

      {/* Bespoke Commissioning Dialog */}
      <CommissionModal
        isOpen={isCommissionOpen}
        onClose={() => setIsCommissionOpen(false)}
      />
    </div>
  );
}
