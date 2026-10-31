import React from 'react'
import { SUPPORT_CHANNELS } from '../data/serverData'
import { 
  LifeBuoy, 
  HelpCircle, 
  ShieldAlert, 
  MessageSquareWarning, 
  Gamepad2, 
  Scale, 
  Bug, 
  FileText, 
  Disc as Discord, 
  ExternalLink 
} from 'lucide-react'

function getSupportIcon(iconName: string) {
  switch (iconName) {
    case 'help-circle': return HelpCircle
    case 'shield-alert': return ShieldAlert
    case 'message-square-warning': return MessageSquareWarning
    case 'gamepad-2': return Gamepad2
    case 'scale': return Scale
    case 'bug': return Bug
    case 'file-text': return FileText
    default: return HelpCircle
  }
}

export const SupportSection: React.FC = () => {
  return (
    <section 
      id="support"
      aria-label="Community and Player Support"
      className="relative py-24 px-4 bg-void-surface border-t-2 border-obsidian-border"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian border-2 border-obsidian-border text-lilac font-pixel text-xs uppercase mb-3">
            <LifeBuoy className="w-3.5 h-3.5 text-lilac" />
            <span>PLAYER ASSISTANCE HUB</span>
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-moonlight tracking-tight mb-3">
            COMMUNITY & SUPPORT
          </h2>
          <p className="font-sans text-moonlight-dim text-base sm:text-lg leading-relaxed">
            Need administrative assistance, bug triage, or sanction reviews? To protect player privacy and maintain recorded audit trails, all formal tickets are routed through our Discord support dispatch.
          </p>
        </div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {SUPPORT_CHANNELS.map((item) => {
            const Icon = getSupportIcon(item.icon)
            return (
              <div 
                key={item.id}
                className="mc-panel p-5 border-2 border-obsidian-border hover:border-lilac transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 mc-slot flex items-center justify-center text-lilac">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-void-deep border border-obsidian-border text-sand">
                      {item.targetChannel}
                    </span>
                  </div>

                  <h3 className="font-pixel text-sm text-moonlight mb-2">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-moonlight-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t-2 border-obsidian-border">
                  <a
                    href="https://dsc.gg/libraer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-pixel text-xs text-soul hover:text-moonlight transition-colors"
                  >
                    <span>OPEN DISCORD TICKET</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Discord Ticket System Metaphor Banner */}
        <div className="mc-panel p-6 sm:p-8 max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1">
              <span className="font-mono text-xs text-sand uppercase tracking-widest block font-bold">
                OFFICIAL DESTINATION
              </span>
              <h4 className="font-pixel text-lg sm:text-xl text-moonlight">
                Ready to speak with our support team?
              </h4>
              <p className="font-sans text-sm text-moonlight-muted">
                Join our Discord server and navigate to the ticket creation panel to receive prompt, auditable assistance.
              </p>
            </div>

            <a
              href="https://dsc.gg/libraer"
              target="_blank"
              rel="noopener noreferrer"
              className="mc-btn-lilac px-7 py-3 text-xs gap-2 flex-shrink-0 cursor-pointer"
            >
              <Discord className="w-4 h-4 text-void-deep" />
              <span>JOIN DSC.GG/LIBRAER</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
