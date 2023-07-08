import { usePageTitle } from "@/hooks";

export const NotFound = () => {
  usePageTitle("Not Found");

  return (
    <section>
      <header>
        <h1>Not Found</h1>
      </header>
    </section>
  );
};
