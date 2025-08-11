import React from 'react';

export default function OurDiscordButton(){
  return (
    <a
      href="https://discord.gg/skDSzwCScu"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position:'fixed',
        top:16,
        left:16,
        zIndex:55,
        display:'inline-flex',
        alignItems:'center',
        gap:8,
        padding:'8px 12px',
        background:'rgba(0,114,255,0.9)',
        borderRadius:12,
        color:'#fff',
        fontWeight:800,
        boxShadow:'0 0 18px rgba(0,114,255,0.9)',
        textDecoration:'none'
      }}
    >
      <svg height="18" viewBox="0 0 24 24" fill="#00a2ff" style={{ filter:'drop-shadow(0 0 6px #00a2ff)' }}>
        <path d="M20 3.5A17.9 17.9 0 0 0 17.5 2 15.3 15.3 0 0 0 12 1C6.48 1 2 5.48 2 11c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-1.9-.62-3.65-1.68-5.09l.66-.41a2 2 0 1 0-2.98-2.99z"/>
      </svg>
      Our Discord
    </a>
  );
}
