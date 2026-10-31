import { RuleSection } from '../types'

export const RULES_DATA: RuleSection[] = [
  {
    id: 'minecraft',
    title: 'Minecraft Server Rules',
    subtitle: 'Gameplay standards for fair survival and competition in Libra SMP',
    badge: 'In-Game Laws',
    rules: [
      {
        id: 'mc-1',
        title: 'Integrity of Play & Prohibited Modifications',
        description: 'No cheating, hacked clients, X-Ray packs, auto-clickers, baritone, freecam, unfair modifications, or exploiting known game bugs. Play clean and compete fairly.',
        severity: 'critical',
        tags: ['Client', 'Exploits', 'Fair Play']
      },
      {
        id: 'mc-2',
        title: 'Combat Ethics & PvP Restrictions',
        description: 'No spawn killing, combat logging (disconnecting during battle), or unfair PvP outside permitted seasonal events and agreed duels. Respect designated safe zones.',
        severity: 'high',
        tags: ['PvP', 'Spawn', 'Combat']
      },
      {
        id: 'mc-3',
        title: 'Zero Tolerance for Hate Speech & Harassment',
        description: 'No threats, hate speech, discriminatory slurs, targeted harassment, or toxic hostility in public or private chat. Treat all community members with dignity.',
        severity: 'critical',
        tags: ['Chat', 'Respect', 'Community']
      },
      {
        id: 'mc-4',
        title: 'Server Stability & Economy Protection',
        description: 'No duplication exploits (duping items/entities), lag machines, chunk loaders, or intentional high-stress contraptions designed to degrade TPS or crash server nodes.',
        severity: 'critical',
        tags: ['TPS', 'Duping', 'Infrastructure']
      },
      {
        id: 'mc-5',
        title: 'Advertising & Impersonation',
        description: 'No unauthorized advertising of other Minecraft servers, commercial services, or external discords. No impersonating community members.',
        severity: 'high',
        tags: ['Chat', 'Spam']
      },
      {
        id: 'mc-6',
        title: 'Account Integrity & Ban Evasion',
        description: 'No ban evasion, muting bypasses, or alternate-account (alt) abuse to circumvent administrative sanctions or gain unfair event advantages.',
        severity: 'critical',
        tags: ['Accounts', 'Sanctions']
      },
      {
        id: 'mc-7',
        title: 'Staff Impersonation & Malicious Interference',
        description: 'No impersonating staff, doxxing, releasing private real-world information, attempting unauthorized panel access, or interfering with staff investigations.',
        severity: 'critical',
        tags: ['Security', 'Staff']
      },
      {
        id: 'mc-8',
        title: 'Events, Boundaries & Staff Directives',
        description: 'Respect event boundaries, protected community hubs, shared community infrastructure, and reasonable instructions given by active staff members.',
        severity: 'standard',
        tags: ['Events', 'Hubs']
      },
      {
        id: 'mc-9',
        title: 'Discretionary Common Sense Clause',
        description: 'Staff members reserve the authority to take proportionate, documented action against harmful conduct or disruptive loopholes not explicitly enumerated in this document.',
        severity: 'standard',
        tags: ['Governance', 'Staff Discretion']
      }
    ]
  },
  {
    id: 'discord',
    title: 'Discord Community Rules',
    subtitle: 'Standards for communication, media, and collaboration across the Libraer Discord',
    badge: 'Discord Codex',
    rules: [
      {
        id: 'dc-1',
        title: 'Mutual Respect',
        description: 'Respect all members, founders, and staff. Disagreements must be conducted civilly without insults or degradation.',
        severity: 'standard'
      },
      {
        id: 'dc-2',
        title: 'No Hate Speech or Slurs',
        description: 'Hate speech, racism, sexism, homophobia, religious intolerance, and targeted bullying are met with immediate removal.',
        severity: 'critical'
      },
      {
        id: 'dc-3',
        title: 'Family-Safe Content (No NSFW)',
        description: 'No sexually explicit, pornographic, gore, graphic, or otherwise inappropriate media, text, or profile avatars anywhere in the server.',
        severity: 'critical'
      },
      {
        id: 'dc-4',
        title: 'No Unauthorized Advertising',
        description: 'Do not advertise other Discord servers, YouTube/Twitch streams without streamer role permissions, or paid services via channels or unsolicited DMs.',
        severity: 'high'
      },
      {
        id: 'dc-5',
        title: 'Privacy & Confidentiality',
        description: 'Respect personal privacy and confidential communications, except where safety reporting or serious misconduct requires administrative disclosure.',
        severity: 'critical'
      },
      {
        id: 'dc-6',
        title: 'Appropriate Channel Usage',
        description: 'Post media, memes, bot commands, suggestions, and technical queries into their designated channels as organized in the channel guide.',
        severity: 'standard'
      },
      {
        id: 'dc-7',
        title: 'No Malicious Links or Files',
        description: 'Strict prohibition on phishing links, token grabbers, malware, unverified downloads, or fraudulent crypto/Nitro promotions.',
        severity: 'critical'
      },
      {
        id: 'dc-8',
        title: 'Discord Terms of Service & Guidelines',
        description: 'All members must comply with Discord Terms of Service and Community Guidelines. Violations of platform ToS will result in banishment.',
        severity: 'high'
      },
      {
        id: 'dc-9',
        title: 'Pinging Etiquette',
        description: 'Do not mass ping, ghost ping, or unnecessarily ping staff or founders unless handling an urgent emergency that cannot wait for a ticket.',
        severity: 'standard'
      },
      {
        id: 'dc-10',
        title: 'Moderate Language',
        description: 'Keep general profanity moderate and contextual. Derogatory slurs directed at others are strictly forbidden.',
        severity: 'standard'
      },
      {
        id: 'dc-11',
        title: 'No Spamming or Flooding',
        description: 'Avoid repetitive text blocks, rapid image spamming, excessive ASCII art, or disruptive soundboard spam in voice lounges.',
        severity: 'standard'
      },
      {
        id: 'dc-12',
        title: 'No Moderation Evasion',
        description: 'Using alternate Discord accounts to evade mutes, timeouts, or kicks is prohibited and leads to a permanent IP/ID ban.',
        severity: 'critical'
      },
      {
        id: 'dc-13',
        title: 'Do Not Encourage Violations',
        description: 'Inciting, instructing, or encouraging other players to breach rules is treated with equal severity as committing the violation directly.',
        severity: 'high'
      },
      {
        id: 'dc-14',
        title: 'English-Only Public Channels',
        description: 'To facilitate transparent moderation and equitable communication across the community, all public channels remain English-only.',
        severity: 'standard'
      },
      {
        id: 'dc-15',
        title: 'Common Sense & Anti-Loophole Rule',
        description: 'Loopholes in technical phrasing will not excuse deliberate misconduct. Spirit of fairness always takes precedence over technicalities.',
        severity: 'standard'
      }
    ]
  },
  {
    id: 'punishments',
    title: 'Disciplinary Framework & Sanctions',
    subtitle: 'Transparent, graduated disciplinary actions administered via recorded staff logs',
    badge: 'Due Process',
    rules: [
      {
        id: 'pn-1',
        title: 'Verbal / Written Warning',
        description: 'Issued for minor first-time disruptions, inappropriate channel usage, or minor chat etiquette breaches. Logged in staff records.',
        severity: 'standard'
      },
      {
        id: 'pn-2',
        title: 'Item & Asset Confiscation',
        description: 'Applied when items are acquired through unauthorized exploits, duping, or unfair boundary trespass. Ill-gotten wealth is promptly voided.',
        severity: 'high'
      },
      {
        id: 'pn-3',
        title: 'Temporary Timeouts & Mutes',
        description: 'Applied for persistent chat toxicity, spam, or heated conflicts. Durations scale from 1 hour to 7 days depending on escalation.',
        severity: 'high'
      },
      {
        id: 'pn-4',
        title: 'Temporary Server Ban',
        description: 'Applied for severe infractions such as combat logging, repeated exploit testing, or disruptive behavior during events.',
        severity: 'high'
      },
      {
        id: 'pn-5',
        title: 'Permanent Blacklist & Banishment',
        description: 'Reserved for hacked client usage, malicious harassment, doxxing, lag machine creation, or intentional infrastructure attacks.',
        severity: 'critical'
      }
    ]
  }
]
