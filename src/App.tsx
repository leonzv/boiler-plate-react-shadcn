import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router'
import { Suspense, lazy } from 'react'
import { ThemeProvider } from './components/theme/theme-provider'
import { AppSidebar } from './components/layout/sidebar'
import { SiteHeader } from './components/layout/header'
import { SidebarProvider, SidebarInset } from './components/ui/sidebar'

// Lazy load pages for better performance
const DashboardPage = lazy(() =>
  import('./pages/Dashboard').then((module) => ({
    default: module.DashboardPage,
  }))
)
const ServicesPage = lazy(() =>
  import('./pages/Services').then((module) => ({
    default: module.ServicesPage,
  }))
)
const UsersPage = lazy(() =>
  import('./pages/Users').then((module) => ({ default: module.UsersPage }))
)

// Loading component
function PageLoader() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
}

function AppLayout() {
  return (
    <SidebarProvider className="w-full h-full overflow-hidden pb-4">
      <AppSidebar variant="inset" collapsible="icon" />
      <SidebarInset className="flex-1 flex flex-col h-full overflow">
        <SiteHeader />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
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
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route
              path="dashboard"
              element={
                <Suspense fallback={<PageLoader />}>
                  <DashboardPage />
                </Suspense>
              }
            />
            <Route
              path="services"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ServicesPage />
                </Suspense>
              }
            />
            <Route
              path="users"
              element={
                <Suspense fallback={<PageLoader />}>
                  <UsersPage />
                </Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
