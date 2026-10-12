import React, { useState } from 'react';
import { Globe, Instagram, Share2, Mail, Apple, Smartphone, Check } from 'lucide-react';
import { Screen } from '../types';

interface FooterProps {
  onNavigate: (screen: Screen) => void;
  onOpenCommission: () => void;
  onOpenConcierge?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCommission, onOpenConcierge }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#101D3B] text-white pt-16 pb-12 px-4 sm:px-8 border-t border-[#202E52]">
      <div className="max-w-[1440px] mx-auto bg-[#F9F2ED] text-[#1D1B18] rounded-[28px] p-8 sm:p-14 border border-[#DFD9D4]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div 
                onClick={() => onNavigate('home')} 
                className="cursor-pointer inline-block select-none"
              >
                <h3 className="font-serif text-3xl sm:text-4xl tracking-[0.16em] uppercase text-[#101D3B]">
                  TROVEO
                </h3>
              </div>
              <p className="mt-4 text-[#45464E] text-base leading-relaxed max-w-md font-sans">
                An uncompromising sanctuary for curated artefacts, bespoke furniture, and tactile luxury for modern interiors.
              </p>
            </div>

            {/* Newsletter Dispatch */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#101D3B] mb-2">
                THE GAZETTE DISPATCH
              </h4>
              <p className="text-xs text-[#75777E] mb-4">
                Private preview invitations, artisan releases, and architectural essays.
              </p>

              {subscribed ? (
                <div className="p-3 bg-[#EBF7EE] border-2 border-[#2E7D32] text-[#1B5E20] text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Your correspondence address has been inscribed to the dispatch ledger.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your correspondence email"
                    className="flex-1 bg-white border-2 border-[#101D3B] px-4 py-2.5 text-xs text-[#1D1B18] placeholder-[#75777E] focus:outline-none focus:bg-[#FFF8F3]"
                  />
                  <button
                    type="submit"
                    className="bg-[#C5CAFA] text-[#101D3B] border-2 border-[#101D3B] font-bold text-xs uppercase px-6 py-2.5 tracking-wider hover:bg-[#B3B9F5] transition-colors cursor-pointer shrink-0 shadow-brutalist-xs"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              )}
            </div>

            {/* Mobile App Download badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#app-store"
                onClick={(e) => { e.preventDefault(); }}
                className="flex items-center gap-2.5 px-3 py-2 bg-white border border-[#DFD9D4] rounded-lg text-xs font-semibold text-[#101D3B] hover:border-[#101D3B] transition-colors"
              >
                <Apple className="w-4 h-4" />
                <div className="text-left leading-none">
                  <div className="text-[9px] text-[#75777E] uppercase">Download on</div>
                  <div className="text-[11px] font-bold">App Store</div>
                </div>
              </a>

              <a
                href="#google-play"
                onClick={(e) => { e.preventDefault(); }}
                className="flex items-center gap-2.5 px-3 py-2 bg-white border border-[#DFD9D4] rounded-lg text-xs font-semibold text-[#101D3B] hover:border-[#101D3B] transition-colors"
              >
                <Smartphone className="w-4 h-4" />
                <div className="text-left leading-none">
                  <div className="text-[9px] text-[#75777E] uppercase">Get it on</div>
                  <div className="text-[11px] font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Columns: Nav Taxonomies */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Curation */}
            <div>
              <h5 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#101D3B] mb-4">
                CURATION
              </h5>
              <ul className="space-y-3 text-xs text-[#45464E]">
                <li><button onClick={() => onNavigate('catalog')} className="hover:text-[#101D3B] transition-colors text-left">New Releases</button></li>
                <li><button onClick={() => onNavigate('catalog')} className="hover:text-[#101D3B] transition-colors text-left">Archival Furniture</button></li>
                <li><button onClick={() => onNavigate('catalog')} className="hover:text-[#101D3B] transition-colors text-left">Sculptural Objects</button></li>
                <li><button onClick={() => onNavigate('catalog')} className="hover:text-[#101D3B] transition-colors text-left">Fine Textiles</button></li>
                <li><button onClick={() => onNavigate('catalog')} className="hover:text-[#101D3B] transition-colors text-left">Limited Editions</button></li>
              </ul>
            </div>

            {/* Houses */}
            <div>
              <h5 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#101D3B] mb-4">
                HOUSES
              </h5>
              <ul className="space-y-3 text-xs text-[#45464E]">
                <li><button onClick={() => onNavigate('product')} className="hover:text-[#101D3B] transition-colors text-left">Atelier Kyoto</button></li>
                <li><button onClick={() => onNavigate('catalog')} className="hover:text-[#101D3B] transition-colors text-left">Studio Carrara</button></li>
                <li><button onClick={() => onNavigate('catalog')} className="hover:text-[#101D3B] transition-colors text-left">Nordic Foundry</button></li>
                <li><button onClick={() => onNavigate('patron')} className="hover:text-[#101D3B] transition-colors text-left">Provenance</button></li>
                <li><button onClick={() => onNavigate('product')} className="hover:text-[#101D3B] transition-colors text-left">Materiality</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#101D3B] mb-4">
                SERVICES
              </h5>
              <ul className="space-y-3 text-xs text-[#45464E]">
                <li><button onClick={onOpenCommission} className="hover:text-[#101D3B] transition-colors text-left">Private Viewing</button></li>
                <li><button onClick={() => onNavigate('patron')} className="hover:text-[#101D3B] transition-colors text-left">White Glove Care</button></li>
                <li><button onClick={onOpenCommission} className="hover:text-[#101D3B] transition-colors text-left">Trade & Architecture</button></li>
                <li><button onClick={() => onNavigate('patron')} className="hover:text-[#101D3B] transition-colors text-left">Authentication</button></li>
                <li><button onClick={onOpenCommission} className="hover:text-[#101D3B] transition-colors text-left">Restoration</button></li>
              </ul>
            </div>

            {/* Institutional */}
            <div>
              <h5 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#101D3B] mb-4">
                INSTITUTIONAL
              </h5>
              <ul className="space-y-3 text-xs text-[#45464E]">
                <li><a href="#acclaim" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="hover:text-[#101D3B] transition-colors">Press Acclaim</a></li>
                <li><a href="#exhibitions" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="hover:text-[#101D3B] transition-colors">Exhibitions</a></li>
                <li><a href="#sustainability" onClick={(e) => { e.preventDefault(); onNavigate('product'); }} className="hover:text-[#101D3B] transition-colors">Sustainability</a></li>
                <li><a href="#legal" onClick={(e) => { e.preventDefault(); }} className="hover:text-[#101D3B] transition-colors">Legal & Privacy</a></li>
                <li><a href="#governance" onClick={(e) => { e.preventDefault(); }} className="hover:text-[#101D3B] transition-colors">Governance</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Social Row */}
        <div className="mt-14 pt-8 border-t border-[#DFD9D4] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#75777E]">
          <div>
            © 2024 TROVEO Curation Corp. All international rights reserved.
          </div>

          <div className="flex items-center gap-5 text-[#45464E]">
            <button aria-label="Global Network" className="hover:text-[#101D3B] transition-colors">
              <Globe className="w-4 h-4" />
            </button>
            <button aria-label="Instagram Archive" className="hover:text-[#101D3B] transition-colors">
              <Instagram className="w-4 h-4" />
            </button>
            <button aria-label="Share Archive" className="hover:text-[#101D3B] transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button aria-label="Email Curator" className="hover:text-[#101D3B] transition-colors">
              <Mail className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <span className="hover:text-[#101D3B] transition-colors cursor-pointer">
              Privacy Notice
            </span>
            <span>•</span>
            <span className="hover:text-[#101D3B] transition-colors cursor-pointer">
              Terms of Sale
            </span>
            <span>•</span>
            <button onClick={() => onNavigate('patron')} className="hover:text-[#101D3B] transition-colors cursor-pointer">
              Provenance Index
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
