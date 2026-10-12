import React, { useState } from 'react';
import { 
  Heart, 
  RotateCw, 
  ZoomIn, 
  ShieldCheck, 
  Truck, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  ArrowRight,
  Maximize2,
  Volume2,
  Battery,
  Sun,
  X,
  Layers,
  Sparkles,
  Check
} from 'lucide-react';
import { Product, Screen } from '../types';
import { PRODUCTS } from '../data/catalog';

interface ProductViewProps {
  onNavigate: (screen: Screen) => void;
  onSelectProduct?: (productId: string) => void;
  onAddToCart: (product: Product, quantity: number, color: string, temp: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  product?: Product;
}

export const ProductView: React.FC<ProductViewProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  product = PRODUCTS[0],
}) => {
  const currentProduct = product || PRODUCTS[0];
  const images = currentProduct.gallery && currentProduct.gallery.length > 0 
    ? currentProduct.gallery 
    : [currentProduct.imageUrl];

  const [activeThumb, setActiveThumb] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState<string>(
    currentProduct.materials?.[0] || 'Standard'
  );
  const [selectedTemp, setSelectedTemp] = useState<'1800k' | '2700k' | '4000k'>('1800k');
  const [selectedDispersalMode, setSelectedDispersalMode] = useState<string>('Continuous Rest');
  const [isRotating, setIsRotating] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const isLighting = currentProduct.categorySlug === 'circadian' || currentProduct.id === 'atelier-chrono';
  const isAtmospheric = currentProduct.categorySlug === 'atmospheric';

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleRotate = () => {
    setIsRotating(true);
    setRotationAngle((prev) => (prev + 90) % 360);
    setTimeout(() => setIsRotating(false), 600);
  };

  const handleAddToCartClick = () => {
    onAddToCart(currentProduct, quantity, selectedMaterial, selectedTemp);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2400);
  };

  // Companions from the remaining catalog
  const companions = PRODUCTS.filter((p) => p.id !== currentProduct.id).slice(0, 2);

  // Dynamic spec cards from product.specs
  const specEntries = Object.entries(currentProduct.specs || {});

  return (
    <div className="w-full bg-[#FFF8F3] text-[#1D1B18] min-h-screen">
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#101D3B] text-white px-5 py-3 border-2 border-[#C5CAFA] shadow-2xl flex items-center gap-3 animate-bounce">
          <Check className="w-4 h-4 text-[#C5CAFA]" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Added to your bespoke curation
          </span>
        </div>
      )}

      {/* Lightbox Zoom Modal */}
      {isZoomed && (
        <div 
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#C5CAFA] flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest cursor-pointer"
            >
              <X className="w-5 h-5" />
              <span>CLOSE INSPECTION</span>
            </button>
            <img
              src={images[activeThumb] || currentProduct.imageUrl}
              alt={currentProduct.name}
              className="max-h-[82vh] max-w-full object-contain border-2 border-white/20 shadow-2xl"
            />
            <div className="text-center text-white/80 text-xs font-mono mt-3">
              {currentProduct.name} • 10x Macro Resolution Study
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumbs matching Design */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-8 pb-4 border-b border-[#DFD9D4] flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 text-[#75777E] font-medium tracking-wider">
          <button onClick={() => onNavigate('home')} className="hover:text-[#101D3B] cursor-pointer">
            HOME
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('catalog')} className="hover:text-[#101D3B] cursor-pointer">
            {currentProduct.category.toUpperCase()}
          </button>
          <span>/</span>
          <span className="text-[#101D3B] font-bold uppercase">
            {currentProduct.name}
          </span>
        </div>

        <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#75777E] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#EBD5B3]" />
          <span>{currentProduct.atelier} • CURATED RELEASE</span>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Gallery & In-situ Imagery */}
          <div className="lg:col-span-7 space-y-6">
            {/* Hero Main Image Container */}
            <div className="relative aspect-[4/3] bg-[#E7E1DC] border-2 border-[#101D3B] overflow-hidden group shadow-sm">
              <img
                src={images[activeThumb] || currentProduct.imageUrl}
                alt={currentProduct.name}
                referrerPolicy="no-referrer"
                style={{
                  transform: `rotate(${rotationAngle}deg)`,
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="w-full h-full object-cover"
              />

              {/* Ambient Ring Glow Simulation (for lighting pieces) */}
              {isLighting && (
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    boxShadow: selectedTemp === '1800k' 
                      ? 'inset 0 0 100px rgba(255, 140, 0, 0.35)' 
                      : selectedTemp === '2700k' 
                      ? 'inset 0 0 90px rgba(255, 200, 100, 0.3)' 
                      : 'inset 0 0 70px rgba(200, 230, 255, 0.25)'
                  }}
                />
              )}

              {/* Top Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-[#101D3B] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EBD5B3]" />
                  <span>{currentProduct.editionNo}</span>
                </span>
                {currentProduct.badge && (
                  <span className="bg-[#EBD5B3] text-[#101D3B] text-[9px] font-bold uppercase tracking-wider px-2 py-1 shadow-sm border border-[#101D3B]/20">
                    {currentProduct.badge}
                  </span>
                )}
              </div>

              {currentProduct.weight && (
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#101D3B] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 border border-[#101D3B]">
                    {currentProduct.weight.toUpperCase()}
                  </span>
                </div>
              )}

              {/* Bottom Interactive Buttons */}
              <div className="absolute bottom-4 left-4">
                <button
                  onClick={handleRotate}
                  className="bg-white/90 hover:bg-white text-[#101D3B] border border-[#101D3B] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-transform active:scale-95 cursor-pointer"
                >
                  <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
                  <span>360° PERSPECTIVE</span>
                </button>
              </div>

              <div className="absolute bottom-4 right-4">
                <button
                  onClick={() => setIsZoomed(true)}
                  className="bg-white/90 hover:bg-white text-[#101D3B] border border-[#101D3B] p-2 shadow-sm transition-transform active:scale-95 cursor-pointer"
                  aria-label="Zoom image inspection"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveThumb(idx)}
                  className={`aspect-square border-2 overflow-hidden transition-all cursor-pointer bg-[#F3EDE8] ${
                    activeThumb === idx ? 'border-[#101D3B] ring-2 ring-[#C5CAFA]' : 'border-[#DFD9D4] opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${currentProduct.name} thumbnail ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Spec Bar below thumbnails */}
            <div className="bg-[#FAF6EE] border border-[#DFD9D4] p-4 flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#101D3B] shrink-0" />
                <div>
                  <div className="font-bold text-[#101D3B] text-[11px] uppercase tracking-wider">
                    {currentProduct.atelier} • {currentProduct.shippingTime}
                  </div>
                  <div className="text-[#75777E] text-[10px]">
                    Individually weighed, acoustic-calibrated, and documented in archive registry.
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('technical-blueprint');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[10px] font-bold uppercase tracking-wider text-[#101D3B] underline whitespace-nowrap hover:text-[#525E7F] cursor-pointer"
              >
                FULL BLUEPRINT
              </button>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              {/* Badges */}
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#EBD5B3] text-[#101D3B] border border-[#101D3B] text-[9px] font-black uppercase tracking-[0.14em] px-2 py-0.5">
                  {currentProduct.materialBadge || currentProduct.badge || currentProduct.category.toUpperCase()}
                </span>
                <span className="text-[11px] italic font-serif text-[#75777E]">
                  {currentProduct.atelier}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl text-[#101D3B] leading-tight">
                {currentProduct.name}
              </h1>

              {/* Collector rating */}
              <div className="flex items-center gap-2 mt-2 text-xs text-[#75777E]">
                <div className="flex text-[#D97706]">
                  {'★★★★★'}
                </div>
                <span className="font-bold text-[#101D3B]">
                  {currentProduct.rating ? `${currentProduct.rating.toFixed(2)} / 5.0` : '4.95 / 5.0'}
                </span>
                <span>•</span>
                <span className="underline cursor-pointer">
                  {currentProduct.reviewCount || 64} Collector Accolades
                </span>
              </div>
            </div>

            {/* Price & Duty Info */}
            <div className="bg-[#F9F2ED] border border-[#DFD9D4] p-5 space-y-3">
              <div className="flex items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-normal text-[#101D3B] tabular-nums">
                    ${currentProduct.price}
                  </span>
                  <span className="text-xs font-bold text-[#75777E]">USD</span>
                </div>

                <span className="bg-[#D9E2FF] text-[#0D1A38] border border-[#101D3B] text-[9px] font-black uppercase tracking-wider px-2 py-0.5">
                  COMPLIMENTARY DUTY & TAX INCLUDED
                </span>
              </div>

              <p className="text-[11px] text-[#45464E] leading-normal">
                Or 4 interest-free instalments of <strong className="text-[#101D3B]">${(currentProduct.price / 4).toFixed(2)}</strong> with Klarna or Afterpay.
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#45464E] leading-relaxed">
              {currentProduct.description}
            </p>

            {/* Materiality & Alloy Selector */}
            {currentProduct.materials && currentProduct.materials.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-[#DFD9D4]">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-[#75777E] text-[10px]">MATERIALITY & ALLOY:</span>
                  <span className="text-[#101D3B]">{selectedMaterial}</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {currentProduct.materials.map((material, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedMaterial(material)}
                      className={`p-3 bg-white border-2 flex flex-col items-center gap-2 transition-all cursor-pointer ${
                        selectedMaterial === material 
                          ? 'border-[#101D3B] shadow-sm ring-1 ring-[#101D3B]' 
                          : 'border-[#DFD9D4] hover:border-[#101D3B]'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border border-[#101D3B] ${
                        idx === 0 
                          ? 'bg-[#D4AF37]' 
                          : idx === 1 
                          ? 'bg-[#1A1A1A]' 
                          : 'bg-[#E0E0E0]'
                      }`} />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#101D3B] text-center line-clamp-1">
                        {material}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Temperature or Mode Selector */}
            {isLighting && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-[#75777E] text-[10px]">CIRCADIAN LIGHT SPECTRUM:</span>
                  <span className="text-[#75777E] text-[10px] font-mono">Zero-Flicker PWM</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedTemp('1800k')}
                    className={`p-2.5 text-left border-2 transition-all cursor-pointer ${
                      selectedTemp === '1800k' ? 'bg-[#FAF6EE] border-[#101D3B]' : 'bg-white border-[#DFD9D4]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#101D3B]">
                      <span className="w-2 h-2 rounded-full bg-[#FF8C00]" />
                      <span>1800K Amber</span>
                    </div>
                    <div className="text-[9px] text-[#75777E] mt-0.5">Deep sleep safe</div>
                  </button>

                  <button
                    onClick={() => setSelectedTemp('2700k')}
                    className={`p-2.5 text-left border-2 transition-all cursor-pointer ${
                      selectedTemp === '2700k' ? 'bg-[#FAF6EE] border-[#101D3B]' : 'bg-white border-[#DFD9D4]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#101D3B]">
                      <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
                      <span>2700K Dusk</span>
                    </div>
                    <div className="text-[9px] text-[#75777E] mt-0.5">Warm bedside</div>
                  </button>

                  <button
                    onClick={() => setSelectedTemp('4000k')}
                    className={`p-2.5 text-left border-2 transition-all cursor-pointer ${
                      selectedTemp === '4000k' ? 'bg-[#FAF6EE] border-[#101D3B]' : 'bg-white border-[#DFD9D4]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#101D3B]">
                      <span className="w-2 h-2 rounded-full bg-[#E0F2FE]" />
                      <span>4000K Dawn</span>
                    </div>
                    <div className="text-[9px] text-[#75777E] mt-0.5">Day focus mode</div>
                  </button>
                </div>
              </div>
            )}

            {isAtmospheric && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-[#75777E] text-[10px]">ATOMISATION DISPERSAL:</span>
                  <span className="text-[#75777E] text-[10px] font-mono">Cold Ultrasonic</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {['Continuous Rest', 'Intermittent Pulse', 'Sub-Audible Night'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setSelectedDispersalMode(mode)}
                      className={`p-2.5 text-left border-2 transition-all cursor-pointer ${
                        selectedDispersalMode === mode ? 'bg-[#FAF6EE] border-[#101D3B]' : 'bg-white border-[#DFD9D4]'
                      }`}
                    >
                      <div className="text-[11px] font-bold text-[#101D3B]">{mode}</div>
                      <div className="text-[9px] text-[#75777E] mt-0.5">Whisper calibration</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Allocation Quantity & Add to Cart button */}
            <div className="space-y-3 pt-4 border-t border-[#DFD9D4]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#75777E]">
                  ALLOCATION QUANTITY
                </span>
                <span className="text-[10px] font-bold text-[#D97706] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse" />
                  <span>Limited micro-batch release</span>
                </span>
              </div>

              <div className="flex items-stretch gap-3">
                {/* Stepper */}
                <div className="inline-flex items-center border-2 border-[#101D3B] bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-12 flex items-center justify-center font-bold text-sm hover:bg-[#FAF6EE] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-[#101D3B] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-12 flex items-center justify-center font-bold text-sm hover:bg-[#FAF6EE] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Primary Add to Cart Button */}
                <button
                  onClick={handleAddToCartClick}
                  className="flex-1 bg-[#C5CAFA] text-[#101D3B] border-2 border-[#101D3B] py-3.5 px-6 font-bold text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-brutalist hover:shadow-brutalist-hover transition-all active:translate-y-1 cursor-pointer"
                >
                  <span>ADD TO CART — ${(currentProduct.price * quantity).toFixed(2)} USD</span>
                </button>

                {/* Wishlist Heart button */}
                <button
                  onClick={onToggleWishlist}
                  className={`w-12 h-12 border-2 border-[#101D3B] flex items-center justify-center transition-colors cursor-pointer ${
                    isWishlisted ? 'bg-[#101D3B] text-white' : 'bg-white text-[#101D3B] hover:bg-[#FAF6EE]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
                </button>
              </div>
            </div>

            {/* Trust Warranty Lines */}
            <div className="pt-4 border-t border-[#DFD9D4] space-y-2 text-xs text-[#75777E]">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#101D3B]" />
                <span>Worldwide express insured transit</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#101D3B]" />
                <span>10-Year mechanical & structural atelier warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Editorial Feature Section Tailored to Product */}
      {currentProduct.editorial && (
        <section className="bg-[#FAF6EE] py-20 px-4 sm:px-8 border-y-2 border-[#101D3B]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75777E]">
                {currentProduct.editorial.kicker}
              </div>
              
              <h2 className="font-serif text-4xl sm:text-5xl text-[#101D3B] leading-tight">
                {currentProduct.editorial.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#45464E] leading-relaxed">
                {currentProduct.editorial.description}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#DFD9D4]">
                <div>
                  <div className="font-serif text-2xl text-[#101D3B]">
                    {currentProduct.editorial.stat1.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#75777E]">
                    {currentProduct.editorial.stat1.label}
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-[#101D3B]">
                    {currentProduct.editorial.stat2.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#75777E]">
                    {currentProduct.editorial.stat2.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image with Caption */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] bg-[#1C1410] rounded-xl overflow-hidden border-2 border-[#101D3B] shadow-lg">
                <img
                  src={currentProduct.editorial.image}
                  alt={currentProduct.editorial.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-6 z-10 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/20">
                  <span className="font-serif italic text-white text-sm sm:text-base drop-shadow-md">
                    {currentProduct.editorial.caption}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technical Blueprint Section */}
      <section id="technical-blueprint" className="py-20 px-4 sm:px-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-10 pb-4 border-b border-[#DFD9D4]">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75777E]">
              ARCHITECTURE & ENGINEERING
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#101D3B] mt-1">
              Technical Blueprint: {currentProduct.name}
            </h2>
          </div>
          <div className="text-[10px] font-mono uppercase text-[#75777E]">
            {currentProduct.editionNo} • ISO 9001 Calibrated
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Dimensions & Mass */}
          <div className="bg-[#FAF6EE] border border-[#DFD9D4] p-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#101D3B] mb-4 border border-[#DFD9D4]">
                <Maximize2 className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-[#101D3B]">Dimensions & Mass</h3>
              <p className="text-xs text-[#75777E] mt-2">
                {currentProduct.dimensions || 'Precision architectural profile'}
              </p>
            </div>
            <div className="font-bold text-xs text-[#101D3B] pt-4 border-t border-[#DFD9D4]">
              {currentProduct.weight || 'Solid Handcrafted Mass'}
            </div>
          </div>

          {/* Cards 2, 3, 4 from specs */}
          {specEntries.slice(0, 3).map(([key, val], idx) => {
            const icons = [Volume2, Sun, Battery];
            const IconComponent = icons[idx % icons.length];
            return (
              <div key={key} className="bg-[#FAF6EE] border border-[#DFD9D4] p-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#101D3B] mb-4 border border-[#DFD9D4]">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg text-[#101D3B]">{key}</h3>
                  <p className="text-xs text-[#75777E] mt-2">{val}</p>
                </div>
                <div className="font-bold text-xs text-[#101D3B] pt-4 border-t border-[#DFD9D4]">
                  {currentProduct.atelier} Standard
                </div>
              </div>
            );
          })}

          {/* Fallback card if fewer than 3 specs */}
          {specEntries.length < 3 && (
            <div className="bg-[#FAF6EE] border border-[#DFD9D4] p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#101D3B] mb-4 border border-[#DFD9D4]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#101D3B]">Material Purity</h3>
                <p className="text-xs text-[#75777E] mt-2">
                  Zero composite fillers. Hand-burnished natural finish.
                </p>
              </div>
              <div className="font-bold text-xs text-[#101D3B] pt-4 border-t border-[#DFD9D4]">
                Generational Longevity
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Dispatches & Provenance Accordion */}
      {currentProduct.dispatches && currentProduct.dispatches.length > 0 && (
        <section className="py-16 px-4 sm:px-8 max-w-[1440px] mx-auto border-t border-[#DFD9D4]">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75777E] mb-2">
              ATELIER DOCUMENTATION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#101D3B] mb-8">
              Dispatches & Provenance
            </h2>

            <div className="space-y-4">
              {currentProduct.dispatches.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF6EE] border border-[#DFD9D4] overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-base font-serif text-[#101D3B] hover:bg-[#F3EDE8] transition-colors cursor-pointer"
                  >
                    <span>{item.title}</span>
                    {openAccordion === idx ? (
                      <ChevronUp className="w-5 h-5 text-[#101D3B]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#75777E]" />
                    )}
                  </button>
                  {openAccordion === idx && (
                    <div className="px-5 pb-5 text-xs text-[#45464E] leading-relaxed border-t border-[#DFD9D4]/50 pt-3">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Companions For The Bedside & Desk */}
      <section className="py-20 px-4 sm:px-8 max-w-[1440px] mx-auto border-t border-[#DFD9D4]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75777E]">
              SPATIAL COHESION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#101D3B] mt-1">
              Companions For The Bedside & Desk
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => onNavigate('catalog')}
              className="px-4 py-2 border border-[#101D3B] text-[10px] font-bold uppercase tracking-wider hover:bg-[#FAF6EE] cursor-pointer"
            >
              VIEW ALL EDITIONS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companions.map((companion) => (
            <div 
              key={companion.id}
              className="bg-[#FAF6EE] border border-[#DFD9D4] p-6 flex flex-col sm:flex-row gap-6 items-center"
            >
              <div 
                onClick={() => onSelectProduct?.(companion.id)}
                className="w-36 h-36 bg-[#E7E1DC] shrink-0 border border-[#DFD9D4] overflow-hidden cursor-pointer"
              >
                <img
                  src={companion.imageUrl}
                  alt={companion.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-[9px] font-bold uppercase tracking-wider text-[#75777E]">
                  {companion.category.toUpperCase()} • {companion.materialBadge || companion.badge}
                </div>
                <h3 
                  onClick={() => onSelectProduct?.(companion.id)}
                  className="font-serif text-xl text-[#101D3B] cursor-pointer hover:underline"
                >
                  {companion.name}
                </h3>
                <p className="text-xs text-[#75777E] line-clamp-2">
                  {companion.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-serif text-lg font-bold text-[#101D3B]">
                    ${companion.price} USD
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct?.(companion.id)}
                      className="px-3 py-1.5 border border-[#101D3B] text-[10px] font-bold uppercase hover:bg-white cursor-pointer"
                    >
                      EXPLORE
                    </button>
                    <button
                      onClick={() => {
                        onAddToCart(companion, 1, companion.materials?.[0] || 'Standard', '1800k');
                        setAddedToast(true);
                        setTimeout(() => setAddedToast(false), 2400);
                      }}
                      className="px-3 py-1.5 bg-[#C5CAFA] border border-[#101D3B] text-[10px] font-bold uppercase hover:bg-[#B3B9F5] cursor-pointer"
                    >
                      QUICK ADD +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
