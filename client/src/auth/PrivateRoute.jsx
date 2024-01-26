import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { ROUTES } from "../common/config";
import { useAuth } from "../auth/ProvideAuth";

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
