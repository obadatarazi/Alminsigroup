import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface ContactMapProps {
  language: "en" | "ar";
}

// Dubai Business Bay approximate coordinates
const DUBAI_LAT = 25.185;
const DUBAI_LNG = 55.265;

function createBrandMarkerIcon(color: string): L.DivIcon {
  return L.divIcon({
    className: "cm-custom-icon",
    html: `
      <div class="cm-pin" style="--c:${color}">
        <div class="cm-pulse-outer"></div>
        <div class="cm-pulse-mid"></div>
        <div class="cm-dot">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14" height="14">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      </div>`,
    iconSize: [52, 52],
    iconAnchor: [26, 26],
    popupAnchor: [0, -36],
  });
}

export function ContactMap({ language }: ContactMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  const locationName =
    language === "ar" ? "مجموعة أيمن المنسي التجارية" : "Ayman Al-Mansi Trading Group";
  const locationSub = language === "ar" ? "دبي، الإمارات العربية المتحدة" : "Dubai, UAE";

  useEffect(() => {
    if (!containerRef.current) return;

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const map = L.map(containerRef.current, {
      center: [DUBAI_LAT, DUBAI_LNG],
      zoom: 12,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });
    mapRef.current = map;

    // CartoDB Voyager — clean, Google-Maps-like light style
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>',
        maxZoom: 19,
        subdomains: "abcd",
      }
    ).addTo(map);

    // Brand marker at Dubai
    const marker = L.marker([DUBAI_LAT, DUBAI_LNG], {
      icon: createBrandMarkerIcon("#2ECC71"),
    }).addTo(map);

    marker.bindPopup(
      `<div style="text-align:center;font-family:'Cairo','Tajawal',sans-serif;padding:14px 18px;min-width:160px">
        <div style="font-size:28px;margin-bottom:8px">🇦🇪</div>
        <div style="font-weight:700;color:#111827;font-size:13px;margin-bottom:4px;line-height:1.4">${locationName}</div>
        <div style="display:inline-block;background:#2ECC71;color:#fff;border-radius:20px;padding:3px 12px;font-size:11px;font-weight:600;margin-bottom:6px">${locationSub}</div>
        <div style="color:#6b7280;font-size:11px;margin-top:4px">+971 XX XXX XXXX</div>
      </div>`,
      { maxWidth: 220, className: "cm-popup" }
    );

    // Open popup by default
    marker.openPopup();

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [language]);

  return (
    <div className="w-full rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm">
      <style>{`
        @keyframes cmPulse {
          0%,100% { transform:scale(0.85); opacity:0.25; }
          50%      { transform:scale(1.7);  opacity:0.05; }
        }
        @keyframes cmMid {
          0%,100% { transform:scale(0.9); opacity:0.4; }
          50%      { transform:scale(1.3); opacity:0.1; }
        }
        .cm-custom-icon { background:transparent !important; border:none !important; }
        .cm-pin {
          position:relative; width:52px; height:52px;
          display:flex; align-items:center; justify-content:center;
        }
        .cm-pulse-outer {
          position:absolute; inset:0; border-radius:50%;
          background:var(--c);
          animation:cmPulse 2.5s ease-in-out infinite;
        }
        .cm-pulse-mid {
          position:absolute; inset:10px; border-radius:50%;
          border:2px solid var(--c);
          animation:cmMid 2.5s ease-in-out infinite;
        }
        .cm-dot {
          position:absolute; inset:15px; border-radius:50%;
          background:var(--c); border:2.5px solid white;
          box-shadow:0 2px 12px rgba(0,0,0,0.3);
          z-index:2;
          display:flex; align-items:center; justify-content:center;
        }
        /* Popup overrides */
        .cm-popup .leaflet-popup-content-wrapper {
          border-radius:14px !important;
          padding:0 !important;
          box-shadow:0 8px 30px rgba(0,0,0,0.18) !important;
          border:2px solid #e5e7eb !important;
        }
        .cm-popup .leaflet-popup-content { margin:0 !important; }
        .cm-popup .leaflet-popup-tip-container { display:none; }
        .leaflet-control-zoom a {
          color:#374151 !important;
          border-color:#e5e7eb !important;
        }
        .leaflet-control-zoom a:hover { background:#f9fafb !important; }
        .leaflet-control-attribution { font-size:9px !important; opacity:0.5; }
      `}</style>

      <div
        ref={containerRef}
        className="h-64 sm:h-80 md:h-[420px] w-full"
      />
    </div>
  );
}
