export interface Origin {
  id: string
  name: string
  tagline: string
  hearts: number // 10 is normal, 7 for Arachnid/Phantom, 9 for Feline
  category: 'Standard' | 'Agility' | 'Elemental' | 'Aerial' | 'Stealth' | 'Utility'
  icon: string
  badgeColor: string
  description: string
  abilities: string[]
  weaknesses: string[]
  healthNote?: string
}

export interface StaffRole {
  role: string
  level: string
  description: string
  responsibilities: string[]
  badge: string
}

export interface RuleItem {
  id: string
  title: string
  description: string
  severity?: 'critical' | 'high' | 'standard'
  tags?: string[]
}

export interface RuleSection {
  id: 'minecraft' | 'discord' | 'punishments'
  title: string
  subtitle: string
  badge: string
  rules: RuleItem[]
}

export interface Announcement {
  id: string
  title: string
  badge: string
  date: string
  deadline: string
  isTimeSensitive: boolean
  isExpired: boolean
  summary: string
  details: string[]
  antiFraudTerms: string[]
}

export interface SupportChannel {
  id: string
  title: string
  description: string
  targetChannel: string
  icon: string
}

export interface ServerStatusData {
  online: boolean
  players: {
    online: number
    max: number
  }
  version: string
  motd?: string
  loading: boolean
  error?: string | null
  lastChecked: Date | null
}
