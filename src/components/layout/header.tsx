import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { CommandSearch } from '@/components/ui/command-search'
import { useLocation } from 'react-router'

export function SiteHeader() {
  const location = useLocation()

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/dashboard':
        return 'Dashboard'
      case '/services':
        return 'Serviços'
      case '/users':
        return 'Usuários'
      default:
        return 'Dashboard'
    }
  }

  return (
    <header className="flex h-12 shrink-0 items-center gap-2 border-b rounded-t-xl backdrop-blur-sm">
      <div className="flex w-full items-center gap-4 px-6">
        <SidebarTrigger className="-ml-1 hover:scale-110 transition-transform duration-100" />
        <Separator orientation="vertical" className="h-8" />
        <h1 className="font-semibold text-foreground">
          {getPageTitle(location.pathname)}
        </h1>
        <CommandSearch className="ml-4" />
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
