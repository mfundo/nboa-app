'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/providers/Theme'
import { useState, useEffect } from 'react'

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  const toggleTheme = () => {
    if (isDark) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="p-2 rounded-md hover:bg-background/50 dark:hover:bg-background/50 transition-colors cursor-pointer"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-foreground hover:text-brand transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-foreground hover:text-brand transition-colors" />
      )}
    </button>
  )
}
