import React, { useState } from 'react';
import { X, CheckCircle, Shield } from 'lucide-react';

interface CommissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommissionModal: React.FC<CommissionModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patronName: 'Julian Vane',
    residence: 'Palais-Royal Estate, Paris',
    ateliers: 'Atelier Kyoto (Horology) & Studio Carrara (Alabaster)',
    scale: 'Custom 240mm Monobloc Mantel Scale',
    notes: 'Requiring 1800K calibrated circadian dimming synchronized with home automation architecture.'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#000416]/75 backdrop-blur-sm transition-opacity" 
      />

      <div className="relative w-full max-w-2xl bg-[#FFF8F3] border-2 border-[#101D3B] p-6 sm:p-10 shadow-2xl z-10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#75777E] hover:text-[#101D3B] transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75777E]">
            PROVENANCE & INTEGRITY
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#101D3B] mt-1">
            Bespoke Architectural Commissioning
          </h2>
          <p className="text-sm text-[#45464E] mt-3 leading-relaxed">
            Collaborate directly with our master ateliers in Kyoto, Carrara, and Milan to calibrate finishes, dimming protocols, and customized scales for private estates and boutique hospitality.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#EBF7EE] border-2 border-[#2E7D32] p-8 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-[#2E7D32] mx-auto" />
            <h3 className="font-serif text-2xl text-[#1B5E20]">Commission Dossier Dispatched</h3>
            <p className="text-xs text-[#2E7D32] max-w-md mx-auto">
              Your inquiry has been assigned to Senior Curator Claire Delacroix. A tailored architectural dossier will be transmitted to your registered correspondence address.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block uppercase text-[10px] font-bold text-[#101D3B] tracking-wider mb-1">
                  Patron Full Nomenclature
                </label>
                <input
                  type="text"
                  required
                  value={formData.patronName}
                  onChange={(e) => setFormData({ ...formData, patronName: e.target.value })}
                  className="w-full bg-white border border-[#101D3B] p-2.5 text-[#1D1B18] focus:outline-none focus:bg-[#FFF8F3]"
                />
              </div>

              <div>
                <label className="block uppercase text-[10px] font-bold text-[#101D3B] tracking-wider mb-1">
                  Estate or Residence Location
                </label>
                <input
                  type="text"
                  required
                  value={formData.residence}
                  onChange={(e) => setFormData({ ...formData, residence: e.target.value })}
                  className="w-full bg-white border border-[#101D3B] p-2.5 text-[#1D1B18] focus:outline-none focus:bg-[#FFF8F3]"
                />
              </div>
            </div>

            <div>
              <label className="block uppercase text-[10px] font-bold text-[#101D3B] tracking-wider mb-1">
                Requested Atelier Finish & Metallurgy
              </label>
              <select
                value={formData.ateliers}
                onChange={(e) => setFormData({ ...formData, ateliers: e.target.value })}
                className="w-full bg-white border border-[#101D3B] p-2.5 text-[#1D1B18] focus:outline-none"
              >
                <option>Atelier Kyoto (Naval Aerospace Brass 360)</option>
                <option>Studio Carrara (Spanish Raw Alabaster Stone)</option>
                <option>Murano Glasshouse (Smoked Optical Lead-Free Crystal)</option>
                <option>Nordic Foundry (Bead-Blasted Grade 5 Titanium)</option>
              </select>
            </div>

            <div>
              <label className="block uppercase text-[10px] font-bold text-[#101D3B] tracking-wider mb-1">
                Bespoke Architectural Scale or Integration Notes
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-white border border-[#101D3B] p-2.5 text-[#1D1B18] focus:outline-none focus:bg-[#FFF8F3]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[10px] text-[#75777E] uppercase font-bold">
                <Shield className="w-3.5 h-3.5 text-[#101D3B]" />
                <span>Private Client Confidentiality Bond</span>
              </div>

              <button
                type="submit"
                className="bg-[#101D3B] text-white border-2 border-[#101D3B] px-8 py-3 font-bold text-xs uppercase tracking-wider hover:bg-[#000416] shadow-brutalist-xs transition-transform active:translate-y-0.5 cursor-pointer"
              >
                REQUEST COMMISSION DOSSIER
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
