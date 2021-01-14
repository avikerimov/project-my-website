import React from 'react'
import { Route, Redirect } from "react-router-dom"
import userService from "../../services/service/userService"

//Component that checks if it is a logedin BizUser 
const BizProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const currentUser = userService.getCurrentUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser || (rest.biz && !currentUser.biz))
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default BizProtectedRoute;