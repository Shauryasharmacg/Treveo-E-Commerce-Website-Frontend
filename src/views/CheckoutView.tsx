import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Check, 
  Lock, 
  CreditCard, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { CartItem, Screen } from '../types';

interface CheckoutViewProps {
  onNavigate: (screen: Screen) => void;
  cartItems: CartItem[];
  onOrderSuccess: (orderId: string) => void;
  onOpenConcierge: () => void;
}

export const CheckoutView: React.FC<CheckoutViewProps> = ({
  onNavigate,
  cartItems,
  onOrderSuccess,
  onOpenConcierge,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'klarna' | 'wire'>('card');
  const [cardNumber, setCardNumber] = useState('4829 •••• •••• 9104');
  const [expDate, setExpDate] = useState('09 / 28');
  const [cvv, setCvv] = useState('•••');
  const [cardholder, setCardholder] = useState('JULIAN VANE');
  const [billingSame, setBillingSame] = useState(true);
  const [leatherFolder, setLeatherFolder] = useState(true);
  const [inscription, setInscription] = useState("Commissioned for Julian Vane • Salon d'Automne 2024");
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0) || 760;

  const handleAuthorize = () => {
    setIsAuthorizing(true);
    setTimeout(() => {
      setIsAuthorizing(false);
      setOrderConfirmed(true);
      onOrderSuccess('#TRV-89421-EU');
    }, 1800);
  };

  if (orderConfirmed) {
    return (
      <div className="w-full bg-[#FFF8F3] min-h-screen py-16 px-4 sm:px-8">
        <div className="max-w-2xl mx-auto bg-white border-2 border-[#101D3B] p-8 sm:p-12 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 bg-[#C5CAFA] border-2 border-[#101D3B] rounded-full flex items-center justify-center mx-auto text-[#101D3B]">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75777E]">
            SETTLEMENT AUTHORIZED & LEDGER INSCRIBED
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-[#101D3B]">
            Consignment #TRV-89421-EU
          </h1>

          <p className="text-sm text-[#45464E] max-w-lg mx-auto leading-relaxed">
            Your allocation is currently in Stage 2 Calibration at Atelier Kyoto & Studio Murano. A formal wax-sealed certificate of provenance and tracking dossier have been dispatched to Julian Vane.
          </p>

          <div className="bg-[#FAF6EE] border border-[#DFD9D4] p-5 text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-[#75777E]">Destined Address:</span>
              <span className="font-bold text-[#101D3B]">Residence No. 8, Rue de Beaujolais, 75001 Paris</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#75777E]">Consignment Transit:</span>
              <span className="font-bold text-[#101D3B]">Insured Diplomatic Courier • White Glove</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#75777E]">Total Settled:</span>
              <span className="font-bold text-[#101D3B] tabular-nums">${subtotal.toFixed(2)} USD</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('patron')}
              className="bg-[#101D3B] text-white border-2 border-[#101D3B] px-8 py-3.5 font-bold text-xs uppercase tracking-wider shadow-brutalist hover:bg-[#000416] transition-all cursor-pointer"
            >
              INSPECT PATRON ENCLAVE DOSSIER
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className="bg-white text-[#101D3B] border-2 border-[#101D3B] px-8 py-3.5 font-bold text-xs uppercase tracking-wider hover:bg-[#FAF6EE] transition-all cursor-pointer"
            >
              CONTINUE DISCOVERY
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FFF8F3] text-[#1D1B18] min-h-screen pb-20">
      {/* Header bar matching Image 9 */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-8 pb-4 border-b border-[#DFD9D4] flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75777E]">
            TRANSACTION ENCLAVE
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl text-[#101D3B]">
            Private Client Settlement
          </h1>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#75777E]">
          <Lock className="w-3.5 h-3.5 text-[#101D3B]" />
          <span>SESSION AUTHENTICATED • 256-BIT ENCLAVE</span>
        </div>
      </div>

      {/* Stepper matching Image 9 */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-[#DFD9D4] text-xs font-bold uppercase">
          {/* Step 01 */}
          <div className="flex items-center gap-2.5 text-[#101D3B]">
            <div className="w-5 h-5 rounded-full bg-[#101D3B] text-white flex items-center justify-center text-[10px]">
              <Check className="w-3 h-3" />
            </div>
            <div>
              <div className="text-[9px] text-[#75777E]">STEP 01</div>
              <div className="text-[11px]">Client Credentials</div>
            </div>
            <span className="text-[9px] font-mono text-[#2E7D32] ml-auto">COMPLETED</span>
          </div>

          {/* Step 02 */}
          <div className="flex items-center gap-2.5 text-[#101D3B]">
            <div className="w-5 h-5 rounded-full bg-[#101D3B] text-white flex items-center justify-center text-[10px]">
              <Check className="w-3 h-3" />
            </div>
            <div>
              <div className="text-[9px] text-[#75777E]">STEP 02</div>
              <div className="text-[11px]">White-Glove Transit</div>
            </div>
            <span className="text-[9px] font-mono text-[#2E7D32] ml-auto">COMPLETED</span>
          </div>

          {/* Step 03 */}
          <div className="flex items-center gap-2.5 text-[#101D3B]">
            <div className="w-5 h-5 rounded-full bg-[#101D3B] text-[#C5CAFA] flex items-center justify-center text-[10px] font-black border border-[#101D3B]">
              03
            </div>
            <div>
              <div className="text-[9px] text-[#75777E]">STEP 03</div>
              <div className="text-[11px] text-[#101D3B]">Payment & Security</div>
            </div>
            <span className="text-[9px] font-mono text-[#101D3B] font-black ml-auto">ACTIVE</span>
          </div>

          {/* Step 04 */}
          <div className="flex items-center gap-2.5 text-[#75777E]">
            <div className="w-5 h-5 rounded-full border border-[#75777E] flex items-center justify-center text-[10px]">
              04
            </div>
            <div>
              <div className="text-[9px] text-[#75777E]">STEP 04</div>
              <div className="text-[11px]">Confirmation</div>
            </div>
            <span className="text-[9px] font-mono ml-auto">PENDING</span>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout matching Image 9 */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Stages & Payment Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Stage 01: Validated Identity */}
            <div className="bg-[#FAF6EE] border border-[#DFD9D4] p-5 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#101D3B] text-white flex items-center justify-center text-[10px] mt-0.5 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-[#75777E]">
                    STAGE 01 • VALIDATED IDENTITY
                  </div>
                  <h3 className="font-serif text-lg text-[#101D3B] mt-0.5">
                    Atelier Patron Profile
                  </h3>
                  <div className="text-xs text-[#45464E] mt-1 space-y-0.5">
                    <div>Julian Vane</div>
                    <div className="text-[#75777E]">julian.vane@archstudio.paris</div>
                    <div className="text-[#75777E] font-mono">+33 6 49 20 81 12</div>
                  </div>
                </div>
              </div>

              <button 
                className="text-[10px] font-bold uppercase tracking-wider text-[#101D3B] underline hover:text-[#525E7F] cursor-pointer"
              >
                VERIFIED
              </button>
            </div>

            {/* Stage 02: Route Allocated */}
            <div className="bg-[#FAF6EE] border border-[#DFD9D4] p-5 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#101D3B] text-white flex items-center justify-center text-[10px] mt-0.5 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-[#75777E]">
                    STAGE 02 • ROUTE ALLOCATED
                  </div>
                  <h3 className="font-serif text-lg text-[#101D3B] mt-0.5">
                    White-Glove Consignment
                  </h3>
                  <div className="text-xs text-[#45464E] mt-1 space-y-1">
                    <div className="text-[10px] uppercase font-bold text-[#75777E]">DELIVERY DESTINATION</div>
                    <div>Residence No. 8, Rue de Beaujolais</div>
                    <div>75001 Paris, Île-de-France, France</div>
                    <div className="pt-1.5 flex items-center gap-1.5 text-[11px] text-[#101D3B] font-medium">
                      <span>📦</span>
                      <span>Insured White-Glove Courier • Complimentary tier • Signature mandated • Custom Archival Wooden Box</span>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => onNavigate('patron')}
                className="text-[10px] font-bold uppercase tracking-wider text-[#101D3B] underline hover:text-[#525E7F]"
              >
                EDIT
              </button>
            </div>

            {/* Stage 03: Payment & Atelier Security matching Image 9 */}
            <div className="bg-white border-2 border-[#101D3B] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#DFD9D4]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#101D3B] text-[#C5CAFA] flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-[#75777E]">
                      STAGE 03 • AUTHORIZE
                    </div>
                    <h3 className="font-serif text-2xl text-[#101D3B]">
                      Payment & Atelier Security
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#75777E] bg-[#FAF6EE] px-2.5 py-1 border border-[#DFD9D4]">
                  <Lock className="w-3 h-3 text-[#101D3B]" />
                  <span>ENCRYPTED VAULT</span>
                </div>
              </div>

              {/* Accelerated Allocation (Apple Pay, G Pay, Shop Pay) */}
              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#75777E]">
                  ACCELERATED ALLOCATION
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={handleAuthorize}
                    className="bg-black text-white py-3 font-bold text-xs flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <span className="text-sm mr-1"></span>Pay
                  </button>
                  <button
                    type="button"
                    onClick={handleAuthorize}
                    className="bg-white text-neutral-700 border border-[#DFD9D4] py-3 font-bold text-xs flex items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    <span className="font-black mr-1 text-[#4285F4]">G</span> Pay
                  </button>
                  <button
                    type="button"
                    onClick={handleAuthorize}
                    className="bg-[#5A31F4] text-white py-3 font-bold text-xs flex items-center justify-center hover:bg-[#4E27E0] transition-colors cursor-pointer"
                  >
                    shop<span className="text-[#00D775]">Pay</span>
                  </button>
                </div>
              </div>

              {/* Standard Settlement Tabs matching Image 9 */}
              <div className="space-y-3 pt-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#75777E]">
                  OR STANDARD SETTLEMENT
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMethod('card')}
                    className={`p-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      selectedMethod === 'card'
                        ? 'bg-[#FAF6EE] border-[#101D3B] text-[#101D3B] ring-1 ring-[#101D3B]'
                        : 'bg-white border-[#DFD9D4] text-[#75777E] hover:border-[#101D3B]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>CARD</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMethod('klarna')}
                    className={`p-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      selectedMethod === 'klarna'
                        ? 'bg-[#FAF6EE] border-[#101D3B] text-[#101D3B] ring-1 ring-[#101D3B]'
                        : 'bg-white border-[#DFD9D4] text-[#75777E] hover:border-[#101D3B]'
                    }`}
                  >
                    <span>KLARNA SPLIT</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMethod('wire')}
                    className={`p-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      selectedMethod === 'wire'
                        ? 'bg-[#FAF6EE] border-[#101D3B] text-[#101D3B] ring-1 ring-[#101D3B]'
                        : 'bg-white border-[#DFD9D4] text-[#75777E] hover:border-[#101D3B]'
                    }`}
                  >
                    <span>ATELIER WIRE</span>
                  </button>
                </div>
              </div>

              {/* Card Fields Form matching Image 9 */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between items-center mb-1 text-[10px] font-bold uppercase tracking-wider text-[#75777E]">
                    <span>PRIMARY CARD NUMBER</span>
                    <span className="font-mono text-[#101D3B]">VISA • MC • AMEX</span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-[#FFF8F3] border border-[#101D3B] px-3.5 py-3 text-xs font-mono text-[#1D1B18] focus:outline-none"
                    />
                    <Check className="w-4 h-4 text-[#2E7D32] absolute right-3 top-3.5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-[10px] font-bold uppercase tracking-wider text-[#75777E]">
                      EXPIRATION DATE
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={expDate}
                        onChange={(e) => setExpDate(e.target.value)}
                        className="w-full bg-[#FFF8F3] border border-[#101D3B] px-3.5 py-3 text-xs font-mono text-[#1D1B18] focus:outline-none"
                      />
                      <Check className="w-4 h-4 text-[#2E7D32] absolute right-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 text-[10px] font-bold uppercase tracking-wider text-[#75777E]">
                      SECURITY CODE (CVV)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="w-full bg-[#FFF8F3] border border-[#101D3B] px-3.5 py-3 text-xs font-mono text-[#1D1B18] focus:outline-none"
                      />
                      <Lock className="w-4 h-4 text-[#75777E] absolute right-3 top-3.5" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-[10px] font-bold uppercase tracking-wider text-[#75777E]">
                    CARDHOLDER NOMENCLATURE
                  </label>
                  <input
                    type="text"
                    value={cardholder}
                    onChange={(e) => setCardholder(e.target.value)}
                    className="w-full bg-[#FFF8F3] border border-[#101D3B] px-3.5 py-3 text-xs font-mono uppercase tracking-wider text-[#1D1B18] focus:outline-none"
                  />
                </div>
              </div>

              {/* Billing Protocol Radios */}
              <div className="space-y-2 pt-2 border-t border-[#DFD9D4]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#75777E]">
                  BILLING PROTOCOL
                </div>
                
                <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                  <input
                    type="radio"
                    name="billing"
                    checked={billingSame}
                    onChange={() => setBillingSame(true)}
                    className="w-4 h-4 accent-[#101D3B]"
                  />
                  <span>Same as White–Glove transit address (Rue de Beaujolais, Paris)</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                  <input
                    type="radio"
                    name="billing"
                    checked={!billingSame}
                    onChange={() => setBillingSame(false)}
                    className="w-4 h-4 accent-[#101D3B]"
                  />
                  <span>Provide alternate registered corporate or tax address</span>
                </label>
              </div>

              {/* Provenance Folder Checkbox matching Image 9 */}
              <div className="p-4 bg-[#FAF6EE] border border-[#DFD9D4] space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={leatherFolder}
                    onChange={(e) => setLeatherFolder(e.target.checked)}
                    className="w-4 h-4 mt-0.5 accent-[#101D3B]"
                  />
                  <div className="text-xs">
                    <div className="font-bold text-[#101D3B]">
                      Complimentary Embossed Leather Provenance Folder
                    </div>
                    <div className="text-[#75777E] text-[11px] mt-0.5">
                      Includes serialized wax archival seal and physical certificate of authenticity inscribed to patron.
                    </div>
                  </div>
                </label>

                {leatherFolder && (
                  <div className="pt-2">
                    <label className="block text-[9px] uppercase font-bold tracking-wider text-[#75777E] mb-1">
                      ARCHIVAL CALLIGRAPHY INSCRIPTION (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      value={inscription}
                      onChange={(e) => setInscription(e.target.value)}
                      placeholder="e.g., Commissioned for Julian Vane • Salon d'Automne 2024"
                      className="w-full bg-white border border-[#101D3B] p-2.5 text-xs text-[#1D1B18] focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Primary Authorization Button matching Image 9 */}
              <button
                type="button"
                onClick={handleAuthorize}
                disabled={isAuthorizing}
                className="w-full bg-[#C5CAFA] text-[#101D3B] border-2 border-[#101D3B] py-4 px-6 font-bold text-xs uppercase tracking-[0.14em] shadow-brutalist hover:shadow-brutalist-hover transition-all active:translate-y-1 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isAuthorizing ? (
                  <span>AUTHENTICATING WITH PARIS ENCLAVE...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>PLACE ORDER & AUTHORIZE — ${subtotal.toFixed(2)} USD</span>
                  </>
                )}
              </button>

              {/* Trust Badges matching Image 9 */}
              <div className="grid grid-cols-3 gap-3 pt-2 text-center text-[10px] font-bold text-[#75777E]">
                <div className="bg-[#FAF6EE] p-3 border border-[#DFD9D4]">
                  <ShieldCheck className="w-4 h-4 text-[#101D3B] mx-auto mb-1" />
                  <div className="text-[#101D3B]">256-BIT PROTECTION</div>
                  <div className="text-[9px] text-[#75777E]">Banking Grade Enclave</div>
                </div>

                <div className="bg-[#FAF6EE] p-3 border border-[#DFD9D4]">
                  <CheckCircle2 className="w-4 h-4 text-[#101D3B] mx-auto mb-1" />
                  <div className="text-[#101D3B]">CERTIFIED PROVENANCE</div>
                  <div className="text-[9px] text-[#75777E]">Horological Vault Registry</div>
                </div>

                <div className="bg-[#FAF6EE] p-3 border border-[#DFD9D4]">
                  <ShieldAlert className="w-4 h-4 text-[#101D3B] mx-auto mb-1" />
                  <div className="text-[#101D3B]">30-DAY PRIVILEGE</div>
                  <div className="text-[9px] text-[#75777E]">Complimentary Courier Return</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Curated Portfolio & Breakdown matching Image 9 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF6EE] border-2 border-[#101D3B] p-6 sm:p-7 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#DFD9D4]">
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-[#75777E]">
                    ACQUISITION SUMMARY
                  </div>
                  <h3 className="font-serif text-2xl text-[#101D3B]">
                    Curated Portfolio
                  </h3>
                </div>

                <span className="bg-[#D9E2FF] text-[#0D1A38] text-[9px] font-black uppercase tracking-wider px-2 py-1 border border-[#101D3B]">
                  2 WORKS ALLOCATED
                </span>
              </div>

              {/* Items in Portfolio */}
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex gap-4 pb-4 border-b border-[#DFD9D4]">
                  <div className="w-20 h-20 bg-[#E7E1DC] shrink-0 border border-[#DFD9D4] overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80"
                      alt="Atelier Chrono"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 bg-[#101D3B] text-white text-[8px] font-bold px-1">
                      QTY 1
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#75777E]">
                          BIOMETRIC EDITION
                        </span>
                        <span className="font-bold text-sm text-[#101D3B]">$420.00</span>
                      </div>
                      <h4 className="font-serif text-base text-[#101D3B]">Atelier Chrono</h4>
                      <p className="text-[10px] text-[#75777E] leading-tight mt-0.5">
                        Aged Aerospace Brass • Serialized No. 04/500 • 1800K Circadian Halo
                      </p>
                    </div>
                    <div className="text-[9px] font-bold text-[#101D3B] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#101D3B]" />
                      <span>AUTHENTICATED ATELIER PIECE</span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4 pb-4 border-b border-[#DFD9D4]">
                  <div className="w-20 h-20 bg-[#E7E1DC] shrink-0 border border-[#DFD9D4] overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=300&q=80"
                      alt="Solstice Decanter"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 bg-[#101D3B] text-white text-[8px] font-bold px-1">
                      QTY 1
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#75777E]">
                          VESSEL DUO
                        </span>
                        <span className="font-bold text-sm text-[#101D3B]">$340.00</span>
                      </div>
                      <h4 className="font-serif text-base text-[#101D3B]">Solstice Decanter & Tumbler</h4>
                      <p className="text-[10px] text-[#75777E] leading-tight mt-0.5">
                        Smoked Fluted Crystal • Hand-Blown Silhouette • Kyoto Mold
                      </p>
                    </div>
                    <div className="text-[9px] font-bold text-[#101D3B] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#101D3B]" />
                      <span>HANDCRAFTED SIGNATURE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patron Allocation Code matching Image 9 */}
              <div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-[#75777E] mb-1">
                  PATRON ALLOCATION CODE
                </div>
                <div className="flex">
                  <input
                    type="text"
                    readOnly
                    value="ATELIER-PATRON"
                    className="flex-1 bg-white border border-[#101D3B] p-2 text-xs font-mono font-bold text-[#101D3B]"
                  />
                  <button className="bg-[#101D3B] text-white text-[10px] font-bold uppercase px-3 hover:bg-[#000416]">
                    APPLIED
                  </button>
                </div>
                <p className="text-[9px] text-[#2E7D32] font-semibold mt-1">
                  ✓ Patron Privilege Tier Activated • Priority Atelier Dispatch
                </p>
              </div>

              {/* Settlement Calculation matching Image 9 */}
              <div className="space-y-2 pt-2 border-t border-[#DFD9D4] text-xs font-medium text-[#45464E]">
                <div className="flex justify-between">
                  <span>Works Subtotal (2 Articles)</span>
                  <span className="font-bold text-[#101D3B] tabular-nums">$760.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <span>Insured White-Glove Transit</span>
                    <span className="text-[9px] bg-white border border-[#DFD9D4] px-1 font-mono">DDP</span>
                  </div>
                  <span className="font-bold text-[#101D3B]">COMPLIMENTARY</span>
                </div>
                <div className="flex justify-between">
                  <span>French VAT & EU Import Duties</span>
                  <span className="font-bold text-[#101D3B]">INCLUDED</span>
                </div>
                <div className="flex justify-between">
                  <span>Patron Reserve Courtesy</span>
                  <span className="font-bold text-[#101D3B]">-$0.00</span>
                </div>

                <div className="pt-3 border-t border-[#DFD9D4] flex items-baseline justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#101D3B]">
                      SETTLEMENT TOTAL
                    </div>
                    <div className="text-[9px] text-[#75777E]">
                      All duties, archival packaging & transit guaranteed
                    </div>
                  </div>
                  <div className="font-serif text-3xl text-[#101D3B] tabular-nums">
                    $760.00 <span className="text-xs font-sans font-bold text-[#75777E]">USD</span>
                  </div>
                </div>

                <div className="text-[10px] text-[#75777E] pt-1">
                  Or 4 payments of <strong className="text-[#101D3B]">$190.00</strong> via Klarna. <span className="underline cursor-pointer">DETAILS</span>
                </div>
              </div>

              {/* Dedicated Atelier Concierge Box matching Image 9 */}
              <div className="bg-white border border-[#DFD9D4] p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#101D3B] text-white flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-[#C5CAFA]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#101D3B]">Dedicated Atelier Concierge</div>
                    <div className="text-[9px] text-[#75777E]">Direct line for custom engraving or white-glove transit scheduling</div>
                  </div>
                </div>

                <button
                  onClick={onOpenConcierge}
                  className="w-8 h-8 rounded-full border border-[#101D3B] flex items-center justify-center hover:bg-[#FAF6EE] text-[#101D3B]"
                  aria-label="Call concierge"
                >
                  <Phone className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
