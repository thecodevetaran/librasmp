import React, { useState } from 'react'
import { STAFF_ROLES } from '../data/serverData'
import { Shield, Crown, CheckCircle2, Disc as Discord } from 'lucide-react'

export const StaffDirectory: React.FC = () => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(1) // Board of Directors selected by default

  const activeRole = STAFF_ROLES[selectedRoleIndex]

  return (
    <section 
      id="staff"
      aria-label="Staff Directory and Hierarchy"
      className="relative py-24 px-4 bg-void-surface border-t-2 border-obsidian-border"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian border-2 border-obsidian-border text-lilac font-pixel text-xs uppercase mb-3">
            <Shield className="w-3.5 h-3.5 text-lilac" />
            <span>GOVERNANCE HIERARCHY</span>
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-moonlight tracking-tight mb-3">
            STAFF & LEADERSHIP ROSTER
          </h2>
          <p className="font-sans text-moonlight-dim text-base sm:text-lg leading-relaxed">
            Libra SMP operates under a strict role-based framework. In accordance with our transparency standards, here is the organizational structure that maintains order and fairness across our community.
          </p>
        </div>

        {/* Staff Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Role Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-pixel text-moonlight-dim pb-1">
              <span>ORGANIZATIONAL ROLES ({STAFF_ROLES.length})</span>
              <span className="text-sand text-[10px] font-mono">Select role to view scope</span>
            </div>

            <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
              {STAFF_ROLES.map((role, idx) => {
                const isSelected = idx === selectedRoleIndex
                return (
                  <button
                    key={role.role}
                    onClick={() => setSelectedRoleIndex(idx)}
                    className={`w-full text-left p-3 border-2 transition-all flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'mc-slot-selected'
                        : 'mc-panel hover:border-obsidian-light'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 mc-slot flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold ${
                        isSelected ? 'border-lilac text-lilac' : 'text-moonlight-dim'
                      }`}>
                        {idx === 0 ? <Crown className="w-4 h-4 text-sand" /> : idx + 1}
                      </div>
                      <div>
                        <span className={`font-pixel text-xs sm:text-sm uppercase tracking-wider block ${
                          isSelected ? 'text-lilac font-bold' : 'text-moonlight group-hover:text-lilac'
                        }`}>
                          {role.role}
                        </span>
                        <span className="font-mono text-[10px] text-moonlight-dim">
                          {role.level}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono text-[10px] px-2 py-0.5 bg-void-deep border border-obsidian-border text-sand">
                      {role.badge}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Active Role Responsibility Dossier (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mc-panel p-6 sm:p-8 relative">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b-2 border-obsidian-border">
                <div>
                  <span className="font-mono text-[10px] text-sand uppercase tracking-widest block mb-1 font-bold">
                    CHARTER ROLE PROFILE
                  </span>
                  <h3 className="font-pixel text-xl sm:text-2xl text-moonlight">
                    {activeRole.role}
                  </h3>
                </div>

                <div className="px-3 py-1 bg-void-deep border-2 border-obsidian-border text-sand font-mono text-xs font-bold">
                  {activeRole.badge}
                </div>
              </div>

              {/* Purpose and Mission */}
              <div className="my-5">
                <h4 className="font-pixel text-xs text-lilac uppercase tracking-wider mb-2">
                  MISSION & MANDATE
                </h4>
                <p className="font-sans text-moonlight text-sm sm:text-base leading-relaxed bg-void-deep p-4 border-2 border-obsidian-border">
                  {activeRole.description}
                </p>
              </div>

              {/* Responsibilities List */}
              <div className="space-y-3 mb-6">
                <h4 className="font-pixel text-xs text-soul uppercase tracking-wider">
                  CORE RESPONSIBILITIES & ACCOUNTABILITY
                </h4>
                <ul className="space-y-2">
                  {activeRole.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-moonlight bg-void-deep p-3 border border-obsidian-border">
                      <CheckCircle2 className="w-4 h-4 text-soul mt-0.5 flex-shrink-0" />
                      <span className="font-sans leading-snug">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Staff Transparency Notice */}
              <div className="p-4 mc-inset flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-moonlight-dim">
                  <span className="font-pixel text-[10px] text-sand block uppercase mb-0.5">
                    AUTHENTICITY STANDARDS
                  </span>
                  <span className="font-sans">Individual staff roster assignments are managed securely via Discord roles to protect member privacy.</span>
                </div>
                <a
                  href="https://dsc.gg/libraer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mc-btn-obsidian px-3 py-1.5 text-xs gap-1.5 flex-shrink-0"
                >
                  <Discord className="w-3.5 h-3.5 text-lilac" />
                  <span>VIEW ON DISCORD</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
