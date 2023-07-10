import { Navbar } from "@/components";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Box component="main" className="flex-auto" sx={{ pb: "100px" }}>
        <Container maxWidth="sm">
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
