import React, { useState } from 'react';
import { Headphones, X, Send, Clock, Calendar, ShieldCheck } from 'lucide-react';

interface FloatingConciergeProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({
  isOpen,
  onToggle,
  onClose,
}) => {
  const [messages, setMessages] = useState<Array<{ sender: 'curator' | 'user'; text: string; time: string }>>([
    {
      sender: 'curator',
      text: 'Greetings. I am Claire Delacroix, Head of Private Acquisitions at the Paris Salon. How may the atelier assist your curation this evening?',
      time: '19:42'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    const newMsg = {
      sender: 'user' as const,
      text: userMsg,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "I have noted your inquiry on the atelier ledger. Our Kyoto master horologist personally calibrates every escapement before dispatch under archival nitrogen.";
      if (userMsg.toLowerCase().includes('finish') || userMsg.toLowerCase().includes('brass')) {
        reply = "The Atelier Chrono is forged from 7075 naval aerospace monobloc brass with a hand-waxed micro-crystalline seal that patinates organically over decades.";
      } else if (userMsg.toLowerCase().includes('ship') || userMsg.toLowerCase().includes('delivery')) {
        reply = "All editions over $100 travel via diplomatic white-glove transport with real-time gyroscopic tilt telemetrics and zero customs tariff delay.";
      } else if (userMsg.toLowerCase().includes('appointment') || userMsg.toLowerCase().includes('salon')) {
        reply = "I would be honored to receive you at our Palais-Royal Salon for a private viewing of our uncatalogued vault masterworks.";
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'curator',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <>
      {/* Floating Pill Button in Bottom Right */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed bottom-6 right-6 z-40 bg-[#101D3B] text-[#C5CAFA] border-2 border-[#202E52] px-4 py-2.5 rounded-full flex items-center gap-2.5 shadow-2xl hover:bg-[#000416] transition-all hover:scale-105 cursor-pointer group"
          aria-label="Open Concierge Live"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#C5CAFA] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-white group-hover:text-[#C5CAFA] transition-colors">
            CONCIERGE LIVE
          </span>
          <Headphones className="w-4 h-4 text-[#C5CAFA]" />
        </button>
      )}

      {/* Concierge Window Drawer */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[380px] bg-[#FFF8F3] border-2 border-[#101D3B] shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#101D3B] text-white p-4 border-b border-[#283556] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C5CAFA] text-[#101D3B] font-bold text-xs flex items-center justify-center font-serif border border-white">
                CD
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-sm font-semibold text-white">Claire Delacroix</h4>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00D775]" />
                </div>
                <p className="text-[10px] text-[#C5CAFA] uppercase tracking-wider">
                  Paris Salon Advisory • Active
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-[#C6C6CE] hover:text-white p-1 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Action Badges */}
          <div className="bg-[#FAF6EE] px-4 py-2 border-b border-[#DFD9D4] flex items-center gap-2 overflow-x-auto text-[10px] font-bold uppercase text-[#101D3B]">
            <button
              onClick={() => {
                setInputText("Request private inspection at Palais-Royal Salon");
              }}
              className="px-2 py-1 bg-white border border-[#101D3B] hover:bg-[#C5CAFA] transition-colors whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3 h-3 inline mr-1" />
              Salon Appointment
            </button>
            <button
              onClick={() => {
                setInputText("What are the acoustic calibration specs for Atelier Chrono?");
              }}
              className="px-2 py-1 bg-white border border-[#101D3B] hover:bg-[#C5CAFA] transition-colors whitespace-nowrap cursor-pointer"
            >
              <Clock className="w-3 h-3 inline mr-1" />
              Acoustic Specs
            </button>
          </div>

          {/* Messages Stream */}
          <div className="p-4 h-[280px] overflow-y-auto space-y-3 bg-[#FFF8F3] text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#101D3B] text-white border border-[#101D3B]'
                      : 'bg-[#FAF6EE] text-[#1D1B18] border border-[#DFD9D4]'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-[#75777E] mt-1 px-1">{m.time}</span>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-1 text-[11px] text-[#75777E] italic">
                <span>Claire is consulting the atelier ledger...</span>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-[#DFD9D4] flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Inquire about finish, dispatch, or bespoke..."
              className="flex-1 bg-[#FAF6EE] border border-[#101D3B] px-3 py-2 text-xs text-[#1D1B18] placeholder-[#75777E] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#C5CAFA] text-[#101D3B] p-2 border border-[#101D3B] hover:bg-[#B3B9F5] transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Status footer */}
          <div className="bg-[#F3EDE8] px-3 py-1.5 flex items-center justify-between text-[9px] uppercase font-bold tracking-wider text-[#75777E]">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#101D3B]" />
              <span>Direct Encrypted Vault Dispatch</span>
            </div>
            <span>+33 (0)1 42 68 00 14</span>
          </div>
        </div>
      )}
    </>
  );
};
