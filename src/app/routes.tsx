import { createBrowserRouter, Outlet } from "react-router";
import { PageTransitionProvider } from "./components/page-transition";
import { AuthProvider } from "./components/auth-context";
import LandingPage from "./components/landing-page";
import CaraKlaimPage from "./components/cara-klaim";
import LayananPage from "./components/layanan-page";
import PurchaseOnboardPage from "./components/purchase-onboard";
import PurchaseLayananPage from "./components/purchase-layanan";
import PurchaseDataDiriPage from "./components/purchase-data-diri";
import PurchaseKonfirmasiPage from "./components/purchase-konfirmasi";
import PurchaseSuccessPage from "./components/purchase-success";
import MemberPage from "./components/member-page";
import PerpanjangPage from "./components/perpanjang-page";
import MemberEmptyPage from "./components/member-empty-page";

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
    children: [
      { index: true, Component: LandingPage },
      { path: "cara-klaim", Component: CaraKlaimPage },
      { path: "layanan", Component: LayananPage },
      { path: "purchase", Component: PurchaseOnboardPage },
      { path: "purchase/layanan", Component: PurchaseLayananPage },
      { path: "purchase/data-diri", Component: PurchaseDataDiriPage },
      { path: "purchase/konfirmasi", Component: PurchaseKonfirmasiPage },
      { path: "purchase/success", Component: PurchaseSuccessPage },
      { path: "member", Component: MemberPage },
      { path: "member-empty", Component: MemberEmptyPage },
      { path: "perpanjang", Component: PerpanjangPage },
    ],
  },
]);