import React, { useState } from 'react';
import { Screen } from '../types';
import heroImage from '../assets/images/regenerated_image_1791796689449.png';
import studyOneImage from '../assets/images/regenerated_image_1791799954814.webp';
import studyTwoImage from '../assets/images/regenerated_image_1791799952885.webp';
import studyThreeImage from '../assets/images/regenerated_image_1791799956735.webp';
import cardOneStoneImage from '../assets/images/regenerated_image_1791800177486.webp';
import cardTwoBrassImage from '../assets/images/regenerated_image_1791800383739.webp';
import cardThreeAuraImage from '../assets/images/regenerated_image_1791800390892.webp';
import cardFourDecanterImage from '../assets/images/regenerated_image_1791800180883.webp';
import cardFiveLumenImage from '../assets/images/regenerated_image_1791800392602.jpg';

interface HomeViewProps {
  onNavigate: (screen: Screen) => void;
  onSelectProduct: (productId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectProduct }) => {
  const [activeStudyIndex, setActiveStudyIndex] = useState(1); // 0: 35deg, 1: front elevation, 2: thermal

  return (
    <div className="w-full bg-[#FFF8F3] text-[#1D1B18] overflow-hidden">
      {/* Hero Section with Atmospheric Dark Canvas & Handcrafted Tube Amplifier Visual */}
      
<section
  className="relative text-white border-b-2 border-[#101D3B] flex items-center justify-center w-full overflow-hidden"
  style={{ height: 'calc(100svh - 80px)', minHeight: '600px' }}
>

        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Handcrafted Analog Vacuum Tube Amplifier in Salon"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Neutral natural scrim overlay without blue tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
        </div>

        <div className="max-w-[1200px] mx-auto text-center space-y-8 relative z-10 px-4 sm:px-8">
          <div className="inline-block">
            <h1 
              className="text-5xl sm:text-7xl lg:text-[88px] font-normal leading-[1.08] tracking-[-0.02em] max-w-4xl mx-auto drop-shadow-md"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              Beautiful Things,<br />
              <span className="italic font-normal" style={{ color: '#dea448' }}>Made To Last.</span>
            </h1>
          </div>

          <p className="text-base sm:text-xl text-[#E2E4EE] max-w-xl mx-auto font-sans font-normal tracking-wide drop-shadow">
            Thoughtfully designed pieces delivered worldwide.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('catalog')}
              className="bg-[#C5CAFA] text-[#101D3B] border-2 border-[#101D3B] px-10 py-4 font-bold text-xs uppercase tracking-[0.16em] shadow-brutalist hover:shadow-brutalist-hover transition-all cursor-pointer hover:bg-[#B3B9F5]"
            >
              SHOP ALL PRODUCTS
            </button>
          </div>
        </div>
      </section>

      {/* The Premium Edit / Visual Stream of Arch Cards */}
      <section className="py-20 px-4 sm:px-8 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#75777E] mb-2">
            THE PREMIUM EDIT
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#101D3B]">
            Our finest pieces.
          </h2>
        </div>

        {/* Horizontal Stream / Grid of Archetype Cards matching Image 7 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 items-end">
          {/* Card 1: Nocturne Stone Vessel */}
          <div 
            onClick={() => onSelectProduct('nocturne-vessel')}
            className="group cursor-pointer rounded-t-[120px] rounded-b-[20px] bg-[#2A2A2E] text-white p-3 pt-6 border border-[#3E3E44] flex flex-col justify-between aspect-[9/16] transition-transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#3A3A40]/30 to-[#121214] pointer-events-none" />
            <img
              src={cardOneStoneImage}
              alt="Stone Vessel"
              className="w-full h-full object-cover rounded-t-[100px] opacity-75 group-hover:opacity-100 transition-opacity"
            />
            <div className="relative z-10 pt-2 border-t border-white/20">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#9DA2B3]">STONE</span>
              <div className="text-xs font-bold truncate">Vessel</div>
            </div>
          </div>

          {/* Card 2: Chronos Brass */}
          <div 
            onClick={() => onSelectProduct('atelier-chrono')}
            className="group cursor-pointer rounded-t-[120px] rounded-b-[20px] bg-[#1E1B18] text-white p-3 pt-6 border border-[#3E3E44] flex flex-col justify-between aspect-[9/16] transition-transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#4A3E2D]/20 to-[#121214] pointer-events-none" />
            <img
              src={cardTwoBrassImage}
              alt="Chronos Brass"
              className="w-full h-full object-cover rounded-t-[100px] opacity-75 group-hover:opacity-100 transition-opacity"
            />
            <div className="relative z-10 pt-2 border-t border-white/20">
              <div className="flex justify-between items-center text-[9px] font-bold text-[#9DA2B3]">
                <span>02</span>
                <span>ACOUSTIC</span>
              </div>
              <div className="text-xs font-bold">Chronos Brass</div>
              <div className="text-[11px] font-serif text-[#EBD5B3]">$420</div>
            </div>
          </div>

          {/* Card 3: Flagship Centerpiece - Aura Horizon */}
          <div 
            onClick={() => onSelectProduct('aura-horizon')}
            className="group cursor-pointer rounded-t-[140px] rounded-b-[28px] bg-[#0E1526] text-white p-4 pt-8 border-2 border-[#525E7F] ring-4 ring-[#C5CAFA]/20 flex flex-col justify-between aspect-[9/16] md:scale-105 shadow-2xl transition-transform hover:-translate-y-3 relative overflow-hidden z-10"
          >
            <div className="absolute top-3 left-3 bg-[#C5CAFA] text-[#101D3B] text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full z-20">
              ● FLAGSHIP
            </div>
            <div className="absolute top-3 right-3 text-[9px] font-mono text-[#9DA2B3] z-20">
              03 /
            </div>
            
            <img
              src={cardThreeAuraImage}
              alt="Aura Horizon"
              className="w-full h-full object-cover rounded-t-[120px] opacity-85 group-hover:opacity-100 transition-opacity"
            />

            <div className="relative z-20 pt-3 border-t border-white/25">
              <div className="text-xs font-bold leading-tight">Aura Horizon</div>
              <div className="text-[9px] uppercase tracking-wider text-[#9DA2B3]">BIOMETRIC CHRONO EDITION</div>
              <div className="text-sm font-serif font-bold text-[#C5CAFA] mt-1">$650</div>
            </div>
          </div>

          {/* Card 4: Solstice Decanter */}
          <div 
            onClick={() => onSelectProduct('solstice-decanter')}
            className="group cursor-pointer rounded-t-[120px] rounded-b-[20px] bg-[#1E1B18] text-white p-3 pt-6 border border-[#3E3E44] flex flex-col justify-between aspect-[9/16] transition-transform hover:-translate-y-2 relative overflow-hidden"
          >
            <img
              src={cardFourDecanterImage}
              alt="Solstice Decanter"
              className="w-full h-full object-cover rounded-t-[100px] opacity-75 group-hover:opacity-100 transition-opacity"
            />
            <div className="relative z-10 pt-2 border-t border-white/20">
              <div className="flex justify-between items-center text-[9px] font-bold text-[#9DA2B3]">
                <span>04</span>
                <span>GLASSWARE</span>
              </div>
              <div className="text-xs font-bold">Solstice Decanter</div>
              <div className="text-[11px] font-serif text-[#EBD5B3]">$340</div>
            </div>
          </div>

          {/* Card 5: Lumen Atelier */}
          <div 
            onClick={() => onSelectProduct('lumen-atelier')}
            className="group cursor-pointer rounded-t-[120px] rounded-b-[20px] bg-[#2A2A2E] text-white p-3 pt-6 border border-[#3E3E44] flex flex-col justify-between aspect-[9/16] transition-transform hover:-translate-y-2 relative overflow-hidden"
          >
            <img
              src={cardFiveLumenImage}
              alt="Lumen Atelier"
              className="w-full h-full object-cover rounded-t-[100px] opacity-75 group-hover:opacity-100 transition-opacity"
            />
            <div className="relative z-10 pt-2 border-t border-white/20">
              <div className="flex justify-between items-center text-[9px] font-bold text-[#9DA2B3]">
                <span>05</span>
                <span>SCULPTURAL</span>
              </div>
              <div className="text-xs font-bold">Lumen Atelier</div>
              <div className="text-[11px] font-serif text-[#EBD5B3]">$390</div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight: Meet the Atelier Chrono matching Image 7 */}
      <section className="py-20 px-4 sm:px-8 bg-[#F3EDE8] border-y-2 border-[#101D3B]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75777E]">
              NEW ARRIVAL
            </div>
            
            <h2 className="font-serif text-4xl sm:text-6xl text-[#101D3B] leading-tight">
              Meet the Atelier Chrono
            </h2>

            <p className="text-sm sm:text-base text-[#45464E] leading-relaxed">
              A masterclass in tactile simplicity. Machined from solid aerospace brass and finished with an ambient sleep light that gently shifts with circadian rhythm.
            </p>

            <button
              onClick={() => onSelectProduct('atelier-chrono')}
              className="bg-[#C5CAFA] text-[#101D3B] border-2 border-[#101D3B] px-8 py-3.5 font-bold text-xs uppercase tracking-[0.14em] shadow-brutalist hover:shadow-brutalist-hover transition-all cursor-pointer"
            >
              EXPLORE
            </button>
          </div>

          {/* Right Multi-angle Study Viewer matching Image 7 */}
          <div className="lg:col-span-7 bg-[#1C1410] text-white p-6 sm:p-8 rounded-[20px] border-2 border-[#101D3B] shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#C6C6CE]">
              <span>ATELIER CHRONO — MULTI-ANGLE STUDY</span>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStudyIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                      activeStudyIndex === idx ? 'bg-[#C5CAFA]' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 items-end">
              {/* Study 1: 35° Angle */}
              <div 
                onClick={() => setActiveStudyIndex(0)}
                className={`cursor-pointer rounded-t-[60px] rounded-b-lg bg-[#2A2520] p-3 text-center border transition-all ${
                  activeStudyIndex === 0 ? 'border-[#C5CAFA] ring-2 ring-[#C5CAFA]/40' : 'border-white/10 opacity-70'
                }`}
              >
                <div className="aspect-[3/4] bg-[#3B322A] rounded-t-[50px] mb-3 overflow-hidden flex items-center justify-center">
                  <img
                    src={studyOneImage}
                    alt="35° Angle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[9px] font-mono text-[#9DA2B3]">35° ANGLE</div>
                <div className="text-[10px] font-bold text-white mt-0.5">Aerospace Brass Finish</div>
              </div>

              {/* Study 2: Primary Elevation / Front Scale */}
              <div 
                onClick={() => setActiveStudyIndex(1)}
                className={`cursor-pointer rounded-t-[80px] rounded-b-lg bg-[#2A2520] p-3 text-center border scale-105 transition-all ${
                  activeStudyIndex === 1 ? 'border-[#C5CAFA] ring-2 ring-[#C5CAFA]' : 'border-white/10 opacity-70'
                }`}
              >
                <div className="text-[8px] bg-[#C5CAFA] text-[#101D3B] font-bold uppercase tracking-wider py-0.5 px-2 rounded-full mb-2 inline-block">
                  PRIMARY ELEVATION
                </div>
                <div className="aspect-[3/4] bg-[#3B322A] rounded-t-[60px] mb-3 overflow-hidden flex items-center justify-center">
                  <img
                    src={studyTwoImage}
                    alt="Primary Elevation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[9px] font-mono text-[#9DA2B3]">FRONT SCALE</div>
                <div className="text-[11px] font-bold text-white mt-0.5">Precision Calibration</div>
              </div>

              {/* Study 3: Thermal Spectrum */}
              <div 
                onClick={() => setActiveStudyIndex(2)}
                className={`cursor-pointer rounded-t-[60px] rounded-b-lg bg-[#2A2520] p-3 text-center border transition-all ${
                  activeStudyIndex === 2 ? 'border-[#C5CAFA] ring-2 ring-[#C5CAFA]/40' : 'border-white/10 opacity-70'
                }`}
              >
                <div className="aspect-[3/4] bg-[#3B322A] rounded-t-[50px] mb-3 overflow-hidden flex items-center justify-center">
                  <img
                    src={studyThreeImage}
                    alt="Thermal Spectrum"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[9px] font-mono text-[#9DA2B3]">THERMAL SPECTRUM</div>
                <div className="text-[10px] font-bold text-white mt-0.5">Circadian Warmth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars: Philosophy & Material Craft matching Image 7 */}
      <section className="py-24 px-4 sm:px-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75777E] mb-2">
              CORE PILLARS
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#101D3B]">
              Philosophy & Material Craft
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#45464E] max-w-md leading-relaxed font-sans">
            We reject planned obsolescence. Every Troveo object is an exercise in industrial discipline, bio-harmonic light, and generational durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-[#FAF6EE] border-2 border-[#101D3B] p-8 flex flex-col justify-between space-y-8 shadow-sm">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#75777E] mb-3">
                01 / SUB-MICRON FORGING
              </div>
              <h3 className="font-serif text-2xl text-[#101D3B]">
                Aerospace-Grade Alloys
              </h3>
              <p className="text-xs text-[#45464E] mt-3 leading-relaxed">
                Machined from solid monobloc brass and architectural aluminum with sub-micron tolerances. Finished by hand in micro-batches to preserve authentic tactile grain.
              </p>
            </div>

            <div className="pt-6 border-t border-[#DFD9D4] flex items-center justify-between text-[10px] font-bold uppercase text-[#101D3B] tracking-wider">
              <span>TOLERANCE ±0.005mm</span>
              <span>SOLID BRASS</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#FAF6EE] border-2 border-[#101D3B] p-8 flex flex-col justify-between space-y-8 shadow-sm">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#75777E] mb-3">
                02 / BIOMETRIC CHRONO
              </div>
              <h3 className="font-serif text-2xl text-[#101D3B]">
                Circadian Lighting Intelligence
              </h3>
              <p className="text-xs text-[#45464E] mt-3 leading-relaxed">
                Bio-attuned optical spectrums that seamlessly track solar zenith and twilight. Free from harsh blue peaks, fostering restorative melatonin release naturally.
              </p>
            </div>

            <div className="pt-6 border-t border-[#DFD9D4] flex items-center justify-between text-[10px] font-bold uppercase text-[#101D3B] tracking-wider">
              <span>SPECTRUM 1800K–5000K</span>
              <span>ZERO PWM FLICKER</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#FAF6EE] border-2 border-[#101D3B] p-8 flex flex-col justify-between space-y-8 shadow-sm">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#75777E] mb-3">
                03 / DECADE WARRANTY
              </div>
              <h3 className="font-serif text-2xl text-[#101D3B]">
                Generational Longevity
              </h3>
              <p className="text-xs text-[#45464E] mt-3 leading-relaxed">
                Designed to be disassembled, serviced, polished, and loved for decades. Replaceable quartz modules and modular drivers eliminate electronic waste permanently.
              </p>
            </div>

            <div className="pt-6 border-t border-[#DFD9D4] flex items-center justify-between text-[10px] font-bold uppercase text-[#101D3B] tracking-wider">
              <span>CIRCULAR ARCHITECTURE</span>
              <span>REPAIRABLE BY DESIGN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Acclaim Section matching Image 7 */}
      <section id="acclaim-section" className="bg-[#101D3B] text-white py-24 px-4 sm:px-8 border-t-2 border-[#101D3B]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5CAFA]">
              CRITICAL ACCLAIM
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {/* Quote 1 */}
            <div className="space-y-4 border-l border-white/20 pl-6">
              <p className="font-serif text-xl sm:text-2xl text-[#FFF8F3] leading-snug">
                “The quietest masterpiece on your nightstand. Tactile design with zero compromises.”
              </p>
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C5CAFA]">
                ARCHITECTURAL DIGEST
              </div>
            </div>

            {/* Quote 2 */}
            <div className="space-y-4 border-l border-white/20 pl-6">
              <p className="font-serif text-xl sm:text-2xl text-[#FFF8F3] leading-snug">
                “Where aerospace precision engineering meets circadian sleep science seamlessly.”
              </p>
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C5CAFA]">
                WALLPAPER* DESIGN AWARDS
              </div>
            </div>

            {/* Quote 3 */}
            <div className="space-y-4 border-l border-white/20 pl-6">
              <p className="font-serif text-xl sm:text-2xl text-[#FFF8F3] leading-snug">
                “An exquisite antidote to disposable technology. Built with generational intent.”
              </p>
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C5CAFA]">
                FINANCIAL TIMES HTSI
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
