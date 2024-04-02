import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/bottun_link";
import { DiscoverMain } from "./_components/total-order-main";

export default function DiscoverPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <DiscoverMain />
      <QuickLink currentPage="discover" />
      <Footer currentPage="discover" />
    </main>
  );
}
