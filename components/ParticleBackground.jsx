import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticleBackground(){
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    fpsLimit: 60,
    particles: {
      number: { value: 70, density: { enable: true, area: 900 } },
      color: { value: ['#ff4d4d','#ff1a1a','#ff6666'] },
      shape: { type: 'circle' },
      opacity: { value: 0.9, random: { enable: true, minimumValue: 0.4 } },
      size: { value: { min: 1, max: 4 }, random: true },
      move: { enable: true, speed: 0.9, direction: 'none', random: true, outModes: { default: 'wrap' } },
      links: { enable: false } /* no linking lines */
    },
    detectRetina: true
  };

  return (
    <div style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none' }}>
      <Particles id="tsparticles" init={init} options={options} style={{ width:'100vw', height:'100vh' }} />
    </div>
  )
}
