import React from 'react';
import { X, Trash2, ShieldCheck, Lock, Headphones } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  onOpenConcierge: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onOpenConcierge,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const klarnaInstallment = (subtotal / 4).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Blurred Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#000416]/65 backdrop-blur-md transition-opacity duration-300" 
      />

      {/* Slide-out Drawer from Right */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-[580px] bg-[#FFF8F3] text-[#1D1B18] shadow-2xl flex flex-col justify-between border-l-2 border-[#101D3B]">
          
          {/* Top Complimentary Transit Bar */}
          <div className="bg-[#EBD5B3] border-b border-[#101D3B] px-6 py-2.5 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.1em] text-[#101D3B]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#101D3B]" />
              <span>COMPLIMENTARY WORLDWIDE EXPRESS TRANSIT UNLOCKED</span>
            </div>
            <span className="text-[10px] text-[#53452B] font-extrabold tracking-wider">100% COMPLETED</span>
          </div>

          {/* Drawer Header */}
          <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-[#E7E1DC] flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75777E]">
                PRIVATE PORTFOLIO
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#101D3B]">
                Your Curation <span className="text-xl font-normal text-[#75777E]">({totalItemCount} Objects)</span>
              </h2>
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#101D3B] text-[11px] font-bold uppercase tracking-wider text-[#101D3B] hover:bg-[#101D3B] hover:text-white transition-colors cursor-pointer"
            >
              <span>CONTINUE SHOPPING</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Scrollable Items Container */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F3EDE8] flex items-center justify-center text-[#75777E]">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl text-[#101D3B]">Your curation is empty</h3>
                <p className="text-sm text-[#75777E] max-w-xs mx-auto">
                  Explore The Permanent Collection to commission masterworks for your sanctuary.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-[#101D3B] text-white font-bold text-xs uppercase tracking-wider shadow-brutalist-xs"
                >
                  DISCOVER THE ARCHIVE
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={item.product.id}
                  className="bg-white border border-[#DFD9D4] p-4 sm:p-5 flex gap-4 sm:gap-5 shadow-sm"
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#F3EDE8] shrink-0 border border-[#DFD9D4] overflow-hidden flex items-center justify-center">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Resilient fallback SVG
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#75777E]">
                          {item.product.categorySlug === 'horology' ? 'HOROLOGY • ATELIER CRAFT' : 'GLASSWARE • ATELIER MURANO'}
                        </span>
                        <span className="font-sans font-bold text-base text-[#101D3B] tabular-nums">
                          ${(item.product.price * item.quantity).toFixed(2)} USD
                        </span>
                      </div>

                      <h4 className="font-serif text-lg text-[#101D3B] leading-snug mt-0.5">
                        {item.product.name.split('—')[0]}
                      </h4>

                      <p className="text-[11px] text-[#75777E] mt-1 leading-normal line-clamp-2">
                        {item.product.id === 'atelier-chrono'
                          ? 'Aged Aerospace Brass • 1800K Amber Circadian Halo • Serialized Edition No. 04 / 500'
                          : 'Smoked Fluted Crystal • Hand-Blown Silhouette • 850ml Vessel & Matching Pair'}
                      </p>
                    </div>

                    {/* Stepper & Relinquish button */}
                    <div className="flex items-center justify-between pt-3 mt-2 border-t border-[#F3EDE8]">
                      {/* Quantity Stepper */}
                      <div className="inline-flex items-center border border-[#101D3B] bg-[#FFF8F3]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="w-7 h-7 flex items-center justify-center text-xs font-bold hover:bg-[#F3EDE8] disabled:opacity-40 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-[#101D3B] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-xs font-bold hover:bg-[#F3EDE8] cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      {/* Relinquish button */}
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[10px] font-bold uppercase tracking-wider text-[#75777E] hover:text-[#BA1A1A] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>RELINQUISH</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout & Subtotal Summary Area */}
          {items.length > 0 && (
            <div className="bg-[#FAF6EE] border-t-2 border-[#101D3B] p-6 sm:p-8 space-y-4">
              {/* Financial Lines */}
              <div className="space-y-2 text-xs font-medium text-[#45464E]">
                <div className="flex justify-between">
                  <span>Curated Subtotal</span>
                  <span className="font-bold text-[#101D3B] tabular-nums">${subtotal.toFixed(2)} USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span>White Glove Transit</span>
                    <span className="bg-[#D9E2FF] text-[#0D1A38] text-[9px] font-black uppercase px-1.5 py-0.5 border border-[#101D3B]">
                      COMPLIMENTARY
                    </span>
                  </div>
                  <span className="font-bold text-[#101D3B]">$0.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span>Import Duties & Value Added Tax</span>
                  <span className="text-[#101D3B] font-semibold">Calculated & Prepaid</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="pt-3 border-t border-[#DFD9D4] flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#101D3B]">
                    Total Curation
                  </div>
                  <div className="text-[10px] text-[#75777E] mt-0.5">
                    OR 4 INSTALLMENTS OF <strong className="text-[#101D3B]">${klarnaInstallment}</strong> WITH KLARNA
                  </div>
                </div>
                <div className="font-serif text-3xl font-normal text-[#101D3B] tabular-nums">
                  ${subtotal.toFixed(2)} USD
                </div>
              </div>

              {/* Primary Brutalist Proceed to Checkout Button */}
              <button
                onClick={onProceedToCheckout}
                className="w-full bg-[#C5CAFA] text-[#101D3B] border-2 border-[#101D3B] py-3.5 px-6 font-bold text-xs uppercase tracking-[0.12em] flex items-center justify-center gap-2 shadow-brutalist transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-none cursor-pointer"
              >
                <span>PROCEED TO CHECKOUT — ${subtotal.toFixed(2)} USD</span>
                <Lock className="w-3.5 h-3.5" />
              </button>

              {/* Express Wallets: Apple Pay & Shop Pay */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={onProceedToCheckout}
                  className="bg-[#000000] text-white py-2.5 font-sans font-bold text-xs rounded-none border border-black flex items-center justify-center gap-1.5 hover:bg-[#1A1A1A] transition-colors cursor-pointer"
                >
                  <span className="text-sm"></span> Pay
                </button>
                <button
                  onClick={onProceedToCheckout}
                  className="bg-[#5A31F4] text-white py-2.5 font-sans font-bold text-xs rounded-none flex items-center justify-center gap-1 hover:bg-[#4E27E0] transition-colors cursor-pointer"
                >
                  Shop<span className="text-[#00D775]">Pay</span>
                </button>
              </div>

              {/* Security & Transit badge */}
              <div className="text-center pt-2">
                <p className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#75777E]">
                  ENCRYPTED 256-BIT SSL ATELIER PROTECTION • DISPATCH WITHIN 48H
                </p>
              </div>
            </div>
          )}

          {/* Floating Concierge Badge inside drawer */}
          <div className="px-6 py-2 bg-[#101D3B] flex items-center justify-end">
            <button
              onClick={onOpenConcierge}
              className="inline-flex items-center gap-2 bg-[#1C2C54] text-[#C5CAFA] border border-[#2F4374] px-3 py-1 text-[10px] font-bold uppercase tracking-wider hover:bg-[#25396B] transition-colors rounded-full cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#C5CAFA] animate-pulse" />
              <span>CONCIERGE LIVE</span>
              <Headphones className="w-3 h-3 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
