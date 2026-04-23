import { useState } from 'react';

interface WorldMapProps {
  isRTL: boolean;
  language: 'en' | 'ar';
}

// Equirectangular projection: lat/lng → SVG x/y
// viewBox: 0 0 1000 500
function project(lng: number, lat: number) {
  const x = ((lng + 180) / 360) * 1000;
  const y = ((90 - lat) / 180) * 500;
  return { x, y };
}

const LOCATIONS = [
  {
    id: 'uae',
    nameEn: 'UAE',
    nameAr: 'الإمارات',
    roleEn: 'Distribution Hub',
    roleAr: 'مركز التوزيع',
    lng: 55.27,
    lat: 25.2,
    flag: '🇦🇪',
    color: '#2ECC71',
    size: 10,
  },
  {
    id: 'syria',
    nameEn: 'Syria',
    nameAr: 'سوريا',
    roleEn: 'Headquarters',
    roleAr: 'المقر الرئيسي',
    lng: 36.29,
    lat: 34.8,
    flag: '🇸🇾',
    color: '#E74C3C',
    size: 10,
  },
  {
    id: 'egypt',
    nameEn: 'Egypt',
    nameAr: 'مصر',
    roleEn: 'Strategic Partner',
    roleAr: 'شريك استراتيجي',
    lng: 31.24,
    lat: 30.04,
    flag: '🇪🇬',
    color: '#2ECC71',
    size: 8,
  },
  {
    id: 'greece',
    nameEn: 'Greece',
    nameAr: 'اليونان',
    roleEn: 'Main Source',
    roleAr: 'مصدر رئيسي',
    lng: 23.73,
    lat: 37.98,
    flag: '🇬🇷',
    color: '#2ECC71',
    size: 8,
  },
  {
    id: 'chile',
    nameEn: 'Chile',
    nameAr: 'تشيلي',
    roleEn: 'Fruit Import',
    roleAr: 'استيراد الفواكه',
    lng: -70.67,
    lat: -33.45,
    flag: '🇨🇱',
    color: '#F39C12',
    size: 8,
  },
];

