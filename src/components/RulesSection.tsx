import React, { useState } from 'react'
import { RULES_DATA } from '../data/rules'
import { BookOpen, Search, ShieldAlert, ExternalLink, Disc as Discord, AlertOctagon } from 'lucide-react'

export const RulesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'minecraft' | 'discord' | 'punishments'>('minecraft')
  const [searchQuery, setSearchQuery] = useState('')

  const activeSection = RULES_DATA.find(s => s.id === activeTab) || RULES_DATA[0]

  const filteredRules = activeSection.rules.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (r.tags && r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())))
  )

  return (
    <section 
      id="rules"
      aria-label="Server Rules and Community Guidelines"
      className="relative py-24 px-4 bg-void border-t-2 border-obsidian-border"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian border-2 border-obsidian-border text-lilac font-pixel text-xs uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5 text-lilac" />
            <span>COMMUNITY CHARTER</span>
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-moonlight tracking-tight mb-3">
            RULES & REGULATIONS
          </h2>
          <p className="font-sans text-moonlight-dim text-base sm:text-lg leading-relaxed">
            Fairness is maintained through mutual respect and unequivocal standards. Review our in-game rules, Discord community conduct, and graduated disciplinary procedures.
          </p>
        </div>

        {/* Tab Controls + Search Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Main Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {RULES_DATA.map((section) => {
              const isActive = section.id === activeTab
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-pixel transition-all cursor-pointer ${
                    isActive
                      ? 'mc-btn-lilac shadow-pixel-lilac'
                      : 'mc-btn-obsidian text-moonlight-dim'
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{section.title}</span>
                </button>
              )
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-moonlight-dim absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search rules, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs font-mono bg-void-deep border-2 border-obsidian-border text-moonlight placeholder-moonlight-dim focus:outline-none focus:border-lilac shadow-pixel-sm"
            />
          </div>

        </div>

        {/* Active Rules Handbook Panel */}
        <div className="mc-panel p-6 sm:p-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b-2 border-obsidian-border mb-6">
            <div>
              <span className="font-mono text-[10px] text-sand uppercase tracking-widest block mb-1 font-bold">
                {activeSection.badge}
              </span>
              <h3 className="font-pixel text-xl sm:text-2xl text-moonlight">
                {activeSection.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-moonlight-dim mt-1">
                {activeSection.subtitle}
              </p>
            </div>

            <div className="px-3 py-1 bg-void-deep border-2 border-obsidian-border text-xs font-mono text-moonlight-dim font-bold">
              Showing {filteredRules.length} of {activeSection.rules.length} Items
            </div>
          </div>

          {/* Rules Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRules.map((rule) => (
              <div 
                key={rule.id}
                className="p-4 mc-inset border-2 border-obsidian-border hover:border-lilac transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-sand font-bold">
                      RULE #{rule.id.toUpperCase()}
                    </span>
                    {rule.severity && (
                      <span className={`font-mono text-[10px] px-2 py-0.5 uppercase font-bold border ${
                        rule.severity === 'critical' 
                          ? 'bg-rose-950/80 text-rose-300 border-rose-800' 
                          : rule.severity === 'high'
                            ? 'bg-amber-950/80 text-amber-300 border-amber-800'
                            : 'bg-void-deep text-moonlight-dim border-obsidian-border'
                      }`}>
                        {rule.severity}
                      </span>
                    )}
                  </div>

                  <h4 className="font-pixel text-sm text-moonlight mb-2">
                    {rule.title}
                  </h4>

                  <p className="font-sans text-xs sm:text-sm text-moonlight-muted leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                {rule.tags && rule.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t-2 border-obsidian-border">
                    {rule.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] px-1.5 py-0.5 bg-void-deep text-moonlight-dim border border-obsidian-border">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {filteredRules.length === 0 && (
              <div className="col-span-full p-10 text-center mc-inset">
                <AlertOctagon className="w-8 h-8 text-lilac mx-auto mb-2" />
                <p className="font-pixel text-xs text-moonlight-dim">NO RULES MATCHING YOUR SEARCH</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-xs text-lilac hover:underline font-pixel"
                >
                  CLEAR SEARCH
                </button>
              </div>
            )}
          </div>

          {/* Discord Policy Links */}
          {activeTab === 'discord' && (
            <div className="mt-8 pt-6 border-t-2 border-obsidian-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-moonlight-dim">
              <span className="flex items-center gap-1.5 text-moonlight">
                <Discord className="w-4 h-4 text-lilac" />
                OFFICIAL DISCORD POLICIES:
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="https://discord.com/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-lilac underline inline-flex items-center gap-1"
                >
                  <span>Terms of Service</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://discord.com/guidelines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-lilac underline inline-flex items-center gap-1"
                >
                  <span>Community Guidelines</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://discord.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-lilac underline inline-flex items-center gap-1"
                >
                  <span>Privacy Policy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Punishments Notice */}
          {activeTab === 'punishments' && (
            <div className="mt-8 p-4 mc-inset border-2 border-obsidian-border flex items-start gap-3 text-xs text-moonlight-muted">
              <ShieldAlert className="w-5 h-5 text-sand flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-pixel text-[10px] text-sand uppercase block mb-1">
                  DISCIPLINARY JURISPRUDENCE
                </span>
                <span className="font-sans">
                  All disciplinary actions are entered directly into recorded UltraServers server logs. Disciplinary actions are non-arbitrary and handled transparently by human staff. To submit a formal appeal regarding any punishment, utilize the Discord ticket system.
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
