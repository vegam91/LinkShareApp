import { createBrowserRouter } from "react-router-dom";
import AccessLayout from "../src/layouts/AccessLayout";
import RegistroPage from "./pages/registroPage/RegistroPage";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import ErrorPage from "./pages/ErrorPages";
import PreviewPage from "../src/pages/PreviewPage.jsx";
import AccountLayout from "../src/layouts/AccountLayout";
import LinksPage from "./pages/LinksPage/LinksPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AddLinksPage from "./pages/LinksPage/ESTANOAddLinksPage";
import EjemploRender from "./pages/EJEMPLORENDER";

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
        path: "/ejemplo",
        element: <EjemploRender />,
      },
      {
        path: "/links",
        element: <LinksPage />,
      },
      {
        path: "/links/new",
        element: <AddLinksPage />,
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
