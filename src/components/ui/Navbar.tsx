import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 !important",
          }}
        >
          <Typography
            to="/"
            component={NavLink}
            variant="h6"
            sx={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Logo
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              to="sign-in"
              component={NavLink}
              color="inherit"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Sign In
            </Button>
            <Button
              to="sign-up"
              component={NavLink}
              color="inherit"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
