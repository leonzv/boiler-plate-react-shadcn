'use client'

import * as React from 'react'
import { IconSearch, IconCornerDownLeft } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

interface CommandSearchProps {
  className?: string
}

export function CommandSearch({ className }: CommandSearchProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const isMac =
    typeof navigator !== 'undefined' &&
    navigator.platform.toUpperCase().indexOf('MAC') >= 0

  const suggestions = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Serviços', href: '/services' },
    { title: 'Usuários', href: '/users' },
  ]

  const filteredSuggestions = suggestions.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className={cn(
          'relative h-8 w-72 justify-start rounded-lg bg-muted/50 text-sm font-normal text-muted-foreground shadow-sm transition-all duration-200',
          className
        )}
      >
        <IconSearch className="mr-2 size-4" />
        <span>Pesquisar...</span>
        <div className="flex-1" />
        <kbd className="pointer-events-none flex h-5 select-none items-center gap-1 rounded bg-muted px-2 font-mono text-[11px] font-medium opacity-100">
          <span className="text-xs">{isMac ? '⌘' : 'Ctrl'}</span>
          <span className="text-xs font-semibold">K</span>
        </kbd>
      </Button>

      <DialogContent className="max-w-2xl p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Pesquisar</DialogTitle>
        </DialogHeader>

        <div className="flex items-center border-b pl-4 pr-12 py-4 gap-2">
          <IconSearch className="size-4 shrink-0 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite para pesquisar..."
            autoFocus
          />
        </div>

        <ScrollArea className="max-h-[400px]">
          {search === '' ? (
            <div className="p-4">
              <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
                Sugestões
              </div>
              <div className="space-y-1">
                {suggestions.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => {
                      window.location.href = item.href
                      setOpen(false)
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-neutral-800 dark:hover:text-primary-300 transition-colors group"
                  >
                    <IconSearch className="size-4 text-muted-foreground group-hover:text-primary-600 dark:group-hover:text-primary-300" />
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : filteredSuggestions.length > 0 ? (
            <div className="p-4">
              <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
                Resultados
              </div>
              <div className="space-y-1">
                {filteredSuggestions.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => {
                      window.location.href = item.href
                      setOpen(false)
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-neutral-800 dark:hover:text-primary-300 transition-colors group"
                  >
                    <IconSearch className="size-4 text-muted-foreground group-hover:text-primary-600 dark:group-hover:text-primary-300" />
                    <span>{item.title}</span>
                    <div className="ml-auto">
                      <IconCornerDownLeft className="size-3 text-muted-foreground group-hover:text-primary-600 dark:group-hover:text-primary-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4 text-center">
              <p className="text-sm text-muted-foreground">
                Nenhum resultado encontrado para "{search}".
              </p>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
