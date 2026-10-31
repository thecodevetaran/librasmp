import { StaffRole, Announcement, SupportChannel } from '../types'

export const SERVER_CONFIG = {
  name: 'Libra SMP',
  season: 'Season 1',
  tagline: 'Find your balance. Shape your destiny.',
  subTagline: 'Your world. Your choices. Your legacy.',
  concept: 'Alter SMP X Origins',
  ip: 'librasmp.ultramc.co',
  host: 'Ultimate Hosting',
  region: 'Singapore (Asia Pacific)',
  discordUrl: 'https://dsc.gg/libraer',
  discordVanity: 'dsc.gg/libraer',
  javaCompatibility: 'Java Edition 1.20+ (Powered by ViaVersion)',
  bedrockNote: 'Bedrock connection port is currently undergoing testing and verification with Ultimate Hosting. Official Bedrock port details will be published in Discord once verified.',
}

export const STAFF_ROLES: StaffRole[] = [
  {
    role: 'Server Owners',
    level: 'Executive',
    badge: 'Executive Command',
    description: 'Official founders and custodians of Libra SMP. Oversee overall strategic direction, infrastructure hosting contracts, and ensure adherence to server foundational values.',
    responsibilities: [
      'Hosting infrastructure & domain administration via Ultimate Hosting',
      'Final ratification of constitutional server policies and major governance appeals',
      'Maintaining core server integrity and financial sustainability'
    ]
  },
  {
    role: 'Board of Directors',
    level: 'Governance (10–12 Members)',
    badge: '10–12 Seat Council',
    description: 'The core governing body of Libra SMP. Operates on equal permissions and shared responsibility to eliminate single-point bias or rogue moderation.',
    responsibilities: [
      'Collective oversight of in-game server and Discord operations',
      'Reviewing high-tier moderation decisions and ban appeals with auditable logs',
      'Voting on community proposals, seasonal updates, and event schedules',
      'Maintaining fairness and balance across all player interactions'
    ]
  },
  {
    role: 'Community Manager',
    level: 'Operations',
    badge: 'Community Lead',
    description: 'Directs Discord organization, event staging, community engagement programs, and player onboarding.',
    responsibilities: [
      'Managing Discord structure, roles, and automated announcement systems',
      'Facilitating seasonal community events, tournaments, and feedback polls',
      'Overseeing ticket dispatch queues and support resolution speed'
    ]
  },
  {
    role: 'Developer',
    level: 'Technical',
    badge: 'Systems & Plugins',
    description: 'Architects technical gameplay mechanics, Origin modifications, performance tuning, and plugin stability.',
    responsibilities: [
      'Configuring and balancing Origins abilities, perks, and limitations',
      'Maintaining ViaVersion multi-version compatibility and paper optimizations',
      'Diagnosing TPS drops, chunk memory leaks, and gameplay bug reports'
    ]
  },
  {
    role: 'Senior Staff',
    level: 'Leadership',
    badge: 'Senior Team',
    description: 'Experienced leaders who guide active moderation, handle escalated player disputes, and mentor junior staff.',
    responsibilities: [
      'Investigating complex claims of unauthorized griefing or client abuse',
      'Mentoring Trial Staff and Moderators during live shifts',
      'Issuing secondary reviews on temporary bans and dispute resolutions'
    ]
  },
  {
    role: 'Moderator',
    level: 'Enforcement',
    badge: 'Active Patrol',
    description: 'Frontline guardians who maintain chat civility, enforce Minecraft and Discord rules, and assist players in distress.',
    responsibilities: [
      'Active patrol of in-game chat and community Discord channels',
      'Responding to rule-breaking reports and dispatching timely warnings',
      'Logging all disciplinary actions in transparent UltraServers audit records'
    ]
  },
  {
    role: 'Trial Moderator',
    level: 'Probationary',
    badge: 'Probationary Patrol',
    description: 'Candidates undergoing live evaluation under Senior supervision to demonstrate fair judgment and calm temperament.',
    responsibilities: [
      'Shadowing active moderators during peak hours and community events',
      'Handling standard ticket inquiries and guiding new player arrivals',
      'Adhering to strict non-abuse guidelines during probation'
    ]
  },
  {
    role: 'Trial Staff',
    level: 'Recruit',
    badge: 'Trainee',
    description: 'Newly inducted team members learning protocol, documentation standards, and community support principles.',
    responsibilities: [
      'Assisting members with general server connection and Discord verification',
      'Reporting suspicious activity to senior officers without unilateral action',
      'Participating in governance workshops and moderation training'
    ]
  },
  {
    role: 'Staff Team',
    level: 'Collective',
    badge: 'United Roster',
    description: 'The collective body of volunteers dedicated to preserving an equitable, thrilling survival sandbox for everyone.',
    responsibilities: [
      'Fostering a welcoming, respectful, and transparent multiplayer atmosphere',
      'Holding each other accountable according to our public governance code'
    ]
  }
]

