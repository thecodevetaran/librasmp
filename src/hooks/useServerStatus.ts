import { useState, useEffect } from 'react'
import { ServerStatusData } from '../types'

const STATUS_API_URL = 'https://api.mcsrvstat.us/3/librasmp.ultramc.co'
const REFRESH_INTERVAL_MS = 60000 // 60 seconds

export function useServerStatus() {
  const [status, setStatus] = useState<ServerStatusData>({
    online: false,
    players: { online: 0, max: 0 },
    version: '1.20+',
    loading: true,
    error: null,
    lastChecked: null,
  })

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    async function fetchStatus() {
      try {
        const res = await fetch(STATUS_API_URL, {
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        })

        if (!res.ok) {
          throw new Error(`Status query failed: ${res.status}`)
        }

        const data = await res.json()
        if (!isMounted) return

        if (data.online) {
          setStatus({
            online: true,
            players: {
              online: data.players?.online ?? 0,
              max: data.players?.max ?? 69,
            },
            version: data.version || '1.20+',
            motd: data.motd?.clean?.[0] || 'Libra SMP — Alter SMP X Origins',
            loading: false,
            error: null,
            lastChecked: new Date()
          })
        } else {
          setStatus({
            online: false,
            players: { online: 0, max: 0 },
            version: 'Java 1.20+',
            loading: false,
            error: null,
            lastChecked: new Date()
          })
        }
      } catch (err: any) {
        if (err.name === 'AbortError') return
        if (!isMounted) return

        // When offline or rate limited, gracefully maintain last state or note status
        setStatus(prev => ({
          ...prev,
          loading: false,
          error: 'Live status query unavailable at this moment',
          lastChecked: new Date()
        }))
      }
    }

    fetchStatus()
    const timer = setInterval(fetchStatus, REFRESH_INTERVAL_MS)

    return () => {
      isMounted = false
      controller.abort()
      clearInterval(timer)
    }
  }, [])

  return status
}
