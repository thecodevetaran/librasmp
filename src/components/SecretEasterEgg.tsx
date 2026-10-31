import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export const SecretEasterEgg: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Secret trigger: pressing 'b' or 'B' (for Balance)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }
      if (e.key === 'b' || e.key === 'B') {
        setIsOpen(prev => !prev)
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void-deep/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="easter-egg-title"
    >
      <div className="mc-panel max-w-md w-full p-6 border-2 border-lilac shadow-pixel-lilac relative text-center">
        
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1.5 mc-btn-obsidian"
          aria-label="Close secret modal"
        >
          <X className="w-4 h-4 text-moonlight" />
        </button>

        {/* Pure transparent logo with no container box */}
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/assets/logo.png" 
            alt="Libra Scales Emblem" 
            className="w-16 h-16 object-contain drop-shadow-[0_0_16px_rgba(167,139,250,0.6)]" 
          />
        </div>

        <span className="font-mono text-[10px] text-sand uppercase tracking-widest block mb-1 font-bold">
          SECRET CODEX UNLOCKED
        </span>

        <h3 id="easter-egg-title" className="font-pixel text-xl sm:text-2xl text-moonlight mb-2">
          THE SCALES OF EQUILIBRIUM
        </h3>

        <p className="font-sans text-sm text-moonlight-muted leading-relaxed mb-4">
          You've discovered the hidden harmonic balance of Libra SMP! In an ecosystem where 10 unique origins collide, true victory belongs not to raw brute strength, but to the harmony you cultivate with your faction.
        </p>

        <div className="p-3 mc-inset font-pixel text-xs text-sand mb-5">
          "Find your balance. Shape your destiny."
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="w-full mc-btn-lilac py-2.5 text-xs font-pixel"
        >
          RETURN TO REALM
        </button>

      </div>
    </div>
  )
}
