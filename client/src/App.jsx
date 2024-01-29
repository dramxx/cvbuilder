import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { css, Global } from "@emotion/react";

import { ROUTES, THEME } from "./common/config";
import { ProvideAuth } from "./auth/ProvideAuth";

import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Documents from "./pages/Documents";
import Unauthorized from "./pages/Unauthorized";
import PrivateRoute from "./auth/PrivateRoute";

const globalStyles = css`
* {
    box-sizing: border-box;
  },
  body {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background-color: ${THEME.colors.backgroundPrimary};
    color: ${THEME.colors.default};
  },
`;

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />

      <ProvideAuth>
        <Router>
          <Redirect from="/" to={ROUTES.home} />

          <Layout>
            <Switch>
              <Route path={ROUTES.home}>
                <Landing />
              </Route>
              <PrivateRoute path={ROUTES.documents}>
                <Documents />
              </PrivateRoute>
              <Route path={ROUTES.unauthorized}>
                <Unauthorized />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ProvideAuth>
    </>
  );
};

export default App;
