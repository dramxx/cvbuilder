import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

import { useAuth } from "../../auth/ProvideAuth";
import { ROUTES } from "../../common/config";

const LoginButton = () => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: ROUTES.home } };

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    const user = { email, password };
    auth
      .signin(() => {
        history.replace(from);
      }, user)
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  return (
    !auth.user && (
      <>
        <IconButton
          size="small"
          color="inherit"
          aria-label="menu"
          onClick={handleOpen}
        >
          <Typography variant="h8" style={{ marginRight: "20px" }}>
            Login
          </Typography>
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            {errorMessage && <div>{errorMessage}</div>}

            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  );
};

export default LoginButton;
