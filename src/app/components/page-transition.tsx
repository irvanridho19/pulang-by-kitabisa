import {
  createContext,
  useContext,
  useCallback,
  type ReactNode,
} from "react";
import { useNavigate, type NavigateOptions } from "react-router";

/* ── Context ─── */
type TransitionCtx = {
  navigateWithLoading: (to: string, opts?: NavigateOptions) => void;
};

const PageTransitionContext = createContext<TransitionCtx>({
  navigateWithLoading: () => {},
});

export const usePageTransition = () => useContext(PageTransitionContext);

/* ── Provider (must be rendered inside a Router) ─── */
export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const navigateWithLoading = useCallback(
    (to: string, opts?: NavigateOptions) => {
      navigate(to, opts);
    },
    [navigate]
  );

  return (
    <PageTransitionContext.Provider value={{ navigateWithLoading }}>
      {children}
    </PageTransitionContext.Provider>
  );
}
