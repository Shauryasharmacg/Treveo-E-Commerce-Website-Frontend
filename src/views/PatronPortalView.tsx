import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Plus, 
  SlidersHorizontal, 
  ExternalLink, 
  FileText, 
  Download, 
  Package, 
  Heart, 
  CheckCircle2, 
  ShoppingBag, 
  ChevronRight, 
  Info,
  Calendar,
  Lock,
  Compass,
  ArrowRight
} from 'lucide-react';
import { CONSIGNMENT_DOSSIERS, SAVED_ARTEFACTS, RESIDENCIES } from '../data/catalog';
import { Screen, ConsignmentDossier, SavedArtefact, ResidencyProtocol } from '../types';

interface PatronPortalViewProps {
  onNavigate: (screen: Screen) => void;
  onSelectProduct: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onOpenCommission: () => void;
}

type PatronTab = 'consignments' | 'saved' | 'residencies';

export const PatronPortalView: React.FC<PatronPortalViewProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onOpenCommission
}) => {
  const [activeTab, setActiveTab] = useState<PatronTab>('consignments');
  const [consignments, setConsignments] = useState<ConsignmentDossier[]>(CONSIGNMENT_DOSSIERS);
  const [savedArtefacts, setSavedArtefacts] = useState<SavedArtefact[]>(SAVED_ARTEFACTS);
  const [residencies, setResidencies] = useState<ResidencyProtocol[]>(RESIDENCIES);
  const [filterYear, setFilterYear] = useState<'all' | '2024' | '2023'>('all');
  const [addedItemNotification, setAddedItemNotification] = useState<string | null>(null);

  // Active dossier details
  const activeDossier = consignments.find(c => c.isLiveCommission) || consignments[0];

  const handleAcquireSaved = (item: SavedArtefact) => {
    // Map to product or add
    let prodId = 'atelier-chrono';
    if (item.id.includes('aura')) prodId = 'aura-horizon';
    else if (item.id.includes('lumen')) prodId = 'lumen-atelier';
    else if (item.id.includes('nocturne')) prodId = 'nocturne-vessel';
    else if (item.id.includes('solstice')) prodId = 'solstice-decanter';
    else if (item.id.includes('vesper')) prodId = 'vesper-sconce';

    onAddToCart(prodId);
    setAddedItemNotification(item.name);
    setTimeout(() => {
      setAddedItemNotification(null);
    }, 3500);
  };

  const filteredConsignments = consignments.filter(c => {
    if (filterYear === 'all') return true;
    return c.date.includes(filterYear);
  });

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1E1B18] pt-24 pb-20 selection:bg-[#EAE4D9]">
      {/* Toast Notification */}
      {addedItemNotification && (
        <div className="fixed top-24 right-6 z-50 bg-[#161412] text-white px-5 py-3.5 border-2 border-[#161412] shadow-[4px_4px_0px_#A89F91] flex items-center gap-3 animate-fade-in text-xs tracking-wider uppercase font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>ALLOCATED TO PRIVATE PORT: {addedItemNotification}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Portal Identifier */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-[#E3DCD1]/80 text-[11px] uppercase tracking-wider text-[#736E65]">
          <div className="flex items-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-black">MAISON ARCHIVE</button>
            <span>/</span>
            <span className="text-[#1E1B18] font-semibold">PATRON VAULT PROTOCOL</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              SECURE BIOMETRIC CLEARANCE ACTIVE
            </span>
            <span className="hidden sm:inline text-[#9E978C]">•</span>
            <span className="font-mono text-[#57534D]">PATRON ID: #TRV-89421-EU</span>
          </div>
        </div>

        {/* Hero Banner: Patron Identity Card */}
        <div className="mt-8 bg-gradient-to-br from-[#1F1C18] to-[#12100E] text-white p-6 sm:p-10 border-2 border-[#161412] shadow-[6px_6px_0px_#C8BFB0] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-[10px] tracking-widest font-mono uppercase border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E6C687]" />
                TIER 1 SOVEREIGN CURATOR • PRIVATE CELLAR & SALON
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-[#FAF7F2]">
                Julian Vane, Architecte
              </h1>
              <p className="text-xs sm:text-sm text-[#C4BCB0] max-w-2xl leading-relaxed">
                Primary Sanctuary: <span className="text-[#FAF7F2] font-medium">Résidence Beaujolais, Palais-Royal, Paris 1er</span> • Dedicated Liaison: <span className="text-[#FAF7F2] font-medium">Claire Delacroix (Kyoto & Milan Desk)</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button 
                onClick={onOpenCommission}
                className="px-5 py-3 bg-[#E6C687] text-[#161412] text-xs font-bold uppercase tracking-wider border-2 border-[#161412] shadow-[3px_3px_0px_#000] hover:bg-[#F3D79F] transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                INITIATE BESPOKE COMMISSION
              </button>
              <button 
                onClick={() => onNavigate('catalog')}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/30 transition-colors flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                EXPLORE VAULT ARCHIVE
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <div className="text-[10px] text-[#A69E91] uppercase tracking-wider">Acquired Works</div>
              <div className="text-lg font-serif text-[#FAF7F2] mt-0.5">07 Artefacts</div>
            </div>
            <div>
              <div className="text-[10px] text-[#A69E91] uppercase tracking-wider">Vault Total</div>
              <div className="text-lg font-serif text-[#FAF7F2] mt-0.5">€4,890.00 EUR</div>
            </div>
            <div>
              <div className="text-[10px] text-[#A69E91] uppercase tracking-wider">Active Consignments</div>
              <div className="text-lg font-serif text-[#E6C687] mt-0.5">01 in White-Glove Transit</div>
            </div>
            <div>
              <div className="text-[10px] text-[#A69E91] uppercase tracking-wider">Registered Residencies</div>
              <div className="text-lg font-serif text-[#FAF7F2] mt-0.5">03 Protocols</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-10 border-b-2 border-[#1E1B18] flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex items-center gap-2 sm:gap-6 min-w-max">
            <button
              onClick={() => setActiveTab('consignments')}
              className={`py-4 px-3 text-xs sm:text-sm uppercase tracking-widest font-semibold border-b-4 transition-all flex items-center gap-2 ${
                activeTab === 'consignments'
                  ? 'border-[#1E1B18] text-[#1E1B18]'
                  : 'border-transparent text-[#787268] hover:text-[#1E1B18]'
              }`}
            >
              <Package className="w-4 h-4" />
              CONSIGNMENT DOSSIERS & ESCORT
              <span className="px-1.5 py-0.5 text-[10px] bg-[#1E1B18] text-white rounded-none font-mono">
                {consignments.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`py-4 px-3 text-xs sm:text-sm uppercase tracking-widest font-semibold border-b-4 transition-all flex items-center gap-2 ${
                activeTab === 'saved'
                  ? 'border-[#1E1B18] text-[#1E1B18]'
                  : 'border-transparent text-[#787268] hover:text-[#1E1B18]'
              }`}
            >
              <Heart className="w-4 h-4" />
              SAVED ARTEFACTS & COMMISSIONS
              <span className="px-1.5 py-0.5 text-[10px] bg-[#EAE3D6] text-[#1E1B18] font-mono border border-[#1E1B18]">
                {savedArtefacts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('residencies')}
              className={`py-4 px-3 text-xs sm:text-sm uppercase tracking-widest font-semibold border-b-4 transition-all flex items-center gap-2 ${
                activeTab === 'residencies'
                  ? 'border-[#1E1B18] text-[#1E1B18]'
                  : 'border-transparent text-[#787268] hover:text-[#1E1B18]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              RESIDENCY PROTOCOLS & CADASTRE
              <span className="px-1.5 py-0.5 text-[10px] bg-[#EAE3D6] text-[#1E1B18] font-mono border border-[#1E1B18]">
                {residencies.length}
              </span>
            </button>
          </div>

          {activeTab === 'consignments' && (
            <div className="hidden md:flex items-center gap-2 text-xs font-mono pb-2">
              <span className="text-[#888175] uppercase text-[10px]">Filter Year:</span>
              <button 
                onClick={() => setFilterYear('all')}
                className={`px-2.5 py-1 text-[11px] border ${filterYear === 'all' ? 'bg-[#1E1B18] text-white border-[#1E1B18]' : 'bg-white text-[#524E48] border-[#D8D0C3]'}`}
              >
                ALL
              </button>
              <button 
                onClick={() => setFilterYear('2024')}
                className={`px-2.5 py-1 text-[11px] border ${filterYear === '2024' ? 'bg-[#1E1B18] text-white border-[#1E1B18]' : 'bg-white text-[#524E48] border-[#D8D0C3]'}`}
              >
                2024
              </button>
              <button 
                onClick={() => setFilterYear('2023')}
                className={`px-2.5 py-1 text-[11px] border ${filterYear === '2023' ? 'bg-[#1E1B18] text-white border-[#1E1B18]' : 'bg-white text-[#524E48] border-[#D8D0C3]'}`}
              >
                2023
              </button>
            </div>
          )}
        </div>

        {/* Tab 1: Consignment Dossiers & Escort Tracking */}
        {activeTab === 'consignments' && (
          <div className="mt-8 space-y-10">
            {/* Spotlight: Active Live Commission Escort Progress */}
            {activeDossier && activeDossier.isLiveCommission && (
              <div className="bg-[#FAF8F5] border-2 border-[#1E1B18] shadow-[5px_5px_0px_#1E1B18] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5DFD4]">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-mono uppercase tracking-wider font-semibold">
                      <Clock className="w-3 h-3 text-amber-700 animate-spin" />
                      LIVE DISPATCH PROTOCOL IN EXECUTION
                    </div>
                    <h2 className="text-2xl font-serif font-medium mt-2 text-[#1E1B18]">
                      Consignment Dossier {activeDossier.id}
                    </h2>
                    <p className="text-xs font-mono text-[#7D766C] mt-0.5">
                      {activeDossier.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-widest text-[#7D766C] block">Declared Valuation</span>
                    <span className="text-2xl font-serif font-bold text-[#1E1B18]">
                      €{activeDossier.total.toFixed(2)} EUR
                    </span>
                  </div>
                </div>

                {/* Progress Visualizer */}
                <div className="mt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono uppercase mb-2">
                    <span className="font-semibold text-[#1E1B18]">{activeDossier.stage}</span>
                    <span className="text-amber-800 font-semibold">{activeDossier.estimatedArrival}</span>
                  </div>
                  <div className="w-full bg-[#E8E2D6] h-3 border border-[#1E1B18] overflow-hidden p-0.5">
                    <div 
                      className="bg-[#1E1B18] h-full transition-all duration-500 ease-out"
                      style={{ width: `${activeDossier.stageProgress || 45}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3 text-[10px] font-mono text-[#7D766C] uppercase">
                    <div className="text-[#1E1B18] font-bold">1. Ingot Milling ✓</div>
                    <div className="text-[#1E1B18] font-bold">2. Acoustic Calib. (Active)</div>
                    <div>3. Archival Nitrogen Casing</div>
                    <div>4. Diplomatic Air Courier</div>
                    <div>5. White-Glove Installation</div>
                  </div>
                </div>

                <div className="mt-5 p-4 bg-[#F2EDE2] border border-[#DDD5C5] text-xs text-[#524D44] flex items-start gap-3">
                  <Info className="w-4 h-4 text-[#8C8474] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-[#1E1B18]">Curatorial Escort Bulletin:</strong> {activeDossier.stageNote} 
                    Your personal courier dossier code will be transmitted 12 hours prior to arrival at <span className="font-semibold text-[#1E1B18]">{activeDossier.destination}</span>.
                  </p>
                </div>

                {/* Dossier Items List */}
                <div className="mt-6 border-t border-[#E5DFD4] pt-6 space-y-4">
                  <div className="text-xs uppercase tracking-widest font-bold text-[#4F4A42]">Consigned Works in this Dispatch:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeDossier.items.map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 bg-white border border-[#DDD5C7] shadow-sm">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name} 
                          className="w-20 h-20 object-cover border border-[#1E1B18] shrink-0" 
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-mono text-[#91897C] uppercase">{item.edition}</div>
                          <h4 className="font-serif text-base font-medium text-[#1E1B18] truncate mt-0.5">{item.name}</h4>
                          <p className="text-xs text-[#6E685F] line-clamp-2 mt-1">{item.atelier}</p>
                          <div className="flex items-center justify-between mt-3 text-xs font-mono">
                            <span className="text-emerald-800 font-semibold">{item.vaultCert}</span>
                            <span className="font-bold text-[#1E1B18]">€{item.price.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dossier Action Buttons */}
                <div className="mt-6 pt-4 border-t border-[#E5DFD4] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-white hover:bg-[#F4EFE6] text-[#1E1B18] text-xs font-mono uppercase tracking-wider border border-[#1E1B18] flex items-center gap-2">
                      <Download className="w-3.5 h-3.5" />
                      EXPORT PROVENANCE CERTIFICATE (PDF)
                    </button>
                    <button className="px-4 py-2 bg-white hover:bg-[#F4EFE6] text-[#1E1B18] text-xs font-mono uppercase tracking-wider border border-[#1E1B18] flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5" />
                      CUSTOMS DECLARATION DOSSIER
                    </button>
                  </div>
                  <button 
                    onClick={onOpenCommission}
                    className="text-xs font-mono uppercase tracking-wider text-[#1E1B18] underline hover:text-[#8C6D1F] font-semibold"
                  >
                    CONTACT DISPATCH ESCORT VIA LIAISON →
                  </button>
                </div>
              </div>
            )}

            {/* Historical Consignment Archive */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif tracking-tight text-[#1E1B18]">
                  Historical Provenance Registry & Consignment Archive
                </h3>
                <span className="text-xs font-mono text-[#8C8476]">{filteredConsignments.length} VERIFIED ARCHIVE RECORDS</span>
              </div>

              <div className="space-y-4">
                {filteredConsignments.filter(c => !c.isLiveCommission).map((dossier) => (
                  <div 
                    key={dossier.id}
                    className="bg-white border-2 border-[#1E1B18] shadow-[3px_3px_0px_#DDD5C7] p-5 sm:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#ECE6DB]">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#1E1B18]">{dossier.id}</span>
                          <span className="px-2 py-0.5 bg-[#E6F3E6] text-[#1B6127] text-[10px] font-mono uppercase border border-[#BDE0BE]">
                            ✓ {dossier.status}
                          </span>
                        </div>
                        <p className="text-xs text-[#7D766C] font-mono mt-1">{dossier.date}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="text-xs font-serif font-bold text-[#1E1B18] text-lg block">€{dossier.total.toFixed(2)} EUR</span>
                        <span className="text-[10px] font-mono text-[#8C8476]">{dossier.destination}</span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {dossier.items.map((item, idx) => (
                        <div key={idx} className="flex gap-3 p-3 bg-[#FAF8F5] border border-[#E8E2D7]">
                          <img src={item.imageUrl} alt={item.name} className="w-14 h-14 object-cover border border-[#1E1B18] shrink-0" />
                          <div className="min-w-0 flex-1">
                            <h5 className="font-serif text-xs font-semibold text-[#1E1B18] truncate">{item.name}</h5>
                            <p className="text-[10px] font-mono text-[#8C8476] mt-0.5 truncate">{item.edition}</p>
                            <div className="flex items-center justify-between mt-2 text-[10px] font-mono">
                              <span className="text-[#3F3B34] font-semibold">{item.vaultCert}</span>
                              <span className="font-bold text-[#1E1B18]">€{item.price.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#ECE6DB] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#80796F] text-[11px]">{dossier.vaultRecordId || 'VAULT PROVENANCE SECURED'}</span>
                      <button className="text-[#1E1B18] hover:text-[#997926] font-semibold uppercase flex items-center gap-1">
                        VIEW ATELIER AUDIT TRAIL
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Saved Artefacts & Custom Commissions */}
        {activeTab === 'saved' && (
          <div className="mt-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-serif font-medium text-[#1E1B18]">
                  Curated Private Reserve & Saved Works
                </h2>
                <p className="text-xs text-[#736E65] mt-1 font-mono">
                  Pieces held under temporary patron reservation privileges • 48-hour price guarantee active
                </p>
              </div>

              <button 
                onClick={onOpenCommission}
                className="px-5 py-2.5 bg-[#1E1B18] text-white text-xs font-mono uppercase tracking-wider border border-[#1E1B18] hover:bg-black transition-colors self-start sm:self-auto flex items-center gap-2"
              >
                <Plus className="w-4 h-4 text-[#E6C687]" />
                COMMISSION UNLISTED PIECE
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedArtefacts.map((artefact) => (
                <div 
                  key={artefact.id}
                  className="bg-white border-2 border-[#1E1B18] shadow-[4px_4px_0px_#1E1B18] flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/3] bg-[#EFECE6] border-b-2 border-[#1E1B18] overflow-hidden">
                      <img 
                        src={artefact.imageUrl} 
                        alt={artefact.name} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-0.5 text-[10px] font-mono uppercase font-bold border ${
                          artefact.statusType === 'available'
                            ? 'bg-[#1E1B18] text-white border-[#1E1B18]'
                            : artefact.statusType === 'waitlist'
                            ? 'bg-amber-100 text-amber-900 border-amber-400'
                            : 'bg-indigo-900 text-white border-indigo-950'
                        }`}>
                          {artefact.statusBadge}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <button 
                          onClick={() => {
                            setSavedArtefacts(prev => prev.filter(a => a.id !== artefact.id));
                          }}
                          className="w-7 h-7 bg-white/90 hover:bg-white border border-[#1E1B18] flex items-center justify-center text-[#1E1B18] shadow-sm"
                          title="Remove from saved"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="text-[10px] font-mono text-[#8C8476] uppercase tracking-wider">{artefact.subtitle}</div>
                      <h3 className="font-serif text-lg font-medium text-[#1E1B18] leading-snug">{artefact.name}</h3>
                      <p className="text-xs text-[#6B655A] leading-relaxed pt-1">{artefact.atelier}</p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-[#F0EAE1] mt-2 space-y-4">
                    <div className="flex items-baseline justify-between pt-3">
                      <span className="text-xs font-mono text-[#8A8376] uppercase">Patron Tariff:</span>
                      <div className="text-right">
                        <span className="font-serif text-xl font-bold text-[#1E1B18]">€{artefact.price.toFixed(2)}</span>
                        {artefact.depositPrice && (
                          <div className="text-[10px] font-mono text-amber-800">
                            €{artefact.depositPrice.toFixed(2)} Deposit Required
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button 
                        onClick={() => handleAcquireSaved(artefact)}
                        className="w-full py-2.5 bg-[#1E1B18] hover:bg-black text-white text-xs font-bold uppercase tracking-wider border-2 border-[#1E1B18] transition-colors flex items-center justify-center gap-2 shadow-[2px_2px_0px_#A89F91]"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#E6C687]" />
                        {artefact.primaryActionLabel}
                      </button>
                      
                      <button 
                        onClick={onOpenCommission}
                        className="w-full py-2 bg-[#F6F3ED] hover:bg-[#ECE5D8] text-[#1E1B18] text-xs font-mono uppercase tracking-wider border border-[#1E1B18] transition-colors"
                      >
                        {artefact.secondaryActionLabel}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Residency Protocols & Cadastre */}
        {activeTab === 'residencies' && (
          <div className="mt-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-serif font-medium text-[#1E1B18]">
                  Registered Architectonic Residencies & Installation Protocols
                </h2>
                <p className="text-xs text-[#736E65] mt-1 font-mono">
                  Specific uncrating, room-level placement, and climate stabilization instructions for white-glove couriers
                </p>
              </div>

              <button 
                onClick={() => {
                  setAddedItemNotification('Residency Protocol submitted to Paris Atelier Liaison.');
                  setTimeout(() => setAddedItemNotification(null), 3000);
                }}
                className="px-5 py-2.5 bg-[#1E1B18] text-white text-xs font-mono uppercase tracking-wider border border-[#1E1B18] hover:bg-black transition-colors self-start sm:self-auto flex items-center gap-2 shadow-[3px_3px_0px_#C8BFB0] cursor-pointer"
              >
                <Plus className="w-4 h-4 text-[#E6C687]" />
                ADD RESIDENCE CADASTRE
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {residencies.map((res) => (
                <div 
                  key={res.id}
                  className={`border-2 border-[#1E1B18] bg-white p-6 sm:p-8 flex flex-col justify-between ${
                    res.isPrimary ? 'shadow-[6px_6px_0px_#1E1B18]' : 'shadow-[4px_4px_0px_#D0C7B7]'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#E8E2D7]">
                      <div>
                        <span className={`inline-block px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold border ${
                          res.isPrimary 
                            ? 'bg-amber-100 text-amber-900 border-amber-300' 
                            : 'bg-[#F2ECE1] text-[#595349] border-[#D4CCBD]'
                        }`}>
                          {res.typeBadge}
                        </span>
                        <h3 className="text-xl font-serif font-medium text-[#1E1B18] mt-2">
                          {res.name}
                        </h3>
                        <div className="text-xs font-mono text-[#8C8476] mt-0.5 flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#1E1B18]" />
                          {res.cadastre}
                        </div>
                      </div>

                      {res.isVerified && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-800 uppercase font-semibold">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          ACCESS AUDITED
                        </span>
                      )}
                    </div>

                    <div className="py-4">
                      <div className="text-xs font-mono text-[#7D766C] uppercase">Cadastral Postal Address:</div>
                      <div className="text-sm font-serif text-[#1E1B18] mt-1 font-medium leading-relaxed">
                        {res.address}
                      </div>

                      {res.intercomCode && (
                        <div className="mt-3 flex items-center gap-4 text-xs font-mono bg-[#FAF8F4] p-2.5 border border-[#EBE3D7]">
                          <div>
                            <span className="text-[#8C8476] uppercase text-[10px]">Intercom Vault Code:</span>{' '}
                            <span className="font-bold text-[#1E1B18]">{res.intercomCode}</span>
                          </div>
                          {res.intercomHours && (
                            <div>
                              <span className="text-[#8C8476] uppercase text-[10px]">Access Window:</span>{' '}
                              <span className="text-[#1E1B18]">{res.intercomHours}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Instructions */}
                    <div className="mt-2 space-y-3">
                      <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#47423A]">
                        Courier Installation Mandates:
                      </div>
                      <div className="space-y-2">
                        {res.instructions.map((inst, i) => (
                          <div key={i} className="text-xs bg-[#FAF7F0] p-3 border border-[#E5DFD4]">
                            <div className="font-mono text-[10px] font-bold text-[#1E1B18] uppercase tracking-wider">
                              {inst.title}
                            </div>
                            <div className="text-[#595349] mt-0.5 leading-relaxed">
                              {inst.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Allocated Artefacts in this residency */}
                    {res.allocatedArtefacts.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-[#E8E2D7]">
                        <div className="text-[11px] font-mono uppercase text-[#8C8476]">Permanent Artefacts Installed on Premise:</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {res.allocatedArtefacts.map((art, i) => (
                            <span key={i} className="text-[11px] font-mono bg-[#1E1B18] text-white px-2 py-0.5 border border-[#1E1B18]">
                              {art.name} ({art.edition})
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8E2D7] flex items-center justify-between text-xs font-mono">
                    <button 
                      onClick={() => {
                        setAddedItemNotification('Residence Protocol coordinates forwarded to logistics.');
                        setTimeout(() => setAddedItemNotification(null), 3000);
                      }}
                      className="text-[#1E1B18] hover:text-[#917122] font-semibold uppercase flex items-center gap-1.5 cursor-pointer"
                    >
                      EDIT CLEARANCE INSTRUCTIONS
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    {!res.isPrimary && (
                      <button 
                        onClick={() => {
                          setResidencies(prev => prev.map(r => ({
                            ...r,
                            isPrimary: r.id === res.id
                          })));
                        }}
                        className="text-[11px] uppercase tracking-wider text-[#736E65] hover:text-[#1E1B18] underline"
                      >
                        SET AS DEFAULT ESCORT ADDRESS
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Curator Liaison Help Box */}
        <div className="mt-16 bg-[#F3EDE2] border-2 border-[#1E1B18] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[4px_4px_0px_#C8BFB0]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#1E1B18] text-[#E6C687] flex items-center justify-center font-serif text-xl shrink-0 border border-[#1E1B18]">
              CD
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#7D766C]">Direct Liaison Concierge</div>
              <h4 className="font-serif text-lg font-semibold text-[#1E1B18]">Claire Delacroix — Paris & Kyoto Atelier Liaison</h4>
              <p className="text-xs text-[#595349] max-w-xl mt-1 leading-relaxed">
                Available via encrypted telegram or studio appointment for custom bronze patinas, vault reservations, and private estate deliveries across Europe and Asia.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={onOpenCommission}
              className="px-5 py-3 bg-[#1E1B18] text-white text-xs font-mono uppercase tracking-wider border-2 border-[#1E1B18] hover:bg-black transition-colors"
            >
              REQUEST SALON CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
