import React, { useState, useEffect } from 'react'
import { ServerStatusData } from '../types'
import { copyToClipboard } from '../utils/clipboard'
import { Copy, Check, Menu, X, Disc as Discord, Wifi } from 'lucide-react'

interface NavbarProps {
  status: ServerStatusData
  serverIp: string
}

export const Navbar: React.FC<NavbarProps> = ({ status, serverIp }) => {
  const [copied, setCopied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCopyIp = async () => {
    const success = await copyToClipboard(serverIp)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  const navLinks = [
    { name: 'Discover', href: '#discover' },
    { name: 'Origins', href: '#origins' },
    { name: 'Fairness', href: '#fairness' },
    { name: 'Roster', href: '#staff' },
    { name: 'Rules', href: '#rules' },
    { name: 'Join Server', href: '#join' },
    { name: 'Support', href: '#support' },
  ]

  return (
    <nav 
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-void-deep/95 border-b-2 border-obsidian-border shadow-2xl py-2' 
          : 'bg-gradient-to-b from-void-deep/90 via-void/70 to-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Title — Genuine Transparent Logo without box container */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-lilac p-0.5"
          >
            <img 
              src="/assets/logo.png" 
              alt="Libra SMP Scales Emblem" 
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_12px_rgba(212,163,55,0.4)] group-hover:scale-105 transition-transform duration-150"
            />
            <div className="flex flex-col">
              <span className="font-pixel text-sm sm:text-base tracking-wider text-moonlight group-hover:text-lilac transition-colors">
                LIBRA SMP
              </span>
              <span className="font-mono text-[10px] text-sand tracking-widest uppercase">
                Season 1 • Alter X Origins
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase font-pixel tracking-wider text-moonlight-dim hover:text-lilac hover:translate-y-[-1px] transition-all relative py-1 border-b-2 border-transparent hover:border-lilac"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Live Server Indicator Pill */}
            <div 
              className={`flex items-center gap-2 px-2.5 py-1.5 border-2 text-xs font-mono font-medium ${
                status.online 
                  ? 'bg-void-deep border-soul/50 text-soul shadow-pixel-sm' 
                  : 'bg-void-deep border-rose-900/60 text-rose-300'
              }`}
              title={status.online ? `Server online: ${status.players.online}/${status.players.max}` : 'Server connection query'}
            >
              <span className={`w-2 h-2 ${status.online ? 'bg-soul animate-pulse' : 'bg-rose-500'}`} />
              <span className="font-mono text-[11px] font-bold">
                {status.loading 
                  ? 'CONNECTING...' 
                  : status.online 
                    ? `${status.players.online}/${status.players.max} ONLINE` 
                    : 'OFFLINE'}
              </span>
            </div>

            {/* Quick Copy IP Button */}
            <button
              onClick={handleCopyIp}
              className="mc-btn-obsidian px-3 py-1.5 text-xs gap-1.5 cursor-pointer font-mono"
              aria-label="Copy server IP address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-soul" />
                  <span className="text-soul font-bold">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-lilac" />
                  <span className="text-moonlight">{serverIp}</span>
                </>
              )}
            </button>

            {/* Discord Pill */}
            <a
              href="https://dsc.gg/libraer"
              target="_blank"
              rel="noopener noreferrer"
              className="mc-btn-lilac px-3.5 py-1.5 text-xs gap-1.5 cursor-pointer"
              aria-label="Join Libra SMP Discord Community"
            >
              <Discord className="w-3.5 h-3.5 text-void-deep" />
              <span>DISCORD</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleCopyIp}
              className="p-2 mc-btn-obsidian"
              aria-label="Copy Server IP"
            >
              {copied ? <Check className="w-4 h-4 text-soul" /> : <Copy className="w-4 h-4 text-lilac" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 mc-btn-obsidian"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-lilac" /> : <Menu className="w-5 h-5 text-moonlight" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-void-deep border-b-2 border-obsidian-border px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-obsidian-border/60">
            <div className="flex items-center gap-2 font-mono text-xs text-moonlight-dim">
              <span className={`w-2 h-2 ${status.online ? 'bg-soul animate-pulse' : 'bg-rose-500'}`} />
              <span>{status.online ? `${status.players.online}/${status.players.max} PLAYERS ONLINE` : 'OFFLINE'}</span>
            </div>
            <span className="font-pixel text-[10px] text-sand uppercase">Season 1</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-pixel bg-obsidian border-2 border-obsidian-border text-moonlight hover:text-lilac hover:border-lilac transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={handleCopyIp}
              className="w-full mc-btn-soul py-2 text-xs gap-2 font-mono"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>IP COPIED: {serverIp}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY IP: {serverIp}</span>
                </>
              )}
            </button>
            <a
              href="https://dsc.gg/libraer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mc-btn-lilac py-2 text-xs gap-2 text-center"
            >
              <Discord className="w-4 h-4" />
              <span>JOIN DISCORD (DSC.GG/LIBRAER)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
