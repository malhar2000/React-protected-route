import { createBrowserRouter } from "react-router-dom";
import Home from "./Comp/Home";
import Admin from "./Comp/Admin";
import Agent from "./Comp/Agent";
import Student from "./Comp/Student";
import NotFound from "./Comp/NotFound";
import Common from "./Comp/Common";
import Login from "./Comp/Login";
import Layout from "./Layout";

import RequiredAuth from './Comp/RequiredAuth';
import LinkPage from "./Comp/LinkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },  
      {
        path: "/",
        element: <RequiredAuth allowedRoles={["ADMIN"]}/>,
        children: [
          {
            path: "/admin",
            element: <Admin />,
          },
        ]
      },
      {
        path: "/",
        element: <RequiredAuth allowedRoles={["AGENT", "ADMIN"]}/>,
        children: [
          {
            path: "/agent",
            element: <Agent />,
          },
        ]
      },
      {
        path: "/",
        element: <RequiredAuth allowedRoles={["STUDENT"]}/>,
        children: [
          {
            path: "/student",
            element: <Student />,
          },
        ]
      },
      {
        path: "/",
        element: <RequiredAuth allowedRoles={["AGENT", "ADMIN"]}/>,
        children: [
          {
            path: "/common",
            element: <Common />,
          },
        ]
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
