import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import { Screen } from '../types';

interface HeaderProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenConcierge: () => void;
  onSearchClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenConcierge,
  onSearchClick,
}) => {
  return (
    <header className="w-full bg-[#101D3B] text-white border-b border-[#283556] sticky top-0 z-40 transition-all duration-300">
      {/* Top utility announcement bar */}
      <div className="bg-[#000416] text-[#C6C6CE] text-[11px] uppercase tracking-[0.14em] font-medium border-b border-[#1A2645] px-4 sm:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="hidden sm:block text-[#9DA2B3]">
          EST. 2024 • MILAN • PARIS • TOKYO
        </div>
        
        <div className="flex-1 text-center font-semibold text-[#EBD5B3] hover:text-white transition-colors cursor-pointer">
          <button 
            onClick={() => onNavigate('catalog')}
            className="inline-flex items-center gap-2 hover:underline"
          >
            <span>&larr;</span>
            <span>FREE SHIPPING WORLDWIDE ON ORDERS OVER $100</span>
            <span>&rarr;</span>
          </button>
        </div>

        <div className="flex items-center gap-4 text-[#9DA2B3]">
          <span className="hover:text-white transition-colors cursor-pointer">CURRENCY (USD $)</span>
          <span>/</span>
          <button 
            onClick={onOpenConcierge}
            className="hover:text-[#C5CAFA] transition-colors cursor-pointer font-semibold text-white uppercase"
          >
            CONCIERGE
          </button>
        </div>
      </div>

      {/* Main Brand & Navigation bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-6">
        {/* Brand Wordmark */}
        <div 
          onClick={() => onNavigate('home')} 
          className="cursor-pointer group flex flex-col select-none"
        >
          <span className="font-serif text-2xl sm:text-[28px] tracking-[0.18em] uppercase font-normal text-white group-hover:text-[#C5CAFA] transition-colors">
            TROVEO
          </span>
          <span className="text-[9px] uppercase tracking-[0.38em] text-[#9DA2B3] -mt-1 group-hover:text-[#EBD5B3] transition-colors">
            MAISON CURATION
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[12px] uppercase font-bold tracking-[0.12em]">
          <button
            onClick={() => onNavigate('catalog')}
            className={`transition-colors py-1 relative ${
              currentScreen === 'catalog' 
                ? 'text-[#C5CAFA] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C5CAFA]' 
                : 'text-[#E5E2DC] hover:text-white'
            }`}
          >
            SHOP ALL
          </button>
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors py-1 relative ${
              currentScreen === 'home' 
                ? 'text-[#C5CAFA] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C5CAFA]' 
                : 'text-[#E5E2DC] hover:text-white'
            }`}
          >
            COLLECTIONS
          </button>
          <button
            onClick={() => onNavigate('product')}
            className={`transition-colors py-1 relative ${
              currentScreen === 'product' 
                ? 'text-[#C5CAFA] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C5CAFA]' 
                : 'text-[#E5E2DC] hover:text-white'
            }`}
          >
            CRAFTSMANSHIP
          </button>
          <button
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('acclaim-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="text-[#E5E2DC] hover:text-white transition-colors py-1"
          >
            ACCLAIM
          </button>
          <button
            onClick={onSearchClick || (() => onNavigate('catalog'))}
            className="text-[#E5E2DC] hover:text-[#C5CAFA] transition-colors py-1 flex items-center gap-1.5"
          >
            SEARCH
          </button>
        </nav>

        {/* Right Icon Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={onSearchClick || (() => onNavigate('catalog'))}
            aria-label="Search Catalog"
            className="text-[#E5E2DC] hover:text-[#C5CAFA] transition-colors p-1"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cart Bag with badge */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="relative text-[#E5E2DC] hover:text-white transition-colors p-1 group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#C5CAFA] text-[#101D3B] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-[#101D3B]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Patron Enclave / User Profile */}
          <button
            onClick={() => onNavigate('patron')}
            aria-label="Patron Enclave"
            className={`relative p-1 transition-colors rounded-full ${
              currentScreen === 'patron'
                ? 'text-[#C5CAFA] ring-2 ring-[#C5CAFA]'
                : 'text-[#E5E2DC] hover:text-[#C5CAFA]'
            }`}
            title="Patron Enclave — Julian Vane"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
