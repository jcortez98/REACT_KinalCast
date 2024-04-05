import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "./Pages/dashboard";
import { AuthPage } from "./Pages/auth";

const router = createBrowserRouter([
    {path: '/auth', element: <AuthPage/>},
    {path: '/', element: <DashboardPage/>}
])

export default router
