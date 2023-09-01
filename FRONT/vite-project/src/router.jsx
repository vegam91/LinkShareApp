import { createBrowserRouter } from "react-router-dom";
import AccessLayout from "../src/layouts/AccessLayout";
import RegistroPage from "../src/pages/RegisterPage";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import ErrorPage from "./pages/ErrorPages";
import PreviewPage from "../src/pages/PreviewPage";
import AccountLayout from "../src/layouts/AccountLayout";
import LinksPage from "./pages/LinksPage";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    element: <AccessLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/registro",
        element: <RegistroPage />,
      },
    ],
  },
  {
    element: <AccountLayout />,
    children: [
      {
        path: "/links",
        element: <LinksPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/preview",
    element: <PreviewPage />,
  },
]);

export default router;
