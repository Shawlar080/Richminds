import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const RichmindsLogo: React.FC<LogoProps> = ({
  className = '',
  size = 64,
  showText = false
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* SVG Emblem mirroring the uploaded Richminds International Limited circular logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm transition-transform duration-200 hover:scale-[1.02]"
        aria-label="Richminds International Limited Logo"
        role="img"
      >
        <defs>
          <radialGradient id="ringGrad" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#C98822" />
            <stop offset="90%" stopColor="#A6631E" />
            <stop offset="100%" stopColor="#78400E" />
          </radialGradient>
          <linearGradient id="africaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E9A844" />
            <stop offset="100%" stopColor="#D28620" />
          </linearGradient>
          <linearGradient id="ukGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E4275" />
            <stop offset="100%" stopColor="#0B1C38" />
          </linearGradient>
          <linearGradient id="bridgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B1C38" />
            <stop offset="50%" stopColor="#1B3A68" />
            <stop offset="100%" stopColor="#0B1C38" />
          </linearGradient>
          <linearGradient id="goldGrain" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5D061" />
            <stop offset="100%" stopColor="#D48B1C" />
          </linearGradient>
        </defs>

        {/* Outer Circular Ring with braided border effect */}
        <circle cx="250" cy="250" r="236" stroke="url(#ringGrad)" strokeWidth="18" fill="#FFFFFF" />
        <circle cx="250" cy="250" r="222" stroke="#8A4F1D" strokeWidth="2.5" strokeDasharray="6 4" fill="none" opacity="0.8" />
        <circle cx="250" cy="250" r="217" stroke="#C98822" strokeWidth="1.5" fill="none" />

        {/* Inner brand text */}
        <g textAnchor="middle">
          <text
            x="250"
            y="114"
            fill="#0B1C38"
            fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
            fontWeight="800"
            fontSize="34"
            letterSpacing="1"
          >
            RICHMINDS
          </text>
          <text
            x="250"
            y="136"
            fill="#0B1C38"
            fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
            fontWeight="700"
            fontSize="15"
            letterSpacing="2.5"
          >
            INTERNATIONAL LIMITED
          </text>
          <text
            x="250"
            y="154"
            fill="#8A4F1D"
            fontFamily="'DM Sans', Arial, sans-serif"
            fontWeight="700"
            fontSize="11"
            letterSpacing="3"
          >
            AUTHENTIC AFRICAN FOODS
          </text>
        </g>

        {/* Africa Map Silhouette (Left) */}
        <path
          d="M 172 208
             C 176 211, 190 216, 196 225
             C 202 235, 201 245, 196 254
             C 188 270, 185 288, 195 304
             C 201 315, 194 326, 182 328
             C 172 329, 168 318, 165 310
             C 160 298, 155 282, 146 270
             C 138 258, 137 245, 142 232
             C 146 222, 153 216, 159 210
             C 165 204, 168 206, 172 208 Z"
          fill="url(#africaGrad)"
        />

        {/* United Kingdom Map Silhouette (Right) */}
        <path
          d="M 298 220
             C 305 212, 316 210, 321 216
             C 325 222, 320 230, 324 238
             C 328 245, 335 252, 332 262
             C 330 270, 322 278, 325 288
             C 327 296, 333 302, 330 312
             C 326 322, 315 328, 308 322
             C 302 316, 304 305, 301 296
             C 298 288, 292 280, 295 270
             C 298 260, 302 250, 300 240
             C 298 230, 294 225, 298 220 Z"
          fill="url(#ukGrad)"
        />

        {/* The Connection Bridge Spanning Across Africa & UK */}
        <g>
          {/* Main Bridge Arch */}
          <path
            d="M 170 310
               Q 250 220 330 310
               L 330 292
               Q 250 202 170 292 Z"
            fill="url(#bridgeGrad)"
          />
          {/* Bridge Lower Rim */}
          <path
            d="M 175 312
               Q 250 232 325 312"
            stroke="#0B1C38"
            strokeWidth="3.5"
            fill="none"
          />
          {/* Vertical bridge truss posts */}
          <line x1="200" y1="282" x2="200" y2="299" stroke="#0B1C38" strokeWidth="2.5" />
          <line x1="222" y1="256" x2="222" y2="280" stroke="#0B1C38" strokeWidth="2.5" />
          <line x1="240" y1="243" x2="240" y2="268" stroke="#0B1C38" strokeWidth="2.5" />
          <line x1="260" y1="243" x2="260" y2="268" stroke="#0B1C38" strokeWidth="2.5" />
          <line x1="278" y1="256" x2="278" y2="280" stroke="#0B1C38" strokeWidth="2.5" />
          <line x1="300" y1="282" x2="300" y2="299" stroke="#0B1C38" strokeWidth="2.5" />
        </g>

        {/* Cascading Golden Grains & Seeds pouring through the bridge arch */}
        <g fill="url(#goldGrain)">
          {/* Wheat sheaf stem in center */}
          <ellipse cx="250" cy="205" rx="4.5" ry="9" transform="rotate(-10 250 205)" />
          <ellipse cx="256" cy="216" rx="4.5" ry="9" transform="rotate(22 256 216)" />
          <ellipse cx="244" cy="224" rx="4.5" ry="9" transform="rotate(-26 244 224)" />
          <ellipse cx="254" cy="235" rx="5" ry="10" transform="rotate(15 254 235)" />
          <ellipse cx="242" cy="246" rx="5" ry="10" transform="rotate(-18 242 246)" />
          <ellipse cx="253" cy="258" rx="5.5" ry="11" transform="rotate(20 253 258)" />
          <ellipse cx="239" cy="268" rx="5.5" ry="10" transform="rotate(-25 239 268)" />

          {/* Abundant grains and legumes spilling into bowl */}
          <circle cx="230" cy="292" r="5" fill="#D48B1C" />
          <circle cx="246" cy="286" r="6" fill="#F2BD59" />
          <circle cx="262" cy="290" r="5" fill="#E89B2B" />
          <ellipse cx="238" cy="304" rx="7" ry="5" fill="#C97314" />
          <ellipse cx="254" cy="302" rx="8" ry="5.5" fill="#ECA730" />
          <ellipse cx="268" cy="305" rx="6.5" ry="5" fill="#D98A1E" />
          <circle cx="225" cy="315" r="5.5" fill="#F3BF58" />
          <circle cx="248" cy="316" r="7" fill="#FAD77A" />
          <circle cx="272" cy="316" r="6" fill="#D98A1E" />
        </g>

        {/* The Navy and Gold Harvest Bowl */}
        <g>
          <path
            d="M 205 324
               C 205 358, 230 375, 250 375
               C 270 375, 295 358, 295 324
               Z"
            fill="#0B1C38"
          />
          {/* Bowl Rim */}
          <path
            d="M 202 324
               C 202 329, 298 329, 298 324
               C 298 319, 202 319, 202 324 Z"
            fill="#C98822"
            stroke="#8A4F1D"
            strokeWidth="1.5"
          />
          {/* Inner highlight curve on bowl */}
          <path
            d="M 216 335
               C 225 358, 242 366, 250 366
               C 258 366, 275 358, 284 335"
            stroke="#E7A942"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Agricultural Green Curved Strip */}
        <path
          d="M 160 382
             Q 250 400 340 382
             Q 250 410 160 382 Z"
          fill="#1E5032"
        />

        {/* Earth Terracotta Curved Base Strip */}
        <path
          d="M 152 396
             Q 250 422 348 396
             Q 250 442 152 396 Z"
          fill="#8A4F1D"
        />
      </svg>

      {/* Optional horizontal typographic wordmark */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display font-extrabold text-brand-navy tracking-tight text-lg sm:text-xl leading-none">
            RICHMINDS
          </span>
          <span className="font-display font-semibold text-brand-navy/90 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase leading-tight mt-0.5">
            International Limited
          </span>
          <span className="text-[9px] font-medium text-brand-gold uppercase tracking-[0.2em] leading-tight">
            Authentic African Foods
          </span>
        </div>
      )}
    </div>
  );
};
