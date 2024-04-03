import { Footer } from "../_components/footer-section";
import { Update } from "../_components/bottun_link";
import { TodayOrderMain } from "./_components/today-order-main";

export default function DiscoverPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <TodayOrderMain />
      <Update currentPage="today order" />
      <Footer currentPage="today-order" />
    </main>
  );
}
