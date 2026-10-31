import React, { useState } from 'react'
import { Swords, Pickaxe, Compass, Sparkles, Users } from 'lucide-react'

export const DiscoverSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'survival' | 'origins' | 'pvp' | 'community'>('survival')

  const pillars = [
    {
      id: 'survival',
      title: 'Authentic Survival & World Exploration',
      subtitle: 'Pure Sandbox Progression',
      icon: Pickaxe,
      tag: 'Core Gameplay',
      description: 'Experience an unadulterated Minecraft survival journey where every mined diamond, constructed stronghold, and carved road carries weight. Explore vast cherry groves, deep caverns, and monumental custom terrain generated for adventurous spirits.',
      highlights: [
        'Vanilla-faithful survival scaling with high-performance Paper optimizations',
        'Balanced natural generation featuring majestic cherry blossom shrines and beacons',
        'Economic balance devoid of game-breaking pay-to-win kits'
      ],
      image: '/assets/screenshot-cherry-path.png',
      caption: 'In-game capture: Cherry blossom spawn avenue and lantern-lit stone pathways'
    },
    {
      id: 'origins',
      title: 'Alter SMP X Custom Origins',
      subtitle: 'Transformative Biological Dynamics',
      icon: Sparkles,
      tag: 'Signature System',
      description: 'Choose your evolutionary path. Whether scaling walls as an Arachnid, launching into cloud glides as an Elytrian, or dwelling in underwater abysses as a Merling, every Origin radically alters how you interact with the environment and fellow players.',
      highlights: [
        '10 diverse, carefully balanced Origins tailored for cooperative and competitive synergy',
        'Distinct health pools, dietary rules, and biome affinities that demand creative survival',
        'Strategic combination potential when teaming up with allied species'
      ],
      image: '/assets/screenshot-beacon-rain.png',
      caption: 'In-game capture: The central meditation beacon in the rainy cherry grove'
    },
    {
      id: 'pvp',
      title: 'Fair PvP & Controlled Rivalries',
      subtitle: 'Skill-First Warfare',
      icon: Swords,
      tag: 'Combat Integrity',
      description: 'Combat on Libra SMP is regulated to prevent spawn camping, griefing abuse, and combat logging. Engage in organized clan skirmishes, seasonal boundary battles, or sanctioned duels where tactical skill and origin mastery determine victory.',
      highlights: [
        'Anti-combat logging protocols to protect battle legitimacy',
        'Strictly enforced anti-cheat and no-Xray policy maintained via host audit logs',
        'Permitted event zones where factions can stake territorial claims'
      ],
      image: '/assets/screenshot-community.png',
      caption: 'In-game capture: Season 1 community members assembled in battle armor at the hub'
    },
    {
      id: 'community',
      title: 'Alliances, Governance & Fellowship',
      subtitle: 'Your Choices. Your Legacy.',
      icon: Users,
      tag: 'Community Life',
      description: 'Build enduring alliances, negotiate resource trade treaties, or construct multi-player megastructures. With our 10–12 member Board of Directors ensuring fair administration, every player voice matters in shaping the server lore.',
      highlights: [
        'Player-driven economy and collaborative server infrastructure',
        'Democratized moderation: transparent governance by council consensus',
        'Active community Discord hub for trade negotiations, lore, and voice camaraderie'
      ],
      image: '/assets/screenshot-community.png',
      caption: 'In-game capture: Libra SMP founding community gathered at spawn'
    }
  ]

  const current = pillars.find(p => p.id === activeTab) || pillars[0]
  const CurrentIcon = current.icon

  return (
    <section 
      id="discover"
      aria-label="Discover Libra SMP"
      className="relative py-24 px-4 bg-void border-t-2 border-obsidian-border"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian border-2 border-obsidian-border text-lilac font-pixel text-xs uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-lilac" />
            <span>DISCOVER LIBRA SMP</span>
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-moonlight tracking-tight mb-3">
            YOUR WORLD. YOUR CHOICES. YOUR LEGACY.
          </h2>
          <p className="font-sans text-moonlight-dim text-base sm:text-lg leading-relaxed">
            Libra SMP fuses vanilla survival freedom with transformative Origin mechanics and an uncompromising commitment to transparent, equitable community governance.
          </p>
        </div>

        {/* Tactile Block-Based Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {pillars.map((p) => {
            const Icon = p.icon
            const isActive = p.id === activeTab
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id as any)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-pixel transition-all cursor-pointer ${
                  isActive
                    ? 'mc-btn-lilac shadow-pixel-lilac scale-105 z-10'
                    : 'mc-btn-obsidian text-moonlight-dim'
                }`}
                aria-pressed={isActive}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-void-deep' : 'text-lilac'}`} />
                <span>{p.title.split('&')[0].trim()}</span>
              </button>
            )
          })}
        </div>

        {/* Featured Editorial Panel with Screenshot Showcase */}
        <div className="mc-panel p-6 sm:p-8 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              
              <div className="flex items-center gap-3">
                <span className="font-pixel text-[10px] px-2.5 py-1 bg-void-deep border-2 border-obsidian-border text-sand uppercase">
                  {current.tag}
                </span>
                <span className="font-mono text-xs text-moonlight-dim uppercase tracking-wider">
                  {current.subtitle}
                </span>
              </div>

              <h3 className="font-pixel text-lg sm:text-2xl text-moonlight flex items-center gap-2.5">
                <CurrentIcon className="w-6 h-6 text-lilac flex-shrink-0" />
                <span>{current.title}</span>
              </h3>

              <p className="font-sans text-moonlight text-base leading-relaxed">
                {current.description}
              </p>

              {/* Highlights List with Inset Slots */}
              <div className="space-y-2.5 pt-1">
                {current.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 mc-inset">
                    <div className="w-5 h-5 mc-slot flex items-center justify-center flex-shrink-0 mt-0.5 text-lilac font-mono text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="font-sans text-sm text-moonlight-muted leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Section Jump */}
              <div className="pt-2">
                <a
                  href="#origins"
                  className="inline-flex items-center gap-2 font-pixel text-xs text-soul hover:text-moonlight hover:underline transition-all"
                >
                  <span>EXPLORE THE 10 ORIGINS IN DETAIL</span>
                  <span>→</span>
                </a>
              </div>

            </div>

            {/* Right Media Column - Authentic Server Screenshot */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full relative border-2 border-obsidian-border bg-void-deep shadow-pixel-md group overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden bg-void-deep">
                  <img 
                    src={current.image} 
                    alt={current.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-void-deep/90 border border-obsidian-border text-sand font-mono text-[10px] uppercase tracking-wider">
                    Server Screenshot
                  </div>
                </div>

                <div className="p-3 bg-obsidian border-t-2 border-obsidian-border text-left">
                  <p className="font-sans text-xs text-moonlight-dim italic">
                    {current.caption}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
