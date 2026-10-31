import React from 'react'
import { Scale, Users, CheckCircle2, Lock, Activity, ShieldCheck } from 'lucide-react'

export const FairnessSection: React.FC = () => {
  return (
    <section 
      id="fairness"
      aria-label="Fairness and Governance Philosophy"
      className="relative py-24 px-4 bg-void border-t-2 border-obsidian-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian border-2 border-obsidian-border text-lilac font-pixel text-xs uppercase mb-3">
            <Scale className="w-3.5 h-3.5 text-lilac" />
            <span>MODERATION PHILOSOPHY</span>
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-moonlight tracking-tight mb-3">
            FAIRNESS BY DESIGN.
          </h2>
          <p className="font-sans text-moonlight-dim text-base sm:text-lg leading-relaxed">
            A new SMP. A new approach to moderation. Too many survival multiplayer worlds collapse under the weight of favoritism, rogue admins, and opaque sanctions. Libra SMP was founded on the fundamental principle of immutable balance.
          </p>
        </div>

        {/* Visual Governance Architecture Metaphor (Council Chamber / Connected Governance) */}
        <div className="mc-panel p-6 sm:p-10 mb-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Pillar 1: 10-12 Member Board of Directors */}
            <div className="p-6 mc-inset flex flex-col justify-between border-2 border-obsidian-border hover:border-lilac transition-colors">
              <div>
                <div className="w-12 h-12 mc-slot flex items-center justify-center text-lilac mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[11px] text-sand uppercase tracking-widest font-bold">
                    GOVERNANCE COUNCIL
                  </span>
                </div>
                <h3 className="font-pixel text-lg text-moonlight mb-3">
                  10–12 Member Board
                </h3>
                <p className="font-sans text-sm text-moonlight-muted leading-relaxed">
                  Power is decentralized. The planned Board of Directors consists of 10 to 12 members who share equal permissions and collective responsibility under our constitutional framework.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-obsidian-border">
                <div className="flex items-center gap-2 text-xs font-mono text-soul">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>No unilateral rogue decisions</span>
                </div>
              </div>
            </div>

            {/* Pillar 2: UltraServers Logs & Activity Panel */}
            <div className="p-6 mc-inset flex flex-col justify-between border-2 border-obsidian-border hover:border-soul transition-colors">
              <div>
                <div className="w-12 h-12 mc-slot flex items-center justify-center text-soul mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[11px] text-soul uppercase tracking-widest font-bold">
                    HOST VERIFICATION
                  </span>
                </div>
                <h3 className="font-pixel text-lg text-moonlight mb-3">
                  Daily Audited Logs
                </h3>
                <p className="font-sans text-sm text-moonlight-muted leading-relaxed">
                  Every administrative command, block modification in dispute, and server sanction is tracked through daily server logs and the UltraServers activity panel for internal auditability.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-obsidian-border">
                <div className="flex items-center gap-2 text-xs font-mono text-soul">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Audited via UltraServers host panel</span>
                </div>
              </div>
            </div>

            {/* Pillar 3: Dual Oversight (In-Game + Discord) */}
            <div className="p-6 mc-inset flex flex-col justify-between border-2 border-obsidian-border hover:border-sand transition-colors">
              <div>
                <div className="w-12 h-12 mc-slot flex items-center justify-center text-sand mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[11px] text-sand uppercase tracking-widest font-bold">
                    DUAL JURISDICTION
                  </span>
                </div>
                <h3 className="font-pixel text-lg text-moonlight mb-3">
                  Unified Shield
                </h3>
                <p className="font-sans text-sm text-moonlight-muted leading-relaxed">
                  The Board oversees both the Minecraft server and Discord server under matching ethical standards, eliminating toxic silos and safeguarding all players equally.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-obsidian-border">
                <div className="flex items-center gap-2 text-xs font-mono text-sand">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Equal protection across all platforms</span>
                </div>
              </div>
            </div>

          </div>

          {/* Balanced Scales Principle Banner */}
          <div className="mt-8 p-6 mc-inset text-center border-2 border-obsidian-border">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Scale className="w-6 h-6 text-lilac" />
                <h4 className="font-pixel text-sm sm:text-base text-sand uppercase tracking-wider">
                  THE PRINCIPLE OF THE BALANCED SCALES
                </h4>
              </div>
              <p className="font-sans text-sm text-moonlight-dim leading-relaxed mb-4">
                "Power without balance creates tyranny; survival without rules creates chaos. On Libra SMP, every player's choices define their legacy under a transparent, verifiable set of rules."
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-void-deep border border-obsidian-border text-[11px] font-mono text-moonlight-dim">
                <Lock className="w-3.5 h-3.5 text-lilac" />
                <span>Internal server logs audited daily by Board leadership</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
