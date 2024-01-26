import { createContext, useContext } from "react";
import PropTypes from "prop-types";

import { useProvideAuth } from "./useProvideAuth";

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(authContext);
};

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
