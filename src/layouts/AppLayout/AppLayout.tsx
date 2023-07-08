import { Navbar } from "@/components";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-auto">
        <Container maxWidth="sm">
          <Outlet />
        </Container>
      </main>
    </>
  );
};