// Simplified world land mass paths for equirectangular projection (viewBox 1000x500)
// These are simplified but geographically representative paths
const LAND_PATHS = [
  // North America
  `M 97 80 L 108 78 L 115 72 L 125 68 L 132 72 L 138 80 L 145 85 L 150 95 L 148 108 L 155 115 L 160 125 L 158 138 L 162 148 L 170 155 L 175 162 L 178 172 L 185 178 L 195 182 L 205 188 L 210 198 L 205 210 L 198 218 L 195 228 L 200 235 L 208 238 L 210 248 L 205 255 L 198 258 L 190 268 L 188 278 L 180 282 L 172 278 L 165 272 L 158 265 L 148 268 L 140 275 L 132 278 L 125 272 L 118 265 L 112 260 L 108 252 L 102 248 L 95 242 L 90 238 L 85 228 L 82 218 L 80 208 L 78 198 L 75 188 L 72 178 L 70 168 L 68 158 L 65 148 L 62 138 L 60 128 L 62 118 L 68 108 L 75 100 L 82 92 Z`,
  // Greenland
  `M 168 40 L 180 35 L 195 32 L 208 38 L 215 48 L 218 58 L 212 65 L 200 70 L 188 68 L 178 62 L 170 55 Z`,
  // Mexico & Central America
  `M 165 220 L 175 228 L 182 238 L 188 248 L 190 260 L 185 270 L 178 275 L 170 272 L 162 265 L 158 258 L 155 248 L 152 238 L 155 228 L 160 220 Z`,
  // Caribbean Islands (simplified)
  `M 200 240 L 208 238 L 215 242 L 212 248 L 205 248 Z M 215 242 L 222 240 L 228 244 L 225 250 L 218 250 Z`,
  // South America
  `M 225 265 L 235 258 L 245 255 L 258 258 L 268 265 L 275 275 L 282 285 L 285 295 L 288 308 L 290 322 L 288 338 L 282 352 L 275 365 L 268 378 L 258 388 L 248 392 L 238 388 L 228 378 L 220 365 L 215 352 L 212 338 L 210 322 L 212 308 L 215 295 L 218 282 L 222 272 Z`,
  // UK & Ireland
  `M 448 102 L 455 98 L 460 105 L 456 112 L 450 110 Z M 438 108 L 445 105 L 450 110 L 448 118 L 440 118 Z`,
  // Europe (mainland)
  `M 458 98 L 472 95 L 488 92 L 502 95 L 515 98 L 525 105 L 535 110 L 540 120 L 538 130 L 532 138 L 525 145 L 518 150 L 510 155 L 505 162 L 508 170 L 515 175 L 518 182 L 512 188 L 505 188 L 498 182 L 492 175 L 488 168 L 482 162 L 475 158 L 468 155 L 462 148 L 458 140 L 455 130 L 455 120 L 455 110 Z`,
  // Scandinavia
  `M 480 72 L 492 68 L 502 65 L 512 70 L 518 80 L 515 90 L 508 95 L 498 92 L 490 85 L 482 80 Z`,
  // Finland & Baltic
  `M 508 78 L 520 72 L 532 68 L 542 72 L 548 82 L 545 92 L 535 98 L 525 95 L 515 90 Z`,
  // Russia (simplified western part)
  `M 540 72 L 560 65 L 585 60 L 615 58 L 645 60 L 670 65 L 695 70 L 715 80 L 725 92 L 718 105 L 705 115 L 688 120 L 668 122 L 645 118 L 622 115 L 600 112 L 578 108 L 558 105 L 545 98 L 540 88 L 540 78 Z`,
  // Russia Siberia
  `M 715 60 L 745 55 L 778 52 L 808 55 L 835 60 L 858 70 L 875 82 L 882 95 L 878 108 L 862 118 L 842 125 L 818 128 L 792 125 L 765 120 L 738 115 L 718 108 L 708 95 L 710 80 L 715 68 Z`,
  // Far East Russia
  `M 855 65 L 878 58 L 898 55 L 918 58 L 932 68 L 935 82 L 928 95 L 912 105 L 895 110 L 875 108 L 858 100 L 852 88 L 852 75 Z`,
  // Africa
  `M 468 182 L 478 178 L 492 178 L 508 182 L 520 188 L 528 198 L 532 212 L 530 228 L 525 242 L 518 255 L 510 268 L 502 282 L 495 295 L 488 308 L 482 322 L 478 335 L 475 348 L 472 358 L 468 365 L 462 365 L 455 358 L 448 348 L 442 335 L 438 322 L 435 308 L 432 295 L 430 282 L 428 268 L 428 255 L 430 242 L 432 228 L 435 215 L 440 202 L 448 192 L 458 185 Z`,
  // Madagascar
  `M 542 318 L 548 312 L 555 318 L 558 330 L 552 340 L 545 338 L 540 328 Z`,
  // Middle East (Arabian Peninsula)
  `M 548 180 L 560 178 L 572 182 L 582 188 L 590 198 L 592 212 L 588 225 L 578 235 L 565 240 L 552 238 L 542 228 L 538 215 L 540 202 Z`,
  // Turkey
  `M 528 148 L 545 145 L 560 142 L 572 145 L 580 152 L 578 162 L 568 168 L 552 170 L 538 168 L 528 160 Z`,
  // Iran & Iraq
  `M 572 148 L 590 145 L 608 148 L 622 155 L 628 165 L 625 178 L 615 188 L 598 192 L 580 188 L 568 178 L 565 165 Z`,
  // Central Asia
  `M 618 118 L 645 115 L 672 115 L 698 118 L 718 125 L 725 138 L 718 150 L 700 158 L 678 162 L 652 158 L 628 152 L 615 140 L 615 128 Z`,
  // South Asia (India)
  `M 648 165 L 665 160 L 682 162 L 695 170 L 700 182 L 698 195 L 690 208 L 678 218 L 665 222 L 652 218 L 642 208 L 638 195 L 640 182 L 645 172 Z`,
  // Southeast Asia
  `M 715 175 L 732 170 L 748 172 L 760 180 L 765 192 L 760 205 L 748 215 L 732 218 L 718 215 L 708 205 L 705 192 L 708 180 Z`,
  // China
  `M 698 122 L 725 118 L 752 118 L 778 122 L 800 130 L 815 142 L 818 158 L 808 172 L 790 180 L 768 182 L 745 178 L 722 172 L 702 162 L 695 148 L 695 135 Z`,
  // Japan
  `M 832 135 L 840 130 L 848 135 L 848 145 L 840 150 L 832 148 Z M 845 148 L 852 145 L 858 150 L 855 160 L 848 162 L 842 158 Z`,
  // Korea
  `M 800 138 L 810 135 L 818 140 L 818 152 L 810 158 L 800 155 Z`,
  // Australia
  `M 748 320 L 768 312 L 792 310 L 818 312 L 840 320 L 858 332 L 868 348 L 868 365 L 858 378 L 840 388 L 818 392 L 792 392 L 768 388 L 748 378 L 735 365 L 732 348 L 738 335 Z`,
  // New Zealand
  `M 875 368 L 882 362 L 888 368 L 888 380 L 882 385 L 875 380 Z`,
  // Indonesia (simplified)
  `M 738 248 L 752 242 L 765 245 L 772 255 L 768 265 L 752 268 L 738 262 Z M 772 245 L 785 240 L 798 245 L 802 255 L 795 262 L 778 262 L 768 255 Z`,
  // Philippines
  `M 800 208 L 808 202 L 816 208 L 818 220 L 810 228 L 800 225 Z`,
  // East Africa
  `M 530 248 L 542 242 L 555 248 L 562 260 L 558 272 L 545 278 L 532 272 L 525 260 Z`,
];

