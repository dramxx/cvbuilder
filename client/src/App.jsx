import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ROUTES } from "./common/config";
import { ProvideAuth } from "./auth/ProvideAuth";

import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Documents from "./pages/Documents";
import Unauthorized from "./pages/Unauthorized";
import PrivateRoute from "./auth/PrivateRoute";

const App = () => {
  return (
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
  );
};

export default App;
