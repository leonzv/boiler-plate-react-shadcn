import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router'
import { ThemeProvider } from './components/theme/theme-provider'
import { AppSidebar } from './components/layout/sidebar'
import { SiteHeader } from './components/layout/header'
import { SidebarProvider, SidebarInset } from './components/ui/sidebar'

function AppLayout() {
  return (
    <SidebarProvider className="w-full flex bg-sidebar min-h-screen">
      <AppSidebar variant="inset" collapsible="icon" />
      <SidebarInset className="flex-1 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col bg-content-background rounded-xl shadow-sm overflow-hidden">
          <SiteHeader />
          <div className="flex-1 overflow-auto">
            <main className="p-6 pb-12 space-y-6">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<div>Welcome to the app</div>} />
            <Route path="dashboard" element={<div>Dashboard</div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