export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    id: 'general',
    title: 'General Support',
    description: 'Questions regarding server connection, whitelist status, Discord roles, and general guidance.',
    targetChannel: '#general-support',
    icon: 'help-circle'
  },
  {
    id: 'staff',
    title: 'Staff Assistance',
    description: 'Direct inquiries requiring staff intervention or administrative clarification.',
    targetChannel: '#staff-assistance',
    icon: 'shield-alert'
  },
  {
    id: 'reports',
    title: 'Discord Rule-Breaking Reports',
    description: 'Report harassment, phishing, unauthorized advertising, or toxic behavior within the Discord server.',
    targetChannel: '#discord-reports',
    icon: 'message-square-warning'
  },
  {
    id: 'ingame',
    title: 'In-Game Support',
    description: 'Issues with world generation, stuck players, Origin ability quirks, or spawn navigation.',
    targetChannel: '#ingame-support',
    icon: 'gamepad-2'
  },
  {
    id: 'enquiries',
    title: 'Refund & Punishment Enquiries',
    description: 'Inquire regarding administrative disciplinary actions, warnings, or lost assets due to verified bugs.',
    targetChannel: '#sanction-enquiries',
    icon: 'scale'
  },
  {
    id: 'bugs',
    title: 'Gameplay Bugs & Plugin Issues',
    description: 'Submit technical bug reports, abnormal Origin behaviors, or Paper server anomalies directly to Developers.',
    targetChannel: '#bug-reports',
    icon: 'bug'
  },
  {
    id: 'appeals',
    title: 'Ban Appeals',
    description: 'Submit a formal appeal for in-game or Discord bans to be evaluated transparently by the Board of Directors.',
    targetChannel: '#ban-appeals',
    icon: 'file-text'
  }
]

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'origin-reroll-referral',
    title: 'Origin Re-Roll Opportunity: Community Invite Milestone',
    badge: 'Special Community Event',
    date: 'Season 1 Active',
    deadline: '8 November 2026',
    isTimeSensitive: true,
    isExpired: false, // Deadline is 8 November 2026
    summary: 'Earn a rare second chance to re-select your Origin through genuine community recruitment.',
    details: [
      'Eligible community members who invite at least 20 valid, active members to the Libraer Discord earn a token to re-choose their Origin.',
      'Allows players who want to experiment with different abilities or switch playstyles to adjust their destiny for Season 1.',
      'The opportunity concludes on 8 November 2026.'
    ],
    antiFraudTerms: [
      'All 20 invites must be genuine human accounts that pass basic security verification.',
      'Fake accounts, botting, join-and-leave spam, or alt-account manipulation will immediately disqualify the user and trigger moderation action.',
      'Invite counts are audited and validated manually by staff through the official Discord audit logs prior to granting re-roll permissions.'
    ]
  }
]
