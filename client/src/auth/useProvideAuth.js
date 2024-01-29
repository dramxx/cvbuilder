import { useState, useEffect } from "react";
import axios from "axios";

import { manageAuth } from "./manageAuth";
import { API_ROUTES } from "../common/config";
import { getJwt, saveJwt, removeJwt } from "../common/utils";

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwt = getJwt();
    if (jwt) {
      setUser(jwt);
    }
  }, []);

  const signin = (callback, user) => {
    return new Promise((resolve, reject) => {
      manageAuth.signin(() => {
        axios
          .post(API_ROUTES.auth.login, user)
          .then((response) => {
            const jwt = response.data;
            if (!jwt) {
              reject("No JWT token in: " + response);
            } else {
              saveJwt(jwt);
              setUser(jwt);
              callback();
              resolve();
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  };

  //FIXME: login popup is openen on signout
  const signout = (cb) => {
    return manageAuth.signout(() => {
      setUser(null);
      removeJwt();
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
};
