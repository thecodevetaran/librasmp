import React, { useState, useEffect, useRef } from 'react'
import { ServerStatusData } from '../types'
import { copyToClipboard } from '../utils/clipboard'
import { Copy, Check, Disc as Discord, Compass, Sparkles, ChevronDown, Globe, Wifi } from 'lucide-react'

interface HeroProps {
  status: ServerStatusData
  serverIp: string
}

export const Hero: React.FC<HeroProps> = ({ status, serverIp }) => {
  const [copied, setCopied] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  // Smooth desktop pointer parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coords (-1 to 1) from viewport center
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePos({ x, y })
    }

    // Only enable on desktop/pointer devices
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleCopy = async () => {
    const success = await copyToClipboard(serverIp)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    }
  }

  // Parallax offsets (gentle, observable, restrained)
  const bgOffsetX = mousePos.x * 12
  const bgOffsetY = mousePos.y * 10
  const beamOffsetX = mousePos.x * -18
  const particleOffsetX = mousePos.x * 25

  return (
    <section 
      ref={heroRef}
      id="hero"
      aria-label="Welcome to Libra SMP"
      className="relative min-h-[720px] lg:min-h-[820px] lg:max-h-[880px] flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden bg-void"
    >
      {/* LAYER 0: Main Minecraft Landscape with Parallax Transform */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out will-change-transform"
        style={{ 
          backgroundImage: `url('/assets/screenshot-beacon-rain.png')`,
          transform: `translate3d(${bgOffsetX}px, ${bgOffsetY}px, 0px) scale(1.05)`
        }}
      >
        {/* Layered Environmental Atmosphere & Vignette */}
        <div className="absolute inset-0 bg-void/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-void/60 to-void" />
        {/* Pixel Scanline texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A78BFA_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* LAYER 1: Dimensional Beacon Light Beam */}
      <div 
        className="absolute left-1/2 top-0 -translate-x-1/2 w-5 sm:w-8 h-full pointer-events-none z-0 overflow-hidden transition-transform duration-500 ease-out"
        style={{ transform: `translate3d(calc(-50% + ${beamOffsetX}px), 0px, 0px)` }}
      >
        <div className="w-full h-full beacon-beam-dim animate-beam-pulse" />
      </div>

      {/* LAYER 2: Restrained Environmental Dimensional Particles */}
      <div 
        className="absolute inset-0 pointer-events-none z-1 overflow-hidden transition-transform duration-700 ease-out"
        style={{ transform: `translate3d(${particleOffsetX}px, 0px, 0px)` }}
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-[18%] w-2.5 h-2.5 bg-lilac/70 rotate-45 animate-float-slow opacity-80 shadow-pixel-sm" />
        <div className="absolute top-1/3 right-[22%] w-3 h-3 bg-soul/70 rotate-12 animate-float-slow [animation-delay:2s] opacity-75 shadow-pixel-sm" />
        <div className="absolute top-2/3 left-[28%] w-2 h-2 bg-sand/60 -rotate-45 animate-float-slow [animation-delay:4s] opacity-70" />
        <div className="absolute top-1/2 right-[15%] w-2.5 h-2.5 bg-lilac-light/70 rotate-90 animate-float-slow [animation-delay:1.5s] opacity-80" />
      </div>

      {/* LAYER 3: Stable Foreground UI Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Season & Lore Badge in Ancient Sand */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 bg-obsidian border-2 border-obsidian-border text-sand mb-5 shadow-pixel-sm max-w-[95%]">
          <Sparkles className="w-3.5 h-3.5 text-lilac flex-shrink-0" />
          <span className="font-pixel text-[10px] sm:text-[11px] tracking-wider uppercase text-sand-light">
            SEASON 1 • ALTER SMP X ORIGINS
          </span>
          <span className="hidden sm:inline-block w-1 h-1 bg-lilac" />
          <span className="hidden sm:inline-block font-mono text-[10px] text-moonlight-dim">SINGAPORE NODE</span>
        </div>

        {/* Official Libra Scales Emblem — Pure Transparent PNG, NO container box */}
        <div className="relative mb-5 group">
          <img 
            src="/assets/logo.png" 
            alt="Libra SMP Scales Emblem" 
            className="w-24 h-24 sm:w-36 sm:h-36 object-contain filter drop-shadow-[0_0_24px_rgba(212,163,55,0.45)] group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Hero Main Headline in Deliberate Stages (Pixel Display Font) */}
        <div className="space-y-1 mb-4 w-full px-2">
          <h1 className="font-pixel text-lg sm:text-3xl md:text-5xl text-moonlight tracking-tight drop-shadow-[3px_3px_0px_#06080E] leading-tight break-words">
            FIND YOUR BALANCE.
          </h1>
          <h2 className="font-pixel text-lg sm:text-3xl md:text-5xl text-lilac tracking-tight drop-shadow-[3px_3px_0px_#06080E] leading-tight break-words">
            SHAPE YOUR DESTINY.
          </h2>
        </div>

        {/* Supporting Text in Readable Manrope */}
        <p className="font-sans font-medium text-base sm:text-lg text-moonlight max-w-2xl mb-8 leading-relaxed drop-shadow">
          A new SMP. A new approach to moderation. Enter a survival realm empowered by 10 distinct evolutionary Origins and governed through transparent balance.
        </p>

        {/* Block-Built Server IP Control Panel */}
        <div className="w-full max-w-lg mb-8 mc-panel p-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 mc-inset">
            
            <div className="flex items-center gap-3 text-left">
              <div className="p-2 mc-slot text-soul">
                <Wifi className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-[9px] text-moonlight-dim uppercase tracking-wider">
                    SERVER ADDRESS
                  </span>
                  <span className={`inline-block w-2 h-2 ${status.online ? 'bg-soul animate-pulse' : 'bg-rose-500'}`} />
                </div>
                <span className="font-mono text-sm sm:text-base text-moonlight font-bold tracking-wider select-all">
                  {serverIp}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto mc-btn-soul px-4 py-2.5 text-xs gap-2 cursor-pointer font-mono"
              aria-label="Copy server IP address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>IP COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY IP</span>
                </>
              )}
            </button>

          </div>

          {/* Technical Metadata Bar in JetBrains Mono */}
          <div className="flex items-center justify-between px-2 pt-2 text-[11px] font-mono text-moonlight-dim">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-soul" />
              Singapore • Ultimate Hosting
            </span>
            <span className="font-bold text-moonlight">
              {status.online ? `${status.players.online}/${status.players.max} Online Now` : 'ViaVersion Active'}
            </span>
          </div>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href="#join"
            className="w-full sm:w-auto mc-btn-lilac px-7 py-3 text-sm gap-2 text-center group cursor-pointer"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>JOIN THE ADVENTURE</span>
          </a>

          <a
            href="#origins"
            className="w-full sm:w-auto mc-btn-obsidian px-6 py-3 text-sm gap-2 text-center cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-lilac" />
            <span>EXPLORE YOUR ORIGIN</span>
          </a>
        </div>

        {/* Discord Invitation Sub-link */}
        <div className="mt-5">
          <a 
            href="https://dsc.gg/libraer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-moonlight-dim hover:text-lilac transition-colors"
          >
            <Discord className="w-3.5 h-3.5 text-lilac" />
            <span>Join our Discord: <span className="text-sand underline">dsc.gg/libraer</span></span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <a 
            href="#discover"
            className="flex flex-col items-center gap-1 text-moonlight-dim hover:text-lilac transition-colors"
            aria-label="Scroll down to discover Libra SMP"
          >
            <span className="font-pixel text-[9px] uppercase tracking-widest">SCROLL TO DISCOVER</span>
            <ChevronDown className="w-4 h-4 text-lilac" />
          </a>
        </div>

      </div>
    </section>
  )
}
