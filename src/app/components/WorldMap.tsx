import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface WorldMapProps {
  isRTL: boolean;
  language: 'en' | 'ar';
}

const LOCATIONS = [
  {
    id: 'uae',
    nameEn: 'UAE – Dubai',
    nameAr: 'الإمارات – دبي',
    roleEn: 'Distribution Hub',
    roleAr: 'مركز التوزيع',
    lat: 25.2048,
    lng: 55.2708,
    flag: '🇦🇪',
    color: '#2ECC71',
  },
  {
    id: 'syria',
    nameEn: 'Syria',
    nameAr: 'سوريا',
    roleEn: 'Headquarters',
    roleAr: 'المقر الرئيسي',
    lat: 33.51,
    lng: 36.29,
    flag: '🇸🇾',
    color: '#E74C3C',
  },
  {
    id: 'egypt',
    nameEn: 'Egypt',
    nameAr: 'مصر',
    roleEn: 'Strategic Partner',
    roleAr: 'شريك استراتيجي',
    lat: 30.04,
    lng: 31.24,
    flag: '🇪🇬',
    color: '#2ECC71',
  },
  {
    id: 'greece',
    nameEn: 'Greece',
    nameAr: 'اليونان',
    roleEn: 'Main Source',
    roleAr: 'مصدر رئيسي',
    lat: 37.98,
    lng: 23.73,
    flag: '🇬🇷',
    color: '#2ECC71',
  },
  {
    id: 'chile',
    nameEn: 'Chile',
    nameAr: 'تشيلي',
    roleEn: 'Fruit Import',
    roleAr: 'استيراد الفواكه',
    lat: -33.45,
    lng: -70.67,
    flag: '🇨🇱',
    color: '#F39C12',
  },
];

const CONNECTIONS: [string, string, string][] = [
  ['syria', 'uae', '#2ECC71'],
  ['syria', 'greece', '#2ECC71'],
  ['syria', 'egypt', '#2ECC71'],
  ['uae', 'egypt', '#2ECC71'],
  ['greece', 'egypt', '#2ECC71'],
  ['chile', 'uae', '#F39C12'],
];

function createMarkerIcon(color: string, label: string): L.DivIcon {
  return L.divIcon({
    className: 'wm-custom-icon',
    html: `
      <div class="wm-pin" style="--c:${color}">
        <div class="wm-pulse-outer"></div>
        <div class="wm-pulse-mid"></div>
        <div class="wm-dot"></div>
        <div class="wm-label">${label}</div>
      </div>`,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -30],
  });
}

