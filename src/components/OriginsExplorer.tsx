import React, { useState, useEffect } from 'react'
import { ORIGINS } from '../data/origins'
import { 
  Heart, 
  Search, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Flame, 
  Feather, 
  Wind, 
  Eye, 
  Droplets, 
  Ghost, 
  Box, 
  Cat,
  Bug,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react'

function getOriginIcon(name: string) {
  switch (name.toLowerCase()) {
    case 'human': return User
    case 'arachnid': return Bug
    case 'avian': return Feather
    case 'blazeborn': return Flame
    case 'elytrian': return Wind
    case 'enderian': return Eye
    case 'feline': return Cat
    case 'merling': return Droplets
    case 'phantom': return Ghost
    case 'shulk': return Box
    default: return Sparkles
  }
}

export const OriginsExplorer: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('elytrian')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [categoryFilter, setCategoryFilter] = useState<string>('All')

  const categories = ['All', 'Aerial', 'Elemental', 'Agility', 'Stealth', 'Utility', 'Standard']

  const filteredOrigins = ORIGINS.filter(origin => {
    const matchesSearch = origin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          origin.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          origin.abilities.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          origin.weaknesses.some(w => w.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCat = categoryFilter === 'All' || origin.category === categoryFilter
    return matchesSearch && matchesCat
  })

  const currentOrigin = ORIGINS.find(o => o.id === selectedId) || ORIGINS[0]
  const currentIndex = ORIGINS.findIndex(o => o.id === currentOrigin.id)

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + ORIGINS.length) % ORIGINS.length
    setSelectedId(ORIGINS[nextIdx].id)
  }

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % ORIGINS.length
    setSelectedId(ORIGINS[nextIdx].id)
  }

  // Keyboard navigation support: ArrowLeft and ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  const CurrentIcon = getOriginIcon(currentOrigin.name)

  return (
    <section 
      id="origins"
      aria-label="Origins Explorer Codex"
      className="relative py-24 px-4 bg-void-surface border-t-2 border-obsidian-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian border-2 border-obsidian-border text-lilac font-pixel text-xs uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-lilac" />
            <span>ORIGINS CODEX • 10 SPECIES</span>
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-moonlight tracking-tight mb-3">
            CHOOSE YOUR ORIGIN
          </h2>
          <p className="font-sans text-moonlight-dim text-base sm:text-lg leading-relaxed">
            Your Origin dictates your biological strengths, nutritional constraints, and survival instincts. Select an inventory slot to inspect its ancient codex entry.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-pixel text-[11px] text-moonlight-dim uppercase mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-lilac" /> Class:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1 text-xs font-pixel transition-all cursor-pointer border-2 ${
                  categoryFilter === cat
                    ? 'mc-btn-lilac shadow-pixel-sm'
                    : 'bg-obsidian hover:bg-obsidian-light text-moonlight-dim border-obsidian-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-moonlight-dim absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search abilities, traits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs font-mono bg-void-deep border-2 border-obsidian-border text-moonlight placeholder-moonlight-dim focus:outline-none focus:border-lilac shadow-pixel-sm"
            />
          </div>

        </div>

        {/* Character Selection Grid + Codex Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 10 Item Slots Grid */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-pixel text-moonlight-dim pb-1">
              <span>INVENTORY SLOTS ({filteredOrigins.length}/10)</span>
              <span className="text-[10px] text-sand font-mono">Use ← → to cycle</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-h-[620px] overflow-y-auto pr-1">
              {filteredOrigins.map((origin) => {
                const IconComponent = getOriginIcon(origin.name)
                const isSelected = origin.id === currentOrigin.id

                return (
                  <button
                    key={origin.id}
                    onClick={() => setSelectedId(origin.id)}
                    className={`w-full text-left p-3 border-2 transition-all flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'mc-slot-selected'
                        : 'mc-panel hover:border-obsidian-light'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Minecraft item slot styling for icon */}
                      <div className={`w-10 h-10 mc-slot flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'border-lilac text-lilac' : 'text-moonlight-dim group-hover:text-moonlight'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`font-pixel text-xs sm:text-sm uppercase tracking-wider ${
                            isSelected ? 'text-lilac font-bold' : 'text-moonlight group-hover:text-lilac'
                          }`}>
                            {origin.name}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 bg-void-deep border border-obsidian-border text-sand">
                            {origin.category}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-moonlight-dim line-clamp-1 mt-0.5">
                          {origin.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Hearts preview indicator in JetBrains Mono */}
                    <div className="flex items-center gap-1 text-[11px] font-mono text-rose-400 flex-shrink-0">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                      <span>{origin.hearts}</span>
                    </div>
                  </button>
                )
              })}

              {filteredOrigins.length === 0 && (
                <div className="p-8 text-center mc-inset">
                  <p className="font-pixel text-xs text-moonlight-dim">NO ORIGINS MATCH "{searchQuery}"</p>
                  <button
                    onClick={() => { setSearchQuery(''); setCategoryFilter('All') }}
                    className="mt-3 text-xs text-lilac hover:underline font-pixel"
                  >
                    RESET FILTERS
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Detailed Codex Dossier Panel */}
          <div className="lg:col-span-7">
            <div className="mc-panel p-6 sm:p-8 relative overflow-hidden">
              
              {/* Header Navigation Controls for Current Origin */}
              <div className="flex items-center justify-between pb-5 border-b-2 border-obsidian-border">
                <button
                  onClick={handlePrev}
                  className="mc-btn-obsidian px-3 py-1.5 text-xs gap-1 cursor-pointer font-pixel"
                  aria-label="Previous origin"
                >
                  <ChevronLeft className="w-4 h-4 text-lilac" />
                  <span className="hidden sm:inline">PREV</span>
                </button>

                <div className="text-center">
                  <span className="font-mono text-[11px] text-sand uppercase tracking-widest block mb-0.5">
                    CODEX DOSSIER #{currentIndex + 1} OF {ORIGINS.length}
                  </span>
                  <div className="flex items-center justify-center gap-2.5">
                    <CurrentIcon className="w-6 h-6 text-lilac" />
                    <span className="font-pixel text-xl sm:text-2xl text-moonlight tracking-tight">
                      {currentOrigin.name.toUpperCase()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="mc-btn-obsidian px-3 py-1.5 text-xs gap-1 cursor-pointer font-pixel"
                  aria-label="Next origin"
                >
                  <span className="hidden sm:inline">NEXT</span>
                  <ChevronRight className="w-4 h-4 text-lilac" />
                </button>
              </div>

              {/* Vital Statistics Bar in JetBrains Mono & Minecraft Hearts */}
              <div className="my-5 p-4 mc-inset flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                {/* Visual Minecraft Hearts Display */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-pixel text-[10px] text-moonlight-dim uppercase tracking-wider">
                      VITALITY:
                    </span>
                    <span className="font-mono text-xs text-rose-400 font-bold">
                      {currentOrigin.hearts} HEARTS ({currentOrigin.hearts * 2} HP)
                    </span>
                  </div>

                  {/* 10-Heart Visual Container */}
                  <div className="flex items-center gap-1.5" title={`${currentOrigin.hearts} Hearts capacity`}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <Heart
                        key={i}
                        className={`w-4 h-4 ${
                          i < currentOrigin.hearts
                            ? 'text-rose-500 fill-rose-500 drop-shadow-[0_0_6px_rgba(244,63,94,0.6)]'
                            : 'text-obsidian-light fill-obsidian-shadow opacity-40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Category & Badge */}
                <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
                  <span className="font-pixel text-[10px] text-moonlight-dim uppercase tracking-wider">
                    CLASSIFICATION
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono font-bold border-2 border-lilac text-lilac bg-void-deep shadow-pixel-sm">
                    {currentOrigin.category}
                  </span>
                </div>

              </div>

              {/* Origin Lore in Manrope */}
              <div className="mb-5">
                <h4 className="font-pixel text-xs text-sand uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-sand" />
                  SPECIES OVERVIEW & LORE
                </h4>
                <p className="font-sans text-moonlight text-sm sm:text-base leading-relaxed bg-void-deep p-3.5 border-2 border-obsidian-border">
                  {currentOrigin.description}
                </p>
              </div>

              {/* Separate Abilities and Weaknesses Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                
                {/* Abilities Group */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b-2 border-soul/40">
                    <CheckCircle2 className="w-4 h-4 text-soul" />
                    <h5 className="font-pixel text-xs text-soul uppercase tracking-wider">
                      ABILITIES ({currentOrigin.abilities.length})
                    </h5>
                  </div>
                  <ul className="space-y-2">
                    {currentOrigin.abilities.map((ability, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-moonlight bg-void-deep p-2.5 border border-obsidian-border">
                        <span className="w-1.5 h-1.5 bg-soul mt-1.5 flex-shrink-0" />
                        <span className="font-sans leading-snug">{ability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses Group */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b-2 border-rose-500/40">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <h5 className="font-pixel text-xs text-rose-300 uppercase tracking-wider">
                      WEAKNESSES ({currentOrigin.weaknesses.length})
                    </h5>
                  </div>
                  <ul className="space-y-2">
                    {currentOrigin.weaknesses.map((weakness, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-moonlight bg-void-deep p-2.5 border border-obsidian-border">
                        <span className="w-1.5 h-1.5 bg-rose-400 mt-1.5 flex-shrink-0" />
                        <span className="font-sans leading-snug">{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Health Note Footer in JetBrains Mono */}
              {currentOrigin.healthNote && (
                <div className="mt-5 p-3 mc-inset flex items-center justify-between text-xs font-mono text-moonlight">
                  <span className="text-moonlight-dim uppercase text-[10px]">CONSTITUTION:</span>
                  <span className="text-sand font-bold">{currentOrigin.healthNote}</span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
