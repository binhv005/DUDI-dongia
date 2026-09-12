import React from 'react';

const mascotSources = {
  hero: "/robot-head.webp",
  analyzer: "/robot-head.webp",
  process: "/robot-head.webp",
  cta: "/robot-head.webp"
};

export function Mascot({ type = "hero", alt = "Mascot DUDI Kỹ thuật viên", className = "", style = {} }) {
  const src = mascotSources[type] || mascotSources.hero;

  return (
    <div className={`mascot-box animate-float ${className}`} style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', ...style }}>
      <img
        src={src}
        alt={alt}
        loading={type === "hero" ? "eager" : "lazy"}
        width="340"
        height="340"
        style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 14px 30px rgba(229, 46, 46, 0.25))' }}
      />
    </div>
  );
}
