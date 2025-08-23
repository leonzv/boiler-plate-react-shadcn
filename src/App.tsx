import { BrowserRouter, Routes, Route, Outlet } from "react-router";



const App = () => {
  return (
    <BrowserRouter>
        {/* <Routes>
          <Route
            element={
              <Authenticated key="auth-pages" fallback={<Outlet />}>
                <NavigateToResource resource="" />
              </Authenticated>
            }>
            <Route path="/login" element={<SignInForm />} />
          </Route>

          <Route
            element={
              <Authenticated key="protected-routes">
                <Layout>
                  <Outlet />
                </Layout>
              </Authenticated>
            }>
            <Route index element={<NavigateToResource resource="dashboard" />} />
            <Route path="*" element={<ComponenteDeErroAqui />} /> 
          </Route>
        </Routes>
        <Toaster />
        <UnsavedChangesNotifier /> */}
    </BrowserRouter>
  );
};

export default App;

