import { IconCirclePlusFilled, IconMail, type Icon } from '@tabler/icons-react'
import { useLocation, Link } from 'react-router'

import { Button } from '@/components/ui/button'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const location = useLocation()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-1">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = location.pathname === item.url
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={
                    isActive
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md font-semibold hover:from-primary-700 hover:to-primary-600 border-l-4 border-primary-800 [&_span]:text-white [&_svg]:text-white'
                      : 'hover:bg-primary-50 hover:text-primary-800 dark:hover:bg-primary-900/20 dark:hover:text-primary-200 transition-colors duration-200'
                  }
                  data-active={isActive}
                >
                  <Link
                    to={item.url}
                    className="flex items-center gap-2 w-full"
                  >
                    {item.icon && <item.icon className="size-4" />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
