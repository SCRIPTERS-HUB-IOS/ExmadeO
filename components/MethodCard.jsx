import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MethodCard({ name, link, desc }){
  const [open, setOpen] = useState(false);

  return (
    <div className="glass p-5" style={{ borderRadius: 14 }}>
      <div className="flex justify-between items-start gap-4">
        <div>
          <div className="text-xl font-extrabold text-red-300" style={{ textShadow:'0 0 8px rgba(255,77,77,0.6)' }}>{name}</div>
          <div className="text-sm text-red-100 mt-1">Click expand for details</div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <button
            className="btn-primary"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
          >
            {open ? 'Collapse' : 'Expand Description'}
          </button>

          <a href={link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background:'rgba(255,0,0,0.12)', color:'#ff1a1a', fontWeight:900 }}>
            {name} Website
          </a>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.36 }}
            className="method-desc mt-4"
          >
            <div style={{ padding: 12, borderRadius: 10, background:'rgba(0,0,0,0.2)', border:'1px solid rgba(255,0,0,0.06)', color:'#ffdede' }}>
              {desc.map((line, i) => <div key={i}>{line}</div>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
