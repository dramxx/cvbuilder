import PropTypes from "prop-types";
import { Box } from "@mui/material";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box style={{ margin: "25px" }}>{children}</Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
