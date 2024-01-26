import { Route, Redirect } from "react-router-dom";
import { ROUTES } from "../common/configs";
import { useAuth } from "./ProvideAuth";

import PropTypes from "prop-types";

const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.unauthorized,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
