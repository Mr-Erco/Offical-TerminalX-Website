import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Security from "./components/Security";
import Packages from "./components/Packages";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Github from "./components/Github";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "security", element: <Security /> },
      { path: "packages", element: <Packages /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "github", element: <Github /> },
    ],
  },
]);
