import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../useAuth";

const RequiredAuth = ({ allowedRoles=[] }) => {
  const location = useLocation();
  const auth = useAuth();

  // <Outlet /> is a special component that allows you to render the child routes of the parent route.
  // i.e. all child components of the RequiredAuth component will be rendered here.
  //  replace={true}
  //  to={{ pathname: "/login", state: { from: location } }}
  // replace and state props are used to replace the current entry in the history stack with a new one.
  // so when we push back we contionusly don;t go back to the login page.
  return (
    <>
      {auth.role.find(role => allowedRoles.includes(role)) && auth.isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate
          replace={true}
          to="/login"
          state={{ from: location.pathname }}
        />
      )}
    </>
  );
};

export default RequiredAuth;
