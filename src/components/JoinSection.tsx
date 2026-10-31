import React, { useState } from 'react'
import { ServerStatusData } from '../types'
import { copyToClipboard } from '../utils/clipboard'
import { Copy, Check, Disc as Discord, Server, CheckCircle2, AlertCircle } from 'lucide-react'

interface JoinSectionProps {
  status: ServerStatusData
  serverIp: string
}

export const JoinSection: React.FC<JoinSectionProps> = ({ status, serverIp }) => {
  const [activeTab, setActiveTab] = useState<'java' | 'bedrock'>('java')
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const success = await copyToClipboard(serverIp)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    }
  }

  return (
    <section 
      id="join"
      aria-label="How to Join Libra SMP"
      className="relative py-24 px-4 bg-void-surface border-t-2 border-obsidian-border"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian border-2 border-obsidian-border text-soul font-pixel text-xs uppercase mb-3">
            <Server className="w-3.5 h-3.5 text-soul" />
            <span>CONNECTION TERMINAL</span>
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-moonlight tracking-tight mb-3">
            JOIN THE SERVER
          </h2>
          <p className="font-sans text-moonlight-dim text-base sm:text-lg leading-relaxed">
            Ready to establish your legacy? Connect directly to our Singapore infrastructure hosted on Ultimate Hosting.
          </p>
        </div>

        {/* Server IP Game-Menu Card */}
        <div className="max-w-2xl mx-auto mb-10 mc-panel p-6 sm:p-8 relative">
          
          <div className="text-center mb-6">
            <span className="font-mono text-xs text-sand uppercase tracking-widest block mb-2 font-bold">
              OFFICIAL SERVER ADDRESS
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="font-mono text-xl sm:text-2xl text-moonlight font-bold bg-void-deep px-5 py-3 border-2 border-obsidian-border select-all tracking-wider text-center shadow-pixel-sm">
                {serverIp}
              </span>
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto mc-btn-soul px-6 py-3.5 text-xs gap-2 cursor-pointer font-mono font-bold"
                aria-label="Copy server IP address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY IP ADDRESS</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Infrastructure Specs in JetBrains Mono */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t-2 border-obsidian-border text-center font-mono">
            <div className="p-2.5 mc-inset">
              <span className="text-[10px] text-moonlight-dim uppercase block">HOST</span>
              <span className="text-xs text-moonlight font-bold mt-0.5 block">Ultimate Hosting</span>
            </div>
            <div className="p-2.5 mc-inset">
              <span className="text-[10px] text-moonlight-dim uppercase block">REGION</span>
              <span className="text-xs text-moonlight font-bold mt-0.5 block">Singapore (SG)</span>
            </div>
            <div className="p-2.5 mc-inset">
              <span className="text-[10px] text-moonlight-dim uppercase block">LIVE PLAYERS</span>
              <span className="text-xs text-soul font-bold mt-0.5 block">
                {status.online ? `${status.players.online}/${status.players.max}` : 'ViaVersion Ready'}
              </span>
            </div>
            <div className="p-2.5 mc-inset">
              <span className="text-[10px] text-moonlight-dim uppercase block">COMPATIBILITY</span>
              <span className="text-xs text-lilac font-bold mt-0.5 block">ViaVersion Active</span>
            </div>
          </div>

        </div>

        {/* Connection Guides: Java vs Bedrock */}
        <div className="max-w-3xl mx-auto">
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveTab('java')}
              className={`px-6 py-2.5 text-xs sm:text-sm font-pixel transition-all cursor-pointer ${
                activeTab === 'java'
                  ? 'mc-btn-lilac shadow-pixel-lilac'
                  : 'mc-btn-obsidian text-moonlight-dim'
              }`}
            >
              JAVA EDITION (VERIFIED)
            </button>
            <button
              onClick={() => setActiveTab('bedrock')}
              className={`px-6 py-2.5 text-xs sm:text-sm font-pixel transition-all cursor-pointer ${
                activeTab === 'bedrock'
                  ? 'mc-btn-lilac shadow-pixel-lilac'
                  : 'mc-btn-obsidian text-moonlight-dim'
              }`}
            >
              BEDROCK EDITION (STATUS)
            </button>
          </div>

          {/* Java Guide */}
          {activeTab === 'java' && (
            <div className="mc-panel p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b-2 border-obsidian-border">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-soul" />
                  <span className="font-pixel text-sm text-moonlight">JAVA EDITION CONNECTION GUIDE</span>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-0.5 bg-void-deep text-soul border border-soul/40 font-bold">
                  Java 1.20+ Supported
                </span>
              </div>

              <div className="space-y-3 font-sans">
                
                {/* Step 1 */}
                <div className="flex items-start gap-4 p-4 mc-inset">
                  <div className="w-8 h-8 mc-slot flex items-center justify-center text-lilac font-mono text-xs font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-pixel text-xs text-moonlight mb-1">
                      Launch Minecraft Java Edition
                    </h4>
                    <p className="text-xs sm:text-sm text-moonlight-muted">
                      Start your official Minecraft Launcher. Ensure your game version is 1.20 or newer. Thanks to ViaVersion, multiple modern sub-versions are compatible.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 p-4 mc-inset">
                  <div className="w-8 h-8 mc-slot flex items-center justify-center text-lilac font-mono text-xs font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-pixel text-xs text-moonlight mb-1">
                      Navigate to Multiplayer & Add Server
                    </h4>
                    <p className="text-xs sm:text-sm text-moonlight-muted">
                      From the main title screen, select <strong className="text-moonlight">Multiplayer</strong>, then click <strong className="text-moonlight">Add Server</strong> (or Direct Connection).
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 p-4 mc-inset">
                  <div className="w-8 h-8 mc-slot flex items-center justify-center text-lilac font-mono text-xs font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-pixel text-xs text-moonlight mb-1">
                      Input Server Name & Address
                    </h4>
                    <p className="text-xs sm:text-sm text-moonlight-muted">
                      Name: <span className="text-sand font-mono font-bold">Libra SMP</span><br />
                      Server Address: <span className="text-soul font-mono font-bold">librasmp.ultramc.co</span>
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4 p-4 mc-inset">
                  <div className="w-8 h-8 mc-slot flex items-center justify-center text-lilac font-mono text-xs font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-pixel text-xs text-moonlight mb-1">
                      Connect & Select Your Origin
                    </h4>
                    <p className="text-xs sm:text-sm text-moonlight-muted">
                      Click <strong className="text-moonlight">Done</strong> and hit <strong className="text-moonlight">Join Server</strong>. Upon spawning, you will enter the Origin selection chamber!
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Bedrock Status Notice */}
          {activeTab === 'bedrock' && (
            <div className="mc-panel p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 pb-4 border-b-2 border-obsidian-border">
                <AlertCircle className="w-5 h-5 text-sand" />
                <span className="font-pixel text-sm text-moonlight">BEDROCK EDITION STATUS</span>
              </div>

              <div className="p-4 mc-inset border-2 border-amber-900/60 text-moonlight-muted space-y-3 font-sans">
                <p className="text-sm leading-relaxed">
                  <strong className="text-sand">Verification in Progress:</strong> The server team is currently configuring and verifying Bedrock bridge integration with Ultimate Hosting in the Singapore data center.
                </p>
                <p className="text-sm leading-relaxed text-moonlight-dim">
                  In keeping with our transparency standard, we do not publish an unverified Bedrock port or guarantee compatibility until all cross-play tests pass.
                </p>
              </div>

              <div className="p-4 mc-inset flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-moonlight-muted text-center sm:text-left">
                  <span className="font-pixel text-xs text-sand block mb-1">
                    GET THE VERIFIED BEDROCK ANNOUNCEMENT
                  </span>
                  <span>Join our official Discord to receive notification the exact moment Bedrock connection details go live.</span>
                </div>
                <a
                  href="https://dsc.gg/libraer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mc-btn-lilac px-4 py-2 text-xs gap-2 flex-shrink-0"
                >
                  <Discord className="w-4 h-4 text-void-deep" />
                  <span>JOIN DISCORD ANNOUNCEMENTS</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
