import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};
