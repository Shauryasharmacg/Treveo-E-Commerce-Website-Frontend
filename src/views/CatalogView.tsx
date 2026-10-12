import React, { useState, useMemo } from 'react';
import { Search, Heart, LayoutGrid, List, SlidersHorizontal, ArrowLeft, ArrowRight, Truck, Award, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '../data/catalog';
import { Product, Screen } from '../types';

interface CatalogViewProps {
  onNavigate: (screen: Screen) => void;
  onSelectProduct: (productId: string) => void;
  onQuickAdd: (product: Product) => void;
  onOpenCommission: () => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  products?: Product[];
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  onNavigate: _onNavigate,
  onSelectProduct,
  onQuickAdd,
  onOpenCommission,
  wishlistIds,
  onToggleWishlist,
  products = PRODUCTS,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTaxonomy, setActiveTaxonomy] = useState<'all' | 'horology' | 'circadian' | 'atmospheric' | 'barware'>('all');
  const [availableOnly, setAvailableOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(700);
  const [archiveFilter, setArchiveFilter] = useState<boolean | null>(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [page, setPage] = useState<number>(1);

  const [selectedMaterialFilter, setSelectedMaterialFilter] = useState<string>('ALL');
  const [isMaterialDropdownOpen, setIsMaterialDropdownOpen] = useState(false);

  const materialsList = ['ALL', 'BRASS', 'TITANIUM', 'CRYSTAL', 'ALABASTER', 'STONE'];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (activeTaxonomy !== 'all' && p.categorySlug !== activeTaxonomy) return false;
      if (selectedMaterialFilter !== 'ALL') {
        const mat = selectedMaterialFilter.toLowerCase();
        const hasMat = (p.materialBadge && p.materialBadge.toLowerCase().includes(mat)) ||
          (p.materials && p.materials.some(m => m.toLowerCase().includes(mat)));
        if (!hasMat) return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matches =
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.atelier.toLowerCase().includes(query) ||
          p.editionNo.toLowerCase().includes(query);
        if (!matches) return false;
      }
      if (availableOnly && !p.availableInAtelier) return false;
      if (p.price > maxPrice) return false;
      if (archiveFilter && !p.isArchiveEdition) return false;
      return true;
    });
  }, [activeTaxonomy, selectedMaterialFilter, searchQuery, availableOnly, maxPrice, archiveFilter, products]);

  const resetFilters = () => {
    setActiveTaxonomy('all');
    setSearchQuery('');
    setAvailableOnly(false);
    setMaxPrice(1000);
    setArchiveFilter(null);
  };

  return (
    <div className="w-full bg-[#FFF8F3] text-[#1D1B18] min-h-screen">
      {/* Title & Editorial Headliner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-8">
        <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#75777E] mb-2">
          CATALOGUE ARCHIVE • VOLUME IV
        </div>
        
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-[76px] font-normal tracking-[-0.02em] leading-tight text-[#101D3B]">
          The Permanent Collection
        </h1>

        <p className="mt-4 font-serif italic text-base sm:text-xl text-[#45464E] max-w-3xl leading-relaxed">
          “Objects of quiet permanence and precision — engineered through tactile resonance, aerospace metallurgy, and atmospheric calm.”
        </p>

        {/* Search Bar matching Image 1 */}
        <div className="mt-8 relative max-w-xl">
          <div className="flex items-center border-2 border-[#101D3B] bg-white shadow-sm">
            <Search className="w-4 h-4 text-[#75777E] ml-4 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by material, atelier, or function..."
              className="w-full py-3 px-3 text-xs text-[#1D1B18] placeholder-[#75777E] focus:outline-none"
            />
            <div className="border-l border-[#DFD9D4] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#75777E] shrink-0 text-right leading-tight">
              <div>18</div>
              <div>WORKS</div>
            </div>
          </div>
        </div>

        {/* Taxonomy Category Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#75777E] mr-2">
            TAXONOMY:
          </span>
          {[
            { id: 'all', label: 'ALL OBJECTS (18)' },
            { id: 'horology', label: 'HOROLOGY & TIME (4)' },
            { id: 'circadian', label: 'CIRCADIAN LIGHT (5)' },
            { id: 'atmospheric', label: 'ATMOSPHERIC & SCENT (3)' },
            { id: 'barware', label: 'BARWARE & LIVING (6)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTaxonomy(tab.id as any)}
              className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeTaxonomy === tab.id
                  ? 'bg-[#101D3B] text-white border-[#101D3B]'
                  : 'bg-white text-[#1D1B18] border-[#DFD9D4] hover:border-[#101D3B]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sub-Filters Ribbon matching Image 1 */}
        <div className="mt-6 pt-4 border-t border-[#DFD9D4] flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
          <div className="flex flex-wrap items-center gap-3">
            {/* Material dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsMaterialDropdownOpen(!isMaterialDropdownOpen)}
                className="px-3 py-1.5 bg-white border border-[#101D3B] text-[11px] uppercase tracking-wider font-bold flex items-center gap-2 hover:bg-[#F9F2ED] cursor-pointer"
              >
                <span>MATERIAL: {selectedMaterialFilter}</span>
                <span>⌵</span>
              </button>
              {isMaterialDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-[#101D3B] shadow-lg z-30 py-1 min-w-[140px]">
                  {materialsList.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => {
                        setSelectedMaterialFilter(mat);
                        setIsMaterialDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider hover:bg-[#F3EDE8] cursor-pointer ${
                        selectedMaterialFilter === mat ? 'bg-[#FAF6EE] text-[#101D3B] font-black' : 'text-[#45464E]'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Available in atelier checkbox */}
            <label className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#101D3B] text-[11px] uppercase tracking-wider font-bold cursor-pointer hover:bg-[#F9F2ED]">
              <input
                type="checkbox"
                checked={availableOnly}
                onChange={(e) => setAvailableOnly(e.target.checked)}
                className="w-3.5 h-3.5 accent-[#101D3B]"
              />
              <span>AVAILABLE IN ATELIER</span>
            </label>

            {/* Price Range button */}
            <button
              onClick={() => setMaxPrice(maxPrice === 700 ? 1000 : 700)}
              className={`px-3 py-1.5 border border-[#101D3B] text-[11px] uppercase tracking-wider font-bold flex items-center gap-1.5 transition-colors ${
                maxPrice === 700 ? 'bg-[#FAF6EE] text-[#101D3B]' : 'bg-white text-[#1D1B18]'
              }`}
            >
              <span>RANGE: UNDER ${maxPrice}</span>
              <SlidersHorizontal className="w-3 h-3 ml-1" />
            </button>

            {/* Archive Edition filter badge */}
            {archiveFilter && (
              <span className="px-3 py-1.5 bg-[#D9E2FF] border border-[#101D3B] text-[11px] uppercase tracking-wider font-bold flex items-center gap-1.5 text-[#0D1A38]">
                <span>ARCHIVE EDITION</span>
                <button 
                  onClick={() => setArchiveFilter(false)} 
                  className="hover:text-black font-black"
                >
                  ✕
                </button>
              </span>
            )}

            {/* Reset link */}
            <button
              onClick={resetFilters}
              className="text-[11px] uppercase tracking-wider text-[#75777E] underline hover:text-[#101D3B] ml-1"
            >
              RESET
            </button>
          </div>

          {/* Right Sort & Layout toggles */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase text-[#75777E] font-bold tracking-wider">
              SORT ORDER:
            </span>
            <select className="bg-white border border-[#101D3B] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider focus:outline-none cursor-pointer">
              <option>CURATED SELECTION</option>
              <option>PRICE: HIGH TO LOW</option>
              <option>PRICE: LOW TO HIGH</option>
              <option>EDITION CHRONOLOGY</option>
            </select>

            <div className="flex border border-[#101D3B] bg-white">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 ${viewMode === 'grid' ? 'bg-[#101D3B] text-white' : 'text-[#1D1B18] hover:bg-[#FAF6EE]'}`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 ${viewMode === 'list' ? 'bg-[#101D3B] text-white' : 'text-[#1D1B18] hover:bg-[#FAF6EE]'}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Grid matching Image 1 exactly */}
        <div className={`mt-8 grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="group bg-white border-2 border-[#101D3B] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-brutalist relative"
              >
                {/* Image Container with Badges */}
                <div 
                  onClick={() => onSelectProduct(product.id)}
                  className="relative aspect-[4/3] bg-[#F3EDE8] overflow-hidden cursor-pointer border-b-2 border-[#101D3B]"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Top-left Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                    {product.badge && (
                      <span className="bg-[#FAF6EE] text-[#101D3B] border border-[#101D3B] text-[9px] font-black uppercase tracking-[0.14em] px-2 py-0.5 shadow-sm">
                        {product.badge}
                      </span>
                    )}
                    {product.materialBadge && (
                      <span className="bg-[#C5CAFA] text-[#101D3B] border border-[#101D3B] text-[9px] font-black uppercase tracking-[0.14em] px-2 py-0.5 shadow-sm">
                        {product.materialBadge}
                      </span>
                    )}
                  </div>

                  {/* Top-right Wishlist Heart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-none border border-[#101D3B] flex items-center justify-center transition-colors z-10 cursor-pointer ${
                      isWishlisted ? 'bg-[#101D3B] text-white' : 'bg-white/90 text-[#101D3B] hover:bg-white'
                    }`}
                    aria-label="Add to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category / Edition & Price */}
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#75777E]">
                        {product.editionNo}
                      </span>
                      <span className="font-serif text-2xl font-normal text-[#101D3B] tabular-nums">
                        ${product.price}
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3 
                      onClick={() => onSelectProduct(product.id)}
                      className="font-serif text-2xl text-[#101D3B] mt-2 group-hover:text-[#525E7F] transition-colors cursor-pointer leading-snug"
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#45464E] mt-2.5 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Bottom Footer Info & Quick Add Button */}
                  <div className="mt-6 pt-4 border-t border-[#DFD9D4] flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#75777E] leading-tight">
                      {product.atelier} • {product.shippingTime}
                    </span>

                    <button
                      onClick={() => onQuickAdd(product)}
                      className="px-4 py-2 bg-[#E7E1DC] hover:bg-[#C5CAFA] text-[#101D3B] border-2 border-[#101D3B] font-bold text-xs uppercase tracking-wider transition-all hover:shadow-brutalist-xs active:translate-y-0.5 cursor-pointer whitespace-nowrap"
                    >
                      QUICK ADD
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bespoke Architectural Commissioning Banner matching Image 1 */}
        <div className="mt-16 bg-[#F9F2ED] border-2 border-[#101D3B] p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75777E] mb-2">
              PROVENANCE & INTEGRITY
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#101D3B]">
              Bespoke Architectural Commissioning
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#45464E] leading-relaxed">
              Seeking numbered editions for residential estates or boutique hospitality? TROVEO Concierge collaborates directly with our master ateliers in Kyoto, Carrara, and Milan to calibrate finishes, dimming protocols, and customized scales.
            </p>
          </div>

          <button
            onClick={onOpenCommission}
            className="bg-[#101D3B] text-white border-2 border-[#101D3B] px-8 py-4 font-bold text-xs uppercase tracking-[0.14em] hover:bg-[#000416] transition-all shadow-brutalist-sm hover:shadow-brutalist active:translate-y-1 cursor-pointer whitespace-nowrap shrink-0"
          >
            REQUEST COMMISSION DOSSIER
          </button>
        </div>

        {/* Pagination matching Image 1 */}
        <div className="mt-12 pt-6 border-t border-[#DFD9D4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#75777E]">
          <div>
            DISPLAYING 1 – {filteredProducts.length} OF 18 WORKS
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="w-8 h-8 border border-[#101D3B] bg-white flex items-center justify-center text-[#101D3B] hover:bg-[#FAF6EE] disabled:opacity-40"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPage(1)}
              className={`w-8 h-8 border border-[#101D3B] flex items-center justify-center font-bold ${
                page === 1 ? 'bg-[#101D3B] text-white' : 'bg-white text-[#101D3B]'
              }`}
            >
              1
            </button>
            <button
              onClick={() => setPage(2)}
              className={`w-8 h-8 border border-[#101D3B] flex items-center justify-center font-bold ${
                page === 2 ? 'bg-[#101D3B] text-white' : 'bg-white text-[#101D3B]'
              }`}
            >
              2
            </button>
            <button
              onClick={() => setPage(3)}
              className={`w-8 h-8 border border-[#101D3B] flex items-center justify-center font-bold ${
                page === 3 ? 'bg-[#101D3B] text-white' : 'bg-white text-[#101D3B]'
              }`}
            >
              3
            </button>
            <button
              onClick={() => setPage(Math.min(3, page + 1))}
              className="w-8 h-8 border border-[#101D3B] bg-white flex items-center justify-center text-[#101D3B] hover:bg-[#FAF6EE]"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="uppercase tracking-widest text-[10px]">
            CATALOGUE REF: TRV-ED4-2024
          </div>
        </div>

        {/* Trust Strip matching Image 1 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-[#101D3B] p-6 flex items-start gap-4">
            <Truck className="w-6 h-6 text-[#101D3B] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#101D3B]">
                WHITE-GLOVE DELIVERY
              </h4>
              <p className="text-xs text-[#75777E] mt-1 leading-relaxed">
                Complimentary insurance & global transit over $100.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-[#101D3B] p-6 flex items-start gap-4">
            <Award className="w-6 h-6 text-[#101D3B] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#101D3B]">
                LIFETIME CALIBRATION
              </h4>
              <p className="text-xs text-[#75777E] mt-1 leading-relaxed">
                Guaranteed atelier servicing & mechanical provenance.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-[#101D3B] p-6 flex items-start gap-4">
            <RotateCcw className="w-6 h-6 text-[#101D3B] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#101D3B]">
                30-DAY TACTILE TRIAL
              </h4>
              <p className="text-xs text-[#75777E] mt-1 leading-relaxed">
                Experience materiality in your sanctuary risk–free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
