import React, { useState } from 'react'
import { copyToClipboard } from '../utils/clipboard'
import { Copy, Check, Disc as Discord } from 'lucide-react'

interface FooterProps {
  serverIp: string
}

export const Footer: React.FC<FooterProps> = ({ serverIp }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const success = await copyToClipboard(serverIp)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  return (
    <footer 
      aria-label="Footer"
      className="bg-void-deep border-t-2 border-obsidian-border pt-16 pb-12 px-4 text-moonlight-dim"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b-2 border-obsidian-border/60">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/logo.png" 
                alt="Libra SMP" 
                className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(212,163,55,0.4)]"
              />
              <span className="font-pixel text-lg text-moonlight">
                LIBRA SMP
              </span>
            </div>

            <p className="font-pixel text-xs text-sand">
              "Find your balance. Shape your destiny."
            </p>

            <p className="font-sans text-xs sm:text-sm text-moonlight-muted max-w-sm leading-relaxed">
              An immersive Minecraft survival multiplayer server built on the custom Origins system, Alter SMP dynamics, and transparent, fair moderation.
            </p>

            {/* Server IP Copy widget in footer */}
            <div className="pt-2 flex items-center gap-2">
              <div className="px-3 py-1.5 bg-obsidian border-2 border-obsidian-border font-mono text-xs text-moonlight select-all">
                {serverIp}
              </div>
              <button
                onClick={handleCopy}
                className="mc-btn-obsidian px-3 py-1.5 text-xs gap-1.5 cursor-pointer font-mono"
                aria-label="Copy server IP"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-soul" /> : <Copy className="w-3.5 h-3.5 text-lilac" />}
                <span>{copied ? 'COPIED!' : 'COPY'}</span>
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-pixel text-xs text-lilac uppercase tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-pixel">
              <li>
                <a href="#discover" className="text-moonlight-dim hover:text-lilac transition-colors">
                  Discover Features
                </a>
              </li>
              <li>
                <a href="#origins" className="text-moonlight-dim hover:text-lilac transition-colors">
                  Origins Codex (10 Species)
                </a>
              </li>
              <li>
                <a href="#fairness" className="text-moonlight-dim hover:text-lilac transition-colors">
                  Fairness & Governance
                </a>
              </li>
              <li>
                <a href="#staff" className="text-moonlight-dim hover:text-lilac transition-colors">
                  Staff Roster & Hierarchy
                </a>
              </li>
              <li>
                <a href="#join" className="text-moonlight-dim hover:text-lilac transition-colors">
                  Connection Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Rules & Community (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-pixel text-xs text-lilac uppercase tracking-wider">
              COMMUNITY & GOVERNANCE
            </h4>
            <ul className="space-y-2 text-xs font-pixel">
              <li>
                <a href="#rules" className="text-moonlight-dim hover:text-lilac transition-colors">
                  Minecraft Server Rules
                </a>
              </li>
              <li>
                <a href="#rules" className="text-moonlight-dim hover:text-lilac transition-colors">
                  Discord Community Rules
                </a>
              </li>
              <li>
                <a href="#rules" className="text-moonlight-dim hover:text-lilac transition-colors">
                  Punishments & Sanctions
                </a>
              </li>
              <li>
                <a href="#announcements" className="text-moonlight-dim hover:text-lilac transition-colors">
                  Origin Re-Roll Opportunity
                </a>
              </li>
              <li>
                <a href="#support" className="text-moonlight-dim hover:text-lilac transition-colors">
                  Support Ticket System
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="https://dsc.gg/libraer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mc-btn-lilac px-4 py-2 text-xs"
              >
                <Discord className="w-4 h-4 text-void-deep" />
                <span>JOIN DSC.GG/LIBRAER</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Mandatory Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs font-sans text-moonlight-dim">
          <div>
            <p>© {new Date().getFullYear()} Libra SMP. All rights reserved.</p>
            <p className="mt-1 text-[11px] leading-relaxed max-w-2xl text-moonlight-muted">
              <strong className="text-moonlight">Notice:</strong> Libra SMP is an independent Minecraft community and is not affiliated with, sponsored by, or endorsed by Mojang AB or Microsoft Corporation. Minecraft is a registered trademark of Mojang Synergies AB.
            </p>
          </div>

          <div className="font-mono text-[10px] text-moonlight-dim flex items-center gap-1.5 flex-shrink-0">
            <span>Hosted in Singapore</span>
            <span>•</span>
            <span>Ultimate Hosting</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
