import React, { useState } from 'react';
import { Wheat, Sparkles, Package, Globe2, Leaf } from 'lucide-react';

interface CategoryVisualProps {
  type: 'grains' | 'spices' | 'packaged' | 'hero' | 'sourcing';
  alt: string;
  src?: string;
  className?: string;
  aspect?: '16/9' | '4/3' | '1/1';
}

export const CategoryVisual: React.FC<CategoryVisualProps> = ({
  type,
  alt,
  src,
  className = '',
  aspect = '4/3'
}) => {
  const [imgFailed, setImgFailed] = useState(!src);

  const aspectClass =
    aspect === '16/9' ? 'aspect-video' : aspect === '1/1' ? 'aspect-square' : 'aspect-[4/3]';

  if (src && !imgFailed) {
    return (
      <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    );
  }

  // High-fidelity domain-authentic SVG/CSS visual container
  return (
    <div
      className={`relative overflow-hidden ${aspectClass} rounded-xl bg-gradient-to-br from-[#122340] via-[#0B1C38] to-[#1E3A2B] text-white flex flex-col justify-between p-6 select-none ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Decorative background geometry */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`pattern-${type}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 20 L 20 0 L 40 20 L 20 40 Z" fill="none" stroke="#E7A942" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pattern-${type})`} />
        </svg>
      </div>

      {/* Atmospheric radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#C98822]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Category Icon Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#E7A942] shadow-inner">
          {type === 'grains' && <Wheat className="w-6 h-6" />}
          {type === 'spices' && <Sparkles className="w-6 h-6" />}
          {type === 'packaged' && <Package className="w-6 h-6" />}
          {type === 'hero' && <Globe2 className="w-6 h-6" />}
          {type === 'sourcing' && <Leaf className="w-6 h-6" />}
        </div>
        <span className="text-[11px] font-mono tracking-wider uppercase text-amber-300/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded">
          Authentic Origin
        </span>
      </div>

      {/* Centered Graphic Composition */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4 text-center">
        {type === 'grains' && (
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#E7A942]">
              <Wheat className="w-8 h-8" />
              <span className="font-display font-bold text-xl tracking-wide text-white">
                Grains & Staples
              </span>
            </div>
            <p className="text-xs text-amber-100/70 max-w-xs mx-auto">
              Sorghum · Fonio · Yam Flour · Plantain Flour · Honey Beans
            </p>
          </div>
        )}

        {type === 'spices' && (
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#E7A942]">
              <Sparkles className="w-8 h-8" />
              <span className="font-display font-bold text-xl tracking-wide text-white">
                Traditional Spices
              </span>
            </div>
            <p className="text-xs text-amber-100/70 max-w-xs mx-auto">
              Suya Pepper · Uda Pods · Calabash Nutmeg · Iru · Smoked Peppers
            </p>
          </div>
        )}

        {type === 'packaged' && (
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#E7A942]">
              <Package className="w-8 h-8" />
              <span className="font-display font-bold text-xl tracking-wide text-white">
                Specialty Packaged Goods
              </span>
            </div>
            <p className="text-xs text-amber-100/70 max-w-xs mx-auto">
              Curated African Groceries · Palm Oils · Sealed Retail Packs
            </p>
          </div>
        )}

        {type === 'hero' && (
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-500/20 to-amber-300/40 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Globe2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              Bridging Africa & The UK
            </h3>
            <p className="text-sm text-slate-200/80 max-w-sm mx-auto">
              Direct sourcing from trusted agricultural producers to UK retailers & households.
            </p>
          </div>
        )}

        {type === 'sourcing' && (
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-emerald-400">
              <Leaf className="w-8 h-8" />
              <span className="font-display font-bold text-xl text-white">
                Ethical Sourcing & Partnerships
              </span>
            </div>
            <p className="text-xs text-emerald-100/80 max-w-xs mx-auto">
              Empowering farmers & food processors with direct UK market access.
            </p>
          </div>
        )}
      </div>

      {/* Card Footer Caption */}
      <div className="relative z-10 flex items-center justify-between text-xs text-slate-300/80 border-t border-white/10 pt-3">
        <span>Richminds International Ltd</span>
        <span className="text-amber-300/90 font-medium">Quality-Assured</span>
      </div>
    </div>
  );
};
