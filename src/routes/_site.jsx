import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import MobileCtaBar from "@/components/site/MobileCtaBar";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
        <SiteHeader />
        <main id="main" className="flex-1 pb-16 sm:pb-0">
          <Outlet />
        </main>
        <SiteFooter />
        <MobileCtaBar />
      </div>
    </MotionConfig>
  );
}