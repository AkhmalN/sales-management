import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoutes from "./protected";
import Layout from "../layout/RootLayout";
import DaftarUserPage from "../pages/daftar-user";
import DashboardPage from "../pages/beranda";
import AnalyticsPage from "../pages/analytics";
import RegisterPage from "../pages/register";
import InvoicePage from "../pages/invoice";
import Cookies from "js-cookie";

const token = Cookies.get("access_token") ?? null;

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <LoginPage />,
  },
  {
    path: "/register",
    errorElement: <ErrorPage />,
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <ProtectedRoutes token={token} />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "dashboard", element: <DashboardPage /> },
          { path: "analytics", element: <AnalyticsPage /> },
          { path: "daftar-user", element: <DaftarUserPage /> },
          { path: "invoice", element: <InvoicePage /> },
        ],
      },
    ],
  },
]);
