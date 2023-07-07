import { useTitle } from "react-use";

export const usePageTitle = (title?: string) => {
  useTitle(title ? `${title} | JWT Edu Client` : "JWT Edu Client");
};
