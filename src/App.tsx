import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DiscoverSection } from './components/DiscoverSection'
import { OriginsExplorer } from './components/OriginsExplorer'
import { FairnessSection } from './components/FairnessSection'
import { StaffDirectory } from './components/StaffDirectory'
import { RulesSection } from './components/RulesSection'
import { AnnouncementsSection } from './components/AnnouncementsSection'
import { JoinSection } from './components/JoinSection'
import { SupportSection } from './components/SupportSection'
import { Footer } from './components/Footer'
import { SecretEasterEgg } from './components/SecretEasterEgg'
import { useServerStatus } from './hooks/useServerStatus'
import { SERVER_CONFIG } from './data/serverData'

export function App() {
  const status = useServerStatus()

  return (
    <div className="min-h-screen bg-libra-950 text-slate-100 flex flex-col selection:bg-gold-500 selection:text-libra-950">
      {/* Top Fixed Navigation */}
      <Navbar status={status} serverIp={SERVER_CONFIG.ip} />

      {/* Main Content Layout */}
      <main className="flex-1">
        <Hero status={status} serverIp={SERVER_CONFIG.ip} />
        <DiscoverSection />
        <OriginsExplorer />
        <FairnessSection />
        <StaffDirectory />
        <RulesSection />
        <AnnouncementsSection />
        <JoinSection status={status} serverIp={SERVER_CONFIG.ip} />
        <SupportSection />
      </main>

      {/* Global Footer */}
      <Footer serverIp={SERVER_CONFIG.ip} />

      {/* Interactive Secret Easter Egg */}
      <SecretEasterEgg />
    </div>
  )
}

export default App
