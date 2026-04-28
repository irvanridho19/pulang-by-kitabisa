import { createBrowserRouter, Outlet } from "react-router";
import { PageTransitionProvider } from "./components/page-transition";
import { AuthProvider } from "./components/auth-context";
import LandingPage from "./components/landing-page";
import CaraKlaimPage from "./components/cara-akses-layanan";
import LayananPage from "./components/layanan-page";
import PurchaseOnboardPage from "./components/purchase-onboard";
import PurchaseLayananPage from "./components/purchase-layanan";
import PurchaseDataDiriPage from "./components/purchase-data-diri";
import PurchaseKonfirmasiPage from "./components/purchase-konfirmasi";
import PurchaseSuccessPage from "./components/purchase-success";
import MemberPage from "./components/member-page";
import PerpanjangPage from "./components/perpanjang-page";
import MemberEmptyPage from "./components/member-empty-page";
import MisiPage from "./components/manifesto";
import NotFoundPage from "./components/not-found-page";
import FaqPage from "./components/faq-page";

function RootLayout() {
  return (
    <AuthProvider>
      <PageTransitionProvider>
        <Outlet />
      </PageTransitionProvider>
    </AuthProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: NotFoundPage,
    children: [
      { index: true, Component: LandingPage },
      { path: "cara-akses-layanan", Component: CaraKlaimPage },
      { path: "manifesto", Component: MisiPage },
      { path: "layanan", Component: LayananPage },
      { path: "faq", Component: FaqPage },
      { path: "purchase", Component: PurchaseOnboardPage },
      { path: "purchase/layanan", Component: PurchaseLayananPage },
      { path: "purchase/data-diri", Component: PurchaseDataDiriPage },
      { path: "purchase/konfirmasi", Component: PurchaseKonfirmasiPage },
      { path: "purchase/success", Component: PurchaseSuccessPage },
      { path: "member", Component: MemberPage },
      { path: "member-empty", Component: MemberEmptyPage },
      { path: "perpanjang", Component: PerpanjangPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);