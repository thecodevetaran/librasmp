import React from 'react'
import { ANNOUNCEMENTS } from '../data/serverData'
import { Bell, Calendar, Clock, ShieldCheck, CheckCircle2, Disc as Discord } from 'lucide-react'

export const AnnouncementsSection: React.FC = () => {
  return (
    <section 
      id="announcements"
      aria-label="Server Announcements and Events"
      className="relative py-24 px-4 bg-void border-t-2 border-obsidian-border"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian border-2 border-obsidian-border text-lilac font-pixel text-xs uppercase mb-3">
            <Bell className="w-3.5 h-3.5 text-lilac" />
            <span>DISPATCH & CHRONICLES</span>
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-moonlight tracking-tight mb-3">
            SERVER ANNOUNCEMENTS
          </h2>
          <p className="font-sans text-moonlight-dim text-base sm:text-lg leading-relaxed">
            Stay informed on seasonal developments, milestones, and time-sensitive community opportunities.
          </p>
        </div>

        {/* Announcements List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {ANNOUNCEMENTS.map((ann) => (
            <div 
              key={ann.id}
              className="mc-panel p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Event Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-obsidian-border">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-void-deep border border-obsidian-border text-sand font-mono text-xs uppercase font-bold">
                    {ann.badge}
                  </span>
                  <span className={`font-mono text-[10px] px-2 py-0.5 uppercase font-bold border ${
                    ann.isExpired 
                      ? 'bg-rose-950 text-rose-300 border-rose-800' 
                      : 'bg-void-deep text-soul border-soul/40'
                  }`}>
                    {ann.isExpired ? 'EVENT CONCLUDED' : 'ACTIVE COMMUNITY EVENT'}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-moonlight-dim">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-lilac" />
                    {ann.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-sand font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    Deadline: {ann.deadline}
                  </span>
                </div>
              </div>

              {/* Title & Summary */}
              <div className="my-5">
                <h3 className="font-pixel text-lg sm:text-2xl text-moonlight mb-2">
                  {ann.title}
                </h3>
                <p className="font-sans text-base text-moonlight leading-relaxed">
                  {ann.summary}
                </p>
              </div>

              {/* Details List */}
              <div className="space-y-2 mb-6">
                <h4 className="font-pixel text-xs text-sand uppercase tracking-wider mb-2">
                  EVENT SPECIFICATIONS
                </h4>
                {ann.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-moonlight bg-void-deep p-3 border border-obsidian-border">
                    <CheckCircle2 className="w-4 h-4 text-soul mt-0.5 flex-shrink-0" />
                    <span className="font-sans leading-snug">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Anti-Fraud Terms */}
              <div className="p-4 mc-inset border-2 border-amber-900/40 space-y-2">
                <div className="flex items-center gap-2 text-sand font-pixel text-xs uppercase">
                  <ShieldCheck className="w-4 h-4 text-sand" />
                  <span>ANTI-FRAUD VERIFICATION & DISCLOSURE</span>
                </div>
                <ul className="space-y-1.5 text-xs text-moonlight-dim font-sans">
                  {ann.antiFraudTerms.map((term, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sand font-bold">•</span>
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Banner */}
              <div className="mt-6 pt-4 border-t-2 border-obsidian-border flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-mono text-moonlight-dim">
                  Invite audit claims are logged via Discord bot tickets
                </span>
                <a
                  href="https://dsc.gg/libraer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mc-btn-obsidian px-4 py-2 text-xs gap-2"
                >
                  <Discord className="w-4 h-4 text-lilac" />
                  <span>PARTICIPATE IN DISCORD</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