export function WorldMap({ language }: WorldMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Tear down any existing map first (handles language change re-runs)
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    // ── Init map ──────────────────────────────────────────────────────
    const map = L.map(containerRef.current, {
      center: [25, 20],
      zoom: 2,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });
    mapRef.current = map;

    // CartoDB Voyager — clean, Google-Maps-like light style, no API key needed
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>',
        maxZoom: 19,
        subdomains: 'abcd',
      }
    ).addTo(map);

    // ── Trade route lines ─────────────────────────────────────────────
    CONNECTIONS.forEach(([fromId, toId, lineColor]) => {
      const from = LOCATIONS.find((l) => l.id === fromId)!;
      const to = LOCATIONS.find((l) => l.id === toId)!;

      // Give the long Chile→UAE arc a mid-Atlantic waypoint so it arcs naturally
      const points: L.LatLngTuple[] =
        fromId === 'chile' || toId === 'chile'
          ? [[from.lat, from.lng], [10, -20], [30, 15], [to.lat, to.lng]]
          : [[from.lat, from.lng], [to.lat, to.lng]];

      L.polyline(points, {
        color: lineColor,
        weight: 1.8,
        dashArray: '7 6',
        opacity: 0.55,
      }).addTo(map);
    });

    // ── Markers with popups ───────────────────────────────────────────
    LOCATIONS.forEach((loc) => {
      const label = language === 'ar' ? loc.nameAr : loc.nameEn;
      const role = language === 'ar' ? loc.roleAr : loc.roleEn;

      const marker = L.marker([loc.lat, loc.lng], {
        icon: createMarkerIcon(loc.color, label),
      }).addTo(map);

      marker.bindPopup(
        `<div style="text-align:center;font-family:'Cairo','Tajawal',sans-serif;padding:12px 16px;min-width:130px">
          <div style="font-size:26px;margin-bottom:6px">${loc.flag}</div>
          <div style="font-weight:700;color:#111827;font-size:14px;margin-bottom:6px">${label}</div>
          <div style="display:inline-block;background:${loc.color};color:#fff;border-radius:20px;padding:2px 12px;font-size:11px;font-weight:600">${role}</div>
        </div>`,
        { maxWidth: 200, className: 'wm-popup' }
      );
    });

    // ── Fit all markers into view ─────────────────────────────────────
    const bounds = L.latLngBounds(LOCATIONS.map((l) => [l.lat, l.lng] as L.LatLngTuple));
    // Tight padding so the view focuses specifically on the 5 mentioned countries
    map.fitBounds(bounds, { padding: [55, 55], maxZoom: 4, animate: false });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [language]); // re-run when language changes so labels update

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
      {/* Marker + popup CSS injected once */}
      <style>{`
        @keyframes wmPulse {
          0%,100% { transform:scale(0.85); opacity:0.28; }
          50%      { transform:scale(1.6);  opacity:0.05; }
        }
        @keyframes wmMid {
          0%,100% { transform:scale(0.9); opacity:0.45; }
          50%      { transform:scale(1.25); opacity:0.12; }
        }
        .wm-custom-icon { background:transparent !important; border:none !important; }
        .wm-pin {
          position:relative; width:48px; height:48px;
          display:flex; align-items:center; justify-content:center;
        }
        .wm-pulse-outer {
          position:absolute; inset:0; border-radius:50%;
          background:var(--c);
          animation:wmPulse 2.3s ease-in-out infinite;
        }
        .wm-pulse-mid {
          position:absolute; inset:8px; border-radius:50%;
          border:2px solid var(--c);
          animation:wmMid 2.3s ease-in-out infinite;
        }
        .wm-dot {
          position:absolute; inset:14px; border-radius:50%;
          background:var(--c); border:2.5px solid white;
          box-shadow:0 2px 10px rgba(0,0,0,0.25);
          z-index:2;
        }
        .wm-label {
          position:absolute; top:-27px; left:50%;
          transform:translateX(-50%);
          background:white; color:var(--c);
          border:1.5px solid var(--c);
          border-radius:6px; padding:2px 8px;
          font-size:10px; font-weight:700;
          white-space:nowrap;
          font-family:'Cairo','Tajawal',sans-serif;
          box-shadow:0 2px 8px rgba(0,0,0,0.12);
          pointer-events:none; z-index:10;
        }
        /* Popup overrides */
        .wm-popup .leaflet-popup-content-wrapper {
          border-radius:14px !important;
          padding:0 !important;
          box-shadow:0 8px 30px rgba(0,0,0,0.15) !important;
        }
        .wm-popup .leaflet-popup-content { margin:0 !important; }
        .wm-popup .leaflet-popup-tip-container { display:none; }
        /* Zoom controls */
        .leaflet-control-zoom a {
          color:#374151 !important;
          border-color:#e5e7eb !important;
        }
        .leaflet-control-zoom a:hover { background:#f9fafb !important; }
        .leaflet-control-attribution { font-size:9px !important; opacity:0.55; }
      `}</style>

      {/* The actual Leaflet mount point — responsive height */}
      <div
        ref={containerRef}
        className="h-64 sm:h-80 md:h-[420px] lg:h-[500px] w-full"
      />

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 px-4 py-3 bg-white border-t border-gray-100">
        {[
          { color: '#E74C3C', label: language === 'ar' ? 'المقر الرئيسي' : 'Headquarters' },
          { color: '#2ECC71', label: language === 'ar' ? 'موقع العمليات' : 'Operations Hub' },
          { color: '#F39C12', label: language === 'ar' ? 'مصدر الاستيراد' : 'Import Source' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: item.color, boxShadow: `0 0 5px ${item.color}80` }}
            />
            <span
              className="text-xs text-gray-600 font-medium"
              style={{ fontFamily: "'Cairo', sans-serif" }}
            >
              {item.label}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <svg width="24" height="10">
            <line x1="0" y1="5" x2="24" y2="5" stroke="#2ECC71" strokeWidth="1.5" strokeDasharray="5,4" />
          </svg>
          <span
            className="text-xs text-gray-600 font-medium"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {language === 'ar' ? 'مسارات التجارة' : 'Trade Routes'}
          </span>
        </div>
      </div>
    </div>
  );
}