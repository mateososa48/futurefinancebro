'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ isDark: false, toggle: () => {}, mounted: false })

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const saved = localStorage.getItem('ledger-theme')

    if (saved) {
      const dark = saved === 'dark'
      setIsDark(dark)
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : '')
    } else {
      // Fall back to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
      if (prefersDark) document.documentElement.setAttribute('data-theme', 'dark')
    }

    // Keep in sync if user changes system preference (and hasn't set a manual override)
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (!localStorage.getItem('ledger-theme')) {
        setIsDark(e.matches)
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : '')
      }
    }
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.setAttribute('data-theme', next ? 'dark' : '')
    localStorage.setItem('ledger-theme', next ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggle, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}
