import { Outlet } from "react-router";
import { PageTransitionProvider } from "./page-transition";

export default function TransitionLayout() {
  return (
    <PageTransitionProvider>
      <Outlet />
    </PageTransitionProvider>
  );
}
