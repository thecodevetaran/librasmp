import { Origin } from '../types'

export const ORIGINS: Origin[] = [
  {
    id: 'human',
    name: 'Human',
    tagline: 'The Baseline Balanced Survivor',
    hearts: 10,
    category: 'Standard',
    icon: 'user',
    badgeColor: 'border-slate-500 bg-slate-800/60 text-slate-200',
    description: 'The classic, unhindered survivor. Perfect for players who desire pure vanilla survival mechanics without biological handicaps or magical trade-offs.',
    abilities: [
      'Standard gameplay experience with no external modifications.',
      'Can eat any food type without dietary sickness.',
      'Unrestricted armor, shield, and tool usage across all tiers.',
      'Standard vanilla heart capacity (10 hearts).'
    ],
    weaknesses: [
      'No supernatural traversal or offensive traits.',
      'Subject to standard fall, fire, and drowning hazards.'
    ],
    healthNote: 'Standard 10 Hearts (20 HP)'
  },
  {
    id: 'arachnid',
    name: 'Arachnid',
    tagline: 'Wall Climber & Web Weaver',
    hearts: 7,
    category: 'Agility',
    icon: 'spider',
    badgeColor: 'border-red-900/60 bg-red-950/40 text-red-300',
    description: 'Weave tactical webs and scale sheer vertical cliffs. An ambush hunter with natural web affinity, balanced by a fragile constitution and strict carnivore diet.',
    abilities: [
      'Climbs solid surfaces effortlessly.',
      'Can climb within cobwebs without slowing down.',
      'Can craft webs using two string.',
      'Can temporarily trap targets in webs when attacking.',
      'Can see a glowing outline effect around mobs caught in webs.'
    ],
    weaknesses: [
      'Can only eat meat; other food provides no saturation and causes poison.',
      'Has seven hearts (reduced maximum vitality).',
      'Takes extra damage and receives slowness from Bane of Arthropods weapons.'
    ],
    healthNote: '7 Hearts (14 HP) — Fragile Exoskeleton'
  },
  {
    id: 'avian',
    name: 'Avian',
    tagline: 'High-Altitude Sovereign of the Skies',
    hearts: 10,
    category: 'Aerial',
    icon: 'feather',
    badgeColor: 'border-sky-700/60 bg-sky-950/40 text-sky-300',
    description: 'Masters of wind and momentum who thrive in mountain peaks. Featherweight velocity grant unmatched ground speed and soft landings.',
    abilities: [
      'Slow falling effect permanently active unless sneaking.',
      'Moves significantly faster than normal players on foot.',
      'Lays an egg when sleeping through the night.'
    ],
    weaknesses: [
      'Claustrophobic nesting: can only sleep above Y=86.',
      'Herbivore restriction: cannot eat meat; meat provides zero saturation and causes poison.'
    ],
    healthNote: 'Standard 10 Hearts (20 HP)'
  },
  {
    id: 'blazeborn',
    name: 'Blazeborn',
    tagline: 'Infernal Spawn of the Nether',
    hearts: 10,
    category: 'Elemental',
    icon: 'flame',
    badgeColor: 'border-amber-700/60 bg-amber-950/40 text-amber-300',
    description: 'Forged in the molten rivers of the Nether. Fire is your armor and weapon, but mortal moisture is your greatest peril.',
    abilities: [
      'Completely immune to fire and lava damage.',
      'Default spawn point is in the Nether realm.',
      'Deals increased attack damage while actively ignited on fire.',
      'Immune to poison and food poisoning effects.',
      'Radiates characteristic flame particles.'
    ],
    weaknesses: [
      'Hydrophobic: takes continuous damage when in contact with water or rain.',
      'Vulnerable to sub-zero attacks: takes damage from snowballs and harmful potions.'
    ],
    healthNote: 'Standard 10 Hearts (20 HP)'
  },
  {
    id: 'elytrian',
    name: 'Elytrian',
    tagline: 'Winged Aeronaut & Aerial Striker',
    hearts: 10,
    category: 'Aerial',
    icon: 'wind',
    badgeColor: 'border-emerald-700/60 bg-emerald-950/40 text-emerald-300',
    description: 'Born with biological wings ready for immediate flight. Soar above the canopy and dive with lethal kinetic force.',
    abilities: [
      'Can glide without wearing an Elytra item by double-pressing jump.',
      'Can launch into the air by pressing sneak while gliding.',
      'Deals double damage while gliding in flight.'
    ],
    weaknesses: [
      'Lightweight frame: cannot wear armour better than chainmail.',
      'Confined space dread: receives slowness and weakness when a solid block is directly overhead.',
      'High speed impact danger: takes double kinetic crash damage.'
    ],
    healthNote: 'Standard 10 Hearts (20 HP)'
  },
  {
    id: 'enderian',
    name: 'Enderian',
    tagline: 'Void Walker & Dimensional Blink',
    hearts: 10,
    category: 'Stealth',
    icon: 'sparkles',
    badgeColor: 'border-purple-700/60 bg-purple-950/40 text-purple-300',
    description: 'Infused with the mystical resonance of the End. Translocate instantly across distances, bound by the classic curse of water.',
    abilities: [
      'Can throw an ender pearl every 30 seconds by left-clicking the air with an empty hand.',
      'Emits ambient Ender particles.'
    ],
    weaknesses: [
      'Takes damage in water and during rainfall.',
      'Cannot see players wearing carved pumpkins.',
      'Severe gourd allergy: receives poison and nausea from pumpkin pie.',
      'Takes damage from splashed or ingested potions.'
    ],
    healthNote: 'Standard 10 Hearts (20 HP)'
  },
  {
    id: 'feline',
    name: 'Feline',
    tagline: 'Graceful Stalker & Silent Prowler',
    hearts: 9,
    category: 'Agility',
    icon: 'paw-print',
    badgeColor: 'border-yellow-700/60 bg-yellow-950/40 text-yellow-300',
    description: 'Incredible poise, complete immunity to impact shock, and a natural aura that keeps explosive terrors at bay.',
    abilities: [
      'Takes zero fall damage from any height.',
      'Jumps noticeably higher while sprinting.',
      'Silent tread: walking does not trigger sculk sensors or awaken Wardens.',
      'Scares creepers away unless you strike them first.',
      'Has permanent night vision when outside water.'
    ],
    weaknesses: [
      'Has nine hearts (slightly reduced health pool).',
      'Claw delicacy: cannot break natural stone if more than two natural stone blocks touch it.'
    ],
    healthNote: '9 Hearts (18 HP) — Agile Frame'
  },
  {
    id: 'merling',
    name: 'Merling',
    tagline: 'Deep Ocean Leviathan',
    hearts: 10,
    category: 'Elemental',
    icon: 'droplets',
    badgeColor: 'border-cyan-700/60 bg-cyan-950/40 text-cyan-300',
    description: 'True children of the seas. An absolute powerhouse in oceanic depths and submerged monuments, but suffocates under open skies.',
    abilities: [
      'Breathes naturally underwater.',
      'Crystal-clear underwater vision and heightened depth perception.',
      'Breaks blocks faster underwater with normal terrestrial efficiency.',
      'Swims at rapid speed with complete buoyancy control (choose to sink or float at will).',
      'Can replenish air using water-breathing potions.'
    ],
    weaknesses: [
      'Cannot breathe above water; must carry water buckets or potions on dry land.',
      'Takes extra damage from trident Impaling enchantments.'
    ],
    healthNote: 'Standard 10 Hearts (20 HP)'
  },
  {
    id: 'phantom',
    name: 'Phantom',
    tagline: 'Intangible Shadow & Block Phaser',
    hearts: 7,
    category: 'Stealth',
    icon: 'ghost',
    badgeColor: 'border-indigo-700/60 bg-indigo-950/40 text-indigo-300',
    description: 'A spectral entity caught between physical planes. Traverse solid stone walls unseen, but beware the radiant light of dawn.',
    abilities: [
      'Can enter and exit Phantom Form by left-clicking the air with an empty hand.',
      'Can phase through solid blocks in Phantom Form.',
      'Becomes completely invisible while in Phantom Form.'
    ],
    weaknesses: [
      'Burns in daylight when not sheltered in Phantom Form.',
      'Loses hunger at an accelerated rate while in Phantom Form.',
      'Has seven hearts (fragile spectral essence).',
      'Vision is tinted with a distinct red overlay while in Phantom Form.'
    ],
    healthNote: '7 Hearts (14 HP) — Spectral Form'
  },
  {
    id: 'shulk',
    name: 'Shulk',
    tagline: 'End City Fortification & Mobile Vault',
    hearts: 10,
    category: 'Utility',
    icon: 'box',
    badgeColor: 'border-fuchsia-800/60 bg-fuchsia-950/40 text-fuchsia-300',
    description: 'Armored in chitin reminiscent of the End City shulkers. Offers built-in storage safety and quarry excavation, but demands constant sustenance.',
    abilities: [
      'Has nine dedicated internal inventory slots that are never lost upon death.',
      'Extra inventory is opened anytime by right-clicking the chestplate slot.',
      'Naturally possesses built-in defense points without needing armor.',
      'Can break natural stone with bare hands without needing a pickaxe.'
    ],
    weaknesses: [
      'Heavy shell prevents equipping or using shields.',
      'Accelerated metabolism: loses hunger faster during exertion.'
    ],
    healthNote: 'Standard 10 Hearts (20 HP) + Built-in Natural Defense'
  }
]
