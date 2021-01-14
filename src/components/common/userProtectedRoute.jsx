import React from "react";
import { Route, Redirect } from "react-router-dom";
import userService from "../../services/service/userService";

//Component that checks if it is a logedin User (and not BizUzer)
const UserProtectedRoute = ({
  path,
  component: Component,
  render,
  ...rest
}) => {
  const currentUser = userService.getCurrentUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser && !currentUser.biz)
          return Component ? <Component {...props} /> : render(props);
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default UserProtectedRoute;
