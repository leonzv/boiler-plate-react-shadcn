import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 w-16 rounded-full bg-input border border-border transition-all duration-200 overflow-hidden flex items-center justify-center p-1"
    >
      <div
        className={`absolute h-7 w-7 rounded-full bg-background border border-border shadow-sm transition-all duration-200 z-10 ${
          isDark ? 'translate-x-[15px]' : 'translate-x-[-14px]'
        }`}
      />

      <Sun
        className={`absolute left-2 h-4 w-4 transition-all duration-200 z-20 ${
          isDark ? 'text-muted-foreground' : 'text-foreground'
        }`}
      />
      <Moon
        className={`absolute right-2 h-4 w-4 transition-all duration-200 z-20 ${
          isDark ? 'text-foreground' : 'text-muted-foreground'
        }`}
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