// Highlighted country paths (slightly larger/bolder shapes for highlighted countries)
const HIGHLIGHTED_COUNTRIES = {
  greece: `M 488 148 L 500 145 L 512 148 L 518 158 L 515 168 L 505 175 L 492 175 L 482 168 L 480 158 Z`,
  syria: `M 544 155 L 556 152 L 568 155 L 572 165 L 568 175 L 555 178 L 542 175 L 538 165 Z`,
  egypt: `M 498 195 L 515 192 L 530 195 L 535 208 L 530 222 L 515 228 L 498 225 L 488 212 Z`,
  uae: `M 574 198 L 585 195 L 596 198 L 600 210 L 595 222 L 582 225 L 568 222 L 562 210 Z`,
  chile: `M 258 330 L 265 325 L 272 330 L 275 345 L 272 360 L 265 375 L 255 380 L 245 375 L 242 360 L 245 345 Z`,
};

// Connection lines between locations
const CONNECTIONS = [
  { from: 'syria', to: 'uae' },
  { from: 'syria', to: 'greece' },
  { from: 'syria', to: 'egypt' },
  { from: 'uae', to: 'egypt' },
  { from: 'greece', to: 'egypt' },
  { from: 'chile', to: 'uae' },
];

export function WorldMap({ isRTL, language }: WorldMapProps) {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const projected = LOCATIONS.reduce((acc, loc) => {
    acc[loc.id] = project(loc.lng, loc.lat);
    return acc;
  }, {} as Record<string, { x: number; y: number }>);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Map Label */}
      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md border border-gray-200">
        <span className="text-xs text-gray-500 font-medium tracking-wide">
          {language === 'ar' ? 'الخريطة التفاعلية' : 'Interactive Map'}
        </span>
      </div>

      {/* SVG World Map */}
      <svg
        viewBox="0 0 1000 500"
        className="w-full"
        style={{ background: 'linear-gradient(180deg, #e8f4f8 0%, #d4eaf5 50%, #c8dff0 100%)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ocean gradient background */}
        <defs>
          <radialGradient id="oceanGrad" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#ddeef7" />
            <stop offset="100%" stopColor="#b8d4e8" />
          </radialGradient>
          <filter id="glow-green">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-red">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-orange">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="#2ECC71" opacity="0.4" />
          </marker>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2ECC71" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#27AE60" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Ocean background */}
        <rect width="1000" height="500" fill="url(#oceanGrad)" />

        {/* Latitude grid lines (subtle) */}
        {[83, 166, 250, 333, 416].map((y, i) => (
          <line key={i} x1="0" y1={y} x2="1000" y2={y} stroke="#c0d8e8" strokeWidth="0.5" strokeDasharray="4,8" />
        ))}
        {/* Longitude grid lines (subtle) */}
        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x, i) => (
          <line key={i} x1={x} y1="0" x2={x} y2="500" stroke="#c0d8e8" strokeWidth="0.5" strokeDasharray="4,8" />
        ))}

        {/* All land masses */}
        {LAND_PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="#c8d8c0"
            stroke="#b0c8a8"
            strokeWidth="0.8"
          />
        ))}

        {/* Highlighted countries */}
        <path d={HIGHLIGHTED_COUNTRIES.greece} fill="#2ECC71" stroke="#27AE60" strokeWidth="1.5" opacity="0.85" />
        <path d={HIGHLIGHTED_COUNTRIES.syria} fill="#E74C3C" stroke="#C0392B" strokeWidth="1.5" opacity="0.85" />
        <path d={HIGHLIGHTED_COUNTRIES.egypt} fill="#2ECC71" stroke="#27AE60" strokeWidth="1.5" opacity="0.85" />
        <path d={HIGHLIGHTED_COUNTRIES.uae} fill="#2ECC71" stroke="#27AE60" strokeWidth="1.5" opacity="0.85" />
        <path d={HIGHLIGHTED_COUNTRIES.chile} fill="#F39C12" stroke="#E67E22" strokeWidth="1.5" opacity="0.85" />

        {/* Connection lines */}
        {CONNECTIONS.map((conn, i) => {
          const from = projected[conn.from];
          const to = projected[conn.to];
          if (!from || !to) return null;
          const cx = (from.x + to.x) / 2;
          const cy = Math.min(from.y, to.y) - 30;
          return (
            <path
              key={i}
              d={`M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`}
              fill="none"
              stroke="#2ECC71"
              strokeWidth="1.2"
              strokeDasharray="5,4"
              opacity="0.5"
            />
          );
        })}

        {/* Chile to UAE long arc connection */}
        {(() => {
          const from = projected['chile'];
          const to = projected['uae'];
          if (!from || !to) return null;
          return (
            <path
              d={`M ${from.x} ${from.y} Q 500 100 ${to.x} ${to.y}`}
              fill="none"
              stroke="#F39C12"
              strokeWidth="1.2"
              strokeDasharray="5,4"
              opacity="0.45"
            />
          );
        })()}

        {/* Location Markers */}
        {LOCATIONS.map((loc) => {
          const pos = projected[loc.id];
          const isHovered = hoveredLocation === loc.id;
          const r = isHovered ? loc.size + 3 : loc.size;

          return (
            <g
              key={loc.id}
              transform={`translate(${pos.x}, ${pos.y})`}
              onMouseEnter={() => setHoveredLocation(loc.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Outer glow ring - pulsing */}
              <circle
                r={r + 10}
                fill={loc.color}
                opacity={isHovered ? 0.25 : 0.15}
                className={loc.id === 'syria' ? 'animate-ping' : ''}
              >
                {!isHovered && (
                  <animate
                    attributeName="r"
                    values={`${r + 6};${r + 16};${r + 6}`}
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                )}
                {!isHovered && (
                  <animate
                    attributeName="opacity"
                    values="0.2;0.05;0.2"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                )}
              </circle>

              {/* Middle ring */}
              <circle
                r={r + 4}
                fill="none"
                stroke={loc.color}
                strokeWidth="1.5"
                opacity={isHovered ? 0.7 : 0.4}
              />

              {/* Main marker circle */}
              <circle
                r={r}
                fill={loc.color}
                stroke="white"
                strokeWidth="2.5"
                filter={`url(#glow-${loc.color === '#2ECC71' ? 'green' : loc.color === '#E74C3C' ? 'red' : 'orange'})`}
              />

              {/* Pin shadow */}
              <ellipse cx={0} cy={r + 4} rx={r * 0.8} ry={3} fill="rgba(0,0,0,0.2)" />

              {/* Label container */}
              <g transform={`translate(${loc.id === 'chile' ? -5 : 5}, ${-r - 18})`}>
                <rect
                  x={loc.id === 'chile' ? -70 : -4}
                  y={-14}
                  width={loc.id === 'chile' || loc.id === 'greece' ? 65 : 55}
                  height={22}
                  rx={6}
                  fill="white"
                  stroke={loc.color}
                  strokeWidth="1.5"
                  opacity={0.97}
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))"
                />
                <text
                  x={loc.id === 'chile' ? -37 : 24}
                  y={2}
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="'Cairo', 'Tajawal', sans-serif"
                  fontWeight="700"
                  fill={loc.color}
                >
                  {language === 'ar' ? loc.nameAr : loc.nameEn}
                </text>
              </g>
            </g>
          );
        })}

        {/* Hover tooltip */}
        {hoveredLocation && (() => {
          const loc = LOCATIONS.find(l => l.id === hoveredLocation);
          const pos = projected[hoveredLocation];
          if (!loc || !pos) return null;
          const name = language === 'ar' ? loc.nameAr : loc.nameEn;
          const role = language === 'ar' ? loc.roleAr : loc.roleEn;
          const tipX = Math.min(Math.max(pos.x, 80), 920);
          const tipY = pos.y - loc.size - 55;
          return (
            <g transform={`translate(${tipX}, ${tipY})`}>
              <rect x="-65" y="-28" width="130" height="44" rx="10" fill="#1a1a2e" opacity="0.92" />
              <text x="0" y="-10" textAnchor="middle" fontSize="12" fontFamily="'Cairo', 'Tajawal', sans-serif" fontWeight="700" fill="white">
                {loc.flag} {name}
              </text>
              <text x="0" y="7" textAnchor="middle" fontSize="10" fontFamily="'Cairo', 'Tajawal', sans-serif" fill={loc.color}>
                {role}
              </text>
            </g>
          );
        })()}

        {/* Equator line */}
        <line x1="0" y1="250" x2="1000" y2="250" stroke="#90b8c8" strokeWidth="1" opacity="0.5" strokeDasharray="8,12" />
        <text x="8" y="248" fontSize="9" fill="#90a8b8" fontFamily="sans-serif">Equator</text>
      </svg>

      {/* Legend below map */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 px-4 py-3 bg-white/70 backdrop-blur-sm border-t border-gray-100">
        {[
          { color: '#E74C3C', label: language === 'ar' ? 'المقر الرئيسي' : 'Headquarters' },
          { color: '#2ECC71', label: language === 'ar' ? 'موقع العمليات' : 'Operations Hub' },
          { color: '#F39C12', label: language === 'ar' ? 'مصدر الاستيراد' : 'Import Source' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color, boxShadow: `0 0 6px ${item.color}88` }} />
            <span className="text-xs text-gray-600 font-medium" style={{ fontFamily: "'Cairo', sans-serif" }}>
              {item.label}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <svg width="24" height="10">
            <line x1="0" y1="5" x2="24" y2="5" stroke="#2ECC71" strokeWidth="1.5" strokeDasharray="4,3" />
          </svg>
          <span className="text-xs text-gray-600 font-medium" style={{ fontFamily: "'Cairo', sans-serif" }}>
            {language === 'ar' ? 'مسارات التجارة' : 'Trade Routes'}
          </span>
        </div>
      </div>
    </div>
  );
}
