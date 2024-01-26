import { useState, useEffect } from "react";
import axios from "axios";

import { manageAuth } from "./manageAuth";
import { API_ROUTES } from "../common/config";
import { getJwt, saveJwt, removeJwt } from "../common/utils";

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log("isAuthenticated", isAuthenticated);

  useEffect(() => {
    const jwt = getJwt();
    if (jwt) {
      setUser(jwt);
      setIsAuthenticated(true);
    }
  }, []);

  const signin = (cb, user) => {
    return manageAuth.signin(() => {
      axios
        .post(API_ROUTES.auth.login, user)
        .then((response) => {
          const jwt = response.data;

          if (!jwt) return console.error(response);

          saveJwt(jwt);
          setUser(jwt);
          setIsAuthenticated(true);

          cb();
        })
        .catch((error) => console.error(error));
    });
  };

  const signout = (cb) => {
    return manageAuth.signout(() => {
      setUser(null);
      removeJwt();
      setIsAuthenticated(false);
      cb();
    });
  };

  return {
    user,
    isAuthenticated,
    signin,
    signout,
  };
};
