import { router } from "@/router";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";

export const Providers = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
};
