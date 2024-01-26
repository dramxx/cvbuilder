import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AutoAwesome from "@mui/icons-material/AutoAwesome";

import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";

import { ROUTES } from "../common/config";

const linkStyles = {
  textDecoration: "none",
  color: "inherit",
};

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Link to={ROUTES.home} style={linkStyles}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  style={{ marginRight: "20px" }}
                >
                  <AutoAwesome />
                  CV_BUILDER
                </Typography>
              </IconButton>
            </Link>
          </Box>

          <Box>
            <LoginButton />
            <LogoutButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
