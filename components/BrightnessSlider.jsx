import React, { useEffect, useState } from 'react';

export default function BrightnessSlider(){
  const [val, setVal] = useState(1);

  useEffect(()=> {
    document.documentElement.style.setProperty('--site-brightness', val);
  }, [val]);

  return (
    <input
      type="range"
      min="0.3"
      max="1.4"
      step="0.01"
      value={val}
      onChange={(e) => setVal(e.target.value)}
      aria-label="Brightness"
      style={{
        width: 140,
        accentColor: '#ff1a1a',
        background: 'rgba(51,0,0,0.6)',
        borderRadius: 8,
        padding: 4,
        border: '1px solid rgba(255,0,0,0.14)'
      }}
    />
  );
}
